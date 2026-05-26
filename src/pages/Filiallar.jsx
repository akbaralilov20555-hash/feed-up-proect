import { useState } from "react";
import { FiMapPin, FiChevronRight, FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
const branches = [
  { id: 1, name: "01 Алгоритм - Feed up", address: "улица Ковунчи, 37/1", lat: 41.29960, lng: 69.23980 },
  { id: 2, name: "03 Сам.дарваза - Feed up", address: "улица Коратош, 5А, Ташкент", lat: 41.29560, lng: 69.22800 },
  { id: 3, name: "04 Кукча - Feed up", address: "улица Кукча Дарвоза, 10В, Ташкент", lat: 41.31270, lng: 69.25510 },
  { id: 4, name: "05 Компас - Fedd up", address: "улица Катта халка йули, 17, Ташкент", lat: 41.27820, lng: 69.31200 },
  { id: 5, name: "06 Олмазор - Feed up", address: "Qoraqamish 1/1-kvartal, 23а, Ташкент", lat: 41.32100, lng: 69.21980 },
  { id: 6, name: "07 Ц1 - Feed up", address: "улица Узбекистон Овози, 35/1, Ташкент", lat: 41.30020, lng: 69.27180 },
  { id: 7, name: "09 Корасу - Feed up", address: "улица Шукура Бурханова, Ташкент", lat: 41.33230, lng: 69.30020 },
  { id: 8, name: "13 Рисовый - Feed up", address: "Ташкент", lat: 41.29190, lng: 69.30550 },
  { id: 9, name: "14 Feed up", address: "Ташкент", lat: 41.28280, lng: 69.27750 },
  { id: 10, name: "15 Мед. - Feed up", address: "Ташкент", lat: 41.30430, lng: 69.27640 },
  { id: 11, name: "17 Feed up", address: "Ташкент", lat: 41.33100, lng: 69.26220 },
  { id: 12, name: "20 Спутник - Feed up", address: "Курганtepa, 14A, Сергели, Ташкент", lat: 41.26800, lng: 69.26350 },
  { id: 13, name: "21 Кибрай - Feed up", address: "Кибрай тумани, Ташкент", lat: 41.38060, lng: 69.37980 },
  { id: 14, name: "22 Генерал У. - Feed up", address: "Ташкент", lat: 41.30880, lng: 69.25700 },
  { id: 15, name: "23 Ярмарка - Feed up", address: "Ташкент", lat: 41.27130, lng: 69.27150 },
  { id: 16, name: "26 Чимган - Feed up", address: "Ташкент", lat: 41.33790, lng: 69.34100 },
  { id: 17, name: "28 Фарходский - Feed up", address: "Учтепа 12-квартал, 21, Ташкент", lat: 41.29900, lng: 69.26560 },
  { id: 18, name: "30 Feed up", address: "Ташкент", lat: 41.30010, lng: 69.26000 },
  { id: 19, name: "31 Учтепа - Feed up", address: "Ташкент", lat: 41.30130, lng: 69.25880 },
  { id: 20, name: "33 Ташкент сити - Feed up", address: "Ташкент Сити, Ташкент", lat: 41.30530, lng: 69.27920 },
  { id: 21, name: "35 Гунча - Feed up", address: "Ташкент", lat: 41.30980, lng: 69.26850 },
  { id: 22, name: "38 Аппомиш - Feed up", address: "Ташкент", lat: 41.32570, lng: 69.26920 },
  { id: 23, name: "41 Feed up", address: "Bunyodkor av., 156A/1, Ташкент", lat: 41.30080, lng: 69.26320 },
  { id: 24, name: "47 Гостиница Россия - Feed up", address: "Ташкент", lat: 41.30200, lng: 69.28530 },
  { id: 25, name: "51 Сингапур - Feed up", address: "Ташкент", lat: 41.29630, lng: 69.29020 },
  { id: 26, name: "54 Хастимам - Feed up", address: "Ташкент", lat: 41.31120, lng: 69.28020 },
  { id: 27, name: "55 Юнусабад Круг - Feed up", address: "Юнусобод 6-квартал, 44/1, Ташкент", lat: 41.32860, lng: 69.28700 },
  { id: 28, name: "Drujba - Feed up", address: "Ташкент", lat: 41.30680, lng: 69.28950 },
  { id: 29, name: "Nabiyev - Feed up", address: "Ташкент", lat: 41.32250, lng: 69.28280 },
  { id: 30, name: "Сергели 3 - Feed up", address: "Uzgarish mavzesi, 1а, Ташкент", lat: 41.27580, lng: 69.25310 },
];

function buildMapUrl(branch) {
  if (!branch) {
    return "https://yandex.uz/map-widget/v1/?display-text=Feed%20Up&from=api-maps&ll=69.253651%2C41.329813&mode=search&origin=jsapi_2_1_79&pt=69.24543670370478%2C41.317401483045714~69.25542093684004%2C41.32617187396414~69.245456046627%2C41.30334075864563~69.23632233756324%2C41.30632573940281~69.2482183435859%2C41.29956087027874~69.23113009931886%2C41.31616597556825~69.24245143132816%2C41.33270181166251~69.26779045803909%2C41.29493305597768~69.21991341104503%2C41.32234432017706~69.2882516005248%2C41.31148888816031&sctx=ZAAAAAgBEAAaKAoSCY5Yi08BUFFAEXQprir7qERAEhIJxTnq6LgaqT8Rzv3V477Vmj8iBgABAgMEBSgAOABAop8GSAFqAnV6nQHNzMw9oAEAqAEAvQGZZvbjwgEWzL%2B7xHiZsuTn9gOo1on8rwOqyrb2YoICFWNoYWluX2lkOigzNDEyMDU5NDE1KYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCCjM0MTIwNTk0MTWwAgE%3D&sll=69.253651%2C41.329813&sspn=0.057507%2C0.030731&text=chain_id%3A%283412059415%29&utm_source=jsapi&z=14";
  }
  return `https://yandex.uz/map-widget/v1/?ll=${branch.lng}%2C${branch.lat}&z=17&pt=${branch.lng},${branch.lat},pm2rdm&l=map`;
}

export default function Filiallar() {
  const [selected, setSelected] = useState(null);
  const [mapKey, setMapKey] = useState(0);
  const [mapSrc, setMapSrc] = useState(buildMapUrl(null));
  const [dark, setDark] = useState(false);

  const handleSelect = (branch) => {
    setSelected(branch);
    setMapSrc(buildMapUrl(branch));
    setMapKey((k) => k + 1);
  };

  return (
    <div className={dark ? "dark bg-white dark:bg-gray-950" : ""}>
      <div className="min-h-screen container mx-auto px-4 sm:px-0 pt-5 pb-10">
        <div className="flex items-center gap-1 text-sm text-gray-400 pt-5" >
          <Link to={'/home'} className="cursor-pointer hover:underline hover:text-gray-600 dark:hover:text-gray-300 ">
            Bosh sahifa
          </Link>
          <FiChevronRight size={13} className="text-gray-300 dark:text-gray-600" />
          <span className="font-medium text-gray-700 dark:text-gray-300">Filiallar</span>
        </div>
        <h1 className="font-semibold text-pretty tracking-tight text-3xl sm:text-4xl mb-5 dark:text-white">
          Filiallar
        </h1>

        <div className="flex h-130">

          <ul className="w-133.25 shrink-0 overflow-y-auto border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950
          ">
            {branches.map((branch) => {
              const active = selected?.id === branch.id;
              return (
                <li key={branch.id} onClick={() => handleSelect(branch)} className={`py-2 px-3 mb-2 cursor-pointer rounded-lg hover:bg-secondary/10  ${active ? "border-l-blue-500 bg-blue-50 dark:bg-blue-950/40" : "border-l-transparent hover:bg-[#FCE8E9] dark:hover:bg-[#332026]"} `} >
                  <div className="flex flex-col">
                    <p className={`font-semibold mb-1 ${active ? "text-blue-700 dark:text-blue-400" : "text-gray-800 dark:text-gray-200"} `}>
                      {branch.name}
                    </p>
                    {branch.address && (
                      <p className="text-sm text-muted dark:text-white">
                        {branch.address}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 relative">
            <iframe key={mapKey} src={mapSrc} className="block border-0 w-full h-full rounded-xl" />
            {selected && (
              <div className="absolute top-3 left-3 z-10 bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-900 rounded-xl shadow-lg dark:shadow-black/40 px-4 py-3 max-w-67.5 ">
                <div className="flex items-center gap-2">
                  <FiMapPin size={14} className="text-blue-500 dark:text-blue-400 shrink-0" />
                  <p className="font-bold text-sm text-blue-700 dark:text-blue-400 leading-tight">{selected.name}</p>
                </div>
                {selected.address && (<p className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-5">{selected.address}</p>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
