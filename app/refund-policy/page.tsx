import {
  ArrowLeft,
  RefreshCw,
  CreditCard,
  AlertCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function RefundPolicyPage() {
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
                <RefreshCw className="w-6 h-6 text-[#133bbf]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Refund Policy
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
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  This Refund Policy outlines the circumstances under which
                  refunds may be issued for services used on the DeleMate
                  platform. The meaning of capitalized terms is defined in our
                  Terms of Use.
                </p>
              </div>
            </section>

            {/* Cancellation by Sender */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cancelled by Sender
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Full Refund Scenarios
                    </h3>
                  </div>
                  <ul className="text-gray-700 text-sm space-y-2 ml-4">
                    <li>• Money deducted but payment failed</li>
                    <li>
                      • After payment but before handover to DeleMate Courier
                    </li>
                    <li>
                      • In Return (after successful package collection from
                      courier)
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      No Refund Scenarios
                    </h3>
                  </div>
                  <ul className="text-gray-700 text-sm space-y-2 ml-4">
                    <li>
                      • After handover to DeleMate Courier (Non-cancellable)
                    </li>
                    <li>
                      • Delay in delivery / Rescheduling (Non-cancellable)
                    </li>
                    <li>• After delivery (Non-cancellable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation by Mate */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cancelled by Mate
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Full Refund Scenarios
                    </h3>
                  </div>
                  <ul className="text-gray-700 text-sm space-y-2 ml-4">
                    <li>
                      • After payment by Sender but before collecting from
                      Sender
                    </li>
                    <li>
                      • After collecting from Sender but trip was cancelled
                      (upon package handover to Sender)
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Special Cases
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <strong>
                      Unable to meet Receiver / Receiver didn't show up:
                    </strong>{" "}
                    If the Mate contacts support and after investigation, the
                    amount will be transferred to the Mate's account with no
                    refund to the Sender.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      No Refund Scenarios
                    </h3>
                  </div>
                  <ul className="text-gray-700 text-sm space-y-2 ml-4">
                    <li>
                      • Delay in delivery / Rescheduling (Non-cancellable)
                    </li>
                    <li>• After delivery (Non-cancellable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation by DeleMate */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cancelled by DeleMate
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Package Not Delivered
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The Sender may be entitled to a refund of up to 100% of the
                    order value if the Mate fails to deliver due to reasons
                    attributable to the Mate or DeleMate. Refunds are assessed
                    case-by-case.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Items Missing or Damaged
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The Sender may be entitled to a refund of up to 100% of the
                    order value if items are missing or damaged during transit
                    by the Mate. Refunds are assessed case-by-case.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Sender's Packing Fault
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If items are damaged due to improper packaging by the
                    Sender, the amount will be transferred to the Mate's account
                    with no refund to the Sender.
                  </p>
                </div>
              </div>
            </section>

            {/* Packaging Responsibility */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Packaging Responsibility
                </h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> The Sender is responsible for
                  appropriately packaging items based on the level of risk,
                  fragility, and other factors specific to the individual item.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  DeleMate or the Mate cannot determine the necessary packaging
                  for any item. The Sender should use their best judgment when
                  packing items, as DeleMate is not liable for loss or damage if
                  items are not properly packed.
                </p>
              </div>
            </section>

            {/* Additional Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Additional Information
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Processing Time
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Refunds will be processed within 3 to 7 business days after
                    approval. The actual time for funds to reflect in the
                    Sender's account may vary based on the financial
                    institution.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Customer Support
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For any inquiries regarding refunds or cancellations, please
                    contact customer support through the DeleMate app or via
                    email at{" "}
                    <span className="font-medium text-green-600">
                      support@delemate.com
                    </span>
                    .
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Policy Updates
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    DeleMate reserves the right to update or modify this Refund
                    Policy at any time. Changes will be effective immediately
                    upon posting on the Platform. Users are encouraged to review
                    this policy periodically.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Note */}
            <section>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed text-center">
                  <strong>Note:</strong> DeleMate's decision on refunds shall be
                  final and binding. All refund requests are subject to
                  investigation and approval based on the circumstances of each
                  case.
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
