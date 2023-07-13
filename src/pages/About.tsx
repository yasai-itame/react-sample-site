import Heading from "../components/blocks/Heading";
import Title from "../components/Elements/Title";
import SummaryText from "../components/Elements/SummaryText";
import SubTitle from "../components/Elements/SubTitle";
import List from "../components/Elements/List";
import Blockquote from "../components/Elements/Blockquote";
import ContentImage from "../components/Elements/ContentImage";

const About = () => {
  const aboutTitle = {
    marginBottom: 'mb-4',
    textCenter: 'text-center',
    textSize: 'text-2xl',
    fontBold: 'font-bold',
    textColor: 'text-gray-800',
    smFontSize: 'sm:text-3xl',
    mdMarginBottom: 'md:mb-6'
  }

  const aboutSummary = {
    marginBottom: 'mb-6',
    textColor: 'text-gray-500',
    smFontSize: 'sm:text-lg',
    mdMarginBottom: 'md:mb-8'
  }

  const aboutSubTitle = {
    marginBottom: 'mb-2',
    fontSize: 'text-xl',
    fontBold: 'font-semibold',
    textColor: 'text-gray-800',
    smFontSize: 'sm:text-2xl',
    mdMarginBottom: 'md:mb-4'
  }

  const aboutList = {
    marginBottom: 'mb-6',
    listStylePosition: 'list-inside',
    listStyleType: 'list-disc',
    textColor: 'text-gray-500',
    smFontSize: 'sm:text-lg',
    mdMarginBottom: 'md:mb-8'
  }

  const listItem = [
    'This is a section of some simple filler text',
    'Also known as placeholder text',
    'It shares some characteristics of a real written text'
  ]

  const aboutBlockquote = {
    marginBottom: 'mb-6',
    border: 'border-l-4',
    paddingLeft: 'pl-4',
    fontStyle: 'italic',
    textColor: 'text-gray-500',
    smFontSize: 'sm:text-lg',
    mdMarginBottom: 'md:mb-8',
    mdPaddingLeft: 'md:pl-6'
  }

  const aboutContentImage = {
    relative: 'relative',
    marginBottom: 'mb-6',
    overflow: 'overflow-hidden',
    radius: 'rounded-lg',
    background: 'bg-gray-100',
    boxShadow: 'shadow-lg',
    mdMarginBottom: 'md:mb-8'
  }

  return (
    <>
      <Heading title="About" bgPattern="bg-about-pattern" />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <Title type={aboutTitle} title="Our competitive advantage" />
          <SummaryText type={aboutSummary}>
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text. The important factor when using filler text is that the text looks realistic otherwise it will not look very good.<br /><br />
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
          </SummaryText>
          <SubTitle type={aboutSubTitle} subTitle="About us" />
          <SummaryText type={aboutSummary}>
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
          </SummaryText>
          <List type={aboutList}>
            {
              listItem.map((v) => {
                return (
                  <li key={v}>
                    {v}
                  </li>
                )
              })
            }
          </List>
          <Blockquote type={aboutBlockquote}>
            “This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”
          </Blockquote>
          <ContentImage type={aboutContentImage} src="https://picsum.photos/id/976/800/400" />
        </div>
      </div>
    </>
  )
};

export default About;