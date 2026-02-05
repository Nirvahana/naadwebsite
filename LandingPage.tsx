import { motion } from "motion/react";
import logoImage from "figma:asset/f492348703d43a68e70da35ceb5cb62d112687de.png";

// Minimal SVG Icons for Features
const FeatureIcons = {
  Sadhana: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M12 2L12 8M12 8C15 8 17 10 17 13C17 16 15 18 12 18C9 18 7 16 7 13C7 10 9 8 12 8Z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="13" r="2" fill="currentColor" opacity="0.3"/>
      <path d="M12 18L12 22" strokeLinecap="round"/>
    </svg>
  ),
  Chant: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M9 18V5L21 3V16" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="18" r="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="16" r="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10L21 8" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  Write: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M12 19L12 5M12 5C8 5 8 8 8 8M12 5C16 5 16 8 16 8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12C8 12 8 15 12 15C16 15 16 12 16 12" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  ),
  Sankalp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M12 2C12 2 8 4 8 8C8 10 9 12 12 12C15 12 16 10 16 8C16 4 12 2 12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12L6 14M12 12L12 15M16 12L18 14" strokeLinecap="round" opacity="0.5"/>
      <circle cx="6" cy="18" r="2"/>
      <circle cx="12" cy="20" r="2"/>
      <circle cx="18" cy="18" r="2"/>
    </svg>
  ),
  Library: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 8L15 8M9 12L15 12M9 16L12 16" strokeLinecap="round" opacity="0.5"/>
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.1"/>
    </svg>
  ),
  Gallery: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// Decorative mandala pattern for background
const MandalaPattern = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.03]">
    <defs>
      <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100;
          const y1 = 100;
          const x2 = 100 + Math.cos(angle) * 60;
          const y2 = 100 + Math.sin(angle) * 60;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>;
        })}
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#mandala)"/>
  </svg>
);

