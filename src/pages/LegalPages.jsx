import { Link } from 'react-router-dom'

function LegalPageLayout({ title, breadcrumb, lastUpdated, children }) {
  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">{title}</h1>
          <p className="text-gray-300 text-sm">Last updated: {lastUpdated}</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">{breadcrumb}</span>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray max-w-none">{children}</div>
        </div>
      </section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-primary mb-3 pb-2 border-b-2 border-accent/30">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" breadcrumb="Privacy Policy" lastUpdated="January 1, 2025">
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-700">
          At Has Remote Solution Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
      </div>

      <Section title="1. Information We Collect">
        <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Company information (company name, website, industry)</li>
          <li>Communication data (messages, inquiries, feedback)</li>
          <li>Technical data (IP address, browser type, device information)</li>
          <li>Usage data (pages visited, time spent, click patterns)</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Respond to comments, questions, and customer service requests</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          <li>Detect and prevent fraudulent transactions and other illegal activities</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Section>

      <Section title="3. Information Sharing">
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting our business</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </Section>

      <Section title="4. Cookies and Tracking Technologies">
        <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        <p>Types of cookies we use:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors for marketing purposes</li>
        </ul>
      </Section>

      <Section title="5. Data Security">
        <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SSL encryption for data transmission</li>
          <li>Secure server infrastructure</li>
          <li>Regular security audits</li>
          <li>Access controls and authentication</li>
          <li>Staff training on data protection</li>
        </ul>
      </Section>

      <Section title="6. Your Rights">
        <p>You have the following rights regarding your personal information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
          <li><strong>Data Portability:</strong> Receive your personal information in a structured format</li>
        </ul>
      </Section>

      <Section title="7. Third-Party Links">
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to review their privacy policies before providing any personal information.</p>
      </Section>

      <Section title="8. Children's Privacy">
        <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.</p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>
      </Section>

      <Section title="10. Contact Us">
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-none space-y-1">
          <li>📧 <strong>Email:</strong> contact@hasremotesolution.in</li>
          <li>📞 <strong>Phone:</strong> +91 6378400775</li>
          <li>📍 <strong>Address:</strong> J-3/31B Khirki Extn. Malviya Nagar New Delhi 110017</li>
        </ul>
      </Section>
    </LegalPageLayout>
  )
}

export function TermsAndConditions() {
  return (
    <LegalPageLayout title="Terms & Conditions" breadcrumb="Terms & Conditions" lastUpdated="January 1, 2025">
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-700">
          Please read these Terms and Conditions carefully before using the Has Remote Solution website or services. By accessing our services, you agree to be bound by these terms.
        </p>
      </div>

      <Section title="1. Acceptance of Terms">
        <p>By accessing and using the services of Has Remote Solution Pvt. Ltd. ("Company", "we", "us", or "our"), you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
      </Section>

      <Section title="2. Services Description">
        <p>Has Remote Solution Pvt. Ltd. provides digital marketing, IT services, remote staffing, and related consulting services. Our services include but are not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Search Engine Optimization (SEO)</li>
          <li>Social Media Marketing and Management</li>
          <li>Pay-Per-Click Advertising</li>
          <li>Web and Mobile Application Development</li>
          <li>Remote Staffing Solutions</li>
          <li>Content Marketing and Creation</li>
          <li>Online Reputation Management</li>
        </ul>
      </Section>

      <Section title="3. Client Obligations">
        <p>As a client, you agree to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate, current, and complete information as required</li>
          <li>Maintain the confidentiality of any account credentials</li>
          <li>Provide timely access to necessary resources and information</li>
          <li>Pay all fees in accordance with the agreed payment schedule</li>
          <li>Not use our services for any unlawful purpose</li>
          <li>Not interfere with the security or operation of our systems</li>
        </ul>
      </Section>

      <Section title="4. Payment Terms">
        <p>Payment terms are specified in individual service agreements. General terms include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Monthly retainer services are billed at the beginning of each month</li>
          <li>Project-based work may require a 50% upfront deposit</li>
          <li>All prices are in USD unless otherwise specified</li>
          <li>Invoices are due within 15 days of issue</li>
          <li>Late payments may incur a 2% monthly interest charge</li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>Upon full payment, clients receive ownership of all deliverables created specifically for their project. Has Remote Solution retains the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use completed work in portfolio and marketing materials (unless restricted by written agreement)</li>
          <li>Retain ownership of pre-existing tools, frameworks, and methodologies</li>
          <li>Own all intellectual property created during the development of internal tools</li>
        </ul>
      </Section>

      <Section title="6. Confidentiality">
        <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of the engagement. We will not disclose your business information, strategies, or data to third parties without your explicit consent, except as required by law.</p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>To the maximum extent permitted by law, Has Remote Solution Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities. Our total liability shall not exceed the total fees paid in the three months preceding the claim.</p>
      </Section>

      <Section title="8. Service Level Agreement">
        <p>We strive to deliver high-quality services. However, we cannot guarantee specific results such as:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Specific search engine rankings (as these are controlled by third-party algorithms)</li>
          <li>Specific revenue or lead generation numbers</li>
          <li>Immediate results (SEO and organic growth take time)</li>
        </ul>
        <p>We do guarantee our best professional efforts, transparent communication, and adherence to agreed deliverables and timelines.</p>
      </Section>

      <Section title="9. Termination">
        <p>Either party may terminate services with 30 days written notice. Upon termination:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Client will pay for all work completed up to the termination date</li>
          <li>We will deliver all completed work and transfer credentials</li>
          <li>Confidentiality obligations survive termination</li>
        </ul>
      </Section>

      <Section title="10. Governing Law">
        <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</p>
      </Section>

      <Section title="11. Contact">
        <p>For questions about these Terms and Conditions, contact us at:</p>
        <ul className="list-none space-y-1">
          <li>📧 <strong>Email:</strong> contact@hasremotesolution.in</li>
          <li>📞 <strong>Phone:</strong> +91 6378400775</li>
        </ul>
      </Section>
    </LegalPageLayout>
  )
}

