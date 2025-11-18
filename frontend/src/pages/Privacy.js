import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <Shield size={64} />
        <h1>Privacy Policy</h1>
        <p>Last updated: November 18, 2025</p>
      </section>

      <section className="privacy-content">
        <div className="privacy-intro">
          <p>
            At LearnHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
        </div>

        <div className="privacy-section">
          <div className="privacy-icon">
            <Database size={28} />
          </div>
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, password, and profile details</li>
            <li><strong>Profile Data:</strong> Bio, avatar, educational background, and professional information</li>
            <li><strong>Course Data:</strong> Enrollment information, progress tracking, assignments, and grades</li>
            <li><strong>Payment Information:</strong> Billing details and transaction history (processed securely through third-party providers)</li>
            <li><strong>Communications:</strong> Messages, support tickets, and feedback you send to us</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our platform</li>
          </ul>
        </div>

        <div className="privacy-section">
          <div className="privacy-icon">
            <UserCheck size={28} />
          </div>
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our services</li>
            <li>To process your transactions and send related information</li>
            <li>To send you technical notices, updates, and support messages</li>
            <li>To respond to your comments, questions, and customer service requests</li>
            <li>To communicate with you about courses, features, and promotional offers</li>
            <li>To monitor and analyze usage patterns and trends</li>
            <li>To detect, prevent, and address technical issues and fraud</li>
            <li>To personalize your learning experience</li>
          </ul>
        </div>

        <div className="privacy-section">
          <div className="privacy-icon">
            <Lock size={28} />
          </div>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and penetration testing</li>
            <li>Strict access controls and authentication protocols</li>
            <li>Secure data centers with 24/7 monitoring</li>
            <li>Regular backups and disaster recovery procedures</li>
          </ul>
          <p className="privacy-note">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
          </p>
        </div>

        <div className="privacy-section">
          <div className="privacy-icon">
            <Eye size={28} />
          </div>
          <h2>Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>With Instructors:</strong> Course enrollment and progress data with instructors of courses you're taking</li>
            <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment processing, analytics, hosting)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
            <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
          </ul>
        </div>

        <div className="privacy-section">
          <div className="privacy-icon">
            <FileText size={28} />
          </div>
          <h2>Your Rights and Choices</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
            <li><strong>Portability:</strong> Receive your data in a structured, commonly used format</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Cookies:</strong> Control cookie preferences through your browser settings</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and track information and improve our services. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
          </p>
        </div>

        <div className="privacy-section">
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
          </p>
        </div>

        <div className="privacy-contact">
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> privacy@learnhub.com</p>
            <p><strong>Address:</strong> ACADEMIC HALL, Noida International University</p>
            <p><strong>Phone:</strong> +91 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
