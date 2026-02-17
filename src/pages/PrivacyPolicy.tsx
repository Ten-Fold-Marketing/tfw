import { motion } from "framer-motion";
import Footer from "@/components/landing/Footer";
import tenfoldLogo from "@/assets/tenfold-logo-new.png";
import { Link } from "react-router-dom";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </motion.section>
);

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-background">
    {/* Simple header */}
    <header className="border-b border-border py-6">
      <div className="container-wide">
        <Link to="/">
          <img src={tenfoldLogo} alt="Ten Fold" className="h-8 w-auto" loading="lazy" />
        </Link>
      </div>
    </header>

    <div className="container-narrow py-16 md:py-24">
      {/* Privacy Policy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Effective Date: 02-16-2026</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground leading-relaxed mb-6"
      >
        15423082 Canada Inc. dba Ten Fold Marketing ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our websites or interact with our services.
      </motion.p>

      <div className="text-muted-foreground leading-relaxed mb-12">
        <p className="mb-2">Websites covered by this policy:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>https://www.tenfoldmarketing.com</li>
          <li>https://go.tenfoldmarketing.com</li>
        </ul>
      </div>

      <Section title="1. Information We Collect">
        <p>We may collect the following types of information:</p>
        <p className="font-semibold text-foreground">Personal Information:</p>
        <p>Name, email address, phone number, billing information, business information, and any other details you voluntarily provide through contact forms, applications, bookings, inquiries, or checkout.</p>
        <p className="font-semibold text-foreground">Usage Data:</p>
        <p>IP address, browser type, device information, pages visited, and time spent on our website.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use your information to:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Provide and deliver our services and digital products</li>
          <li>Process payments and send confirmations</li>
          <li>Respond to inquiries and customer support requests</li>
          <li>Evaluate partnership or client applications</li>
          <li>Improve our website, offerings, and overall user experience</li>
        </ul>
      </Section>

      <Section title="3. Cookies and Tracking Technologies">
        <p>We use cookies and similar technologies to analyze website traffic, improve performance, track conversions, and enhance user experience. You may disable cookies through your browser settings, though some features of the site may not function properly.</p>
      </Section>

      <Section title="4. Data Sharing">
        <p>We do not sell or rent your personal information.</p>
        <p>We may share your information only when necessary to:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Fulfill services or transactions</li>
          <li>Comply with legal obligations</li>
          <li>Work with trusted service providers (such as payment processors, email platforms, CRM systems, advertising platforms, or contractors) under confidentiality agreements</li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p>We retain your information only for as long as necessary to provide services, comply with legal requirements, resolve disputes, and enforce our agreements.</p>
      </Section>

      <Section title="6. Your Rights">
        <p>You may request access to, correction of, or deletion of your personal information by contacting us using the information below.</p>
      </Section>

      <Section title="7. Contact Information">
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <div className="mt-2 space-y-1">
          <p className="text-foreground font-medium">15423082 Canada Inc. dba Ten Fold Marketing</p>
          <p>4441 Wellington Street</p>
          <p>Montreal, Quebec, H4G 1W6</p>
          <p>Canada</p>
          <p>Email: <a href="mailto:info@tenfoldmarketing.com" className="text-primary hover:underline">info@tenfoldmarketing.com</a></p>
          <p>Phone: <a href="tel:+15142248025" className="text-primary hover:underline">+1-514-224-8025</a></p>
        </div>
      </Section>

      {/* Divider */}
      <div className="border-t border-border my-16" />

      {/* Terms & Conditions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-12">Effective Date: 02-16-2026</p>
      </motion.div>

      <p className="text-muted-foreground leading-relaxed mb-12">
        Welcome to the website of 15423082 Canada Inc. dba Ten Fold Marketing. By accessing or using our websites and services, you agree to the following terms and conditions.
      </p>

      <Section title="1. Use of Website">
        <p>You must be at least 18 years old to use this website or have permission from a parent or legal guardian.</p>
      </Section>

      <Section title="2. Intellectual Property">
        <p>All content on our websites, including text, images, branding, frameworks, strategies, digital materials, and proprietary systems, is the property of 15423082 Canada Inc. dba Ten Fold Marketing and may not be copied, reproduced, distributed, modified, or resold without written permission.</p>
      </Section>

      <Section title="3. Payments">
        <p>All payments are processed securely. Prices are listed in the applicable currency and may change at any time.</p>
        <p>By completing a purchase, you authorize us to charge your selected payment method.</p>
      </Section>

      <Section title="4. Refund Policy">
        <p>Refund eligibility, if applicable, is outlined in our Refund & Dispute Policy below. Unless otherwise stated in writing, services and digital products are non-refundable after delivery.</p>
      </Section>

      <Section title="5. User Responsibility">
        <p>You are responsible for maintaining the confidentiality of any account or login credentials and for all activity conducted under your account.</p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>15423082 Canada Inc. dba Ten Fold Marketing shall not be liable for any indirect, incidental, or consequential damages arising from your use of our websites, services, or content.</p>
      </Section>

      <Section title="7. Modifications">
        <p>We reserve the right to update or modify these Terms & Conditions at any time. Changes will be effective immediately upon posting with an updated effective date.</p>
      </Section>

      {/* Divider */}
      <div className="border-t border-border my-16" />

      {/* Refund & Dispute Policy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-12">Refund & Dispute Policy</h1>
      </motion.div>

      <Section title="We stand behind the quality of our services and offerings.">
        <p className="font-semibold text-foreground">Refund Eligibility (if applicable):</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Refund requests must be submitted in writing within the timeframe specified at the time of purchase.</li>
          <li>Refunds requested outside the stated timeframe will not be honored.</li>
        </ul>
        <p className="font-semibold text-foreground mt-4">Dispute Resolution:</p>
        <p>If you experience an issue, please contact us directly before initiating a chargeback. We are committed to resolving disputes fairly and efficiently.</p>
        <p>All disputes shall be governed by the laws of Quebec, Canada.</p>
      </Section>

      {/* Divider */}
      <div className="border-t border-border my-16" />

      {/* Cancellation Policy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-12">Cancellation Policy</h1>
      </motion.div>

      <Section title="">
        <p>Because services and digital products are delivered promptly, cancellations are not available once a purchase has been completed.</p>
        <p>If a recurring subscription is offered, you may cancel future billing at any time by:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Accessing your account settings, or</li>
          <li>Contacting us prior to the next billing cycle</li>
        </ul>
        <p>Unused portions of subscriptions are not eligible for refunds if cancellation occurs after renewal.</p>
      </Section>
    </div>

    <Footer />
  </main>
);

export default PrivacyPolicy;
