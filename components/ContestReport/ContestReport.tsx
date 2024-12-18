import { NextPage } from "next";

const ContestReport: NextPage = () => {
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Tháp Cảnh Báo Lũ
        </h2>
        <p className="mt-2 text-lg text-gray-600">
                Thành viên: Nguyễn Tuấn Hưng 
          <br /> Thành viên: Nguyễn Thế Anh 
          <br /> Trường: Trường THCS Bình An
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/PDFView?file=1.pdf"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transform transition hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Báo cáo dự án
          </a>
          <a
            href="/PDFView?file=2.pdf"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transform transition hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Kế hoạch nghiên cứu
          </a>
          <a
            href="/PDFView?file=3.pdf"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transform transition hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Bản thuyết trình
          </a>
          <a
            href="/ImagePage"
            className="inline-block px-8 py-3 text-lg font-semibold text-gray-700 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-lg transform transition hover:scale-105 hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Hình Ảnh
          </a>
          <a
            href="/Video"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg transform transition hover:scale-105 hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 sm:w-auto w-full text-center"
          >
            Video
          </a>
        </div>

        <section className="mt-12" id="introduction">
          <h3 className="text-2xl font-semibold text-gray-900">
            Giới thiệu về dự án
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Dự án “Tháp cảnh báo lũ” được thực hiện từ tháng 10/2023 đến tháng
            11/2024, với mục tiêu nghiên cứu và lắp ráp một tháp cảnh báo lũ
            nhằm hỗ trợ cảnh báo sớm khi lũ tràn về. Sản phẩm có cấu trúc đơn
            giản, dễ tháo lắp, và sử dụng các nguyên vật liệu tái chế từ địa
            phương.
          </p>
        </section>

        <section className="mt-12" id="media">
          <h3 className="text-2xl font-semibold text-gray-900">
            Hình ảnh dự án
          </h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            <img
              src="/image.png"
              alt="Hình ảnh 1"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContestReport;
