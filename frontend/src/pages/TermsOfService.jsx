import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Last updated: January 14, 2025</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Ripple VFX Studios website (<a href="https://ripplevfxstudios.com" className="text-blue-400 hover:underline">ripplevfxstudios.com</a>), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
              </p>
            </section>

            {/* Website Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Website Usage</h2>
              <h3 className="text-xl font-semibold text-white mb-3">Permitted Use</h3>
              <p className="mb-4">You may use this website for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Viewing our portfolio and services</li>
                <li>Contacting us for business inquiries</li>
                <li>Applying for career opportunities</li>
                <li>Learning about our company and expertise</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Prohibited Use</h3>
              <p className="mb-4">You may NOT:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any systems or networks</li>
                <li>Copy, reproduce, or distribute website content without permission</li>
                <li>Interfere with the website's operation or security</li>
                <li>Transmit harmful code, viruses, or malicious software</li>
                <li>Harvest or collect user information</li>
                <li>Impersonate Ripple VFX Studios or its representatives</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-white mb-3">Website Content</h3>
              <p className="mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, video clips, audio clips, data compilations, and software, is the property of Ripple VFX Studios or its content suppliers and is protected by Canadian and international copyright laws.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Trademarks</h3>
              <p className="mb-4">
                "Ripple VFX Studios," "Ripple VFX," "Ripple Digital," and associated logos are trademarks of Ripple VFX Studios. Use of these trademarks without express written permission is strictly prohibited.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Portfolio Content</h3>
              <p>
                Portfolio work displayed on this website may be owned by Ripple VFX Studios, our clients, or third parties. All rights to portfolio content are retained by their respective owners. Portfolio content is displayed for demonstration purposes only and may not be reproduced without permission from the copyright holder.
              </p>
            </section>

            {/* Client Work and Confidentiality */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Client Work and Confidentiality</h2>
              <p className="mb-4">
                When engaging Ripple VFX Studios for services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ownership of final deliverables will be specified in project contracts</li>
                <li>We maintain confidentiality of client projects unless authorized for portfolio display</li>
                <li>Non-disclosure agreements (NDAs) will be honored and enforced</li>
                <li>Client approval is required before displaying work publicly</li>
              </ul>
            </section>

            {/* User Submissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. User Submissions</h2>
              <p className="mb-4">
                When you submit content through contact forms, applications, or other means:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You represent that you own the rights to the submitted content</li>
                <li>You grant us permission to use submitted information to respond to your inquiry</li>
                <li>You agree not to submit confidential or proprietary information without prior agreement</li>
                <li>Portfolio links and materials submitted remain your property</li>
              </ul>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Service Availability</h2>
              <p>
                We strive to maintain website availability but do not guarantee uninterrupted access. The website may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify, suspend, or discontinue any aspect of the website without notice.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ripple VFX Studios shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>We do not warrant that the website will be error-free or secure</li>
                <li>We are not responsible for third-party websites linked from our site</li>
                <li>Portfolio content accuracy is not guaranteed, as projects may be modified by clients post-delivery</li>
                <li>Our total liability shall not exceed the amount paid by you (if any) for accessing the website</li>
              </ul>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimer of Warranties</h2>
              <p>
                This website and its content are provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Links and Services</h2>
              <p>
                Our website may contain links to third-party websites or services (such as social media platforms, portfolio hosting, or industry resources). We are not responsible for the content, privacy practices, or terms of service of these external sites. Use of third-party services is at your own risk.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Ripple VFX Studios, its founders, employees, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your use of the website or violation of these Terms of Service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of British Columbia, Canada, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of British Columbia.
              </p>
            </section>

            {/* Modifications to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Severability</h2>
              <p>
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Entire Agreement</h2>
              <p>
                These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Ripple VFX Studios regarding the use of this website.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact:
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

export default TermsOfService;