export function LandingPage({ onNavigate }: { onNavigate: (page: 'landing' | 'privacy' | 'beta') => void }) {
  return (
    <div className="min-h-screen bg-[#FFF8E6] text-[#001F3F]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #FFF8E6 0%, #FFE8CC 50%, #FFD9B3 100%)'
          }}
        />
        
        {/* Mandala pattern */}
        <div className="absolute inset-0 text-[#001F3F]">
          <MandalaPattern />
        </div>

        {/* Ambient glow */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #F6C254 0%, transparent 70%)'
          }}
        />

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          {/* Logo */}
          <div className="mb-8">
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 p-4"
              style={{
                background: '#FFF8E6',
                boxShadow: '0 8px 32px rgba(176, 0, 0, 0.15)'
              }}
            >
              <img src={logoImage} alt="Naad Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* App Name */}
          <h1 
            className="text-6xl md:text-7xl font-light mb-4 tracking-wide"
            style={{ 
              fontFamily: 'Poppins',
              color: '#001F3F'
            }}
          >
            Naad
          </h1>

          {/* Tagline */}
          <p 
            className="text-2xl md:text-3xl font-light mb-8 tracking-wide"
            style={{ 
              fontFamily: 'Poppins',
              color: '#B00000',
              opacity: 0.9
            }}
          >
            Write the Mantra. Feel the Stillness.
          </p>

          {/* Description */}
          <p 
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Inter',
              color: '#001F3F',
              opacity: 0.7
            }}
          >
            Naad is a mindful mantra practice app where you write with your finger, return to rhythm, and rediscover inner stillness.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="px-8 py-4 rounded-full font-medium text-[#FFF8E6] transition-all hover:scale-105 active:scale-95"
              style={{ 
                fontFamily: 'Poppins',
                background: 'linear-gradient(135deg, #B00000 0%, #8B0000 100%)',
                boxShadow: '0 4px 20px rgba(176, 0, 0, 0.25)'
              }}
            >
              Download Now
            </a>
            <a
              href="#what-is-naad"
              className="px-8 py-4 rounded-full font-medium border-2 transition-all hover:scale-105 active:scale-95"
              style={{ 
                fontFamily: 'Poppins',
                borderColor: '#B00000',
                color: '#B00000'
              }}
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-1" style={{ borderColor: '#B00000' }}>
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#B00000' }}
            />
          </div>
        </motion.div>
      </section>

      {/* WHAT IS NAAD SECTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Philosophy text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl md:text-5xl font-light mb-8 leading-tight"
                style={{ fontFamily: 'Poppins', color: '#001F3F' }}
              >
                What is Naad
              </h2>
              <div 
                className="text-lg leading-relaxed space-y-6"
                style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
              >
                <p>
                  Naad transforms mantra repetition into a mindful writing practice.
                </p>
                <p>
                  Each stroke becomes one japa.<br/>
                  Each repetition deepens awareness.
                </p>
                <p className="pt-4 border-t border-[#001F3F]/10">
                  No points. No levels. No noise.<br/>
                  <span style={{ color: '#B00000', fontWeight: 500 }}>Just rhythm.</span>
                </p>
              </div>
            </motion.div>

            {/* Right: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div 
                className="aspect-square rounded-3xl p-12 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #FFF8E6 0%, #FFE8CC 100%)',
                  boxShadow: '0 8px 32px rgba(0, 31, 63, 0.08)'
                }}
              >
                {/* Finger writing illustration */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Glowing mantra circle */}
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#F6C254" strokeWidth="1" opacity="0.3"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#F6C254" strokeWidth="2" opacity="0.5"/>
                  
                  {/* Sanskrit Om */}
                  <text 
                    x="100" 
                    y="110" 
                    textAnchor="middle" 
                    fontSize="48" 
                    fill="#B00000"
                    style={{ fontFamily: 'Poppins', fontWeight: 300 }}
                  >
                    ॐ
                  </text>
                  
                  {/* Finger pointer */}
                  <circle cx="140" cy="80" r="4" fill="#001F3F"/>
                  <line x1="140" y1="80" x2="135" y2="60" stroke="#001F3F" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Glow effect */}
                  <circle cx="100" cy="100" r="80" fill="url(#glow)" opacity="0.15"/>
                  <defs>
                    <radialGradient id="glow">
                      <stop offset="0%" stopColor="#F6C254"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ fontFamily: 'Poppins', color: '#001F3F' }}
            >
              Features
            </h2>
            <p 
              className="text-lg"
              style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.6 }}
            >
              Everything you need for mindful practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* My Sadhana */}
            <FeatureCard
              icon={<FeatureIcons.Sadhana />}
              title="My Sadhana"
              description="Main dashboard showing total lifetime mantra count and completed sankalps. Access your practice modes."
              delay={0}
            />

            {/* Chant */}
            <FeatureCard
              icon={<FeatureIcons.Chant />}
              title="Chant"
              description="Chant mantras aloud. Tap the screen with each repetition. Count your practice naturally."
              delay={0.1}
            />

            {/* Write */}
            <FeatureCard
              icon={<FeatureIcons.Write />}
              title="Write"
              description="Practice writing mantras. Experience the flow. Cultivate mindfulness."
              delay={0.2}
            />

            {/* Sankalps */}
            <FeatureCard
              icon={<FeatureIcons.Sankalp />}
              title="Sankalps"
              description="Create or join spiritual intentions. Contribute through regular practice. No pressure. Fully optional."
              delay={0.3}
            />

            {/* Mantra Library */}
            <FeatureCard
              icon={<FeatureIcons.Library />}
              title="Mantra Library"
              description="An evolving library of traditional mantras across sacred categories: Vedic, Shanti, Shaiva, Vaishnava, Shakti, Surya."
              delay={0.4}
            />

            {/* Mantra Gallery */}
            <FeatureCard
              icon={<FeatureIcons.Gallery />}
              title="Mantra Gallery"
              description="Review your completed sessions. Observe your practice journey over time."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY SECTION */}
      <section className="py-32 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 
            className="text-4xl md:text-5xl font-light mb-12"
            style={{ fontFamily: 'Poppins', color: '#001F3F' }}
          >
            A Calm Digital Space
          </h2>
          
          <div 
            className="text-lg leading-relaxed space-y-6"
            style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
          >
            <p>
              Naad is designed without gamification.
            </p>
            <p>
              No streak pressure.<br/>
              No competitive metrics.<br/>
              No flashy rewards.
            </p>
            <div className="py-8">
              <div 
                className="w-16 h-px mx-auto"
                style={{ background: 'linear-gradient(90deg, transparent, #B00000, transparent)' }}
              />
            </div>
            <p>
              The goal is <span style={{ color: '#B00000', fontWeight: 500 }}>presence</span>.
            </p>
            <p>
              The method is <span style={{ color: '#B00000', fontWeight: 500 }}>repetition</span>.
            </p>
            <p>
              The experience is <span style={{ color: '#B00000', fontWeight: 500 }}>yours</span>.
            </p>
          </div>
        </motion.div>
      </section>

      {/* COMMUNITY SECTION */}
      <section 
        className="py-32 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FFF8E6 0%, #FFE8CC 100%)' }}
      >
        {/* Subtle glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, #F6C254 0%, transparent 70%)'
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 flex items-center justify-center"
            >
              {/* Glowing bead circle */}
              <svg viewBox="0 0 200 200" className="w-full h-full max-w-sm">
                {/* Center glow */}
                <circle cx="100" cy="100" r="60" fill="#F6C254" opacity="0.1"/>
                
                {/* Mala beads in circle */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = 100 + Math.cos(angle) * 60;
                  const y = 100 + Math.sin(angle) * 60;
                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#B00000"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3,
                        delay: i * 0.25
                      }}
                    />
                  );
                })}
                
                {/* Center symbol */}
                <text 
                  x="100" 
                  y="110" 
                  textAnchor="middle" 
                  fontSize="32" 
                  fill="#B00000"
                  opacity="0.8"
                  style={{ fontFamily: 'Poppins' }}
                >
                  ॐ
                </text>
              </svg>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl md:text-5xl font-light mb-6"
                style={{ fontFamily: 'Poppins', color: '#001F3F' }}
              >
                Collective Sankalp
              </h2>
              <div 
                className="text-lg leading-relaxed space-y-4"
                style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.8 }}
              >
                <p>
                  Join a shared intention.
                </p>
                <p>
                  Your practice contributes silently.
                </p>
                <p>
                  Participation is reversible and pressure-free.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section id="download" className="py-32 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 
            className="text-4xl md:text-5xl font-light mb-8"
            style={{ fontFamily: 'Poppins', color: '#001F3F' }}
          >
            Download Naad
          </h2>
          
          <p 
            className="text-lg leading-relaxed mb-12"
            style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.7 }}
          >
            Begin your mindful practice today.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* App Store - Add your link to href */}
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#001F3F] text-white transition-all hover:scale-105 active:scale-95"
              style={{ 
                fontFamily: 'Inter',
                boxShadow: '0 4px 20px rgba(0, 31, 63, 0.15)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-base font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play - Add your link to href */}
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#001F3F] text-white transition-all hover:scale-105 active:scale-95"
              style={{ 
                fontFamily: 'Inter',
                boxShadow: '0 4px 20px rgba(0, 31, 63, 0.15)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-base font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <p 
            className="text-sm mt-8"
            style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.5 }}
          >
            Available on iOS and Android
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer 
        className="py-16 px-6"
        style={{ background: '#001F3F' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and name */}
            <div className="text-center md:text-left">
              <h3 
                className="text-2xl font-light mb-2"
                style={{ fontFamily: 'Poppins', color: '#FFF8E6' }}
              >
                Naad
              </h3>
              <p 
                className="text-sm"
                style={{ fontFamily: 'Inter', color: '#FFF8E6', opacity: 0.5 }}
              >
                © 2026
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-8">
              <button 
                className="text-sm transition-opacity hover:opacity-100"
                style={{ fontFamily: 'Inter', color: '#FFF8E6', opacity: 0.7 }}
                onClick={() => onNavigate('privacy')}
              >
                Privacy Policy
              </button>
              <a 
                href="mailto:support@naad108.com" 
                className="text-sm transition-opacity hover:opacity-100"
                style={{ fontFamily: 'Inter', color: '#FFF8E6', opacity: 0.7 }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: '#FFF8E6', opacity: 0.1 }}>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ background: '#F6C254', opacity: 0.3 }}/>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#F6C254', opacity: 0.5 }}/>
              <div className="w-1 h-1 rounded-full" style={{ background: '#F6C254', opacity: 0.3 }}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="p-8 rounded-2xl bg-white transition-all hover:shadow-lg"
      style={{
        boxShadow: '0 2px 12px rgba(0, 31, 63, 0.04)'
      }}
    >
      {/* Icon */}
      <div 
        className="w-12 h-12 mb-6 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #FFF8E6 0%, #FFE8CC 100%)',
          color: '#B00000'
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 
        className="text-xl font-medium mb-3"
        style={{ fontFamily: 'Poppins', color: '#001F3F' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        className="text-sm leading-relaxed"
        style={{ fontFamily: 'Inter', color: '#001F3F', opacity: 0.7 }}
      >
        {description}
      </p>
    </motion.div>
  );
}