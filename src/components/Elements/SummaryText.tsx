type Props = {
  [type: string]: any;
  children: React.ReactNode;
};

const SummaryText: React.FC<Props> = ({ type, children }) => {
  const classType = Object.keys(type).map((v) => {
    return type[v as keyof typeof type]
  }).join(' ');

  return (
    <>
      <p className={classType}>{children}</p>
    </>
  )
}

export default SummaryText;