import { Link, useLocation } from 'react-router-dom';

import { RiHome8Line } from 'react-icons/ri';
import { TfiHandPointRight } from 'react-icons/tfi';

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <section className="shadow-sm bg-neutral-300  text-white">
        <header className="max-w-screen-xl mx-auto flex justify-center items-center py-2">
          <nav className="flex justify-center" aria-label="Breadcrumb">
            <ul className="inline-flex justify-center space-x-1 items-center">
              <li>
                <RiHome8Line className="text-xl mr-2 inline-block text-emerald-400" />
                <Link to="/" className={pathname === '/' ? 'text-emerald-500 font-bold' : 'text-gray-500'}>
                  Home
                </Link>
              </li>
              <li>
                <TfiHandPointRight className="text-xl mr-2 inline-block text-sky-600" />
                <Link
                  to="/about"
                  className={pathname === '/about' ? 'text-emerald-500 font-bold' : 'text-gray-500'}
                >
                  About
                </Link>
              </li>
              <li>
                <TfiHandPointRight className="text-xl mr-2 inline-block text-sky-600" />
                <Link
                  to="/todo"
                  className={pathname === '/todo' ? 'text-emerald-500 font-bold capitalize' : 'text-gray-500'}
                >
                  todo
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Header;
