"use client";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const MetaPixel = ({ pixelId }) => {
  useEffect(() => {
    // Load the Meta Pixel script
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize the Meta Pixel with your Pixel ID
    window.fbq('init', pixelId);

    // Track page view
    window.fbq('track', 'PageView');
  }, [pixelId]);

  return null;
};

MetaPixel.propTypes = {
  pixelId: PropTypes.string.isRequired,
};

export default MetaPixel;
