import React from 'react';

const Video = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Video 1 */}
      <h3>Video thử nghiệm làm thực tế ở sông đèn đã báo đến mức độ nguy hiểm.</h3>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold mb-2">Video Thử Nghiệm 1</h3>
        <video className="w-full h-auto" controls loop muted>
          <source src="/6140204523240.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Video 2 */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold mb-2">Video Thử Nghiệm 2</h3>
        <video className="w-full h-auto" controls loop muted>
          <source src="/6140211306917.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Video 3 */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold mb-2">Video Thử Nghiệm 3</h3>
        <video className="w-full h-auto" controls loop muted>
          <source src="/6140808921635.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;