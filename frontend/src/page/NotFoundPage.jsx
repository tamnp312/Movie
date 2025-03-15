import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <motion.h1
        className="text-9xl font-extrabold text-red-600"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-3xl font-bold mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! Trang bạn tìm không tồn tại.
      </motion.h2>
      <p className="text-gray-400 mt-2">
        Có thể bạn đã nhập sai địa chỉ hoặc trang đã bị xóa.
      </p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          to="/"
          className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all"
        >
          Quay về trang chủ
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-gray-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Moviezone
      </motion.div>
    </div>
  );
}

