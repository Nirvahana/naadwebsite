import { motion } from "motion/react";

export function BetaNotice({ onBack }: { onBack: () => void }) {
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
        {/* Beta Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'linear-gradient(135deg, #FFE8CC 0%, #FFD9B3 100%)' }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#B00000' }}/>
          <span className="text-sm font-medium" style={{ fontFamily: 'Inter', color: '#B00000' }}>
            Beta Phase
          </span>
        </div>

        {/* Title */}
        <h1 
          className="text-5xl md:text-6xl font-light mb-4"
          style={{ fontFamily: 'Poppins', color: '#001F3F' }}
        >
          Beta Notice
        </h1>

        <p 
          className="text-xl leading-relaxed mb-16"
          style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.7 }}
        >
          Naad is currently in Beta.
        </p>

        {/* Main content */}
        <div className="space-y-16">
          {/* What this means */}
          <div>
            <h2 
              className="text-3xl font-light mb-6"
              style={{ fontFamily: 'Poppins', color: '#001F3F' }}
            >
              This means:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                    <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                  </svg>
                }
                text="Features may evolve"
              />
              <InfoCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" strokeLinecap="round"/>
                  </svg>
                }
                text="Performance may improve over time"
              />
              <InfoCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 3V21M15 3V21" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                }
                text="Some tools may be temporarily unavailable"
              />
              <InfoCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                }
                text="Minor bugs may occur"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div 
              className="w-24 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #B00000, transparent)', opacity: 0.3 }}
            />
          </div>

          {/* What to Expect */}
          <div>
            <h2 
              className="text-3xl font-light mb-6"
              style={{ fontFamily: 'Poppins', color: '#001F3F' }}
            >
              What to Expect
            </h2>
            <div 
              className="space-y-4 text-lg leading-relaxed"
              style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
            >
              <p>• Limited mantra selection</p>
              <p>• Select features hidden until stable</p>
              <p>• UI refinements over time</p>
              <p>• Ongoing performance improvements</p>
            </div>
          </div>

          {/* What Will Not Change */}
          <div 
            className="p-8 md:p-12 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #FFF8E6 0%, #FFE8CC 100%)',
              boxShadow: '0 4px 20px rgba(0, 31, 63, 0.06)'
            }}
          >
            <h2 
              className="text-3xl font-light mb-8"
              style={{ fontFamily: 'Poppins', color: '#001F3F' }}
            >
              What Will Not Change
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.7 }}
            >
              Naad will remain:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Principle text="Calm" />
              <Principle text="Non-gamified" />
              <Principle text="Respectful of spiritual practice" />
              <Principle text="Free from performance pressure" />
            </div>
          </div>

          {/* Feedback */}
          <div className="text-center">
            <p 
              className="text-lg leading-relaxed mb-4"
              style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
            >
              If you encounter issues or have suggestions, we welcome thoughtful feedback.
            </p>
            <p 
              className="text-base"
              style={{ fontFamily: 'Inter', color: '#B00000', opacity: 0.8 }}
            >
              Thank you for being part of the early journey.
            </p>
          </div>
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

function InfoCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div 
      className="flex items-start gap-4 p-6 rounded-2xl bg-white"
      style={{
        boxShadow: '0 2px 12px rgba(0, 31, 63, 0.04)'
      }}
    >
      <div 
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(135deg, #FFF8E6 0%, #FFE8CC 100%)',
          color: '#B00000'
        }}
      >
        {icon}
      </div>
      <p 
        className="text-base leading-relaxed pt-1.5"
        style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
      >
        {text}
      </p>
    </div>
  );
}

function Principle({ text }: { text: string }) {
  return (
    <div className="text-center">
      <div 
        className="w-3 h-3 rounded-full mx-auto mb-3"
        style={{ background: '#B00000' }}
      />
      <p 
        className="text-sm font-medium"
        style={{ fontFamily: 'Poppins', color: '#001F3F' }}
      >
        {text}
      </p>
    </div>
  );
}
