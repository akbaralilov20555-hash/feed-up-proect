import React, { useState } from 'react';
// React-icons kutubxonasidan kerakli ikonkalar import qilindi
import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaTelegramPlane, FaStar } from 'react-icons/fa';

export default function Aloqa() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forma yuborildi");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12 font-sans selection:bg-red-500 selection:text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Chap tomon: Ma'lumotlar */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Biz bilan bog'lanish
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sizning savollaringiz, takliflaringiz yoki arizalaringiz bo'lsa, biz bilan bog'laning!
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Quyidagi formani to'ldiring va biz imkon qadar tezroq siz bilan bog'lanamiz!
            </p>
          </div>

          {/* Kontaktlar ro'yxati */}
          <div className="space-y-5 pt-4 text-gray-700">
            <a href="tel:+998712002211" className="flex items-center gap-4 hover:text-red-600 transition-colors group">
              <FiPhone className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="text-lg font-medium">+998 71 200 22 11</span>
            </a>
            
            <a href="mailto:feedup.uz@yandex.ru" className="flex items-center gap-4 hover:text-red-600 transition-colors group">
              <FiMail className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="text-lg font-medium">feedup.uz@yandex.ru</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-red-600 transition-colors group">
              <FaFacebookF className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="text-lg font-medium">Facebook</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-red-600 transition-colors group">
              <FiInstagram className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="text-lg font-medium">Instagram</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-red-600 transition-colors group">
              <FaTelegramPlane className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="text-lg font-medium">Telegram</span>
            </a>
          </div>
        </div>

        {/* O'ng tomon: Forma */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Ism input */}
          <div className="relative group">
            <input 
              type="text" 
              id="name"
              required
              placeholder=" "
              className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl outline-none focus:border-red-500 text-gray-900 text-base transition-all peer placeholder-shown:pt-4 placeholder-shown:pb-4"
            />
            <label 
              htmlFor="name"
              className="absolute left-4 top-2 text-xs text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500"
            >
              Ism <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Telefon raqami input */}
          <div className="relative group">
            <input 
              type="tel" 
              id="phone"
              required
              placeholder=" "
              className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl outline-none focus:border-red-500 text-gray-900 text-base transition-all peer placeholder-shown:pt-4 placeholder-shown:pb-4"
            />
            <label 
              htmlFor="phone"
              className="absolute left-4 top-2 text-xs text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500"
            >
              Telefon raqami <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Xabarnoma textarea */}
          <div className="relative group">
            <textarea 
              id="message"
              required
              placeholder="Sharhingizni yozing"
              rows={5}
              className="w-full px-4 pt-8 pb-3 border border-gray-300 rounded-xl outline-none focus:border-red-500 text-gray-900 text-base transition-all resize-none"
            />
            <label 
              htmlFor="message"
              className="absolute left-4 top-2 text-xs text-gray-400 pointer-events-none"
            >
              Xabarnoma <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Yulduzchalar (Rating) */}
          <div className="flex justify-center items-center gap-2 pt-2">
            {[...Array(5)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <button
                  type="button"
                  key={index}
                  className="transition-transform active:scale-95 outline-none"
                  onClick={() => setRating(currentRating)}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(0)}
                >
                  <FaStar 
                    className={`w-8 h-8 transition-colors duration-150 ${
                      currentRating <= (hover || rating) 
                        ? "text-yellow-400 stroke-yellow-400" 
                        : "text-gray-200 stroke-gray-300"
                    }`}
                    style={{ strokeWidth: '30px' }}
                  />
                </button>
              );
            })}
          </div>

          {/* Jo'natish tugmasi */}
          <button
            type="submit"
            className="w-full py-4 bg-[#e31e24] hover:bg-[#c6161b] text-white font-semibold rounded-xl text-lg transition-all duration-200 transform active:scale-[0.99] shadow-md hover:shadow-lg"
          >
            Jo'natish
          </button>
        </form>

      </div>
    </div>
  );
}