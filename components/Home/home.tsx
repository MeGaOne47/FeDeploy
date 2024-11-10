import Contact from "@/components/Contact/Contact";
import About from "../About/about";

export default function HomeIndex() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-7xl mx-auto p-6">
      <section className="flex items-center justify-center mt-10 space-x-6">
        <img 
          src="https://be-deploy.vercel.app/view/bqUDplfbEyqCOCwLOdJV_65df3162143f9_cvtpl.jpg" 
          alt="Avatar của Nguyễn Tấn Hùng" 
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-2">Chào mừng đến với Portfolio của tôi!</h1>
          <p className="text-xl">Tôi là Nguyễn Tấn Hùng, một lập trình viên Web Developer.</p>
        </div>
      </section>
        <About/>
        <section id="KyNang" className="mt-10 scroll-margin-top:100">
          <h2 className="text-2xl font-semibold mb-4">Kỹ năng</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li className="p-4 bg-white rounded-lg shadow-md">ReactJS</li>
            <li className="p-4 bg-white rounded-lg shadow-md">Next.js</li>
            <li className="p-4 bg-white rounded-lg shadow-md">JavaScript/TypeScript</li>
            <li className="p-4 bg-white rounded-lg shadow-md">HTML, CSS, Tailwind CSS</li>
            <li className="p-4 bg-white rounded-lg shadow-md">Lavarel</li>
            <li className="p-4 bg-white rounded-lg shadow-md">PHP</li>
          </ul>
        </section>
        <section id="KinhNghiem" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Kinh nghiệm làm việc</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">VIET JAPAN PARTNER CO., LTD</h3>
              <p className="text-gray-600 mb-2">Thực tập sinh Web Developer</p>
              <p className="text-gray-600 mb-2">Thời gian: 04/2024 - 09/2024</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Phát triển các ứng dụng web bằng ReactJS và Next.js, Lavarel</li>
                <li>Sử dụng Ant Design, NextUI và Tailwind CSS để thiết kế giao diện người dùng</li>
                <li>Được học hỏi và sử dụng Lavarel(PHP)</li>
                <li>Được học hỏi và tìm hiểu về quản lý server khi đưa các dự án ra môi trường product, được học hỏi và sử dụng AWS.</li>
                <li>Làm việc với đội ngũ để tối ưu hiệu suất ứng dụng</li>
                <li>Tham gia vào các buổi họp và review code cùng đồng nghiệp</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">Tham gia vào các dự án của CTY</h3>
              <p className="text-gray-600 mb-2">Web Developer</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Tham gia vào dự án tối ưu hóa trang web của công ty (vjp-connect) và thực hiện xây dựng hoàn thiện các chức năng mà cty yêu cầu, công nghệ sử dụng Nextjs, typescript, Laravel(PHP). </li>
                <li>Tham gia vào dự án nước ngoài (Horoscope) (Japan), tối ưu hóa code, thực hiện chức năng thanh toán dự án, công nghệ sử dụng Laravel(PHP). </li>
                <li>Tham gia dự án nước ngoài (CMS) (Japan) , thực hiện map api và tối ưu hóa giao diện cho dự án, công nghệ sử dụng Reactjs(NextUI), typescript. </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="DuAn" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Dự án học tập</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">Ứng dụng quản lý hiến máu</h3>
              <p className="text-gray-600">Một trang web vì cộng đồng người hiến máu sử dụng công nghệ NextJs, Nestjs.</p>
              <a href="https://github.com/MeGaOne47/DonationBlood_Next13_Client_Main" className="text-blue-500 mt-4 inline-block">Xem trên GitHub FE</a>
              <br />
              <a href="https://github.com/MeGaOne47/nest-crud-app" className="text-blue-500 mt-4 inline-block">Xem trên GitHub BE</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">Ứng dụng quản lý bán hàng</h3>
              <p className="text-gray-600">Ứng dụng giúp người dùng bán và quản lý các mặt hàng sử dụng công nghệ PHP OOP.</p>
              <a href="https://github.com/nguyentanhung/todolist" className="text-blue-500 mt-4 inline-block">Xem trên GitHub</a>
            </div>
          </div>
        </section>
        <br />
        {/* <Contact /> */}
      </main>
    </div>
  )
}
