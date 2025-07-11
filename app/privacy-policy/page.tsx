import {
  ArrowLeft,
  Shield,
  Eye,
  Cookie,
  Users,
  Mail,
  Package,
  Lock,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#133bbf]/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#133bbf]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Privacy Policy
                </h1>
                <p className="text-gray-600 mt-1">Welcome to DeleMate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to DeleMate Services Private Limited
                  (the "Company," "we," "DeleMate," "us," or "our"). This
                  Privacy Policy outlines how we collect, use, process, store,
                  and protect your information when you use our platform or
                  services.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Who We Are
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  DeleMate is a technology platform that facilitates
                  peer-to-peer delivery services by connecting senders and
                  delivery agents (Mates) to transport packages efficiently and
                  securely.
                </p>
              </div>
            </section>

            {/* User Acceptance */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  User Acceptance
                </h2>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using the DeleMate Platform or Services, you
                  agree to and accept this Privacy Policy. Any collection,
                  processing, and use of your information will be in accordance
                  with this Policy and applicable laws, including the
                  Information Technology Act, 2000.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree with this Policy, please refrain from
                  using or accessing the DeleMate Platform.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  What Information Do We Collect?
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    👤 Personal Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you create a DeleMate account, we collect:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• Email address, name, mobile number</li>
                    <li>• Address, date of birth, photograph, gender</li>
                    <li>• Payment-related information</li>
                    <li>• Emergency contact details</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    📍 Location Data
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect location data to provide accurate delivery
                    services, track packages in real-time, and ensure safety for
                    all parties involved. For Mates, location data is collected
                    even when the app runs in the background.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    🚚 Transaction Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect data related to deliveries including pick-up and
                    drop-off locations, payment transaction details, distance
                    traveled, and delivery completion status.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    ✅ Verification Information (For Mates)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For delivery agents, we collect profile pictures,
                    government-issued ID documents (Aadhaar, PAN), license
                    details, vehicle registration, insurance documents, and
                    background check information.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Package className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How We Use Your Information
                </h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our primary objective in collecting your information is to
                  provide you with a seamless and enhanced experience while
                  using DeleMate's services:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Service Provision
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      To allow you to access and use the DeleMate platform,
                      verify your identity, and facilitate delivery services.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Safety & Security
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      To prevent fraud, detect violations, conduct background
                      checks, and ensure the safety of all users.
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Communication
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      To send service updates, promotional materials, and
                      important notices via email, SMS, or other media.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Platform Improvement
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      To analyze performance, fix errors, enhance usability, and
                      tailor services to your preferences.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cookies and Similar Technologies
                </h2>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The DeleMate platform uses cookies, pixel tags, and similar
                  technologies to collect and store information related to your
                  usage of our services. We use these technologies to:
                </p>
                <ul className="text-gray-700 text-sm space-y-2 ml-4">
                  <li>• Verify your identity and authenticate you</li>
                  <li>• Save your preferences and settings</li>
                  <li>• Track content usage and analyze traffic patterns</li>
                  <li>• Deliver and measure advertisement effectiveness</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Managing Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You can adjust your cookie settings through your browser
                  preferences. However, disabling cookies might affect certain
                  features of our platform.
                </p>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How We Share Information
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                We do not sell, share, rent, or trade your information, except
                in the following circumstances:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Service Providers
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We share information with third-party service providers who
                    assist in facilitating our services.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Legal Compliance
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We may disclose information to comply with legal obligations
                    or government requests.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Delivery Facilitation
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We share necessary delivery information between senders and
                    mates to complete deliveries.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Business Transfers
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    In case of merger or acquisition, your information may be
                    transferred to new owners.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-4 h-4 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Data Security
                </h2>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We prioritize the security of your information and have
                  implemented appropriate technical and security measures. We
                  utilize vault and tokenization services from trusted
                  third-party providers to protect sensitive information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  While we take all necessary precautions, please note that
                  internet transmission is not entirely secure. We recommend
                  keeping your login credentials confidential and not sharing
                  passwords with anyone.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Rights
                </h2>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Update Your Information
                    </h4>
                    <p className="text-gray-700 text-sm">
                      You can correct, delete, or update your details through
                      your account profile page or by contacting our Grievance
                      Officer.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Account Cancellation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      You may request account cancellation or ask us to stop
                      using your information to provide services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Data Retention
                    </h4>
                    <p className="text-gray-700 text-sm">
                      We retain your information for as long as your account is
                      active. After termination, certain data may be retained
                      for 180 days for dispute resolution and fraud prevention.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Grievance Officer */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Grievance Officer
                </h2>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  For any requests, complaints, feedback, or grievances
                  regarding how we process your information, please contact our
                  grievance officer:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-900">Tarak Ram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-600">
                      tarakram@delemate.com
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h2>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  For further questions or support, you can reach us at:
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-blue-600">
                    info@delemate.com
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mt-6">
                <p className="text-gray-700 leading-relaxed text-center">
                  Thank you for choosing DeleMate! We're committed to protecting
                  your privacy and providing you with secure, reliable delivery
                  services.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 lg:px-12 py-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">
                  Built with ❤️ by the{" "}
                  <span className="font-medium">DeleMate Team</span>
                </p>
              </div>
              <Link
                href="/terms-and-conditions"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
