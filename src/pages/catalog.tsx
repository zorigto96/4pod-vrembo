/* eslint-disable @typescript-eslint/no-unsafe-call */
// app/catalog/page.tsx

import { FC } from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import Link from "next/link";

const CatalogPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: products, isLoading, isError } = api.product.getAll.useQuery();

  if (isLoading) {
    return <div className="py-16 text-center">Загрузка...</div>;
  }

  if (isError) {
    return (
      <div className="py-16 text-center text-red-500">
        Ошибка загрузки продуктов
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Gerat Logo" width={50} height={50} />
            <span className="text-xl font-bold text-blue-600">
              Gerat Autoparts
            </span>
          </Link>
          {/* Меню навигации */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="font-bold hover:text-blue-600">
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

      {/* Секция каталога товаров */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Каталог товаров
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* {products?.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-lg font-bold">Цена: {product.price.toLocaleString()} руб.</p>
                  <Link
                    href={`/catalog/${product.id}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Gerat Autoparts</p>
          <p>ул. Автомоторная, д.1/3 стр. 2, 125438 Москва, Россия</p>
          <p>Телефон: +7 (981) 933-54-05 | Email: info@gerat-parts.ru</p>
        </div>
      </footer>
    </main>
  );
};

export default CatalogPage;
