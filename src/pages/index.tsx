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
            <Image className="hover:rotate-180 duration-500" src="/images/logo.png" alt="Gerat Logo" width={50} height={50} />
            <span className="text-2xl font-bold">
              Gerat Autoparts
            </span>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Качественные тормозные системы для вашего автомобиля
          </h1>
          <p className="mb-8 text-lg">
            Компания Gerat Autoparts работает на рынке с 2012 года, предлагая
            высококачественные автозапчасти напрямую от производителей{" "}
            <button className="citation-flag" data-index="2"></button>.
          </p>
          <Link
            href="/catalog"
            className="rounded-full bg-white px-6 py-3 font-bold text-blue-600 shadow transition hover:bg-blue-100"
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
