import tgIcon from '@/shared/assets/icons/tg.svg';
import vkIcon from '@/shared/assets/icons/vk.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex border-t border-gray-light pt-8">
      <p className="max-w-[348px]">
        © 2020 – 2024 Сервис подбора питомцев ООО «Энималмор». Все права
        защищены.{' '}
      </p>
      <div className="ml-[98px] grid grid-cols-2 gap-x-40 gap-y-2">
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
      <div className="ml-auto flex gap-[10px]">
        <Link href="/" target="_blank">
          <Image src={tgIcon} alt="наш телеграм" />
        </Link>
        <Link href="/" target="_blank">
          <Image src={vkIcon} alt="наш вконтакте" />
        </Link>
      </div>
    </footer>
  );
};
