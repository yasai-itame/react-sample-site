type Props = {
  [type: string]: any;
  children: React.ReactNode;
}

const List: React.FC<Props> = ({ type, children }) => {

  const classType = Object.keys(type).map((v) => {
    return type[v as keyof typeof type]
  }).join(' ');

  return (
    <>
      <ul className={classType}>
        {children}
      </ul>
    </>
  )
};

export default List;