import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
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
  );
}
