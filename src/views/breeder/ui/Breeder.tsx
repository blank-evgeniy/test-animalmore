import Badge from '@/shared/ui/badge/Badge';
import Button from '@/shared/ui/button/Button';
import GemIcon from '@/shared/assets/icons/gem.svg';
import HeartIcon from '@/shared/assets/icons/heart.svg';
import CommentIcon from '@/shared/assets/icons/comment.svg';
import { AppLink } from '@/shared/ui/link/Link';
import { ImageSlider } from '@/widgets/slider';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import BreederSidebar from './BreederSidebar';

export const Breeder = () => {
  const breeder = {
    name: 'Марина Гриндер',
    description:
      'Марина Гриндер — заводчик болонок с многолетним опытом, известная своим профессионализмом и трепетным отношением к каждому питомцу. Ее питомник специализируется на разведении высокопородных болонок, соответствующих международным стандартам. Марина уделяет особое внимание здоровью, социализации и правильному воспитанию щенков с самого раннего возраста.',
    profession: 'Опыт 8 лет, кинолог',
    subscribesCount: 24,
    commentsCount: 5,
    region: 'Москва',
    city: 'Химки',
  }; //моковые данные

  const subscribed = true;

  return (
    <div className="mt-6 block md:flex lg:mt-[50px]">
      <BreederSidebar />
      <main className="mb-[50px] flex w-full gap-[70px]">
        <div className="w-full xl:w-[541px]">
          <h1 className="text-[32px] font-medium">{breeder.name}</h1>
          <Breadcrumbs
            className="mt-[3px]"
            items={[
              { label: 'Главная', href: '/' },
              { label: 'Заводчики', href: '/' },
              { label: 'Марина Гриндер', href: '/' },
            ]}
          />
          <ImageSlider className="mx-auto my-8 flex max-w-[430px] px-3 xl:hidden" />
          <p className="mt-3 text-lg leading-[22.5px]">{breeder.description}</p>

          <div className="mt-9 flex flex-col items-center justify-between gap-8 font-medium sm:flex-row">
            <div className="flex items-center gap-4">
              <GemIcon />
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-2xl">Заводчик гуру</h2>
                <p className="">{breeder.profession}</p>
              </div>
            </div>

            <div className="flex gap-[22px]">
              <p className="pt-[6px] leading-4">
                {breeder.region}, <br /> {breeder.city}
              </p>

              <div>
                <HeartIcon
                  className={`inline ${subscribed ? 'text-pink-accent' : 'text-gray'}`}
                />
                <Badge className="ml-1">{breeder.subscribesCount}</Badge>
                {!!subscribed && (
                  <p className="text-xs font-medium">Вы подписаны</p>
                )}
              </div>
              <div>
                <AppLink href="/">
                  <CommentIcon className="inline" />
                </AppLink>
                <Badge className="ml-1">{breeder.commentsCount}</Badge>
              </div>
            </div>
          </div>
          <Button className="mx-auto mt-8 to-[#e8a169] lg:m-0">
            Связаться с заводчиком
          </Button>
          <p className="mt-3 text-center text-xs font-semibold lg:text-left">
            Заводчик свяжется с вами в удобное для вас время
          </p>
        </div>
        <ImageSlider className="mb-[50px] mt-2 hidden max-w-[430px] xl:flex" />
      </main>
    </div>
  );
};
