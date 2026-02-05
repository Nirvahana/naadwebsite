import { motion } from "motion/react";

export function PrivacyPolicy({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#FFF8E6]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFF8E6]/95 backdrop-blur-sm border-b border-[#001F3F]/5">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{ fontFamily: 'Inter', color: '#B00000' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 10H5M5 10L10 15M5 10L10 5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </button>
        </div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        {/* Title */}
        <h1 
          className="text-5xl md:text-6xl font-light mb-4"
          style={{ fontFamily: 'Poppins', color: '#001F3F' }}
        >
          Privacy Policy
        </h1>

        <p 
          className="text-sm mb-12"
          style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.5 }}
        >
          Last Updated: February 4, 2026
        </p>

        {/* Intro */}
        <div 
          className="text-lg leading-relaxed mb-12 pb-12 border-b border-[#001F3F]/10"
          style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
        >
          <p className="mb-4">
            Naad is designed as a calm, personal spiritual practice space.
          </p>
          <p className="mb-4">
            We value simplicity and privacy.
          </p>
          <p>
            This policy explains what information is collected and how it is used.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <Section
            number="1"
            title="Information We Collect"
          >
            <SubSection title="a) Practice Data">
              <p className="mb-4">
                Naad stores your mantra practice information, including:
              </p>
              <ul className="space-y-2 mb-4">
                <li>• Mantra selections</li>
                <li>• Japa counts</li>
                <li>• Sankalp participation</li>
                <li>• Session history</li>
              </ul>
              <p>
                This data is used only to provide app functionality.
              </p>
            </SubSection>

            <SubSection title="b) Device Information">
              <p className="mb-4">
                Basic technical information may be collected automatically, such as:
              </p>
              <ul className="space-y-2 mb-4">
                <li>• Device type</li>
                <li>• Operating system version</li>
                <li>• App version</li>
                <li>• Crash logs (if enabled)</li>
              </ul>
              <p>
                This helps improve stability and performance.
              </p>
            </SubSection>

            <SubSection title="c) Custom Mantras">
              <p className="mb-4">
                If you create a custom mantra, it is stored locally (and may later sync securely if cloud sync is introduced).
              </p>
              <p>
                Naad does not analyze or publicly display private custom content.
              </p>
            </SubSection>
          </Section>

          {/* Section 2 */}
          <Section
            number="2"
            title="What We Do NOT Collect"
          >
            <p className="mb-4">
              Naad does not:
            </p>
            <ul className="space-y-2">
              <li>• Sell personal data</li>
              <li>• Share spiritual practice data with advertisers</li>
              <li>• Track your behavior across other apps</li>
              <li>• Require account creation (unless introduced later)</li>
            </ul>
          </Section>

          {/* Section 3 */}
          <Section
            number="3"
            title="Sankalp Participation"
          >
            <p className="mb-4">
              Community Sankalp participation is:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Optional</li>
              <li>• Reversible</li>
              <li>• Anonymous</li>
            </ul>
            <p>
              If collective counts are displayed, they are aggregated totals and do not reveal personal identity.
            </p>
          </Section>

          {/* Section 4 */}
          <Section
            number="4"
            title="Data Storage"
          >
            <p className="mb-4">
              Currently (Beta phase):
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Most data is stored locally on your device</li>
              <li>• If analytics are introduced, they will be used only to improve stability and user experience</li>
              <li>• We do not use invasive tracking tools</li>
            </ul>
            <p>
              Future updates may introduce optional cloud sync.
              If that occurs, this policy will be updated.
            </p>
          </Section>

          {/* Section 5 */}
          <Section
            number="5"
            title="Children's Privacy"
          >
            <p className="mb-4">
              Naad does not knowingly collect personal data from children under 13.
            </p>
            <p>
              If you believe a child has submitted personal data, please contact us.
            </p>
          </Section>

          {/* Section 6 */}
          <Section
            number="6"
            title="Changes to This Policy"
          >
            <p className="mb-4">
              As Naad evolves, this policy may be updated.
            </p>
            <p>
              Significant changes will be clearly communicated.
            </p>
          </Section>

          {/* Section 7 */}
          <Section
            number="7"
            title="Contact"
          >
            <p className="mb-4">
              For privacy-related questions:
            </p>
            <p className="mb-2">
              Email: <a href="mailto:support@naad108.com" className="underline" style={{ color: '#B00000' }}>support@naad108.com</a>
            </p>
            <p>
              Website: <a href="https://naad108.com" className="underline" style={{ color: '#B00000' }}>naad108.com</a>
            </p>
          </Section>
        </div>

        {/* Decorative element */}
        <div className="mt-20 pt-12 border-t border-[#001F3F]/10">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1 h-1 rounded-full" style={{ background: '#F6C254', opacity: 0.3 }}/>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#F6C254', opacity: 0.5 }}/>
            <div className="w-1 h-1 rounded-full" style={{ background: '#F6C254', opacity: 0.3 }}/>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Section({ 
  number, 
  title, 
  children 
}: { 
  number: string; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 
        className="text-2xl font-medium mb-6 flex items-baseline gap-3"
        style={{ fontFamily: 'Poppins', color: '#001F3F' }}
      >
        <span style={{ color: '#B00000', opacity: 0.6 }}>{number}.</span>
        {title}
      </h2>
      <div 
        className="text-base leading-relaxed ml-8"
        style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
      >
        {children}
      </div>
    </div>
  );
}

function SubSection({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 
        className="text-lg font-medium mb-3"
        style={{ fontFamily: 'Poppins', color: '#001F3F', opacity: 0.9 }}
      >
        {title}
      </h3>
      <div className="text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}