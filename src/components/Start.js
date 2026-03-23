import { useState, useEffect, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const WHISPERED_KIN = "THE WHISPERED KIN";
const CYCLE_INTERVAL = 1200;
const FLIP_DELAY = 200;
const TRAIL_LINGER = 2000;

const BG = "var(--color-earth-light)";
const BLACK = "#1a1a1a";
const DARK_GREEN = "#802929";

// Three accent colors for words
const ACCENT_COLORS = [
  '#d4845a', '#5a8f6e', '#7a6aac'
];

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}
function getCols(w) { return Math.max(8, Math.floor(w / 36)); }
function getRows(h) { return Math.max(4, Math.floor(h / 40)); }

export default function Start({ names = ["HERITAGE", "TIMELESS", "PERSONAL", "FAMILY", "TRUST", "BESPOKE", "NATURE", "LOVE", "LINEAGE", "FEELING"] }) {
  const containerRef = useRef(null);

  const [dims, setDims] = useState({ cols: 40, rows: 20 });
  const dimsRef = useRef({ cols: 40, rows: 20 });

  const [cells, setCells] = useState([]);
  const cellsRef = useRef([]);

  // Map of cellId -> accent color index (for flashing name cells)
  const [flashingMap, setFlashingMap] = useState(new Map());

  // Set of cell ids currently hovered (all render in HOVER_RED)
  const [boldIds, setBoldIds] = useState(new Set());
  const boldTimersRef = useRef({});

  const nameIdxRef = useRef(0);
  const dirIdxRef = useRef(0);
  const colorIdxRef = useRef(0); // cycles through ACCENT_COLORS for word appearances

  // ── Grid builder ─────────────────────────────────────────────────────────────
  const buildGrid = useCallback((cols, rows) => {
    const grid = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const kinChar = r === 0 && c < WHISPERED_KIN.length ? WHISPERED_KIN[c] : null;
        grid.push({
          id: r * cols + c, row: r, col: c,
          char: kinChar || randomChar(),
          isKin: !!kinChar, isName: false,
        });
      }
    }
    return grid;
  }, []);

  // ── Resize ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect();
      const cols = getCols(width), rows = getRows(height);
      dimsRef.current = { cols, rows };
      setDims({ cols, rows });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Rebuild grid ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const g = buildGrid(dims.cols, dims.rows);
    cellsRef.current = g;
    setCells(g);
  }, [dims, buildGrid]);

  // ── Name cycling — empty deps, reads from refs ───────────────────────────────
  useEffect(() => {
    const cycle = () => {
      const { cols, rows } = dimsRef.current;
      if (!cols || !rows) return;

      const name = names[nameIdxRef.current % names.length];
      const isVertical = dirIdxRef.current % 2 === 1;
      const wordColorIdx = colorIdxRef.current % ACCENT_COLORS.length;

      nameIdxRef.current++;
      dirIdxRef.current++;
      colorIdxRef.current++;

      const indices = [];
      if (isVertical) {
        const col = Math.floor(Math.random() * cols);
        const startRow = 1 + Math.floor(Math.random() * Math.max(1, rows - name.length));
        for (let i = 0; i < name.length && startRow + i < rows; i++)
          indices.push((startRow + i) * cols + col);
      } else {
        const row = 1 + Math.floor(Math.random() * (rows - 1));
        const startCol = Math.floor(Math.random() * Math.max(1, cols - name.length));
        for (let i = 0; i < name.length && startCol + i < cols; i++)
          indices.push(row * cols + startCol + i);
      }

      indices.forEach((cellId, i) => {
        setTimeout(() => {
          const ch = name[i] === " " ? " " : name[i];

          const ri = cellsRef.current.findIndex(c => c.id === cellId);
          if (ri !== -1) {
            const updated = [...cellsRef.current];
            updated[ri] = { ...updated[ri], char: ch, isName: true };
            cellsRef.current = updated;
          }

          setCells(prev => {
            const next = [...prev];
            const pi = next.findIndex(c => c.id === cellId);
            if (pi !== -1) next[pi] = { ...next[pi], char: ch, isName: true };
            return next;
          });

          setFlashingMap(prev => {
            const n = new Map(prev);
            n.set(cellId, wordColorIdx);
            return n;
          });
          setTimeout(() => {
            setFlashingMap(prev => {
              const n = new Map(prev);
              n.delete(cellId);
              return n;
            });
          }, 1200);

        }, i * FLIP_DELAY);
      });
    };

    const interval = setInterval(cycle, CYCLE_INTERVAL);
    const t = setTimeout(cycle, 600);
    return () => { clearInterval(interval); clearTimeout(t); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Hover: red trail, fades after TRAIL_LINGER ───────────────────────────────
  const handleMouseEnter = useCallback((id) => {
    setBoldIds(prev => new Set([...prev, id]));

    if (boldTimersRef.current[id]) clearTimeout(boldTimersRef.current[id]);

    boldTimersRef.current[id] = setTimeout(() => {
      setBoldIds(prev => { const n = new Set(prev); n.delete(id); return n; });
      delete boldTimersRef.current[id];
    }, TRAIL_LINGER);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        padding: "50px",
        width: "100vw", height: "100vh",
        background: BG,
        display: "grid",
        gridTemplateColumns: `repeat(${dims.cols}, 1fr)`,
        gridTemplateRows: `repeat(${dims.rows}, 1fr)`,
        fontFamily: "'Courier New', 'Lucida Console', monospace",
        overflow: "hidden",
        userSelect: "none",
        cursor: "default",
      }}
    >
      {cells.map((cell) => {
        const flashColorIdx = flashingMap.get(cell.id);
        const isFlashing = flashColorIdx !== undefined;
        const isBold = boldIds.has(cell.id);

        let color;
        if (isBold) {
          color = DARK_GREEN;
        } else if (isFlashing) {
          color = ACCENT_COLORS[flashColorIdx];
        } else if (cell.isKin) {
          color = DARK_GREEN;
        } else {
          color = BLACK;
        }

        const weight = (isFlashing || cell.isKin || isBold) ? 700 : 400;

        return (
          <div
            key={cell.id}
            onMouseEnter={() => handleMouseEnter(cell.id)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color,
              fontSize: "clamp(14px, 2vw, 32px)",
              fontWeight: weight,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "color 1s ease, font-weight 0.4s ease",
            }}
          >
            {cell.char === " " ? "\u00A0" : cell.char}
          </div>
        );
      })}
    </div>
  );
}