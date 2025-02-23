/* eslint-disable @typescript-eslint/no-unsafe-call */
// app/catalog/page.tsx

import { type FC } from "react";
import { api } from "~/utils/api";
import Header from "~/components/header";
import Footer from "~/components/footer";

const CatalogPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isLoading, isError } = api.product.getAll.useQuery();

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
      <Header />

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
      <Footer />
    </main>
  );
};

export default CatalogPage;
