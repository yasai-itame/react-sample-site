type Props = {
  [type: string]: any;
  title: string;
};

const Title: React.FC<Props> = ({ type, title }) => {
  const classType = Object.keys(type).map((v) => {
    return type[v as keyof typeof type]
  }).join(' ');

  return (
    <>
      <h1 className={classType}>{title}</h1>
    </>
  )
}

export default Title;