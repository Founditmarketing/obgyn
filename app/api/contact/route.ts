import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    let textContent = '';
    let subject = '';
    let replyTo = data.email || data.Email || 'concierge@alexjosephmd.com';

    // Handle Scheduling Form vs General Contact Form
    if (data.type === 'schedule') {
        subject = `New Appointment Request: ${data.firstName} ${data.lastName}`;
        textContent = `
New Appointment Request:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Reason for Visit: ${data.reason}
Date: ${data.date}
Time: ${data.time}
Notes: ${data.notes || 'N/A'}
        `.trim();
    } else {
        // General Contact Form
        subject = `New Contact Inquiry: ${data.Name || 'Website Visitor'}`;
        textContent = `
New Contact Inquiry:

Name: ${data.Name}
Email: ${data.Email}
Address: ${data.Address}
Message: ${data.Message}
        `.trim();
    }

    // Send the email using Resend
    const result = await resend.emails.send({
      from: 'Alexandria OBGYN <hello@alexjosephmd.com>',
      to: 'concierge@alexjosephmd.com',
      replyTo: replyTo,
      subject: subject,
      text: textContent,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: result.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}
