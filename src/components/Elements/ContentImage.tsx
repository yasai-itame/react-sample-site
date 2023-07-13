type Props = {
  [type: string]: any;
  src: string;
}

const ContentImage: React.FC<Props> = ({ type, src }) => {

  const classType = Object.keys(type).map((v) => {
    return type[v as keyof typeof type]
  }).join(' ');

  return (
    <>
      <div className={classType}>
        <img src={src} loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
      </div>
    </>
  )
};

export default ContentImage;