import { NextResponse } from 'next/server'

// Temporarily disabled Resend for deployment
// const resend = new Resend(process.env.RESEND_API_KEY)

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

    // TODO: Enable email functionality when RESEND_API_KEY is configured
    // For now, just log the submission and return success
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      message: message || 'No message provided'
    })

    // Temporarily return success without sending email
    return NextResponse.json(
      { 
        message: 'Thank you for your submission! We will get back to you soon.',
        note: 'Email functionality temporarily disabled - please check server logs for submission details.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
