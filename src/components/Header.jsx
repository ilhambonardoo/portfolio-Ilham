export function Header() {
  return (
    <>
      <header class="z-40 fixed top-0 w-full flex items-center backdrop-blur-sm" id="header">
        <div class="container shadow-lg mx-auto">
          <div class="flex items-center justify-between relative w-full">
            <div class="px-4">
              <a href="#home" class="font-bold text-lg text-stone-900 py-6 block">
                ilhambonardoo
              </a>
            </div>
            <div class="flex items-center px-4">
              <div class="lg:hidden relative">
                <button id="hamburger" name="" type="button" class="absolute -bottom-3 right-4 text-2xl cursor-pointer fa-solid fa-bars transition transform-3d duration-100 ease-in peer-active:rotate-180 active:rotate-180"></button>
              </div>
              <nav id="nav-menu" class="hidden absolute p-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full top-19 right-10 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul class="block lg:flex">
                  <li class="group">
                    <a href="#home" class="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
                      Beranda
                    </a>
                  </li>
                  <li class="group">
                    <a href="#about" class="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
                      About Me
                    </a>
                  </li>
                  <li class="group">
                    <a href="#portfolio" class="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
                      Portfolio
                    </a>
                  </li>

                  <li class="group">
                    <a href="#contact" class="text-base text-stone-950 flex mx-8 mt-3 group-hover:text-stone-600">
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
