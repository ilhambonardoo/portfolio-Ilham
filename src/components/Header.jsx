import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  return (
    <>
      <header className="z-40 fixed top-0 w-full flex items-center backdrop-blur-sm" id="header">
        <div className="container shadow-lg mx-auto">
          <div className="flex items-center justify-between relative w-full">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-stone-900 py-6 block">
                ilhambonardoo
              </a>
            </div>
            <div className="flex items-center px-4">
              <div className="lg:hidden relative">
                <button name="" type="button">
                  <GiHamburgerMenu size={25} className="absolute bottom-0 right-18 text-2xl cursor-pointer transition transform-3d duration-100 ease-in peer-active:rotate-180 active:rotate-180" />
                </button>
              </div>
              <nav id="nav-menu" className="hidden absolute p-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full top-19 right-10 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <a href="#home" className="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a href="#about" className="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
                      About Me
                    </a>
                  </li>
                  <li className="group">
                    <a href="#portfolio" className="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
                      Portfolio
                    </a>
                  </li>

                  <li className="group">
                    <a href="#contact" className="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
