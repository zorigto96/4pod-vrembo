// app/about/page.tsx

import { type FC } from "react";
import Image from "next/image";
import Header from "~/components/header";
import Footer from "~/components/footer";

const AboutPage: FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      {/* Секция о компании */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">О компании</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Левая часть: Изображение */}
            <div className="relative">
              <Image
                src="/about-us.jpg"
                alt="О компании"
                width={600}
                height={400}
                className="h-96 w-full rounded-lg object-cover shadow-md"
              />
            </div>
            {/* Правая часть: Текст */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-lg text-gray-600">
                Компания Gerat Autoparts была основана в 2012 году с целью
                предоставления качественных автозапчастей напрямую от
                проверенных производителей. Наша цель — сделать процесс покупки
                автозапчастей максимально удобным и прозрачным для наших
                клиентов.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Мы сотрудничаем с ведущими предприятиями в области производства
                автозапчастей, что позволяет нам предлагать лучшие цены и
                гарантийные обязательства. Наш опыт и знания позволяют нам
                предлагать комплексные решения для обслуживания и ремонта
                автомобилей.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                В нашем ассортименте представлены тормозные системы, колодки,
                диски, масла, фильтры и многое другое. Мы постоянно расширяем
                наш ассортимент, чтобы удовлетворять потребности наших клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Преимущество 1 */}
            <div className="rounded-lg border p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Качество продукции</h3>
              <p className="text-gray-600">
                Мы сотрудничаем только с проверенными производителями,
                обеспечивающими высокое качество автозапчастей.
              </p>
            </div>
            {/* Преимущество 2 */}
            <div className="rounded-lg border p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Комплексные решения</h3>
              <p className="text-gray-600">
                Предлагаем комплексные решения для обслуживания и ремонта
                автомобилей, включая консультации и рекомендации.
              </p>
            </div>
            {/* Преимущество 3 */}
            <div className="rounded-lg border p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Конкурентные цены</h3>
              <p className="text-gray-600">
                Мы предлагаем лучшие цены на рынке благодаря прямым закупкам от
                производителей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция команды */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Наша команда</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Член команды 1 */}
            <div className="flex flex-col items-center rounded-lg border p-6 shadow-md">
              <Image
                src="/team-member1.jpg"
                alt="Иван Иванов"
                width={150}
                height={150}
                className="mb-4 h-36 w-36 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold">Иван Иванов</h3>
              <p className="text-gray-600">Директор компании</p>
            </div>
            {/* Член команды 2 */}
            <div className="flex flex-col items-center rounded-lg border p-6 shadow-md">
              <Image
                src="/team-member2.jpg"
                alt="Мария Петрова"
                width={150}
                height={150}
                className="mb-4 h-36 w-36 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold">Мария Петрова</h3>
              <p className="text-gray-600">Менеджер по продажам</p>
            </div>
            {/* Член команды 3 */}
            <div className="flex flex-col items-center rounded-lg border p-6 shadow-md">
              <Image
                src="/team-member3.jpg"
                alt="Алексей Сидоров"
                width={150}
                height={150}
                className="mb-4 h-36 w-36 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold">Алексей Сидоров</h3>
              <p className="text-gray-600">Менеджер по закупкам</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <Footer />
    </main>
  );
};

export default AboutPage;
