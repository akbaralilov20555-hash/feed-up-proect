import logo2 from '../assets/logo2.svg'
import img3 from '../assets/img3.svg'
import img4 from '../assets/img4.svg'
import img5 from '../assets/img5.svg'
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const categories = [
  "Комбо", "Лаваш", "Бургеры", "Хот-дог", "Сендвич", "Донар", "Пицца", "Салаты"
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-4 gap-10">

        {/* Chap: Logo + tavsif + ilovalar */}
        <div className="flex flex-col gap-4">
          {/* Logo — o'zing rasm qo'yasan */}
          <a href="/">
            <img src={logo2} alt="Feed Up" className="h-16 w-auto" />
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Feed U-p – ведущая сеть ресторанов быстрого питания в Узбекистане, которая радует жителей страны свежими и вкусными блюдами уже более 13 лет
          </p>
          {/* App store va Google Play — o'zing rasm qo'yasan */}
          <div className="flex gap-3 mt-2">
            <a href="#">
              <img src={img3} alt="App Store" className="h-10 w-auto" />
            </a>
            <a href="#">
              <img src={img4} alt="Google Play" className="h-10 w-auto" />
            </a>
          </div>
        </div>

        {/* O компании */}
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">О компании</h4>
          <ul className="flex flex-col gap-3">
            {["О нас", "Меню", "Акции", "Филиалы", "Вакансии", "Контакты"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Информации */}
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">Информации</h4>
          <ul className="flex flex-col gap-3">
            {["Доставка", "Оплата", "Политика конфиденциальности", "Публичная оферта"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Мы в соц сетях */}
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">Мы в соц сетях</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="tel:+998712002211" className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FiPhone size={18} />
                +998 71 200 22 11
              </a>
            </li>
            <li>
              <a href="mailto:feedup.uz@yandex.ru" className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FiMail size={18} />
                feedup.uz@yandex.ru
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaFacebook size={18} />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaInstagram size={18} />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaTelegram size={18} />
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Категории</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {categories.map((cat) => (
              <a
                key={cat}
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-400">© 2026 Feed Up. Все права защищены.</p>
          <a href="#">
            <img src={img5} alt="Zoomda" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

    </footer>
  );
}



