import React from 'react';
import Lottie from 'react-lottie';
import noteData from '../assets/lotties/ufo.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  renderSettings: {
    preserveAspectRatio: 'xMidyMid slice'
  }
};

export function NotFound() {
  return (
    <React.Fragment>
      <Lottie options={{ animationData: noteData, ...defaultOptions }} />
    </React.Fragment>
  );
}
