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
        className="absolute -left-12 top-1/2 z-10 -translate-y-1/2"
      />
      <div className="flex h-[80vh] w-[800px] items-center justify-center">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 bg-cover bg-center opacity-[0.4] blur-[13px]"
          style={{
            backgroundImage: 'url(' + image.src + ')',
          }}
        />
        <Image
          src={image}
          alt={`TODO:`}
          className="z-20 max-h-[90%] max-w-[90%] rounded-lg object-cover"
        />
      </div>
      <SlideButton
        onClick={onNextImage}
        direction="right"
        className="absolute -right-12 top-1/2 z-10 -translate-y-1/2"
      />
    </Modal>
  );
};

export default ImageSliderModal;
