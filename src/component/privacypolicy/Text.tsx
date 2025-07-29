import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="px-6 md:px-24 py-12 bg-white text-gray-800 leading-relaxed pt-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-500 mb-6">
        Privacy Policy
      </h1>

      <h2 className="text-lg font-semibold mb-4">
        Last updated: 17th June 2024
      </h2>

      <p className="mb-6">
        Welcome to <strong>Achromic Point</strong>. By accessing or using our
        website, products, and services, you agree to be bound by the following
        Terms and Conditions. Please read them carefully.
      </p>

      {/* Section: Information We Collect */}
      <h3 className="text-md font-semibold mb-2">Information We Collect</h3>
      <ul className="list-disc ml-6 mb-6">
        <li>
          <strong>Personal Information</strong>
          <p className="ml-4 text-sm mt-1">
            When you register for an account or use our services, we may collect
            personal information that can identify you, such as your name, email
            address, and payment information.
          </p>
        </li>
        <li className="mt-3">
          <strong>Non-Personal Information</strong>
          <p className="ml-4 text-sm mt-1">
            We may also collect non-personal information about your use of the
            service, such as IP addresses, browser types, referring URLs, and
            other technical data.
          </p>
        </li>
      </ul>

      {/* Section: Cookies */}
      <h3 className="text-md font-semibold mb-2">
        Cookies and Tracking Technologies
      </h3>
      <p className="mb-6">
        We use cookies and similar tracking technologies to collect and store
        information about your interactions with our website. You can manage
        your cookie preferences through your browser settings.
      </p>

      {/* Section: Usage */}
      <h3 className="text-md font-semibold mb-2">
        How We Use Your Information
      </h3>
      <ul className="list-disc ml-6 mb-6">
        <li>Provide and Improve Services</li>
        <li>Operate and maintain our services</li>
        <li>Improve and personalize your experience</li>
        <li>Process transactions and manage your account</li>
      </ul>

      <h3 className="text-md font-semibold mb-2">Communication</h3>
      <p className="mb-6">
        We may use your information to send you updates, promotional materials,
        and other information related to our services. We may also respond to
        your inquiries and provide customer support.
      </p>

      <h3 className="text-md font-semibold mb-2">Analytics and Research</h3>
      <p className="mb-6">
        We use non-personal information for analytical purposes, such as:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Monitoring and analyzing usage trends and preferences</li>
        <li>Conducting research and improving our services</li>
      </ul>

      {/* Section: Sharing */}
      <h3 className="text-md font-semibold mb-2">
        How We Share Your Information
      </h3>
      <p className="mb-6">
        We may share your information with third-party service providers who
        assist us in operating our services, such as payment processors, email
        services, and hosting providers.
      </p>

      {/* Section: Legal & Data Handling */}
      <h3 className="text-md font-semibold mb-2">Legal Requirements</h3>
      <p className="mb-6">
        We may disclose your information if required to do so by law or in
        response to valid requests by public authorities.
      </p>

      <h3 className="text-md font-semibold mb-2">Business Transfers</h3>
      <p className="mb-6">
        In the event of a merger, acquisition, or sale of all or a portion of
        our assets, your information may be transferred to the acquiring entity.
      </p>

      <h3 className="text-md font-semibold mb-2">Data Security</h3>
      <p className="mb-6">
        We implement appropriate technical and organizational measures to
        protect your personal information against unauthorized access, loss, or
        alteration. However, no method of transmission over the internet or
        method of electronic storage is 100% secure.
      </p>

      <h3 className="text-md font-semibold mb-2">Data Retention</h3>
      <p className="mb-6">
        We retain your personal information for as long as necessary to fulfill
        the purposes for which it was collected, comply with our legal
        obligations, resolve disputes, and enforce our agreements.
      </p>

      {/* Section: Rights and Requests */}
      <h3 className="text-md font-semibold mb-2">Your Rights and Choices</h3>
      <p className="mb-6">
        <strong>Access and Update:</strong> You have the right to access and
        update your personal information. You can do this by logging into your
        account and updating your profile settings. <br />
        <strong>Opt-Out:</strong> You can opt out of receiving promotional
        emails by following the unsubscribe instructions or contacting us
        directly. <br />
        <strong>Data Deletion:</strong> You may request deletion of your
        personal information by contacting us at{" "}
        <a
          href="mailto:support@Achromic Point.in"
          className="text-blue-600 underline"
        >
          support@Achromic Point.in
        </a>
        .
      </p>

      <h3 className="text-md font-semibold mb-2">Children’s Privacy</h3>
      <p className="mb-6">
        Our services are not directed to individuals under the age of 18. We do
        not knowingly collect personal information from children under 18. If we
        become aware that we have collected such data, we will delete it.
      </p>

      <h3 className="text-md font-semibold mb-2">
        International Data Transfers
      </h3>
      <p className="mb-6">
        Your information may be transferred and processed in countries other
        than your own. We will ensure appropriate safeguards are in place.
      </p>

      <h3 className="text-md font-semibold mb-2">
        Changes to This Privacy Policy
      </h3>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Changes will be
        posted on our site with an updated Last updated date.
      </p>

      {/* Section: Your Rights as Data Subject */}
      <h3 className="text-md font-semibold mb-2">
        Your Rights as Data Subject
      </h3>
      <p className="mb-4">
        You have the following rights by applying to Achromic Point free of
        charge:
      </p>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>To learn whether personal data is processed,</li>
        <li>
          To request information about personal data if they have been
          processed,
        </li>
        <li>
          To learn the purpose of processing personal data and whether they are
          used appropriately,
        </li>
        <li>
          To know the third parties in the country or abroad to whom personal
          data have been transferred,
        </li>
        <li>
          To request rectification in case personal data are processed
          incompletely or inaccurately,
        </li>
        <li>
          To request erasure or destruction of personal data according to
          relevant legislation,
        </li>
        <li>
          To request notification of the operations made to third parties to
          whom personal data have been transferred,
        </li>
        <li>
          To object to the result of data analysis performed exclusively through
          automated systems,
        </li>
        <li>
          To request compensation for damage in the event of unlawful
          processing.
        </li>
      </ol>
      <p className="mb-6">
        If you consider that your personal data has been unlawfully processed,
        you have the right to file a complaint with a supervisory authority.
        Even after exercising these rights, we may retain certain personal data
        under legal obligations or agreements.
      </p>

      {/* Contact Info */}
      <h3 className="text-md font-semibold mb-2">Contact Details</h3>
      <p>
        If you have questions about these Terms, please reach out:
        <br />
        Email:{" "}
        <a
          href="mailto:support@Achromic Point.in"
          className="text-blue-600 underline"
        >
          support@Achromic Point.in
        </a>
        <br />
        Website:{" "}
        <a href="https://Achromic Point.in" className="text-blue-600 underline">
          https://Achromic Point.in
        </a>
      </p>
    </section>
  );
};

export default PrivacyPolicy;
