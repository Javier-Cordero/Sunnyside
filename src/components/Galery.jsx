import { Image } from "./Image";
import coneMobile from "../assets/mobile/image-gallery-cone.jpg";
import coneDesktop from "../assets/desktop/image-gallery-cone.jpg";
import orangeMobile from "../assets/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../assets/desktop/image-gallery-orange.jpg";
import sugarcubesMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import sugarcubesDesktop from "../assets/desktop/image-gallery-sugarcubes.jpg";
import milkbottlesMobile from "../assets/mobile/image-gallery-milkbottles.jpg";
import milkbottlesDesktop from "../assets/desktop/image-gallery-milkbottles.jpg";
export const Galery = () => {
  return (
    <div className="grid grid-cols-2 sm:flex">
      <Image imgMobile={milkbottlesMobile} imgDesktop={milkbottlesDesktop} />
      <Image imgMobile={orangeMobile} imgDesktop={orangeDesktop} />
      <Image imgMobile={coneMobile} imgDesktop={coneDesktop} />
      <Image imgMobile={sugarcubesMobile} imgDesktop={sugarcubesDesktop} />
    </div>
  );
};
