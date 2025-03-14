import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Logo & Mô tả */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">MovieZone</h2>
            <p className="mt-2 text-sm">
              Kho phim không giới hạn – Cập nhật nhanh nhất!
            </p>
          </div>

          {/* Menu Footer */}
          <div className="flex gap-10">
            <div>
              <h3 className="text-lg font-semibold text-white">Danh mục</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500">Phim Mới</a></li>
                <li><a href="#" className="hover:text-red-500">Phim Bộ</a></li>
                <li><a href="#" className="hover:text-red-500">Phim Lẻ</a></li>
                <li><a href="#" className="hover:text-red-500">Thể Loại</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Hỗ trợ</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500">FAQ</a></li>
                <li><a href="#" className="hover:text-red-500">Liên hệ</a></li>
                <li><a href="#" className="hover:text-red-500">Điều khoản</a></li>
                <li><a href="#" className="hover:text-red-500">Chính sách bảo mật</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-red-500"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-red-500"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-red-500"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-red-500"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © 2025 MovieZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
