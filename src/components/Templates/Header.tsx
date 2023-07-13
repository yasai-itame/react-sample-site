import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from "../Elements/Button";

const Header: React.FC = () => {
  const menuStyle = {
    flex: 'inline-flex',
    alignItems: 'items-center',
    mdHidden: 'md:hidden',
    background: 'bg-custom-cream',
    hoverBackground: 'hover:bg-gray-300',
    focusVisible: 'focus-visible:ring',
    ringColor: 'ring-indigo-300',
    textColor: 'text-gray-500',
    activeTextColor: 'active:text-gray-700',
    textSm: 'text-sm',
    mdFontSize: 'md:text-base',
    fontBold: 'font-semibold',
    borderRadius: 'rounded-sm',
    gap: 'gap-2',
    containerX: 'px-2.5',
    containerY: 'py-2'
  };

  const menuOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let target = document.getElementById('js-sp-nav');
    target?.classList.toggle('hidden');
    target?.classList.toggle('absolute');
    target?.classList.toggle('top-14');
    target?.classList.toggle('left-0');
  };

  let location = useLocation();
  let path = location.pathname;
  if (path !== '/') {
    path = path.split('/').map((v, i) => {
      return i <= 1 ? v : '';
    }).join('');
  }

  const currentLink = 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
  const notCurrentLink = 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'

  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 mx-auto fixed top-0 left-0 h-14 md:h-auto flex z-10">
        <header className="flex justify-between items-center md:py-3 w-full">
          <Link to="/" className='inline-flex items-center text-custom-yellow text-2xl md:text-3xl font-bold gap-2.5'>Logo</Link>
          <Button type={menuStyle} onClick={menuOpen} >
            Menu
          </Button>
          <div className="hidden w-full md:block md:w-auto" id="js-sp-nav">
            <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                { path === '/' ?
                  <span className={currentLink} aria-current="page">Home</span> :
                  <Link to="/" className={notCurrentLink}>Home</Link>
                }
              </li>
              <li>
                { path === 'about' ?
                  <span className={currentLink} aria-current="page">About</span> :
                  <Link to="/about" className={notCurrentLink}>About</Link>
                }
              </li>
              <li>
                { path === 'collections' ?
                  <span className={currentLink} aria-current="page">Collections</span> :
                  <Link to="/collections" className={notCurrentLink}>Collections</Link>
                }
              </li>
              <li>
                { path === 'contact' ?
                  <span className={currentLink} aria-current="page">Contact</span> :
                  <Link to="/contact" className={notCurrentLink}>Contact</Link>
                }
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  )
};

export default Header