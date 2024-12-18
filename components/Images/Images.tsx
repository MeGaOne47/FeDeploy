import React from 'react';

const imagesData = [
  {
    id: 1,
    src: '/h1.jpg',
    title: 'Hình ảnh tấm pin năng lượng mặt trời, có bộ nạp pin'
  },
  {
    id: 2,
    src: '/h2.jpg',
    title: 'Hình ảnh thân tháp hoàn thiện'
  },
  {
    id: 3,
    src: '/h3.jpg',
    title: ''
  },
  {
    id: 4,
    src: '/h4.jpg',
    title: ''
  },
  {
    id: 5,
    src: '/h5.jpg',
    title: ''
  },
  {
    id: 6,
    src: '/h6.jpg',
    title: 'Hình ảnh tháp đang được thử nghiệm'
  },
  {
    id: 7,
    src: '/h7.jpg',
    title: ''
  },
  {
    id: 8,
    src: '/h8.jpg',
    title: 'Hình ảnh tháp đã hoàn thiện giữa tấm pin năng lượng mặt trời và thân tháp'
  },
  // Thêm hình ảnh khác tại đây...
];

const Images = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {imagesData.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <img src={image.src} alt={image.title} className="w-full h-auto object-cover rounded-lg" />
          <h3 className="mt-2 text-center text-lg font-semibold">{image.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Images;
