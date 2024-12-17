"use client"
import dynamic from 'next/dynamic';
const Video = dynamic(() => import('@/components/Video/Video'));

const VideoPages = () => {

  return (
    <div style={{ padding: '20px' }}>
      {/* <h1 style={{textAlign: 'center'}}>Hung Nguyen</h1> */}
      <Video/>
    </div>
  );
};

export default VideoPages;