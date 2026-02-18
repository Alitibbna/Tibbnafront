import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Tibbna Contact Form <onboarding@resend.dev>', // You'll update this with your domain
      to: ['aliazeez@tibna.com'],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <hr>
        <p><small>This email was sent from the Tibbna website contact form.</small></p>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
