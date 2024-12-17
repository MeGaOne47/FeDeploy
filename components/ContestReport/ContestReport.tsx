import { NextPage } from 'next';

const ContestReport: NextPage = () => {
  const file = '/duthibaocao.doc';  // Đảm bảo tệp PDF nằm trong thư mục 'public'

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Tháp Cảnh Báo Lũ
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Nguyễn Tuấn Hưng & Nguyễn Thế Anh - Trường THCS Bình An
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/PDFView"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Xem Báo Cáo
          </a>
          <a
            href="#media"
            className="inline-block px-6 py-3 text-lg font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Hình Ảnh
          </a>
          <a
            href="/videos/du-an.mp4"
            target="_blank"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Video
          </a>
        </div>

        <section className="mt-12" id="introduction">
          <h3 className="text-2xl font-semibold text-gray-900">Giới thiệu về dự án</h3>
          <p className="mt-4 text-lg text-gray-700">
            Dự án “Tháp cảnh báo lũ” được thực hiện từ tháng 10/2023 đến tháng 11/2024, với mục tiêu nghiên cứu và lắp ráp một tháp cảnh báo lũ nhằm hỗ trợ cảnh báo sớm khi lũ tràn về. Sản phẩm có cấu trúc đơn giản, dễ tháo lắp, và sử dụng các nguyên vật liệu tái chế từ địa phương.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ContestReport;