export function RefundPolicy() {
  return (
    <LegalPageLayout title="Refund Policy" breadcrumb="Refund Policy" lastUpdated="January 1, 2025">
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-700">
          At Has Remote Solution Pvt. Ltd., we are committed to client satisfaction. Please read our refund policy carefully to understand your rights and our obligations.
        </p>
      </div>

      <Section title="1. Our Satisfaction Guarantee">
        <p>We offer a <strong>2-week risk-free trial</strong> for all remote staffing services. If you are not completely satisfied with the quality of work during the trial period, you will not be charged. This is our commitment to delivering value before you commit.</p>
      </Section>

      <Section title="2. Digital Marketing Services">
        <p>For digital marketing retainer services:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Monthly Retainers:</strong> No refunds for the current billing month once work has commenced</li>
          <li><strong>Unused Services:</strong> If we fail to deliver agreed deliverables, a pro-rata refund will be considered</li>
          <li><strong>Setup Fees:</strong> Non-refundable once setup work has begun</li>
          <li><strong>Prepaid Packages:</strong> Unused months may be refunded at 70% of the monthly rate</li>
        </ul>
      </Section>

      <Section title="3. Web & App Development Projects">
        <p>For project-based development work:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Deposit (50%):</strong> Non-refundable once project work has commenced</li>
          <li><strong>Milestone Payments:</strong> Non-refundable for completed milestones</li>
          <li><strong>Cancellation:</strong> If client cancels mid-project, payment is due for work completed</li>
          <li><strong>Quality Issues:</strong> We will revise work at no cost until it meets agreed specifications</li>
        </ul>
      </Section>

      <Section title="4. Remote Staffing Services">
        <p>Our remote staffing refund policy:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>2-Week Trial:</strong> 100% refund if not satisfied during trial period</li>
          <li><strong>Monthly Billing:</strong> Pro-rata refund if staff member is terminated within the first 5 days of a billing period</li>
          <li><strong>Replacement Guarantee:</strong> Free replacement within 7 days if a staff member doesn't work out (within first 3 months)</li>
          <li><strong>Notice Period:</strong> 30-day notice required to terminate ongoing engagements</li>
        </ul>
      </Section>

      <Section title="5. Circumstances for Refund Eligibility">
        <p>Refunds may be considered in the following circumstances:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>We fail to deliver services as specified in the service agreement</li>
          <li>Significant quality issues that cannot be resolved through revisions</li>
          <li>Service interruption caused by our technical failures</li>
          <li>Duplicate billing or payment errors</li>
        </ul>
      </Section>

      <Section title="6. Non-Refundable Items">
        <p>The following are strictly non-refundable:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Third-party costs (ad spend, domain registration, hosting, tools)</li>
          <li>Completed and approved work</li>
          <li>Rush/expedite fees</li>
          <li>Consultation fees</li>
          <li>Training and onboarding fees</li>
        </ul>
      </Section>

      <Section title="7. How to Request a Refund">
        <p>To request a refund:</p>
        <ul className="list-decimal pl-5 space-y-2">
          <li>Email us at <strong>contact@hasremotesolution.in</strong> with subject line "Refund Request - [Your Name/Company]"</li>
          <li>Include your invoice number, service details, and reason for refund request</li>
          <li>Our team will review your request within 3-5 business days</li>
          <li>If approved, refunds are processed within 7-10 business days</li>
          <li>Refunds are issued via the original payment method</li>
        </ul>
      </Section>

      <Section title="8. Dispute Resolution">
        <p>If you are dissatisfied with our services or refund decision, we encourage you to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Contact your dedicated account manager first</li>
          <li>Escalate to senior management if unresolved</li>
          <li>We are committed to finding a fair resolution for all parties</li>
        </ul>
      </Section>

      <Section title="9. Contact Us">
        <p>For refund-related queries, please contact:</p>
        <ul className="list-none space-y-1">
          <li>📧 <strong>Email:</strong> contact@hasremotesolution.in</li>
          <li>📞 <strong>Phone:</strong> +91 6378400775</li>
          <li>⏰ <strong>Response Time:</strong> Within 24 business hours</li>
        </ul>
      </Section>
    </LegalPageLayout>
  )
}
