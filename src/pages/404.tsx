// app/not-found.tsx

import { type FC, useEffect, useState } from "react";
import Link from "next/link";

const NotFoundPage: FC = () => {
  const [quote, setQuote] = useState<string | undefined>("");

  useEffect(() => {
    const quotes = [
      "Не каждый может взвалить на себя груз ответственности, а я навалил груз на детской площадке.",
      "Если тебя незаслуженно обидели, вернись и заслужи.",
      "Лучше выпить литр пива, чем не выпить литр пива.",
      "Будь самим собой, имей свою точку зрения, умей постоять за себя и за своих близких, и тебя будут уважать.",
      "Работа не волк.",
      "Настоящий мужчина, как ковер тети Зины — с каждым годом лысеет.",
      "Мама учила не ругаться матом, но жизнь научила не ругаться матом при маме.",
      "Только настоящие цитаты из уст самого Джейсона Стетхэма!",
      "Если у вас есть мечта, вы должны за нее биться. Если у вас есть какая-то страсть, то должны ее добиваться, а не пускать дело на самотек.",
      "Сегодня люди стали гораздо дешевле, чем то, что на них надето.",
      "Гордость парня — это порядочность его девушки.",
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
        <p className="mb-8 text-2xl font-semibold">Страница не найдена</p>
        <p className="mb-8 text-lg text-gray-600">
          Кажется, вы попали на страницу, которой не существует. Но не
          расстраивайтесь, у нас есть цитата Джейсона Стэтхэма, которая поможет
          вам поднять настроение!
        </p>
        <blockquote className="mb-8 rounded-lg border-l-4 border-blue-500 bg-white p-6">
          <p className="text-lg italic text-gray-800">{quote}</p>
        </blockquote>
        <Link
          href="/"
          className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow transition hover:bg-blue-700"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
