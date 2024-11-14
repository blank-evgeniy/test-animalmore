import React from 'react';
import LogoIcon from '@/shared/assets/logo.svg';
import Button, { ButtonSize } from '@/shared/ui/button/Button';
import SearchInput from '@/shared/ui/search-input/SearchInput';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import HeartIcon from '@/shared/assets/icons/heart.svg';
import CartIcon from '@/shared/assets/icons/cart.svg';
import Link from 'next/link';
import { Profile } from '@/entities/user';
import { AppLink } from '@/shared/ui/link/Link';

export const Header = () => {
  return (
    <header className="mb-12 flex gap-[56px] pt-11">
      <div>
        <LogoIcon />
        <p className="text-text-dark absolute mt-2 font-semibold">
          Все о ваших питомцах
        </p>
      </div>
      <Button size={ButtonSize.SM} className="to-[#e18391]">
        <MenuIcon />
        Каталог
      </Button>
      <SearchInput />
      <div className="ml-auto flex items-center gap-[35px]">
        <div className="flex gap-[22px]">
          <AppLink href={'/'}>
            <HeartIcon />
          </AppLink>
          <AppLink href={'/'}>
            <CartIcon />
          </AppLink>
        </div>

        <Profile />
      </div>
    </header>
  );
};
