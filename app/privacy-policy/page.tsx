import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dr. Alex Joseph OBGYN',
  description: 'Privacy Policy for Alexandria leading OBGYN digital sanctuary.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-[#1A1F1B] min-h-screen text-[#F4F2EC]">
      <div className="max-w-4xl mx-auto px-6 py-32 space-y-12 w-full">
        <h1 className="font-serif text-5xl md:text-6xl text-[#B89C86] mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-[#F4F2EC]/80 font-light leading-relaxed text-lg">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you use our website, schedule an appointment, or communicate with our medical clinic. This includes personal identification information, medical history context voluntarily provided through our digital forms, and standard web traffic metrics.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">2. How We Use Your Information</h2>
            <p>
              Your information is securely used to facilitate scheduling, optimize your clinical care experience, and communicate important updates regarding your health or our practice. We never sell your personal information to third-party marketing agencies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">3. Data Security</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards designed to protect your personal information from unauthorized access or disclosure. All data transmissions via our client portal are fully encrypted.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">4. Cookies & Analytics</h2>
            <p>
              Our website may utilize "cookies" to enhance user experience and analyze site traffic patterns. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
