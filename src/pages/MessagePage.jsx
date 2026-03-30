import React from 'react';
import MainMessage from '../components/MainMessage';
import Moments from '../components/Moments';
import Closing from '../components/Closing';

export default function MessagePage() {
  return (
    <div className="message-page">
      <MainMessage />
      <Moments />
      <Closing />
    </div>
  );
}
