import Hero from "../components/Templates/Hero";
import ImageLink from "../components/blocks/ImageLink";

const Home = () => {
  const heroData1 = {
    pattern: true,
    subTitle: 'Very proud to introduce',
    mainTitle: 'Revolutionary way to build the web',
    text: 'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.',
    src: 'https://picsum.photos/id/388/1200/',
    subTitleColor: 'text-custom-yellow',
    mainTitleColor: 'text-custom-maroon'
  }

  const heroData2 = {
    pattern: false,
    subTitle: 'Very proud to introduce',
    mainTitle: 'Revolutionary way to build the web',
    text: 'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.',
    src: 'https://picsum.photos/id/416/1200/',
    subTitleColor: 'text-custom-yellow',
    mainTitleColor: 'text-custom-maroon',
    bgColor: 'bg-custom-cream'
  }

  const collectionItems = [
    {
      id: 1,
      src: 'https://picsum.photos/id/63/1200/',
      alt: '',
      link: '#',
      subText: 'Home',
      mainText: 'Decoration'
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/225/1200/',
      alt: '',
      link: '#',
      subText: 'Home',
      mainText: 'Decoration'
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/292/1200/',
      alt: '',
      link: '#',
      subText: 'Home',
      mainText: 'Decoration'
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/326/1200/',
      alt: '',
      link: '#',
      subText: 'Home',
      mainText: 'Decoration'
    }
  ]

  return (
    <>
      <div className="bg-main-pattern bg-no-repeat bg-cover bg-center py-6 md:py-8 xl:py-48 min-h-96 mt-14 md:mt-16">
        <div className="mx-auto px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Revolutionary way to build the web</h2>
          <p className="mx-auto max-w-screen-md text-center md:text-lg text-custom-yellow">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>
      </div>
      <Hero pattern={heroData1.pattern} subTitle={heroData1.subTitle} mainTitle={heroData1.mainTitle} text={heroData1.text} src={heroData1.src} subTitleColor={heroData1.subTitleColor} mainTitleColor={heroData1.mainTitleColor} />
      <Hero pattern={heroData2.pattern} subTitle={heroData2.subTitle} mainTitle={heroData2.mainTitle} text={heroData2.text} src={heroData2.src} subTitleColor={heroData2.subTitleColor} mainTitleColor={heroData2.mainTitleColor} bgColor={heroData2.bgColor} />
      <div className="bg-custom-naples-yellow py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Collections</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {
              collectionItems.map((v) => {
                return <ImageLink key={v.id} link={v.link} src={v.src} subText={v.subText} mainText={v.mainText} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;