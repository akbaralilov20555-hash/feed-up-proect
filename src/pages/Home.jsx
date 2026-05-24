import React, { useEffect, useState } from "react";

// ================= CATEGORIES =================
const categories = [
  "Yangi mahsulotlar",
  "Kombo",
  "Lavash",
  "Burger",
  "Sendvich",
  "Donar",
  "Salatlar",
  "Sous",
  "Mafin",
  "Kofe",
];

// ================= DATA =================
const data = {
  Kombo: [
    {
      title: "Burger Combo",
      price: 45000,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200",
    },
    {
      title: "Lavash Combo",
      price: 42000,
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1200",
    },
    {
      title: "Donar Combo",
      price: 48000,
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200",
    },
    {
      title: "Family Combo",
      price: 75000,
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200",
    },
  ],

  Lavash: [
    {
      title: "Tovuqli Lavash",
      price: 32000,
      img: "https://avatars.mds.yandex.net/get-altay/19519244/2a0000019ce270acc3d2096c397d1c0b58e5/L_height",
    },
    {
      title: "Go'sht Lavash",
      price: 38000,
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1200",
    },
    {
      title: "Pishloqli Lavash",
      price: 34000,
      img: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=1200",
    },
    {
      title: "Spicy Lavash",
      price: 36000,
      img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=1200",
    },
  ],

  Burger: [
    {
      title: "Cheese Burger",
      price: 28000,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200",
    },
    {
      title: "Double Burger",
      price: 35000,
      img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=1200",
    },
    {
      title: "Chicken Burger",
      price: 30000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW69eM7gt80pjlSh30GFTGNnfh9hy8zyxViA&s",
    },
    {
      title: "Big Burger",
      price: 42000,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200",
    },
  ],

  Sendvich: [
    {
      title: "Chicken Sandwich",
      price: 25000,
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1200",
    },
    {
      title: "Club Sandwich",
      price: 28000,
      img: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=1200",
    },
    {
      title: "Beef Sandwich",
      price: 30000,
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200",
    },
    {
      title: "Cheese Sandwich",
      price: 22000,
      img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1200",
    },
  ],

  Donar: [
    {
      title: "Chicken Donar",
      price: 32000,
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200",
    },
    {
      title: "Beef Donar",
      price: 38000,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200",
    },
    {
      title: "Spicy Donar",
      price: 36000,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    },
    {
      title: "Mini Donar",
      price: 28000,
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200",
    },
  ],

  Salatlar: [
    {
      title: "Caesar Salad",
      price: 20000,
      img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=1200",
    },
    {
      title: "Greek Salad",
      price: 18000,
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200",
    },
    {
      title: "Chicken Salad",
      price: 22000,
      img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1200",
    },
    {
      title: "Fresh Salad",
      price: 19000,
      img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1200",
    },
  ],

  Sous: [
    {
      title: "Cheese Sauce",
      price: 7000,
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200",
    },
    {
      title: "BBQ Sauce",
      price: 7000,
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200",
    },
    {
      title: "Ketchup",
      price: 5000,
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200",
    },
    {
      title: "Spicy Sauce",
      price: 6000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TcfVIrU4fys8aOfz4f_XX1xTJ43V-d9GbA&s",
    },
  ],

  Mafin: [
    {
      title: "Chocolate Muffin",
      price: 14000,
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200",
    },
    {
      title: "Vanilla Muffin",
      price: 13000,
      img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=1200",
    },
    {
      title: "Blueberry Muffin",
      price: 15000,
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200",
    },
    {
      title: "Mini Muffin",
      price: 11000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBj2iFBZTPE-bLU4Qan-8_qvWGhT4f_bMqw&s",
    },
  ],

  Kofe: [
    {
      title: "Cappuccino",
      price: 16000,
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
    },
    {
      title: "Latte",
      price: 17000,
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
    },
    {
      title: "Espresso",
      price: 12000,
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200",
    },
    {
      title: "Americano",
      price: 14000,
      img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200",
    },
  ],
};

// ================= HERO =================
const heroSlides = [
  {
    img: "https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fsliders%2F2026%2F04%2F03%2F1775215681539059934.jpg&w=1920&q=75",
  },
  {
    img: "https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fsliders%2F2026%2F04%2F03%2F1775215487871377473.jpg&w=1920&q=75",
  },
  {
    img: "https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fsliders%2F2026%2F05%2F07%2F1778146002696657062.jpg&w=1920&q=75",
  },
];

// ================= TITLE =================
function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-gray-200"></div>

      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>

      <div className="flex-1 h-px bg-gray-200"></div>
    </div>
  );
}

// ================= CARD =================
function Card({ item, liked, onLike, onAdd }) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 relative group border border-gray-100">
      {/* BADGE */}
      <div className="absolute top-4 left-4 bg-[#E53935] text-white text-[11px] px-3 py-1 rounded-full font-semibold z-10">
        Yangilik
      </div>

      {/* IMAGE */}
      <div className="overflow-hidden bg-[#F7F7F7]">
        <img
          src={item.img}
          className="h-[210px] md:h-[250px] w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-[15px] text-gray-800">{item.title}</h3>

          <button onClick={onLike} className="text-xl">
            {liked ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[#E53935] font-extrabold text-lg">
            {item.price.toLocaleString()} so'm
          </span>

          <button
            onClick={onAdd}
            className="bg-[#E53935] text-white w-10 h-10 rounded-full text-xl hover:scale-110 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

// ================= APP =================
export default function Home() {
  const [active, setActive] = useState("Yangi mahsulotlar");
  const [slide, setSlide] = useState(0);
  const [liked, setLiked] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((p) => (p + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(t);
  }, []);

  const groupedProducts = Object.entries(data);

  const products = active === "Yangi mahsulotlar" ? [] : data[active] || [];

  const addToCart = (item) => {
    setCart((p) => [...p, item]);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <div className="w-full px-4 md:px-8 mt-4">
        <div className="overflow-hidden rounded-[32px]">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
          >
            {heroSlides.map((s, i) => (
              <div key={i} className="min-w-full relative">
                <img
                  src={s.img}
                  className="h-[240px] md:h-[560px] w-full rounded-[32px] object-cover"
                />

                <div className="absolute bottom-8 left-8 text-white text-3xl md:text-6xl font-black leading-tight">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="flex flex-wrap justify-center gap-3 py-8 px-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-3 rounded-2xl text-sm font-semibold shadow-sm transition-all duration-300 ${
              active === c
                ? "bg-[#E53935] text-white shadow-lg scale-105"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {active === "Yangi mahsulotlar" ? (
          groupedProducts.map(([category, items]) => (
            <div key={category}>
              <SectionTitle title={category} />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {items.slice(0, 4).map((item, i) => (
                  <Card
                    key={i}
                    item={item}
                    liked={liked[item.title]}
                    onLike={() =>
                      setLiked((p) => ({
                        ...p,
                        [item.title]: !p[item.title],
                      }))
                    }
                    onAdd={() => addToCart(item)}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((item, i) => (
              <Card
                key={i}
                item={item}
                liked={liked[item.title]}
                onLike={() =>
                  setLiked((p) => ({
                    ...p,
                    [item.title]: !p[item.title],
                  }))
                }
                onAdd={() => addToCart(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
