import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: July 21, 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p>
                Ripple VFX Studios ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://ripplevfxstudios.com" className="text-blue-400 hover:underline">ripplevfxstudios.com</a> or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p className="mb-4">
                When you contact us through our website forms or submit an application, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Portfolio links and professional social media profiles</li>
                <li>Project details and service inquiries</li>
                <li>Resume and application materials for career opportunities</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website or source</li>
                <li>Geographic location data</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Process job applications and evaluate candidates</li>
                <li>Send project updates and important communications</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Provide personalized content and features</li>
                <li>Analyze website performance and traffic</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may limit some website functionality.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p className="mb-4">
                We may use third-party services for analytics, hosting, and communication purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics for website traffic analysis</li>
                <li>Cloud hosting providers for website infrastructure</li>
                <li>Email service providers for communications</li>
                <li>Social media platforms for content sharing</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies and may collect data independently. We recommend reviewing their privacy practices.
              </p>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Protection and Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Objection:</strong> Object to certain data processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <a href="mailto:contact@ripplevfxstudios.com" className="text-blue-400 hover:underline">contact@ripplevfxstudios.com</a>
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white/5 p-6 rounded-lg space-y-2">
                <p><strong>Ripple VFX Studios</strong></p>
                <p>2450-57 Lobb Avenue</p>
                <p>Port Coquitlam, BC V3C 6G8</p>
                <p>Canada</p>
                <p className="mt-4">
                  Email: <a href="mailto:contact@ripplevfxstudios.com" className="text-blue-400 hover:underline">contact@ripplevfxstudios.com</a>
                </p>
                <p>
                  Phone: <a href="tel:778-322-2065" className="text-blue-400 hover:underline">778-322-2065</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ripple VFX Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
