import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Joei app for fun</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">Starting from the data, classify common charts from a functional perspective and provide guidelines for the use of specifications.</p>
          <p className="main-info" key="2">Starting from the data, classify common charts from a functional perspective and provide guidelines for the use of specifications. </p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>);
}
