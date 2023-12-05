import { ImgComprimir } from './ImgComprimir';
import { images } from '../../../helpers/getCarouselImgs';
console.log(images);
// import { imagesComprimir } from '../../../helpers/getCarouselImgsComprimir';
// console.log(imagesComprimir);

const ImgComprimirContainer = () => {
  console.log('img');
  return (
    images.map((image, i) => (
      <ImgComprimir
        key={i}
        image={image}
      />
    ))
  );
};

export { ImgComprimirContainer };
