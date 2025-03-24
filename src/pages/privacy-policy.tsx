import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-[60px] lg:py-[120px] px-4 lg:px-8 bg-gradient-to-br from-[#F8F7FF] via-[#FCFAFF] to-[#FFFFFF]">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          Privacy Policy
        </h1>

        <hr className="border-gray-200 mb-12" />

        <div className="prose prose-lg max-w-none">
          <p className="text-base lg:text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-base lg:text-lg mb-4">
              Virginia's Art Studio ("we," "our," or "us") respects your privacy
              and is committed to protecting your personal information. This
              privacy policy explains how we collect, use, and safeguard your
              information when you visit our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p className="text-base lg:text-lg mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base lg:text-lg">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p className="text-base lg:text-lg mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base lg:text-lg">
              <li>Process your orders and payments</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-base lg:text-lg mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except to
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p className="text-base lg:text-lg mb-4">
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-base lg:text-lg mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-base lg:text-lg">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-base lg:text-lg">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-base lg:text-lg mt-4">
              Email: virginia@example.com
              <br />
              Phone: (215) 555-0123
              <br />
              Address: Langhorne, Pennsylvania
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
