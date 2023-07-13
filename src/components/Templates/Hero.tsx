import { useEffect } from "react";
type Props = {
  pattern: boolean;
  subTitle?: string;
  mainTitle?: string;
  text?: string;
  src?: string;
  subTitleColor?: string;
  mainTitleColor?: string;
  bgColor?: string;
};

const Hero: React.FC<Props> = ({ pattern, subTitle, mainTitle, text, src, subTitleColor, mainTitleColor, bgColor = '' }) => {
  useEffect(() => {
    if (!pattern) {
      const textPosition = document.querySelector('.js-text-position');
      const imagePosition = document.querySelector('.js-image-position');
      imagePosition?.after(textPosition as HTMLElement);
    };
  });
  return (
    <>
      <div className={`mx-auto max-w-screen-2xl px-4 md:px-8 py-12 md:py-24 ${bgColor}`}>
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24 js-text-position">
            <p className={`mb-4 font-semibold ${subTitleColor} md:mb-6 md:text-lg xl:text-xl`}>{subTitle}</p>
            <h1 className={`${mainTitleColor} text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl`}>{mainTitle}</h1>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">{text}</p>
          </div>
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 js-image-position">
            <img src={src} loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
          </div>
        </section>
      </div>
    </>
  )
};

export default Hero;