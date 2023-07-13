import Heading from "../components/blocks/Heading";
import InputBlock from "../components/blocks/InputBlock";
import TextareaBlock from "../components/blocks/TextareaBlock";
import Button from "../components/Elements/Button";

const Contact: React.FC = () => {
  const sendButton = {
    width: 'w-full',
    radius: 'rounded',
    background: 'bg-indigo-500',
    containX: 'px-8',
    containY: 'py-3',
    textCenter: 'text-center',
    fontBold: 'font-semibold',
    textColor: 'text-white',
    outLine: 'outline-none',
    ring: 'ring-indigo-300',
    transition: 'transition duration-100',
    hoverBackground: 'hover:bg-indigo-600',
    focusVisible: 'focus-visible:ring',
    activeBackground: 'active:bg-indigo-700'
  }

  return (
    <>
      <Heading title="Contact" bgPattern="bg-contact-pattern" />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <InputBlock type="text" labelText="First name" id="first-name" name="first-name" />
            <InputBlock type="text" labelText="Last name" id="last-name" name="last-name" />
            <div className="sm:col-span-2">
              <InputBlock type="email" labelText="Email" id="email" name="email" />
            </div>
            <div className="sm:col-span-2">
              <TextareaBlock labelText="Message" id="message" name="message" />
            </div>
            <div className="flex items-center justify-center sm:col-span-2">
              <Button type={sendButton}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default Contact;