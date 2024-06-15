"use client";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

function GoogleAnalytics() {
  useEffect(() => {
    // Your Google Analytics tracking code here (e.g., ReactGA.initialize, etc.)

    ReactGA.initialize('G-6MRF0NRSFB');

    // Track page views on initial render and subsequent navigation
    const trackPageView = () => {
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    };

    trackPageView();

    // Optionally, track subsequent page views using a history listener or router library
  }, []);

  return null; // No JSX needed here
}

export default GoogleAnalytics;
