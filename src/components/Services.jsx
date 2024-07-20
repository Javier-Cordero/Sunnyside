import { Text } from "./Text";
import { Image } from "./Image";
import { ImageText } from "./ImageText";
import TransformDesktop from "../assets/desktop/image-transform.jpg";
import TransformMobile from "../assets/mobile/image-transform.jpg";
import StandDesktop from "../assets/desktop/image-stand-out.jpg";
import StandMobile from "../assets/mobile/image-stand-out.jpg";
import GraphicDesktop from "../assets/desktop/image-graphic-design.jpg";
import GraphicMobile from "../assets/mobile/image-graphic-design.jpg";
import PhotographyDesktop from "../assets/desktop/image-photography.jpg";
import PhotographyMobile from "../assets/mobile/image-photography.jpg";
export const Services = () => {
  return (
    <section className="table:grid table:grid-cols-2">
      <Image
        order="order-2"
        imgMobile={TransformMobile}
        imgDesktop={TransformDesktop}
      />
      <Text
        order="order-1"
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        color="bg-Yellow"
      />
      <Image
        order="order-3"
        imgMobile={StandMobile}
        imgDesktop={StandDesktop}
      />
      <Text
        order="order-4"
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        color="bg-Softred"
      />
      <ImageText
        order="order-5"
        imgMobile={GraphicMobile}
        imgDesktop={GraphicDesktop}
        title="Graphic design"
        text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        // color="bg-Darkmoderate"
      />
      <ImageText
        order="order-6"
        imgMobile={PhotographyMobile}
        imgDesktop={PhotographyDesktop}
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        color="bg-Darkmoderate"
      />
    </section>
  );
};
