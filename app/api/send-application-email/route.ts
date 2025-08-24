import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    console.log('📧 Email API called');

    try {
        const applicationData = await request.json();
        console.log('📧 Application data received for:', applicationData.full_name);

        const { data, error } = await resend.emails.send({
            from: 'DeleMate Careers <onboarding@resend.dev>',
            to: [process.env.CEO_EMAIL || 'your-email@gmail.com'],
            subject: `New Job Application - ${applicationData.full_name} for ${applicationData.role_applying_for}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; line-height: 1.6;">
          <div style="background: linear-gradient(135deg, #133bbf, #7043dc); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Job Application Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">DeleMate Careers</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <!-- Basic Details -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #133bbf;">
              <h2 style="color: #133bbf; margin-top: 0;">Applicant Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td><td>${applicationData.full_name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${applicationData.email}">${applicationData.email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${applicationData.phone || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">City:</td><td>${applicationData.city || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Role:</td><td><strong>${applicationData.role_applying_for}</strong></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Weekly Hours:</td><td>${applicationData.weekly_commitment_hours} hours/week</td></tr>
              </table>
            </div>

            <!-- Core Questions -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #7043dc;">
              <h2 style="color: #7043dc; margin-top: 0;">Core Values & Motivation</h2>
              
              <div style="margin-bottom: 15px;">
                <h3 style="color: #333; margin-bottom: 5px;">How they want to be remembered:</h3>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.remembered_when_die}</p>
              </div>

              <div style="margin-bottom: 15px;">
                <h3 style="color: #333; margin-bottom: 5px;">What motivates them to work hard:</h3>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.motivation_to_work_hard}</p>
              </div>

              <div style="margin-bottom: 15px;">
                <h3 style="color: #333; margin-bottom: 5px;">Why DeleMate:</h3>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.why_delemate}</p>
              </div>
            </div>

            <!-- Skills & Experience -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #28a745;">
              <h2 style="color: #28a745; margin-top: 0;">Skills & Experience</h2>
              
              <div style="margin-bottom: 15px;">
                <h3 style="color: #333; margin-bottom: 5px;">Top Skills:</h3>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.top_skills}</p>
              </div>

              <div style="margin-bottom: 15px;">
                <h3 style="color: #333; margin-bottom: 5px;">Top Tools:</h3>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.top_tools}</p>
              </div>

              <div style="margin-bottom: 15px;">
                <h3 style="color: #333; margin-bottom: 5px;">Proud Project:</h3>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.proud_project}</p>
              </div>
            </div>

            <!-- Links & Resume -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #6f42c1;">
              <h2 style="color: #6f42c1; margin-top: 0;">Portfolio & Links</h2>
              <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                ${applicationData.resume_url ? `<a href="${applicationData.resume_url}" style="background-color: #133bbf; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">📄 Resume</a>` : ''}
                ${applicationData.linkedin_url ? `<a href="${applicationData.linkedin_url}" style="background-color: #0077b5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">💼 LinkedIn</a>` : ''}
                ${applicationData.github_portfolio_url ? `<a href="${applicationData.github_portfolio_url}" style="background-color: #333; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">💻 Portfolio</a>` : ''}
                ${applicationData.video_link ? `<a href="${applicationData.video_link}" style="background-color: #dc3545; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">🎥 Video</a>` : ''}
              </div>
            </div>

            <!-- Additional Questions -->
            ${applicationData.lose_track_of_time || applicationData.time_management || applicationData.working_alone_or_others ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #17a2b8;">
              <h2 style="color: #17a2b8; margin-top: 0;">Additional Insights</h2>
              
              ${applicationData.lose_track_of_time ? `
              <div style="margin-bottom: 15px;">
                <h4 style="color: #333; margin-bottom: 5px;">What they lose track of time doing:</h4>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.lose_track_of_time}</p>
              </div>
              ` : ''}

              ${applicationData.time_management ? `
              <div style="margin-bottom: 15px;">
                <h4 style="color: #333; margin-bottom: 5px;">Time management approach:</h4>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.time_management}</p>
              </div>
              ` : ''}

              ${applicationData.working_alone_or_others ? `
              <div style="margin-bottom: 15px;">
                <h4 style="color: #333; margin-bottom: 5px;">Working alone vs with others:</h4>
                <p style="background: #f1f3f4; padding: 10px; border-radius: 5px; margin: 0;">${applicationData.working_alone_or_others}</p>
              </div>
              ` : ''}
            </div>
            ` : ''}

            <!-- Footer -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #dee2e6; color: #6c757d; text-align: center;">
              <p style="margin: 0; font-size: 14px;">Application submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
              <p style="margin: 10px 0 0 0; font-size: 12px; font-style: italic;">DeleMate - We're not hiring CVs, we're hiring humans.</p>
            </div>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('📧 Resend error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log('📧 Email sent successfully:', data?.id);
        return NextResponse.json({
            success: true,
            messageId: data?.id
        });

    } catch (error: any) {
        console.error('📧 Email sending error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message
            },
            { status: 500 }
        );
    }
}