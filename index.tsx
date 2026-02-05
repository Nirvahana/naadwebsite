import { useState, useEffect } from 'react';
import { LandingPage } from './LandingPage';
import { PrivacyPolicy } from './PrivacyPolicy';
import { BetaNotice } from './BetaNotice';

type Page = 'landing' | 'privacy' | 'beta';

export default function Website() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'beta') {
    return <BetaNotice onBack={() => setCurrentPage('landing')} />;
  }

  return <LandingPage onNavigate={setCurrentPage} />;
}