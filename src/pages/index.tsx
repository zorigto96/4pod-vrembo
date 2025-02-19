import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage: FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Шапка сайта */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              className="duration-500 hover:rotate-180"
              src="/images/logo.png"
              alt="Gerat Logo"
              width={50}
              height={50}
            />
            <span className="text-2xl font-bold">Gerat Autoparts</span>
          </Link>
          {/* Меню навигации */}
          <nav>
            <ul className="flex space-x-4 text-lg">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-blue-600">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-blue-600">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Баннер */}
      {/* Баннер */}
      {/* Баннер с мягким градиентом */}
      {/* Баннер с тремя фотографиями */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Качественные тормозные системы для вашего автомобиля
          </h1>
          <p className="mb-8 text-lg text-gray-400">
            Компания Gerat Autoparts работает на рынке с 2012 года, предлагая
            высококачественные автозапчасти напрямую от производителей .
          </p>

          {/* Секция с изображениями */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Изображение 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/product1.jpg"
                alt="Тормозной диск F023W"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
                <p className="text-sm font-bold">Тормозной диск F023W</p>
              </div>
            </div>

            {/* Изображение 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/product2.jpg"
                alt="Тормозные колодки F166N"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
                <p className="text-sm font-bold">Тормозные колодки F166N</p>
              </div>
            </div>

            {/* Изображение 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/product3.jpg"
                alt="Коллодки стояночного тормоза P-200"
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
                <p className="text-sm font-bold">
                  Коллодки стояночного тормоза P-200
                </p>
              </div>
            </div>
          </div>

          {/* Кнопка */}
          <Link
            href="/catalog"
            className="mt-8 inline-block rounded-full bg-gray-500 px-6 py-3 font-bold text-white shadow transition hover:bg-gray-400"
          >
            Перейти в каталог
          </Link>
        </div>
      </section>

      {/* Секция о компании */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">О компании</h2>
          <p className="text-center text-lg leading-relaxed">
            Компания Gerat размещает прямые заказы на производство своей
            продукции на лучших заводах-изготовителях, соответствующих всем
            международным стандартам качества{" "}
            <button className="citation-flag" data-index="3"></button>.
          </p>
        </div>
      </section>

      {/* Каталог товаров */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Популярные товары
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Товар 1 */}
            <div className="overflow-hidden rounded-lg border shadow-md">
              <Image
                src="/product1.jpg"
                alt="Тормозной диск DSK-F023W"
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">
                  Тормозной диск DSK-F023W
                </h3>
                <p className="text-gray-600">
                  Передний тормозной диск для легковых автомобилей.
                </p>
                <p className="mt-2 text-lg font-bold">Цена: 3500 руб.</p>
              </div>
            </div>
            {/* Товар 2 */}
            <div className="overflow-hidden rounded-lg border shadow-md">
              <Image
                src="/product2.jpg"
                alt="Тормозные колодки BP-F166N"
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">
                  Тормозные колодки BP-F166N
                </h3>
                <p className="text-gray-600">
                  Высококачественные тормозные колодки для Renault Duster.
                </p>
                <p className="mt-2 text-lg font-bold">Цена: 1150 руб.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Gerat Autoparts</p>
          <p>ул. Автомоторная, д.1/3 стр. 2, 125438 Москва, Россия</p>
          <p>Телефон: +7 (981) 933-54-05 | Email: info@gerat-parts.ru</p>{" "}
          <button className="citation-flag" data-index="7"></button>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
