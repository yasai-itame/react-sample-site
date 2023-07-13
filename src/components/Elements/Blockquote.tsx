type Props = {
  [type: string]: any;
  children: React.ReactNode;
}

const Blockquote: React.FC<Props> = ({ type, children }) => {

  const classType = Object.keys(type).map((v) => {
    return type[v as keyof typeof type]
  }).join(' ');

  return (
    <>
      <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">{children}</blockquote>
    </>
  )
}

export default Blockquote;