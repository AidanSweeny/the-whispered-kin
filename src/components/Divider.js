export function Divider({ color = "#1a1a1a", backgroundColor = "#d8ccb4", opacity = 0.9 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", backgroundColor: backgroundColor, width: "100%" }}>
      <div style={{ flex: 1, marginLeft: "300px", height: "1px", backgroundColor: color, opacity: opacity * 0.45 }} />
      <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "0 16px", flexShrink: 0 }}>
        <div style={{ width: "2.5px", height: "2.5px", borderRadius: "50%", backgroundColor: color, opacity: opacity * 0.45 }} />
        <div style={{ width: "2.5px", height: "2.5px", borderRadius: "50%", backgroundColor: color, opacity: opacity * 0.45 }} />

        <svg width="16" height="14" viewBox="0 0 18 16" fill="none" style={{ opacity, display: "block" }}>
          <path
            d="M9 14.5 C9 14.5, 1 9, 1 4.5 C1 2.5, 2.5 1, 4.5 1 C6.2 1, 7.8 2.2, 9 3.5 C10.2 2.2, 11.8 1, 13.5 1 C15.5 1, 17 2.5, 17 4.5 C17 9, 9 14.5, 9 14.5 Z"
            fill={color}
            opacity={0.18}
            stroke={color}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>

        <div style={{ width: "2.5px", height: "2.5px", borderRadius: "50%", backgroundColor: color, opacity: opacity * 0.45 }} />
        <div style={{ width: "2.5px", height: "2.5px", borderRadius: "50%", backgroundColor: color, opacity: opacity * 0.45 }} />
      </div>

      <div style={{ flex: 1, marginRight: "300px", height: "1px", backgroundColor: color, opacity: opacity * 0.45 }} />
    </div>
  );
}
