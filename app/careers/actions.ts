"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from "uuid" // For generating unique file names

export async function applyForJob(prevState: any, formData: FormData) {
    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const city = formData.get("city") as string
    const role = formData.get("role") as string
    const remembered = formData.get("remembered") as string
    const motivation = formData.get("motivation") as string
    const loseTrackOfTime = formData.get("loseTrackOfTime") as string
    const whyDeleMate = formData.get("whyDeleMate") as string
    const topSkills = formData.get("topSkills") as string
    const topTools = formData.get("topTools") as string
    const proudProject = formData.get("proudProject") as string
    const weeklyCommitment = formData.get("weeklyCommitment") as string
    const speedOrPerfection = formData.get("speedOrPerfection") as string
    const stuckProblem = formData.get("stuckProblem") as string
    const timeManagement = formData.get("timeManagement") as string
    const workingAloneOrOthers = formData.get("workingAloneOrOthers") as string
    const ownership = formData.get("ownership") as string
    const ethicalDecision = formData.get("ethicalDecision") as string
    const criticalFeedback = formData.get("criticalFeedback") as string
    const defineRole = formData.get("defineRole") as string
    const linkedin = formData.get("linkedin") as string
    const twitter = formData.get("twitter") as string
    const github = formData.get("github") as string
    const videoLink = formData.get("videoLink") as string
    const resumeFile = formData.get("resume") as File // Get the file from formData

    // Basic validation for required text fields
    if (!fullName || !email || !role || !remembered || !motivation || !topSkills || !proudProject) {
        return { success: false, message: "Please fill in all required text fields." }
    }

    let resumeUrl: string | null = null

    // Handle resume file upload
    if (resumeFile && resumeFile.size > 0) {
        const fileExtension = resumeFile.name.split(".").pop()
        const fileName = `${uuidv4()}.${fileExtension}` // Generate a unique file name
        const filePath = `resumes/${fileName}` // Path in your Supabase Storage bucket

        try {
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from("resumes") // Your bucket name
                .upload(filePath, resumeFile, {
                    cacheControl: "3600",
                    upsert: false,
                })

            if (uploadError) {
                console.error("Error uploading resume:", uploadError)
                return { success: false, message: `Resume upload failed: ${uploadError.message}` }
            }

            // Get the public URL of the uploaded file
            const { data: publicUrlData } = supabase.storage.from("resumes").getPublicUrl(filePath)
            resumeUrl = publicUrlData.publicUrl
        } catch (error: any) {
            console.error("Unexpected error during resume upload:", error)
            return {
                success: false,
                message: `An unexpected error occurred during resume upload: ${error.message || "Please try again."}`,
            }
        }
    }

    try {
        const { data, error } = await supabase.from("careers_applications").insert([
            {
                full_name: fullName,
                email: email,
                phone: phone,
                city: city,
                role_applying_for: role,
                remembered_when_die: remembered,
                motivation_to_work_hard: motivation,
                lose_track_of_time: loseTrackOfTime,
                why_delemate: whyDeleMate,
                top_skills: topSkills,
                top_tools: topTools,
                proud_project: proudProject,
                weekly_commitment_hours: Number.parseInt(weeklyCommitment),
                speed_or_perfection: speedOrPerfection,
                stuck_problem_process: stuckProblem,
                time_management: timeManagement,
                working_alone_or_others: workingAloneOrOthers,
                ownership_example: ownership,
                ethical_decision: ethicalDecision,
                critical_feedback: criticalFeedback,
                define_role: defineRole,
                linkedin_url: linkedin,
                twitter_url: twitter,
                github_portfolio_url: github,
                video_link: videoLink,
                resume_url: resumeUrl, // Store the resume URL
            },
        ])

        if (error) {
            console.error("Error inserting data:", error)
            return { success: false, message: `Submission failed: ${error.message}` }
        }

        revalidatePath("/careers")
        return { success: true, message: "Application submitted successfully!" }
    } catch (error: any) {
        console.error("Unexpected error during submission:", error)
        return { success: false, message: `An unexpected error occurred: ${error.message || "Please try again."}` }
    }
}
