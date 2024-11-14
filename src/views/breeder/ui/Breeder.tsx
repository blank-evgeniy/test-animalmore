import Link from 'next/link';
import { SidebarLink, SidebarLinks } from '../model/links';
import Badge from '@/shared/ui/badge/Badge';
import Button from '@/shared/ui/button/Button';
import GemIcon from '@/shared/assets/icons/gem.svg';
import HeartIcon from '@/shared/assets/icons/heart.svg';
import CommentIcon from '@/shared/assets/icons/comment.svg';
import Image from 'next/image';
import { AppLink } from '@/shared/ui/link/Link';
import { ImageSlider } from '@/widgets/slider';

interface BreederProps {
  links?: SidebarLink[];
}

export const Breeder = ({ links = SidebarLinks }: BreederProps) => {
  const commentsCount = 5;

  return (
    <div className="mt-[50px] flex">
      <aside className="mt-3 w-[200px]">
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              className="text-[22px] font-semibold"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
          <Link
            className="flex items-center gap-1 text-[22px] font-semibold"
            href={'/'}
          >
            Отзывы
            <Badge>{commentsCount}</Badge>
          </Link>
        </nav>
      </aside>
      <main className="w-[541px] pb-4">
        <h1 className="text-[32px] font-medium">Марина Гриндер</h1>
        <p className="mt-[3px] text-lg text-text-secondary">
          Главная / Заводчики / Марина Гриндер
        </p>
        {/* TODO: сделать кастомный компонент */}
        <p className="mt-3 text-lg leading-[22.5px]">
          Марина Гриндер — заводчик болонок с многолетним опытом, известная
          своим профессионализмом и трепетным отношением к каждому питомцу. Ее
          питомник специализируется на разведении высокопородных болонок,
          соответствующих международным стандартам. Марина уделяет особое
          внимание здоровью, социализации и правильному воспитанию щенков с
          самого раннего возраста.
        </p>

        <div className="mt-9 flex font-medium">
          <div className="flex items-center gap-4">
            <GemIcon />
            <div className="flex h-full flex-col justify-between">
              <h2 className="text-2xl">Заводчик гуру</h2>
              <p className="">Опыт 8 лет, кинолог</p>
            </div>
          </div>

          <p className="ml-[66px] pt-[6px] leading-4">
            Москва, <br /> Химки
          </p>

          <div className="ml-[26px]">
            <HeartIcon className="inline text-pink-accent" />
            <Badge className="ml-1">24</Badge>
            <p className="text-xs font-medium">Вы подписаны</p>
          </div>
          <div className="ml-[22px]">
            <AppLink href="/">
              <CommentIcon className="inline" />
            </AppLink>
            <Badge className="ml-1">5</Badge>
          </div>
        </div>
        <Button className="mt-8 to-[#e8a169]">Связаться с заводчиком</Button>
        <p className="mt-3 text-xs font-semibold">
          Заводчик свяжется с вами в удобное для вас время
        </p>
      </main>
      <ImageSlider className="mb-[50px] ml-auto max-w-[430px]" />
    </div>
  );
};
