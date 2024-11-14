import TGIcon from '@/shared/assets/icons/tg.svg';
import VKIcon from '@/shared/assets/icons/vk.svg';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-gray-light pb-[60px] pt-8 lg:flex-row">
      <p className="text-center lg:max-w-[348px] lg:text-left">
        © 2020 – 2024 Сервис подбора питомцев ООО «Энималмор». Все права
        защищены.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2 px-10 lg:ml-[98px] lg:mt-0 lg:gap-x-40 lg:px-0">
        <Link className="" href={'/'}>
          О компании
        </Link>
        <Link className="" href={'/'}>
          Контакты
        </Link>
        <Link className="" href={'/'}>
          Правовые документы
        </Link>
        <Link className="" href={'/'}>
          Сотрудничество
        </Link>
      </div>
      <div className="mx-auto mt-6 flex gap-[10px] lg:mx-0 lg:ml-auto lg:mt-0">
        <Link href="/" target="_blank">
          <TGIcon />
        </Link>
        <Link href="/" target="_blank">
          <VKIcon />
        </Link>
      </div>
    </footer>
  );
};
