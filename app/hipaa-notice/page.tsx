import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices | Dr. Alex Joseph OBGYN',
  description: 'HIPAA compliance and patient privacy practices.',
};

export default function HipaaNoticePage() {
  return (
    <div className="flex flex-col w-full bg-[#1A1F1B] min-h-screen text-[#F4F2EC]">
      <div className="max-w-4xl mx-auto px-6 py-32 space-y-12 w-full">
        <h1 className="font-serif text-5xl md:text-6xl text-[#B89C86] mb-8">HIPAA Notice of Privacy Practices</h1>
        
        <div className="space-y-8 text-[#F4F2EC]/80 font-light leading-relaxed text-lg">
          <div className="p-6 bg-[#F4F2EC]/5 border border-[#B89C86]/30 rounded-2xl mb-8">
            <p className="font-medium text-[#F4F2EC]">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">Our Legal Duty</h2>
            <p>
              We are required by applicable federal and state law to maintain the privacy of your protected health information (PHI). We are also required to give you this Notice about our privacy practices, our legal duties, and your rights concerning your PHI.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">Uses and Disclosures of Health Information</h2>
            <p>
              <strong>Treatment:</strong> We may use or disclose your health information to a physician or other healthcare provider providing treatment to you.<br/><br/>
              <strong>Payment:</strong> We may use and disclose your health information to obtain payment for services we provide to you.<br/><br/>
              <strong>Healthcare Operations:</strong> We may use and disclose your health information in connection with our healthcare operations, including quality assessment and improvement activities, reviewing the competence or qualifications of healthcare professionals.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-[#F4F2EC]">Patient Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your medical records</li>
              <li>Restriction requests on disclosing certain information</li>
              <li>Alternative communication handling</li>
              <li>Amendment requests for incorrect data</li>
              <li>Accounting of disclosures tracking</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
