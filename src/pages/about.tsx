// app/about/page.tsx

import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage: FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Gerat Logo" width={50} height={50} />
            <span className="text-xl font-bold text-blue-600">Gerat Autoparts</span>
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
                <Link href="/catalog" className="hover:text-blue-600">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 font-bold">
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

      {/* Секция о компании */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">О компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая часть: Изображение */}
            <div className="relative">
              <Image
                src="/about-us.jpg"
                alt="О компании"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Правая часть: Текст */}
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-600 mb-4">
                Компания Gerat Autoparts была основана в 2012 году с целью предоставления качественных автозапчастей напрямую от проверенных производителей. Наша цель — сделать процесс покупки автозапчастей максимально удобным и прозрачным для наших клиентов.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Мы сотрудничаем с ведущими предприятиями в области производства автозапчастей, что позволяет нам предлагать лучшие цены и гарантийные обязательства. Наш опыт и знания позволяют нам предлагать комплексные решения для обслуживания и ремонта автомобилей.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                В нашем ассортименте представлены тормозные системы, колодки, диски, масла, фильтры и многое другое. Мы постоянно расширяем наш ассортимент, чтобы удовлетворять потребности наших клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Преимущество 1 */}
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Качество продукции</h3>
              <p className="text-gray-600">
                Мы сотрудничаем только с проверенными производителями, обеспечивающими высокое качество автозапчастей.
              </p>
            </div>
            {/* Преимущество 2 */}
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Комплексные решения</h3>
              <p className="text-gray-600">
                Предлагаем комплексные решения для обслуживания и ремонта автомобилей, включая консультации и рекомендации.
              </p>
            </div>
            {/* Преимущество 3 */}
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Конкурентные цены</h3>
              <p className="text-gray-600">
                Мы предлагаем лучшие цены на рынке благодаря прямым закупкам от производителей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция команды */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Член команды 1 */}
            <div className="border rounded-lg p-6 shadow-md flex flex-col items-center">
              <Image
                src="/team-member1.jpg"
                alt="Иван Иванов"
                width={150}
                height={150}
                className="w-36 h-36 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Иван Иванов</h3>
              <p className="text-gray-600">Директор компании</p>
            </div>
            {/* Член команды 2 */}
            <div className="border rounded-lg p-6 shadow-md flex flex-col items-center">
              <Image
                src="/team-member2.jpg"
                alt="Мария Петрова"
                width={150}
                height={150}
                className="w-36 h-36 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Мария Петрова</h3>
              <p className="text-gray-600">Менеджер по продажам</p>
            </div>
            {/* Член команды 3 */}
            <div className="border rounded-lg p-6 shadow-md flex flex-col items-center">
              <Image
                src="/team-member3.jpg"
                alt="Алексей Сидоров"
                width={150}
                height={150}
                className="w-36 h-36 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Алексей Сидоров</h3>
              <p className="text-gray-600">Менеджер по закупкам</p>
            </div>
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

export default AboutPage;