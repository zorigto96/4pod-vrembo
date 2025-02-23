// app/contacts/page.tsx

import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Footer from "~/components/footer";
import Header from "~/components/header";

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
      <Header />

      {/* Секция контактов */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Контакты</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Левая часть: Контактная информация */}
            <div>
              <h3 className="mb-4 text-2xl font-bold">Контактная информация</h3>
              <p className="mb-4 text-lg text-gray-600">
                Компания Gerat Autoparts
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Адрес: ул. Oвтомоторная, д.1/3 стр. 2, 125438 Мaсква, Россия
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Телефон:{" "}
                <a href="tel:+79819335405" className="text-blue-600">
                  +7 (000) 000-00-00
                </a>
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Email:{" "}
                <a href="mailto:info@gerat-parts.ru" className="text-blue-600">
                  info@gerat-parts.ru
                </a>
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
              <h3 className="mb-4 text-2xl font-bold">Форма обратной связи</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Имя
                  </label>
                  <input
                    {...register("name", { required: "Поле обязательно" })}
                    id="name"
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Поле обязательно",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Неверный формат email",
                      },
                    })}
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Сообщение
                  </label>
                  <textarea
                    {...register("message", { required: "Поле обязательно" })}
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow transition hover:bg-blue-700"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <Footer />
    </main>
  );
};

export default ContactsPage;
