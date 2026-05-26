// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'rendira1024@gmail.com',
    pass: 'mikt xsji bfyc bozw', // App password
  },
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(EMAIL_CONFIG);

    
     // Verify connection configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection error:', error);
      return NextResponse.json(
        { error: 'Email configuration error' },
        { status: 500 }
      );
    }

    // Email content for admin
    const adminMailOptions = {
      from: EMAIL_CONFIG.auth.user,
      to: 'rendira1024@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3489AE, #2C6B7A); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Janaki Energy Pvt. Ltd.</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #3489AE; margin-top: 0; border-bottom: 2px solid #3489AE; padding-bottom: 10px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #666;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                  <td style="padding: 8px 0; color: #666;"><a href="mailto:${email}" style="color: #3489AE; text-decoration: none;">${email}</a></td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                  <td style="padding: 8px 0; color: #666;"><a href="tel:${phone}" style="color: #3489AE; text-decoration: none;">${phone}</a></td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
                  <td style="padding: 8px 0; color: #666;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #3489AE; margin-top: 0; border-bottom: 2px solid #3489AE; padding-bottom: 10px;">Message</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3489AE; white-space: pre-wrap; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333;">${message}</div>
            </div>
          </div>
          
          <div style="background: #3489AE; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the Janaki Energy website contact form.</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Received on ${new Date().toLocaleString('en-US', { 
              timeZone: 'Asia/Kathmandu',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })} (Nepal Time)</p>
          </div>
        </div>
      `,
    };

    // Auto-reply email for the sender
    const autoReplyOptions = {
      from: EMAIL_CONFIG.auth.user,
      to: email,
      subject: 'Thank you for contacting Janaki Energy - We\'ve received your message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #4ade80, #22c55e); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">Thank You for Contacting Us!</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Janaki Energy Pvt. Ltd.</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9fa;">
            <div style="background: white; padding: 25px; border-radius: 8px; text-align: center;">
              <h3 style="color: #3489AE; margin-top: 0;">Hello ${name},</h3>
              <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out to Janaki Energy Pvt. Ltd. We have successfully received your inquiry regarding <strong>"${subject}"</strong> and our team will review your message promptly.
              </p>
              
              <div style="background: #f0f9f4; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 20px 0;">
                <h4 style="color: #3489AE; margin-top: 0;">What happens next?</h4>
                <ul style="color: #666; text-align: left; line-height: 1.6; padding-left: 20px;">
                  <li>Our expert team will carefully review your inquiry</li>
                  <li>We will respond to your message within 24 hours during business days</li>
                  <li>If needed, we may contact you directly for additional information</li>
                  <li>We'll provide you with detailed information and next steps</li>
                </ul>
              </div>
              
              <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h4 style="color: #3489AE; margin-top: 0;">Need immediate assistance?</h4>
                <p style="color: #666; margin-bottom: 10px;">Feel free to contact us directly:</p>
                <p style="color: #3489AE; margin: 5px 0;"><strong>📞 +977-9860805846 | +977-9860680682</strong></p>
                <p style="color: #3489AE; margin: 5px 0;"><strong>📧 tapendra@investinfra.com</strong></p>
                <p style="color: #666; font-size: 12px; margin-top: 10px;">Office Hours: Mon-Fri, 9:30 AM - 5:30 PM (Nepal Time)</p>
              </div>
            </div>
          </div>
          
          <div style="background: #3489AE; color: white; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
            <h4 style="margin-top: 0; color: white;">About Janaki Energy</h4>
            <p style="margin: 10px 0; font-size: 14px; line-height: 1.5; opacity: 0.9;">
              We are Nepal's leading renewable energy company, specializing in solar energy systems, hydropower development, 
              feasibility studies, and comprehensive energy solutions. Our mission is to accelerate Nepal's transition to 
              sustainable energy through innovative and reliable renewable energy solutions.
            </p>
            <div style="margin: 15px 0; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.3);">
              <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                4th Floor, Hathway Complex, Lainchaur Marg, Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}