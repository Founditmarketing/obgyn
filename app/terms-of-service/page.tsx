import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Dr. Alex Joseph OBGYN',
  description: 'Terms of Service for Dr. Alex Joseph clinical website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-full bg-[#1A1F1B] min-h-screen text-[#F4F2EC]">
      <div className="max-w-4xl mx-auto px-6 py-32 space-y-12 w-full">
        <h1 className="font-serif text-5xl md:text-6xl text-[#B89C86] mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-[#F4F2EC]/80 font-light leading-relaxed text-lg">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Furthermore, when using this clinic's digital services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">2. Medical Disclaimer</h2>
            <p>
              The content provided on this website including text, graphics, images, and other materials is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">3. Patient Portal Access</h2>
            <p>
              Access to the secure Patient Portal is granted solely for the confidential communication of medical records, test results, and direct messaging with our clinical staff. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">4. Appointment Cancellation Policy</h2>
            <p>
              We kindly ask for at least 24 hours notice for any appointment cancellations or rescheduling requests so that we may offer that time to another patient in need of care. Late cancellations or no-shows may be subject to a nominal fee.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
