"use client";

import Link from "next/link";
import Image from "next/image";
import { UploadCloud, Linkedin, Twitter, Github } from "lucide-react"; // Using Lucide for icons

export default function CareersPage() {
  return (
    <div className="flex justify-center items-start py-4 sm:py-6 px-4 sm:px-6">
      <div className="min-h-screen w-full max-w-screen-xl bg-gradient-to-l from-orange-100/40 via-green-100/30 to-blue-100/40 backdrop-blur-md rounded-4xl p-4 sm:p-6 border border-gray-200/20 shadow-xl shadow-gray-500/10">
        {/* Navbar Placeholder - You can uncomment your Navbar component here */}
        {/* <Navbar /> */}
        <header className="flex items-center justify-between px-4 sm:px-6 h-16 mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/delematelogo.png"
              alt="DeleMate Logo"
              width={120}
              height={120}
              className="h-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-[#133bb7] transition-colors"
          >
            Back to Home
          </Link>
        </header>

        <main className="max-w-4xl mx-auto p-4 sm:p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
          {/* Hero Section for Careers Page */}
          <section className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              DeleMate: We're Not Hiring{" "}
              <span className="text-[#133bb7]">CVs</span>. We're Hiring{" "}
              <span className="text-[#7043dc]">Humans</span>.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We’re not looking for fixed skill sets. We’re looking for real
              builders — people who think deeply, execute fast, and communicate
              clearly.
            </p>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-left max-w-2xl mx-auto">
              <p className="font-semibold text-gray-800 mb-2">
                Your answers will help us understand:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>What you’re great at</li>
                <li>How you think and solve problems</li>
                <li>What drives you</li>
                <li>Whether you take ownership like a true builder</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500 italic">
                Be honest. Be personal. No AI-generated answers. If you’re real,
                there’s a 90% chance you’ll get on a call with our team.
              </p>
            </div>
          </section>

          {/* Application Form */}
          <form className="space-y-10">
            {/* Section: Details */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
                Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City:
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role you're applying for (or want to work on):
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                />
              </div>
            </section>

            {/* Section: Who You Are */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
                Who You Are
              </h2>
              <div>
                <label
                  htmlFor="remembered"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Other than work, how do you want to be remembered when you
                  die?
                </label>
                <textarea
                  id="remembered"
                  name="remembered"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="motivation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What motivates you to work hard — especially when no one’s
                  watching?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="loseTrackOfTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What do you love doing so much that you lose track of time?
                </label>
                <textarea
                  id="loseTrackOfTime"
                  name="loseTrackOfTime"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="whyDeleMate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Why do you want to be part of an early-stage startup like
                  DeleMate?
                </label>
                <textarea
                  id="whyDeleMate"
                  name="whyDeleMate"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
            </section>

            {/* Section: Your Skills & Strengths */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
                Your Skills & Strengths
              </h2>
              <div>
                <label
                  htmlFor="topSkills"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Top 2–3 skills or areas you're really good at. How did you get
                  good at them?
                </label>
                <textarea
                  id="topSkills"
                  name="topSkills"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="topTools"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Top 3 tools or platforms you're best at (e.g. React, Figma,
                  SQL, Notion):
                </label>
                <input
                  type="text"
                  id="topTools"
                  name="topTools"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="proudProject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Think of a project you’re proud of — what did you do and what
                  was the outcome?
                </label>
                <textarea
                  id="proudProject"
                  name="proudProject"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="weeklyCommitment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  How many hours a week can you realistically commit to
                  DeleMate?
                </label>
                <input
                  type="number"
                  id="weeklyCommitment"
                  name="weeklyCommitment"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                />
              </div>
            </section>

            {/* Section: How You Work */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
                How You Work
              </h2>
              <div>
                <label
                  htmlFor="speedOrPerfection"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Do you prefer speed or perfection? Why?
                </label>
                <textarea
                  id="speedOrPerfection"
                  name="speedOrPerfection"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="stuckProblem"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  When you're stuck on a problem you’ve never solved before,
                  what do you actually do? Walk us through your process.
                </label>
                <textarea
                  id="stuckProblem"
                  name="stuckProblem"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="timeManagement"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  How do you manage your time, focus, and energy when things get
                  intense? Any tools, routines, or systems you use?
                </label>
                <textarea
                  id="timeManagement"
                  name="timeManagement"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="workingAloneOrOthers"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Do you prefer working alone or with others? Why? What kind of
                  teammates bring out your best?
                </label>
                <textarea
                  id="workingAloneOrOthers"
                  name="workingAloneOrOthers"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="ownership"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tell us about a time you took full ownership of something that
                  wasn’t even your job. What happened, and what did you learn?
                </label>
                <textarea
                  id="ownership"
                  name="ownership"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="ethicalDecision"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tell us about a time you had to make a tough ethical decision.
                  What happened and how did you handle it?
                </label>
                <textarea
                  id="ethicalDecision"
                  name="ethicalDecision"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="criticalFeedback"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What’s the best critical feedback you’ve received — and how
                  did you respond to it?
                </label>
                <textarea
                  id="criticalFeedback"
                  name="criticalFeedback"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="defineRole"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  If you could define your own role at DeleMate, what would you
                  want to work on, and why?
                </label>
                <textarea
                  id="defineRole"
                  name="defineRole"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                ></textarea>
              </div>
            </section>

            {/* Section: Attachments */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
                Attachments
              </h2>
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload your Resume (PDF preferred):
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOCX, or TXT (Max 5MB)
                      </p>
                    </div>
                    <input
                      id="resume"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  LinkedIn:
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="twitter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Twitter:
                </label>
                <div className="relative">
                  <Twitter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    id="twitter"
                    name="twitter"
                    placeholder="https://twitter.com/yourhandle"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="github"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  GitHub / Portfolio / Website:
                </label>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    id="github"
                    name="github"
                    placeholder="https://github.com/yourprofile or https://yourwebsite.com"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-[#133bb7] focus:border-[#133bb7] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="video"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload a short video (1–2 minutes):
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Tell us: Who are you? What drives you? Share a brief, personal
                  intro in your own words.
                </p>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="video"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        MP4, MOV, or WebM (Max 50MB)
                      </p>
                    </div>
                    <input
                      id="video"
                      type="file"
                      className="hidden"
                      accept="video/*"
                    />
                  </label>
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#133bb7] to-[#7043dc] hover:from-[#133bb7]/80 hover:to-[#7043dc]/80 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:scale-105"
              >
                Submit Application
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
