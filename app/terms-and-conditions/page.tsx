import {
  ArrowLeft,
  FileText,
  Users,
  Shield,
  Gavel,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
                <FileText className="w-6 h-6 text-[#133bbf]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Terms and Conditions
                </h1>
                <p className="text-gray-600 mt-1">
                  DeleMate Services Private Limited
                </p>
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
                  DeleMate Services Private Limited ("DeleMate," "Company,"
                  "we," "us," or "our") provides technology-based services as an
                  intermediary for facilitating peer-to-peer delivery services
                  by connecting senders and delivery agents (referred to as
                  "Mates").
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Important:</strong> By using the Platform or availing
                  of the Services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions without any limitation or qualification.
                </p>
              </div>
            </section>

            {/* General Covenants */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  General Covenants
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Age and Competency
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You confirm that you are at least 18 years of age and are
                    fully competent to enter into legally binding agreements,
                    including these Terms and Conditions.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Legal Compliance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You will use the Platform to provide services in compliance
                    with all applicable laws, rules, and regulations. Any
                    activities you perform must comply with these Terms and all
                    legal obligations.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Accurate Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You will provide only true, accurate, current, and complete
                    information, including contact details, delivery
                    preferences, and payment-related information.
                  </p>
                </div>
              </div>
            </section>

            {/* Registration and Operation */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Registration and Platform Operation
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Account Creation
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You must register and create an account by providing
                    accurate, current, and complete information. You are solely
                    responsible for:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>
                      • Maintaining confidentiality of your account credentials
                    </li>
                    <li>• All activities that occur in your account</li>
                    <li>• Updating your information to keep it current</li>
                    <li>• Notifying us immediately of unauthorized access</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Service Requests
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you place a Service Request, DeleMate forwards it to
                    available Mates. We act as a facilitator and do not directly
                    provide delivery services. Mates have discretion to accept
                    or reject requests.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Prohibited Items
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You agree not to send or transport items prohibited by law,
                    including illegal substances, weapons, hazardous materials,
                    or perishables. DeleMate reserves the right to refuse
                    service and report such activities.
                  </p>
                </div>
              </div>
            </section>

            {/* User Conduct */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Conduct
                </h2>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use the Platform solely for lawful purposes and
                  treat all users with respect. You will not engage in any
                  behavior that could damage our reputation or harm other users.
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">
                  You agree NOT to:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Share your account credentials</li>
                    <li>• Use the platform for unlawful purposes</li>
                    <li>• Engage in fraudulent activities</li>
                    <li>• Create multiple accounts</li>
                  </ul>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Impair platform functionality</li>
                    <li>• Upload harmful content</li>
                    <li>• Violate intellectual property rights</li>
                    <li>• Misrepresent your identity</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Payment Terms
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Payment Process
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Payments are collected through our online gateway and held
                    in escrow until delivery confirmation. Once the sender
                    confirms successful delivery, payment is released to the
                    Mate's registered account.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Refund Policy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Payments are generally non-refundable except in cases of
                    cancellations or delivery issues where DeleMate determines a
                    refund is warranted. Refunds are processed within 3-7
                    business days.
                  </p>
                </div>
              </div>
            </section>

            {/* Liability and Disclaimers */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Disclaimers and Limitations
                </h2>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> DeleMate acts solely as an
                  intermediary platform. We do not provide delivery services
                  directly and are not responsible for the actions of Mates or
                  the condition of items being delivered.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The platform is provided "AS IS" without warranties. We do not
                  guarantee uninterrupted service, error-free operation, or
                  specific delivery outcomes. Users acknowledge they use the
                  platform at their own risk.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Gavel className="w-4 h-4 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Governing Law and Dispute Resolution
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Jurisdiction
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms are governed by the laws of the Republic of
                    India. All parties submit to the exclusive jurisdiction of
                    the courts of Hyderabad, India.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Arbitration
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Disputes will first be settled amicably. If no settlement is
                    reached within 15 days, disputes will be resolved through
                    arbitration under the Arbitration and Conciliation Act,
                    1996, with proceedings conducted in English in Hyderabad,
                    India.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Customer Care and Grievance Redressal
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Customer Care
                  </h3>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-600">
                      contact@delemate.com
                    </span>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Grievance Officer
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-gray-900">
                        Tarak Ram
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-600">
                        tarakram@delemate.com
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Address: Kondapur, Hyderabad, 500084, Telangana
                    </p>
                  </div>
                </div>
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
                href="/privacy-policy"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
