'use client';
import photo from '@/shared/assets/mockImages/photo.png';
import photo2 from '@/shared/assets/mockImages/photo2.png';
import photo3 from '@/shared/assets/mockImages/photo3.png';
import photo4 from '@/shared/assets/mockImages/photo4.png';
import photo5 from '@/shared/assets/mockImages/photo5.png';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ImageSliderModal from './ImageSliderModal';
import SlideButton from './SlideButton';

const mockPhotos = [photo, photo2, photo3, photo4, photo5];

interface ImageSliderProps {
  images?: StaticImageData[];
  className?: string;
}

export const ImageSlider = ({
  images = mockPhotos,
  className,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={twMerge('flex flex-col items-center', className)}>
      <div className="relative flex h-[430px] w-full max-w-[430px] items-center justify-center">
        <SlideButton
          onClick={prevImage}
          className="absolute -left-5 top-1/2 z-20 -translate-y-1/2"
        />
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
          <div
            className="absolute bottom-0 left-0 right-0 top-0 bg-cover bg-center opacity-[0.4] blur-[13px]"
            style={{
              backgroundImage: 'url(' + images[currentIndex].src + ')',
            }}
          />
          <Image
            src={images[currentIndex]}
            alt={'TODO:'}
            className="z-10 cursor-pointer rounded-lg object-cover"
            onClick={openModal}
          />
        </div>

        <SlideButton
          onClick={nextImage}
          direction="right"
          className="absolute -right-5 top-1/2 z-20 -translate-y-1/2"
        />
      </div>
      <div className="mt-4 grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            alt={'TODO:'}
            src={image}
            className={`h-20 w-20 cursor-pointer rounded-md object-cover ${currentIndex === index ? 'border-2 border-pink-accent' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <ImageSliderModal
        onClose={closeModal}
        isOpen={isOpen}
        onNextImage={nextImage}
        onPrevImage={prevImage}
        image={images[currentIndex]}
      />
    </div>
  );
};
