import React from "react";

const TermsOfService = () => {
  return (
    <section className="py-[60px] lg:py-[120px] px-4 lg:px-8 bg-gradient-to-br from-[#F8F7FF] via-[#FCFAFF] to-[#FFFFFF]">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          Terms of Service
        </h1>

        <hr className="border-gray-200 mb-12" />

        <div className="prose prose-lg max-w-none">
          <p className="text-base lg:text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-base lg:text-lg mb-4">
              By accessing and placing an order with Virginia's Art Studio, you
              confirm that you are in agreement with and bound by the terms and
              conditions contained herein.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              2. Artwork and Products
            </h2>
            <p className="text-base lg:text-lg mb-4">
              All artwork displayed on this website is original and created by
              Virginia Smith. Each piece is unique and may vary slightly from
              the photographs shown on the website.
            </p>
            <ul className="list-disc pl-6 mb-4 text-base lg:text-lg">
              <li>Colors may appear differently on different screens</li>
              <li>Dimensions are approximate and may vary slightly</li>
              <li>Each piece is handmade and unique</li>
              <li>Custom orders are subject to separate terms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              3. Pricing and Payment
            </h2>
            <p className="text-base lg:text-lg mb-4">
              All prices are listed in US dollars. We reserve the right to
              modify prices without notice. Payment is required in full at the
              time of purchase.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Shipping Policy</h2>
            <p className="text-base lg:text-lg mb-4">
              We take great care in packaging artwork for safe delivery.
              Shipping times may vary depending on location. Free shipping is
              available on orders over $500 within the US and $750 for
              international orders.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Return Policy</h2>
            <p className="text-base lg:text-lg mb-4">
              We want you to be completely satisfied with your purchase. If you
              are not satisfied, please contact us within 30 days of receiving
              your artwork.
            </p>
            <ul className="list-disc pl-6 mb-4 text-base lg:text-lg">
              <li>Artwork must be returned in original condition</li>
              <li>Return shipping costs are the responsibility of the buyer</li>
              <li>Custom orders are not eligible for return</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              6. Copyright and Intellectual Property
            </h2>
            <p className="text-base lg:text-lg mb-4">
              All artwork, images, and content on this website are protected by
              copyright law and are the property of Virginia's Art Studio.
              Reproduction, distribution, or use without express written
              permission is prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              7. Contact Information
            </h2>
            <p className="text-base lg:text-lg">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="text-base lg:text-lg mt-4">
              Email: vlouisehampton@gmail.com
              <br />
              Phone: (215) 913-2056
              <br />
              Address: Langhorne, Pennsylvania
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
