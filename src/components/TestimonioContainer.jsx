import { Testimonial } from "./Testimonial";
import Emily from "../assets/image-emily.jpg";
import Jennie from "../assets/image-jennie.jpg";
import Thomas from "../assets/image-thomas.jpg";
export const TestimonioContainer = () => {
  return (
    <section className="bg-white pt-16">
      <h2 className="text-center uppercase font-Fraunces mb-16 text-Grayishblue">Client testimonials</h2>
      <div className="lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]">
        <Testimonial
          img={Emily}
          testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          position="Marketing Director"
        />
        <Testimonial
          img={Thomas}
          testimonial="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          position="Chief Operating Officer"
        />
        <Testimonial
          img={Jennie}
          testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          position="Business Owner"
        />
      </div>
    </section>
  );
};
