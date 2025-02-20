// app/contacts/page.tsx

import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactsPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data); // Здесь можно добавить логику отправки формы, например, через API
    alert("Сообщение отправлено!");
  };

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
                <Link href="/about" className="hover:text-blue-600">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-blue-600 font-bold">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Секция контактов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая часть: Контактная информация */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Контактная информация</h3>
              <p className="text-lg text-gray-600 mb-4">
                Компания Gerat Autoparts
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Адрес: ул. Автомоторная, д.1/3 стр. 2, 125438 Москва, Россия
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Телефон: <a href="tel:+79819335405" className="text-blue-600">+7 (981) 933-54-05</a>
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Email: <a href="mailto:info@gerat-parts.ru" className="text-blue-600">info@gerat-parts.ru</a>
              </p>
              {/* Карта */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.841938575773!2d37.61551997651343!3d55.76018330116886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2ad%3A0x4c2ca101e2c8c617!2z0JjRgNC-0LPRgCwg0YHQu9C10L3RgtGLLCDQmtGA0LXQu9C10L3RgtCy0YDQsdGD0YDQsywgMTI1NDM4!5e0!3m2!1sru!2sru!4v1689360000000!5m2!1sru!2sru"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Правая часть: Форма обратной связи */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Форма обратной связи</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Имя
                  </label>
                  <input
                    {...register("name", { required: "Поле обязательно" })}
                    id="name"
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    {...register("email", { required: "Поле обязательно", pattern: { value: /\S+@\S+\.\S+/, message: "Неверный формат email" } })}
                    id="email"
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Сообщение
                  </label>
                  <textarea
                    {...register("message", { required: "Поле обязательно" })}
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-blue-700 transition"
                >
                  Отправить
                </button>
              </form>
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

export default ContactsPage;