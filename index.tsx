import { useState, useEffect } from 'react';
import { LandingPage } from './LandingPage';
import { PrivacyPolicy } from './PrivacyPolicy';
import { BetaNotice } from './BetaNotice';
import { DigitalWall } from './DigitalWall';

type Page = 'landing' | 'privacy' | 'beta' | 'digital-wall';

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

  if (currentPage === 'digital-wall') {
    return <DigitalWall onBack={() => setCurrentPage('landing')} />;
  }

  return <LandingPage onNavigate={setCurrentPage} />;
}