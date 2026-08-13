import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BrowseEast",
  description: "The terms that govern your use of BrowseEast.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
      <span className="font-mono text-xs uppercase tracking-wide text-petrol">
        › Legal
      </span>
      <h1 className="font-display text-4xl text-ink mt-2">Terms of Service</h1>
      <p className="font-mono text-xs text-ink/50 mt-2">Last updated August 10, 2026</p>

      <article className="prose prose-p:text-ink/80 prose-headings:font-display prose-headings:text-ink prose-a:text-petrol mt-10">
        <p>
          These Terms of Service ("Terms") govern your access to and use of BrowseEast
          (the "Services"), operated by BrowseEast ("we," "us," or "our"). By accessing or
          using the Services, you agree to be bound by these Terms. If you do not agree,
          please discontinue use of the Services immediately.
        </p>
        <p>
          You can contact us at{" "}
          <a href="mailto:chiderajohn320@gmail.com">chiderajohn320@gmail.com</a> or by mail
          at Festac Town, Lagos 102311, Nigeria.
        </p>
        <p>
          We may update these Terms from time to time. Continued use of the Services after
          any changes are posted means you accept the revised Terms.
        </p>

        <h2>1. Our Services</h2>
        <p>
          BrowseEast is a content website. Content is provided for general informational
          purposes and is not intended for distribution in any jurisdiction where doing so
          would violate applicable law.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          All content on BrowseEast — including text, graphics, logos, and design — is owned
          by us or our licensors and is protected by copyright and other intellectual
          property laws. You may view and share links to our content for personal,
          non-commercial use. You may not reproduce, republish, or distribute our content
          for commercial purposes without our prior written permission.
        </p>

        <h2>3. User Representations</h2>
        <p>
          By using the Services, you represent that you are at least 18 years old (or the
          age of majority in your jurisdiction), that you will not access the Services
          through automated or non-human means, and that your use will comply with
          applicable law.
        </p>

        <h2>4. Prohibited Activities</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Scrape, systematically extract, or republish our content without permission</li>
          <li>Attempt to disrupt, overload, or interfere with the Services</li>
          <li>Use the Services for any unlawful purpose</li>
          <li>Attempt to bypass any security or access-restriction measures</li>
          <li>Impersonate any person or misrepresent your affiliation with us</li>
        </ul>

        <h2>5. Contact Form Submissions</h2>
        <p>
          If you submit a message through our contact form, you agree that the information
          you provide is accurate, and you grant us permission to use it solely to respond
          to your inquiry. See our{" "}
          <a href="/privacy">Privacy Policy</a> for details on how this information is
          handled.
        </p>

        <h2>6. Third-Party Links and Advertising</h2>
        <p>
          The Services may display advertisements, including through Google AdSense, and may
          link to third-party websites. We do not control and are not responsible for the
          content, privacy practices, or availability of any third-party sites or ads. Your
          interactions with third-party advertisers are solely between you and that
          advertiser.
        </p>

        <h2>7. Services Management</h2>
        <p>
          We reserve the right to monitor the Services, restrict or disable access where
          necessary, and modify or discontinue any part of the Services at any time without
          notice or liability.
        </p>

        <h2>8. Disclaimer</h2>
        <p>
          THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO
          WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE ACCURACY, COMPLETENESS, OR
          RELIABILITY OF ANY CONTENT ON THE SERVICES, AND YOUR USE OF THE SERVICES IS AT
          YOUR OWN RISK.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE
          SERVICES.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Federal Republic of Nigeria, without
          regard to its conflict of law principles.
        </p>

        <h2>11. Modifications and Interruptions</h2>
        <p>
          We may change, suspend, or discontinue any part of the Services at any time
          without notice, and we are not liable for any loss resulting from downtime or
          discontinuation.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          Questions about these Terms can be directed to{" "}
          <a href="mailto:chiderajohn320@gmail.com">chiderajohn320@gmail.com</a>.
        </p>
      </article>
    </main>
  );
}