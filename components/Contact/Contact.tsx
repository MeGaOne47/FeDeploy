export default function Contact() {
    return (
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Liên hệ</h2>
          <p className="mb-4">Bạn có thể liên hệ với tôi qua các phương thức dưới đây:</p>
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="mailto:nguyentanhung9a1@gmail.com" className="text-xl hover:text-gray-400">
                Email
              </a>
            </li>
            {/* <li>
              <a href="https://www.linkedin.com/in/nguyentanhung/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
                LinkedIn
              </a>
            </li> */}
            <li>
              <a href="https://github.com/nguyentanhung" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  