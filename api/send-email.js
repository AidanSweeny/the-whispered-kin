module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    parentName, email, phone, dueDate, babySex, gender,
    culturalBackground, nameStyle, nameStyleOther, meaningPreference,
    syllables, avoidNames, additionalNotes,
  } = req.body;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'The Whispered Kin <cassia@thewhisperedkin.com>',
        to: [process.env.OWNER_EMAIL],
        subject: `New Consultation Request — ${parentName}`,
        html: `
          <h2 style="font-family:Georgia,serif;color:#1c4b1a;margin:0 0 20px;">
            New Consultation Request
          </h2>
          <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;">
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;width:40%;"><strong>Name</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${parentName}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Email</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${email}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Phone</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${phone || '—'}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Due Date</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${dueDate || '—'}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Baby's Sex</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${babySex || '—'}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Gender</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${gender || '—'}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Cultural Background</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${culturalBackground || '—'}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Name Style</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${nameStyle === 'other' ? `Other: ${nameStyleOther || '—'}` : (nameStyle || '—')}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Meaning / Theme</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${meaningPreference || '—'}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Syllables</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${syllables || 'No preference'}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;"><strong>Names to Avoid</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;">${avoidNames || '—'}</td></tr>
            <tr><td style="padding:10px 12px;color:#555;vertical-align:top;"><strong>Notes</strong></td><td style="padding:10px 12px;">${additionalNotes || '—'}</td></tr>
          </table>
        `,
      }),
    });

    const resendBody = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error('Resend rejected:', response.status, resendBody);
      return res.status(500).json({ error: resendBody.message || resendBody.name || response.statusText });
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Function error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
