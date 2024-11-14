import React from 'react';
import Button, { ButtonSize } from '@/shared/ui/button/Button';
import SearchInput from '@/shared/ui/search-input/SearchInput';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import HeartIcon from '@/shared/assets/icons/heart.svg';
import CartIcon from '@/shared/assets/icons/cart.svg';
import { Profile } from '@/entities/user';
import { AppLink } from '@/shared/ui/link/Link';
interface MobileMenu {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenu) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-black bg-opacity-20"
        onClick={onClose}
      />

      <div
        className="fixed bottom-0 right-0 top-0 z-50 flex flex-col items-center gap-8 bg-white px-6 pt-32 shadow-2xl"
        onClick={(e) => {
          e.stopPropagation;
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-12 z-20 text-[48px] leading-[48px] text-slate-800 transition-colors hover:text-gray"
        >
          &times;
        </button>
        <Button size={ButtonSize.SM} className="to-[#e18391]">
          <MenuIcon />
          Каталог
        </Button>
        <SearchInput />
        <div className="flex items-center gap-[22px]">
          <AppLink href={'/'}>
            <HeartIcon />
          </AppLink>
          <AppLink href={'/'}>
            <CartIcon />
          </AppLink>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
