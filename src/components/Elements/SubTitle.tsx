type Props = {
  [type: string]: any;
  subTitle: string;
};

const SubTitle: React.FC<Props> = ({ type, subTitle }) => {
  const classType = Object.keys(type).map((v) => {
    return type[v as keyof typeof type]
  }).join(' ');

  return (
    <>
      <h2 className={classType}>{subTitle}</h2>
    </>
  )
}

export default SubTitle;