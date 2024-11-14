import Modal from '@/shared/ui/modal/Modal';
import Image, { StaticImageData } from 'next/image';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import SlideButton from './SlideButton';

interface ImageSliderModal {
  image: StaticImageData;
  isOpen: boolean;
  onClose: () => void;
  onPrevImage: () => void;
  onNextImage: () => void;
}

const ImageSliderModal = ({
  image,
  isOpen,
  onClose,
  onNextImage,
  onPrevImage,
}: ImageSliderModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SlideButton
        onClick={onPrevImage}
        className="absolute left-10 top-1/2 z-30 -translate-y-1/2 lg:-left-4"
      />
      <div className="flex h-screen w-screen items-center justify-center lg:h-[80vh] lg:w-[60vw]">
        <div
          className="absolute bottom-3 left-3 right-3 top-3 bg-cover bg-center opacity-[0.4] blur-[13px]"
          style={{
            backgroundImage: 'url(' + image.src + ')',
          }}
        />
        <Image
          src={image}
          alt={`...`}
          className="z-20 max-h-[90%] max-w-[90%] rounded-lg object-cover"
        />
      </div>
      <SlideButton
        onClick={onNextImage}
        direction="right"
        className="absolute right-10 top-1/2 z-30 -translate-y-1/2 lg:-right-4"
      />
    </Modal>
  );
};

export default ImageSliderModal;
