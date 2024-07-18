import React from 'react';
// component import
import VideoPlayer from '@/components/dashboard/video-player';
// mantine import
import { Card } from '@mantine/core';

const LiveCCTVPage = () => {
  return (
    <div>
      <Card
        radius='md'
        shadow='sm'
        withBorder
        p='md'
      >
        <VideoPlayer />
      </Card>
    </div>
  );
};

export default LiveCCTVPage;
