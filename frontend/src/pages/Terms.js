import React from 'react';
import { FileText, Scale, AlertCircle, Shield, Users, BookOpen } from 'lucide-react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <FileText size={64} />
        <h1>Terms of Service</h1>
        <p>Last updated: November 18, 2025</p>
      </section>

      <section className="terms-content">
        <div className="terms-intro">
          <p>
            Welcome to LearnHub. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
          </p>
        </div>

        <div className="terms-section">
          <div className="terms-icon">
            <Scale size={28} />
          </div>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account, accessing, or using LearnHub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
          </p>
        </div>

        <div className="terms-section">
          <div className="terms-icon">
            <Users size={28} />
          </div>
          <h2>2. User Accounts</h2>
          <h3>2.1 Account Creation</h3>
          <p>To access certain features, you must create an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and update your information to keep it accurate</li>
            <li>Maintain the security of your password</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
          
          <h3>2.2 Account Types</h3>
          <p>LearnHub offers different account types:</p>
          <ul>
            <li><strong>Students:</strong> Access to courses, assignments, and learning materials</li>
            <li><strong>Teachers:</strong> Ability to create and manage courses, grade assignments</li>
            <li><strong>Administrators:</strong> Platform management and user oversight</li>
          </ul>

          <h3>2.3 Account Termination</h3>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent, abusive, or illegal activities.
          </p>
        </div>

        <div className="terms-section">
          <div className="terms-icon">
            <BookOpen size={28} />
          </div>
          <h2>3. Course Content and Intellectual Property</h2>
          <h3>3.1 Content Ownership</h3>
          <p>
            All course content, including videos, text, images, code, and materials, remains the property of the respective instructors or LearnHub. Users are granted a limited, non-exclusive, non-transferable license to access and use the content for personal educational purposes only.
          </p>

          <h3>3.2 Prohibited Uses</h3>
          <p>You may not:</p>
          <ul>
            <li>Copy, reproduce, distribute, or share course content</li>
            <li>Use content for commercial purposes without permission</li>
            <li>Remove or modify copyright notices or watermarks</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Create derivative works from our content</li>
          </ul>

          <h3>3.3 User-Generated Content</h3>
          <p>
            By submitting content (assignments, notes, comments), you grant LearnHub a worldwide, non-exclusive license to use, reproduce, and display your content as necessary to provide our services.
          </p>
        </div>

        <div className="terms-section">
          <div className="terms-icon">
            <Shield size={28} />
          </div>
          <h2>4. Acceptable Use Policy</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the platform for any illegal or unauthorized purpose</li>
            <li>Violate any laws in your jurisdiction</li>
            <li>Infringe on intellectual property rights of others</li>
            <li>Upload malware, viruses, or malicious code</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Impersonate others or misrepresent your affiliation</li>
            <li>Spam or send unsolicited communications</li>
            <li>Interfere with or disrupt the platform's operation</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Share account credentials with others</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>5. Payments and Refunds</h2>
          <h3>5.1 Course Pricing</h3>
          <p>
            Course prices are listed in USD and may change at any time. Promotional pricing may have specific terms and conditions.
          </p>

          <h3>5.2 Payment Processing</h3>
          <p>
            Payments are processed through secure third-party payment providers. We do not store your complete payment information.
          </p>

          <h3>5.3 Refund Policy</h3>
          <p>
            We offer a 30-day money-back guarantee for paid courses. To request a refund, contact our support team within 30 days of purchase. Refunds are not available for:
          </p>
          <ul>
            <li>Courses completed or substantially consumed</li>
            <li>Course bundles or special promotions (unless specified)</li>
            <li>After the 30-day period</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>6. Instructor Obligations</h2>
          <p>If you are an instructor, you agree to:</p>
          <ul>
            <li>Provide accurate course descriptions and content</li>
            <li>Maintain high-quality educational materials</li>
            <li>Respond to student questions in a timely manner</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect intellectual property rights</li>
            <li>Not engage in deceptive or fraudulent practices</li>
          </ul>
        </div>

        <div className="terms-section">
          <div className="terms-icon">
            <AlertCircle size={28} />
          </div>
          <h2>7. Disclaimers and Limitations of Liability</h2>
          <h3>7.1 Service "As Is"</h3>
          <p>
            LearnHub is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
          </p>

          <h3>7.2 Educational Content</h3>
          <p>
            While we strive to provide quality educational content, we do not guarantee specific outcomes or results from taking courses. Success depends on individual effort and circumstances.
          </p>

          <h3>7.3 Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, LearnHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses.
          </p>
        </div>

        <div className="terms-section">
          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold LearnHub, its affiliates, and employees harmless from any claims, damages, or expenses arising from your use of the platform or violation of these terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes via email or platform notification. Continued use of the platform after changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>10. Governing Law and Dispute Resolution</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be resolved through binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act.
          </p>
        </div>

        <div className="terms-section">
          <h2>11. Contact Information</h2>
          <p>For questions about these Terms of Service, contact us:</p>
          <ul>
            <li><strong>Email:</strong> legal@learnhub.com</li>
            <li><strong>Address:</strong> ACADEMIC HALL, Noida International University</li>
            <li><strong>Phone:</strong> +91 (555) 123-4567</li>
          </ul>
        </div>

        <div className="terms-footer">
          <p>
            By using LearnHub, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;
