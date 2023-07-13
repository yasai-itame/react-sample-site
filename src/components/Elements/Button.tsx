type Props = {
  [type: string]: any;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = ({ type, children, onClick }) => {
  
  const classType = Object.keys(type).map((v) => {
    return type[v as keyof typeof type]
  }).join(' ');

  return (
    <>
      <button className={classType} onClick={onClick}>
        {children}
      </button>
    </>
  )
};

export default Button;