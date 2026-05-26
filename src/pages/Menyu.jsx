import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const categories = [
  "Yangi mahsulotlar",
  "Kombo",
  "Hot dog",
  "Burgerlar",
  "Lavashlar",
  "Ichimliklar",
];

const data = {
  'Yangi mahsulotlar': [
    {
      id: 1,
      name: 'Donarchi',
      price: 45000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216347561680440.webp&w=384&q=75',
    },
    {
      id: 2,
      name: 'Juftlik kombo',
      price: 129000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F07%2F1765112131105419386.webp&w=640&q=75',
    },
    {
      id: 3,
      name: 'Piramida Kombo',
      price: 48000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216357483874087.webp&w=640&q=85',
    },
    {
      id: 4,
      name: 'Kokand Kombo',
      price: 47000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507646210630396.webp&w=640&q=85',
    },
    {
      id: 5,
      name: 'Kichik Kombo',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216357483874087.webp&w=640&q=85',
    },
    {
      id: 6,
      name: 'Baquvvat kombo',
      price: 103000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F07%2F1765112087910468427.webp&w=640&q=75',
    },
  ],
  Kombo: [
    {
      id: 7,
      name: 'Kichik Kombo',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216357483874087.webp&w=640&q=85',
    },
    {
      id: 8,
      name: 'Baquvvat kombo',
      price: 103000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F07%2F1765112087910468427.webp&w=640&q=75',
    },
    {
      id: 9,
      name: 'Kamtar kombo',
      price: 37000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F07%2F1765112140654488328.webp&w=640&q=75',
    },
    {
      id: 10,
      name: 'Katta Kombo',
      price: 55000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507646210630396.webp&w=640&q=85',
    },
    {
      id: 11,
      name: 'Oilaviy Kombo',
      price: 75000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216347561680440.webp&w=384&q=75',
    },
    {
      id: 12,
      name: 'Xorazmcha kombo',
      price: 48000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F01%2F1774993210901357460.webp&w=640&q=75',
    },
    {
      id: 13,
      name: 'Tabi nozik kombo',
      price: 58000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507649790807090.webp&w=640&q=75',
    },
    {
      id: 14,
      name: 'Aylanay kombo',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F07%2F1765112070446958821.webp&w=640&q=75',
    },
    {
      id: 15,
      name: 'Kichik kombo',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216357483874087.webp&w=640&q=85',
    },
    {
      id: 16,
      name: 'Katta kombo',
      price: 55000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507646210630396.webp&w=640&q=85',
    },
    {
      id: 17,
      name: 'Oilaviy Kombo',
      price: 75000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216347561680440.webp&w=384&q=75',
    },
    {
      id: 18,
      name: 'Xorazmcha kombo',
      price: 48000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F01%2F1774993210901357460.webp&w=640&q=75',
    },
    {
      id: 19,
      name: 'Tabi nozik kombo',
      price: 58000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507649790807090.webp&w=640&q=75',
    },
    {
      id: 20,
      name: 'Aylanay kombo',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F07%2F1765112070446958821.webp&w=640&q=75',
    },
    {
      id: 19,
      name: 'Kichik kombo',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216357483874087.webp&w=640&q=85',
    },
    {
      id: 20,
      name: 'Katta kombo',
      price: 55000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507646210630396.webp&w=640&q=85',
    },
  ],
  'Hot dog': [
    {
      id: 21,
      name: 'Klassik Hot Dog',
      price: 25000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573343592220089.jpg&w=640&q=75',
    },
    {
      id: 22,
      name: 'Double Hot Dog',
      price: 35000,
      img: 'https://thumbs.dreamstime.com/b/double-hot-dog-ketchup-mustard-diced-onions-isolated-transparent-background-perfect-street-food-promotions-333792874.jpg',
    },
    {
      id: 23,
      name: 'Cheese Hot Dog',
      price: 30000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573367387117951.jpg&w=640&q=75',
    },
    {
      id: 24,
      name: 'Bacon Hot Dog',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573381182015813.jpg&w=640&q=75',
    },
    {
      id: 25,
      name: 'Chili Hot Dog',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573404976903675.jpg&w=640&q=75',
    },
    {id: 26,
      name: 'Veggie Hot Dog',
      price: 30000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573428771801490.jpg&w=640&q=75',
    },
    {
      id: 27,
      name: 'BBQ Hot Dog',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573452566699352.jpg&w=640&q=75',
    },
    {
      id: 28,
      name: 'Supreme Hot Dog',
      price: 40000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573476361597208.jpg&w=640&q=75',
    },
  ],
  Burgerlar: [
    {
      id: 29,
      name: 'XL BBQ burger',
      price: 40000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F21%2F1776769851225875159.webp&w=640&q=75',
    },
    {
      id: 30,
      name: 'Pishloqli chikinizger',
      price: 39000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507631717315935.webp&w=640&q=85',
    },
    {
      id: 31,
      name: 'Prince Double chizburger',
      price: 62000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F21%2F1776769832919581919.webp&w=640&q=75',
    },
    {
      id: 32,
      name: 'Pishloqli chikinburger',
      price: 38000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507632094442490.webp&w=640&q=85',
    },
    {
      id: 33,
      name: 'Bbq chizburger mini',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F08%2F04%2F1754300961779778213.webp&w=640&q=75',
    },
    {
      id: 34,
      name: 'Chikenzinger',
      price: 36000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507631098969649.webp&w=640&q=75',
    },
    {
      id: 35,
      name: 'Prince burger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 36,
      name: 'Prince chizburger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 37,
      name: 'Prince double burger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 38,
      name: 'Prince double chizburger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 26,
      name: 'Veggie Hot Dog',
      price: 30000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573428771801490.jpg&w=640&q=75',
    },
    {
      id: 27,
      name: 'BBQ Hot Dog',
      price: 35000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573452566699352.jpg&w=640&q=75',
    },
    {
      id: 28,
      name: 'Supreme Hot Dog',
      price: 40000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752573476361597208.jpg&w=640&q=75',
    },
  ],
  Burgerlar: [
    {
      id: 29,
      name: 'XL BBQ burger',
      price: 40000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F21%2F1776769851225875159.webp&w=640&q=75',
    },
    {
      id: 30,
      name: 'Pishloqli chikinizger',
      price: 39000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507631717315935.webp&w=640&q=85',
    },
    {
      id: 31,
      name: 'Prince Double chizburger',
      price: 62000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F21%2F1776769832919581919.webp&w=640&q=75',
    },
    {
      id: 32,
      name: 'Pishloqli chikinburger',
      price: 38000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507632094442490.webp&w=640&q=85',
    },
    {
      id: 33,
      name: 'Bbq chizburger mini',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F08%2F04%2F1754300961779778213.webp&w=640&q=75',
    },
    {
      id: 34,
      name: 'Chikenzinger',
      price: 36000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F14%2F1752507631098969649.webp&w=640&q=75',
    },
    {
      id: 35,
      name: 'Prince burger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 36,
      name: 'Prince chizburger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 37,
      name: 'Prince double burger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 38,
      name: 'Prince double chizburger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 39,
      name: 'Prince triple chizburger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
     {
      id: 40,
      name: 'Prince triple burger',
       price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
},
{
  id: 41,
  name: 'Prince triple chizburger',
  price: 43000,
  img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
},
    {
      id: 42,
      name: 'Prince triple burger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 43,
      name: 'Prince triple chizburger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
    {
      id: 44,
      name: 'Prince triple burger',
      price: 43000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F03%2F19%2F1773910430818425699.webp&w=640&q=75',
    },
  ],
  Lavashlar: [
    {
      id: 45,
      name: 'Lavash (goshtli)',
      price: 45000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571911832937647.jpg&w=640&q=75',
    },
    {
      id: 46,
      name: 'Lavash (tovuqli)',
      price: 39000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571931849681182.jpg&w=640&q=75',
    },
    {
      id: 47,
      name: 'Lavash mini',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571951857748904.jpg&w=640&q=75',
    },
    {
      id: 48,
      name: 'Mini lavash (tovuqli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=75',
    },
    {
      id: 49,
      name: 'Pishloqli lavash tovuqli',
      price: 42000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752572143994050975.jpg&w=640&q=75',
    },
    {
      id: 50,
      name: 'Pishloqli lavash goshtli',
      price: 48000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752572038322357701.jpg&w=640&q=75',
    },
    {
      id: 51,
      name: 'Mini lavash',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571951857748904.jpg&w=640&q=85',
    },
    {
      id: 52,
      name: 'Mini lavash (goshtli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 53,
      name: 'Mini lavash (pishloqli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 54,
      name: 'Mini lavash (pishloqli tovuqli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 55,
      name: 'Mini lavash (pishloqli goshtli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 56,
      name: 'Mini lavash (pishloqli tovuqli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 57,
      name: 'Mini lavash (pishloqli goshtli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 58,
      name: 'Mini lavash (pishloqli tovuqli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 59,
      name: 'Mini lavash (pishloqli goshtli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 60,
      name: 'Mini lavash (pishloqli tovuqli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 61,
      name: 'Mini lavash (pishloqli goshtli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
    {
      id: 62,
      name: 'Mini lavash (pishloqli tovuqli)',
      price: 29000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752571989417110710.jpg&w=640&q=85',
    },
  ],
  Ichimliklar: [
    {
      id: 63,
      name: 'Pepsi 500ml',
      price: 12000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F08%2F1775646980227165415.webp&w=640&q=75',
    },
    {
      id: 64,
      name: 'Mirinda 500ml',
      price: 15000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F15%2F1765793890583858501.webp&w=640&q=75',
    },
    {
      id: 65,
      name: 'Aysti 500ml',
      price: 24000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575620105413243.jpg&w=640&q=75',
    },
    {
      id: 66,
      name: '7up 500ml',
      price: 12000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F15%2F1765793695142922269.webp&w=640&q=85',
    },
    {
      id: 67,
      name: 'Limanad qulupnay 500ml',
      price: 19000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F12%2F15%2F1765793695142922269.webp&w=640&q=85',
    },
    {
      id: 68,
      name: 'Limanad marakuya 500ml',
      price: 19000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575644878292255.jpg&w=640&q=75',
    },
    {
      id: 69,
      name: 'Limanad maxito 500ml',
      price: 19000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575872117032633.jpg&w=640&q=75',
    },
    {
      id: 70,
      name: 'Choy (yashil)',
      price: 5000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575798069628392.jpg&w=640&q=85',
    },
    {
      id: 71,
      name: 'Choy (qora)',
      price: 5000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575836850699318.jpg&w=640&q=75',
    },
    {
      id: 72,
      name: 'Limonli choy (qora)',
      price: 7000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575852633793289.jpg&w=640&q=75',
    },
    {
      id: 73,
      name: 'Limonli choy (yashil)',
      price: 7000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575789627605452.jpg&w=640&q=75',
    },
    {
      id: 74,
      name: 'Choy (brusnika)',
      price: 16000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575633470960176.jpg&w=640&q=75',
    },
    {
      id: 75,
      name: 'Choy (malina)',
      price: 16000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575659233800968.jpg&w=640&q=75',
    },
    {
      id: 76,
      name: 'Choy (qulupnay)',
      price: 16000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575675006664194.jpg&w=640&q=75',
    },
    {
      id: 77,
      name: 'Choy (marakuya)',
      price: 16000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575690779517440.jpg&w=640&q=75',
    },
    {
      id: 78,
      name: 'Choy (maxito)',
      price: 16000,
      img: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2025%2F07%2F15%2F1752575716552370688.jpg&w=640&q=75',
    },
  ],
}

export default function MenuPage() {
  const [active, setActive] = useState("Yangi mahsulotlar");

  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (item) => {
    const exists = favorites.some((f) => f.id === item.id);

    if (exists) {
      setFavorites(favorites.filter((f) => f.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const toggleCart = (item) => {
    const exists = cart.some((c) => c.id === item.id);

    if (exists) {
      setCart(cart.filter((c) => c.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <div className="flex p-6 gap-6 bg-gray-50 min-h-screen">


      <div className="w-64 bg-white border rounded-2xl p-3">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActive(cat)}
            className={`p-3 rounded-xl cursor-pointer mb-2 ${
              active === cat
                ? "bg-red-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1">
        {data[active]?.map((item) => {

          const isFav = favorites.some((f) => f.id === item.id);
          const inCart = cart.some((c) => c.id === item.id);

          return (
            <div
              key={item.id}
              className="bg-white border rounded-2xl p-4"
            >
              <div className="relative">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover rounded-xl"
                />


                <button
                  onClick={() => toggleFavorite(item)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                >
                  <FaHeart
                    className={
                      isFav
                        ? "text-red-500"
                        : "text-gray-400"
                    }
                  />
                </button>

              </div>

              <h2 className="mt-3 font-semibold">
                {item.name}
              </h2>

              <p className="font-bold">
                {item.price.toLocaleString()} so'm
              </p>

              
              <button
                onClick={() => toggleCart(item)}
                className={`mt-3 w-full flex items-center justify-center gap-2 p-2 rounded-lg border transition ${
                  inCart
                    ? "bg-red-500 text-white border-red-500"
                    : "hover:bg-red-500 hover:text-white"
                }`}
              >
                <FaShoppingCart />

                {inCart
                  ? "Olib tashlash"
                  : "Qo'shish"}
              </button>

            </div>
          );
        })}
      </div>

    </div>
  );
}