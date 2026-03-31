import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ArticleEngagementTracker
 * Tracks time-on-page for article routes. Non-visual component.
 */
const ArticleEngagementTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('/article/')) return;

    const pathParts = location.pathname.split('/article/');
    if (pathParts.length < 2 || !pathParts[1]) return;

    const startTime = Date.now();

    return () => {
      const timeSpentSeconds = Math.floor((Date.now() - startTime) / 1000);
      // Engagement data available for future analytics integration
      void timeSpentSeconds;
    };
  }, [location.pathname]);

  return null;
};

export default ArticleEngagementTracker;