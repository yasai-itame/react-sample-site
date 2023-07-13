import Heading from "../components/blocks/Heading";
import ImageLink from "../components/blocks/ImageLink";
import Title from "../components/Elements/Title";
import SummaryText from "../components/Elements/SummaryText";

const Collections = () => {

  const collectionsTitle = {
    marginBottom: 'mb-4',
    textCenter: 'text-center',
    textSize: 'text-2xl',
    fontBold: 'font-bold',
    textColor: 'text-gray-800',
    smFontSize: 'sm:text-3xl',
    mdMarginBottom: 'md:mb-6'
  }

  const collectionsSummary = {
    marginBottom: 'mb-6',
    textColor: 'text-gray-500',
    smFontSize: 'sm:text-lg',
    mdMarginBottom: 'md:mb-8'
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
      <Heading title="Collections" bgPattern="bg-collections-pattern" />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-md px-4 md:px-8">
              <Title type={collectionsTitle} title="Our competitive advantage" />
              <SummaryText type={collectionsSummary}>
                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text. The important factor when using filler text is that the text looks realistic otherwise it will not look very good.
              </SummaryText>
            </div>
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

export default Collections;