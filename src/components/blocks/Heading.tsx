type Props = {
  title: string;
  bgPattern?: string;
}

const Heading: React.FC<Props> = ({ title, bgPattern = 'bg-custom-orange' }) => {
  return (
    <>
      <div className={`${bgPattern} bg-no-repeat bg-cover bg-center py-6 md:py-20 min-h-96 mt-14 md:mt-16`}>
        <div className="mx-auto px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold text-white lg:text-3xl">{title}</h2>
        </div>
      </div>
    </>
  )
};

export default Heading;