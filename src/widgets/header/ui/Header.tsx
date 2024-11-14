'use client';
import React, { useState } from 'react';
import LogoIcon from '@/shared/assets/logo.svg';
import Button, { ButtonSize } from '@/shared/ui/button/Button';
import SearchInput from '@/shared/ui/search-input/SearchInput';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import HeartIcon from '@/shared/assets/icons/heart.svg';
import CartIcon from '@/shared/assets/icons/cart.svg';
import { Profile } from '@/entities/user';
import { AppLink } from '@/shared/ui/link/Link';
import MobileMenu from './MobileMenu';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <header className="mb-12 flex gap-2 pt-11 lg:gap-9 xl:gap-[56px]">
        <div>
          <LogoIcon />
          <p className="absolute mt-2 font-semibold text-text-dark">
            Все о ваших питомцах
          </p>
        </div>
        <Button size={ButtonSize.SM} className="hidden to-[#e18391] lg:flex">
          <MenuIcon />
          Каталог
        </Button>
        <SearchInput className="hidden lg:block" />
        <div className="ml-auto flex items-center gap-6 xl:gap-[35px]">
          <div className="hidden gap-[22px] lg:flex">
            <AppLink href={'/'}>
              <HeartIcon />
            </AppLink>
            <AppLink href={'/'}>
              <CartIcon />
            </AppLink>
          </div>

          <Profile className="hidden lg:flex" />

          <button
            onClick={() => setMenuIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-accent lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </>
  );
};
