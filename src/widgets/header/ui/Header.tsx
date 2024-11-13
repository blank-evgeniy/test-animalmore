import React from 'react';
import logoIcon from '@/shared/assets/logo.svg';
import Image from 'next/image';
import Button from '@/shared/ui/button/Button';
import SearchInput from '@/shared/ui/search-input/SearchInput';
import menuIcon from '@/shared/assets/icons/menu.svg';
import heartIcon from '@/shared/assets/icons/heart.svg';
import cartIcon from '@/shared/assets/icons/cart.svg';
import Link from 'next/link';
import { Profile } from '@/entities/user';

export const Header = () => {
  return (
    <header className="mb-12 flex gap-[56px] pt-11">
      <div>
        <Image src={logoIcon} alt="amimalmore" />
        <p className="text-text-dark absolute mt-2 font-semibold">
          Все о ваших питомцах
        </p>
      </div>
      <Button className="to-[#e18391]">
        <Image src={menuIcon} alt="меню" />
        Каталог
      </Button>
      <SearchInput />
      <div className="ml-auto flex items-center gap-[35px]">
        <div className="flex gap-[22px]">
          <Link href={'/'}>
            <Image src={heartIcon} alt="Избранное" />
          </Link>
          <Link href={'/'}>
            <Image src={cartIcon} alt="Корзина" />
          </Link>
        </div>

        <Profile />
      </div>
    </header>
  );
};
