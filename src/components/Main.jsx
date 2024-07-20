import headerMobile from '../assets/mobile/image-header.jpg';
import  headerDesktop from '../assets/desktop/image-header.jpg';
export const Main = () => {
  return (
    <section>
      <picture>
        <source media="(max-width:640px)" srcSet={headerMobile} />
        <source media="(min-width:641px)" srcSet={headerDesktop} />
        <img src={headerDesktop} alt="background header" />
      </picture>
      <p className="absolute font-Fraunces text-[40px] uppercase tracking-[6,25px] text-white text-center w-[327px] top-[144px] left-0 right-0 mx-auto sm:w-[600px]">We are creatives</p>
      <img className="absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]" src="icon-arrow-down.svg" />
    </section>
  );
};
