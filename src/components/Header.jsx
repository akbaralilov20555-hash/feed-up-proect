import logo from '../assets/logo.svg'
import { useState, useEffect, useRef } from "react";
import {
  FiSearch, FiShoppingCart, FiHeart, FiGlobe,
  FiUser, FiSun, FiMoon, FiX, FiCheck
} from "react-icons/fi";
import { Link } from 'react-router-dom';

const categories = [
  "Комбо", "Лаваш", "Бургеры", "Хот-дог",
  "Сендвич", "Донар", "Пицца", "Салаты", "Соус",
  "Мафины", "Кофе", "Гарниры"
];

// Savatcha uchun global state (Context o'rniga oddiy prop drilling)
// Agar siz Context yoki Redux ishlatsangiz, cartItems ni u yerdan oling
export default function Header({ cartItems = [], onAddToCart }) {
  const [dark, setDark] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [favPage, setFavPage] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [phone, setPhone] = useState("+998");
  const [phoneSuccess, setPhoneSuccess] = useState(false);

  const searchRef = useRef(null);

  // Dark mode toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Search modal ochilganda inputga focus
  useEffect(() => {
    if (searchModal && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [searchModal]);

  const filteredCategories = searchQuery.trim()
    ? categories.filter((c) =>
      c.toLowerCase().startsWith(searchQuery.toLowerCase())
    )
    : categories;

  const handlePhoneSubmit = () => {
    if (phone.length >= 13) {
      setPhoneSuccess(true);
      setTimeout(() => {
        setLoginModal(false);
        setPhoneSuccess(false);
        setPhone("+998");
      }, 2500);
    }
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="flex items-center justify-between px-6 h-[60px] bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 w-full relative z-50">
        {/* Chap: Logo + Nav */}
        <div className="flex items-center">
          <a href="/home">
            {/* O'zing img qo'yasan */}
            <img src={logo} alt="Feed Up" className="h-10" />
          </a>
          <nav className="flex items-center gap-6 ml-8">
            <Link to="/bizhaqimizda" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              О нас
            </Link>
            <Link to="/menyu" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Меню
            </Link>
            <Link to="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Акции
            </Link>
            <Link to="/ishorinlari" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Вакансии
            </Link>
            <Link to="/filiallar" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Филиалы
            </Link>
            <Link to="/aloqa" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Контакты
            </Link>
          </nav>
        </div>

        {/* O'ng: Tugmalar */}
        <div className="flex items-center gap-4">
          {/* Тип заказа */}
          <button
            onClick={() => setOrderModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
          >
            Тип заказа
          </button>

          {/* Telefon */}
          <a href="tel:+998712002211" className="flex flex-col items-end">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              +998 71 200 22 11
            </span>
            <span className="text-[11px] text-gray-400">
              Ежедневно с 09:00 до 02:45
            </span>
          </a>

          {/* Ikonkalar */}
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
            {/* Search */}
            <button onClick={() => setSearchModal(true)} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <FiSearch size={20} />
            </button>

            {/* Cart */}
            <button onClick={() => setCartModal(true)} className="relative hover:text-gray-900 dark:hover:text-white transition-colors">
              <FiShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Favorites */}
            <button onClick={() => setFavPage(true)} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <FiHeart size={20} />
            </button>

            {/* Til (faqat icon, ishlamaydi) */}
            <button className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
              <FiGlobe size={20} />
            </button>

            {/* Login */}
            <button onClick={() => setLoginModal(true)} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <FiUser size={20} />
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ===== MODAL 1: Тип заказа ===== */}
      {orderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[420px] p-8 relative">
            <button
              onClick={() => setOrderModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FiX size={22} />
            </button>
            <h2 className="text-center text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Тип заказа
            </h2>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl mb-3 transition-colors">
              Доставка
            </button>
            <button className="w-full border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Самовывоз
            </button>
          </div>
        </div>
      )}

      {/* ===== MODAL 2: Qidiruv ===== */}
      {searchModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[700px] p-8 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => { setSearchModal(false); setSearchQuery(""); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FiX size={22} />
            </button>
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              У нас самое вкусное!
            </h2>
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Что вы ищите..."
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-red-400 mb-6"
            />
            <div className="flex flex-col items-center gap-1">
              {filteredCategories.length === 0 ? (
                <p className="text-gray-400 text-sm">Ничего не найдено</p>
              ) : (
                filteredCategories.map((cat, i) => (
                  <button
                    key={cat}
                    className={`text-base font-medium py-2 w-full text-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors ${i === 0 && searchQuery ? "text-red-500" : "text-gray-800 dark:text-gray-200"
                      }`}
                  >
                    {cat}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL 3: Корзина ===== */}
      {cartModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[600px] p-8 relative min-h-[300px]">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Корзина</h2>
            <button
              onClick={() => setCartModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FiX size={18} />
            </button>

            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl">🍪</span>
                </div>
                <p className="font-bold text-gray-800 dark:text-white text-center">
                  Ваша корзина пока пуста
                </p>
                <p className="text-sm text-gray-400 text-center max-w-xs">
                  Откройте для себя наши аппетитные блюда и добавьте в корзину, чтобы начать наслаждаться вкусом!
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.price.toLocaleString()} сум × {item.qty}</p>
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {(item.price * item.qty).toLocaleString()} сум
                    </p>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900 dark:text-white">Итого:</span>
                  <span className="font-bold text-red-500">
                    {cartItems.reduce((s, i) => s + i.price * i.qty, 0).toLocaleString()} сум
                  </span>
                </div>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl mt-2 transition-colors">
                  Оформить заказ
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== MODAL 4: Login ===== */}
      {loginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[500px] p-8 relative">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Вход на сайт</h2>
            <button
              onClick={() => { setLoginModal(false); setPhoneSuccess(false); setPhone("+998"); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FiX size={22} />
            </button>

            {phoneSuccess ? (
              <div className="flex items-center justify-center gap-2 py-6 text-green-600 font-semibold">
                <FiCheck size={22} />
                <span>Номер телефона принят ✓</span>
              </div>
            ) : (
              <>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 mb-4">
                  <label className="text-xs text-gray-400">Номер телефона *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full outline-none text-sm text-gray-900 dark:text-white dark:bg-transparent mt-1"
                  />
                </div>
                <button
                  onClick={handlePhoneSubmit}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Далее
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ===== MODAL 5: Избранные ===== */}
      {favPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[600px] p-8 relative min-h-[300px]">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Избранные</h2>
            <button
              onClick={() => setFavPage(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FiX size={22} />
            </button>
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl">🍪</span>
              </div>
              <p className="font-bold text-gray-800 dark:text-white text-center">
                Ваши избранные блюда пока пусты...
              </p>
              <p className="text-sm text-gray-400 text-center max-w-xs">
                Добавьте сюда ваши любимые блюда, чтобы всегда иметь быстрый доступ к ним и наслаждаться лучшими вкусами!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Dark mode uchun phoneSuccess notification */}
      {phoneSuccess && !loginModal && (
        <div className="fixed top-4 right-4 z-[100] bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-xl shadow-lg px-5 py-3 flex items-center gap-2">
          <FiCheck className="text-green-500" size={18} />
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            Номер телефона принят
          </span>
          <button onClick={() => setPhoneSuccess(false)} className="ml-2 text-gray-400 hover:text-gray-700">
            <FiX size={16} />
          </button>
        </div>
      )}
    </>
  );
}
