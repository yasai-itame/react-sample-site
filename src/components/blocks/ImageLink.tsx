type Props = {
  link: string;
  src: string;
  subText: string;
  mainText: string;
};

const ImageLink: React.FC<Props> = ({ link, src, subText, mainText }) => {

  return (
    <>
      <a href={link} className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src={src} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <div className="relative flex flex-col">
          <span className="text-gray-300">{subText}</span>
          <span className="text-lg font-semibold text-white lg:text-xl">{mainText}</span>
        </div>
      </a>
    </>
  )
};

export default ImageLink;