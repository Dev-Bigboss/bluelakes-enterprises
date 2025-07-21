import { NextResponse } from 'next/server';
   import { Resend } from 'resend';
   import { ContactEmailTemplate } from '@/components/ContactEmailTemplate';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: Request) {
     try {
       const { name, email, phone, subject, message, inquiryType } = await request.json();

       if (!name || !email || !subject || !message) {
         return NextResponse.json(
           { message: 'Missing required fields' },
           { status: 400 }
         );
       }

       const { data, error } = await resend.emails.send({
         from: 'onboarding@resend.dev', // Use Resend's default sender for testing
         to: 'contact@bluelakesent.co.uk',
         replyTo: email,
         subject: `New Contact Form Submission: ${subject}`,
         react: (
           <ContactEmailTemplate
             name={name}
             email={email}
             phone={phone}
             subject={subject}
             message={message}
             inquiryType={inquiryType}
           />
         ),
       });

       if (error) {
         console.error('Resend error:', error);
         return NextResponse.json(
           { message: 'Failed to send email', error: error.message },
           { status: 500 }
         );
       }

       return NextResponse.json(
         { message: 'Email sent successfully!', data },
         { status: 200 }
       );
     } catch (error) {
       console.error('Server error:', error);
       return NextResponse.json(
         { message: 'Internal server error', error: (error as Error).message },
         { status: 500 }
       );
     }
   }