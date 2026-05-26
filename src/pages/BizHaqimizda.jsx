import React from "react";
export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">

      Background
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1600')",
        }}
      />

      {/* Dark overlay
      <div className="absolute inset-0 bg-black/60" /> */}

      Content
      <div className="relative z-10 max-w-5xl px-6">

        <h1 className="text-5xl font-bold text-center mb-10">
          Biz haqimizda
        </h1>.
        <div>
          <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fpages%2F2025%2F06%2F18%2F1750258595660851782.png&w=1080&q=75" alt="" />
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">

          <p className="mb-5 leading-7">
            Feed Up — O‘zbekistondagi eng yirik fast-food tarmoqlaridan biri.
          </p>

          <p className="mb-5 leading-7">
            Hozirda filiallarimiz soni 50 taga yetdi. 1000+ xodim mijozlarga
            xizmat qilmoqda.
          </p>

          <p className="mb-5 leading-7">
            2010-yilda asos solingan, 2016-yilda rebrending qilingan.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            Bugungi kunda Feed Up:
          </h2>

          <ul className="space-y-3 text-white/90">
            <li>🍔 Haqiqiy ta’m — burger, donar, lavash</li>
            <li>⭐ Yuqori sifat — standart mahsulotlar</li>
            <li>📍 Xalqqa yaqinlik — keng filiallar tarmog‘i</li>
            <li>🚀 Tezkor yetkazish — issiq holda</li>
          </ul>

          <div className="mt-8 p-5 bg-red-500/80 rounded-xl text-center font-semibold">
            Feed Up — milliy fast-food brendi
          </div>

        </div>
      </div>

    </section>
  );
}