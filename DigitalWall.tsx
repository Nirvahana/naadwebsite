interface DigitalWallProps {
  onBack: () => void;
}

export function DigitalWall({ onBack }: DigitalWallProps) {
  return (
    <div className="min-h-screen" style={{ background: '#FFF8E6' }}>
      {/* Subtle paper texture */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 35%, rgba(0, 0, 0, 0.015) 1px, transparent 1px),
            radial-gradient(circle at 75% 65%, rgba(0, 0, 0, 0.015) 1px, transparent 1px),
            radial-gradient(circle at 50% 80%, rgba(0, 0, 0, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '4px 4px, 5px 5px, 3px 3px',
          opacity: 0.6
        }}
      />

      {/* Header */}
      <header className="relative border-b" style={{ borderColor: 'rgba(44, 24, 16, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs transition-opacity hover:opacity-60"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#5C4A3E',
              opacity: 0.4
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-5xl mx-auto px-6 py-20">
        
        {/* Page Title */}
        <div className="text-center mb-20">
          <h1 
            className="mb-4"
            style={{
              fontFamily: 'Poppins, serif',
              fontSize: '48px',
              fontWeight: 400,
              color: '#2C1810',
              letterSpacing: '0.5px',
              lineHeight: '1.3'
            }}
          >
            Digital Wall of Devotion
          </h1>
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#5C4A3E',
              opacity: 0.7,
              fontStyle: 'italic'
            }}
          >
            Offered collectively, with devotion.
          </p>
        </div>

        {/* Sankalp Sections */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          
          {/* Section 1 — राम Sankalp */}
          <div className="text-center space-y-6 flex flex-col justify-start">
            {/* Mantra */}
            <div 
              className="flex items-center justify-center"
              style={{
                height: '100px',
              }}
            >
              <div
                style={{
                  fontSize: '80px',
                  fontWeight: 700,
                  color: '#2C1810',
                  fontFamily: 'serif',
                  letterSpacing: '2px',
                  opacity: 0.95,
                  lineHeight: '1'
                }}
              >
                राम
              </div>
            </div>

            {/* Count */}
            <div 
              style={{
                fontSize: '48px',
                fontWeight: 300,
                color: '#2C1810',
                fontFamily: 'Poppins, serif',
                letterSpacing: '2px',
                lineHeight: '1.2',
                opacity: 0.65
              }}
            >
              00,00,00,000
            </div>

            {/* Descriptor */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#5C4A3E',
                opacity: 0.65,
                letterSpacing: '0.3px'
              }}
            >
              times remembered collectively
            </p>
          </div>

          {/* Section 2 — ॐ नमः शिवाय Sankalp */}
          <div className="text-center space-y-6 flex flex-col justify-start">
            {/* Mantra */}
            <div 
              className="flex items-center justify-center"
              style={{
                height: '100px',
              }}
            >
              <div
                style={{
                  fontSize: '62px',
                  fontWeight: 700,
                  color: '#2C1810',
                  fontFamily: 'serif',
                  letterSpacing: '2px',
                  opacity: 0.95,
                  lineHeight: '1'
                }}
              >
                ॐ नमः शिवाय
              </div>
            </div>

            {/* Count */}
            <div 
              style={{
                fontSize: '48px',
                fontWeight: 300,
                color: '#2C1810',
                fontFamily: 'Poppins, serif',
                letterSpacing: '2px',
                lineHeight: '1.2',
                opacity: 0.65
              }}
            >
              00,00,00,000
            </div>

            {/* Descriptor */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#5C4A3E',
                opacity: 0.65,
                letterSpacing: '0.3px'
              }}
            >
              times remembered collectively
            </p>
          </div>

        </div>

        {/* Footer Message */}
        <div 
          className="max-w-2xl mx-auto text-center space-y-4 pt-12 border-t"
          style={{ borderColor: 'rgba(44, 24, 16, 0.1)' }}
        >
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#2C1810',
              lineHeight: '1.8',
              opacity: 0.75
            }}
          >
            These offerings come from many individuals,<br />
            each practicing in their own time and way.
          </p>
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#2C1810',
              lineHeight: '1.8',
              opacity: 0.75,
              fontStyle: 'italic'
            }}
          >
            No names. No comparison. Only remembrance.
          </p>

          {/* Optional subtle note */}
          <p 
            className="pt-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#5C4A3E',
              opacity: 0.5,
              letterSpacing: '0.3px'
            }}
          >
            Numbers update quietly as practice continues.
          </p>
        </div>

      </main>

      {/* Footer Spacer */}
      <div className="h-24" />
    </div>
  );
}