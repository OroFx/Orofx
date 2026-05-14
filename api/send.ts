import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { vorname, nachname, email, nachricht } = req.body;

  try {
    await resend.emails.send({
      from: 'OroFx <noreply@orofx.ch>',
      to: 'tibryan@gmx.ch',
      subject: `Beratungsanfrage von ${vorname} ${nachname}`,
      html: `
        <h2>Neue Beratungsanfrage</h2>
        <p><strong>Name:</strong> ${vorname} ${nachname}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${nachricht}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Fehler beim Senden' });
  }
}