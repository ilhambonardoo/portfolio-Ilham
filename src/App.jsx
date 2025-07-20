import basket from "./assets/basket.jpg";
import wkwk from "./assets/wkwk.png";
import radig from "./assets/radig.jpg";
import psd from "./assets/psd.jpg";
import aplikasiMobile from "./assets/aplikasi-mobile.jpg";
import boxing from "./assets/boxing.jpg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <section className="scroll-smooth">
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

        <section id="home" class="mt-24">
          <div class="container mx-auto rounded-2xl flex md:p-0 justify-evenly shadow-lg animate__animated animate__fadeInDown" data-aos="fade-up">
            <div class="rounded-lg mx-10 my-12 shadow-lg p-4 md:w-1/2 lg:bg-stone-500 md:mr-0 lg:mr-0 lg:pt-20 z-10">
              <h1 class="text-lg font-semibold font-inter text-gray-900 pt-3 pl-4 lg:text-2xl lg:text-center">Hi 👋 Welcome I'm.....</h1>
              <h2 class="lg:text-white text-stone-500 font-bold lg:text-center text-2xl lg:text-4xl pt-3 pl-4">Ilham Bonardo Marpaung</h2>
              <h3 class="text-stone-900 lg:text-stone-300 font-bold text-lg lg:text-center py-3 pl-4">STUDENT | ATLET</h3>
              <img src={basket} class="md:hidden px-4 py-5 sm:w-full sm:object-cover zoom-effect sm:object-center -z-10" />
              <button class="bg-stone-600 text-amber-50 rounded-full px-12 flex lg:mx-auto m-auto font-semibold text-lg inter lg:mt-10 my-7 p-2 hover:transition-shadow hover:bg-gray-700 hover:text-white cursor-pointer md:mb-6 zoom-effect">
                Contact Me!
              </button>
            </div>
            <div class="py-2 md:block hidden md:my-16 lg:flex lg:items-center flex-1">
              <img src={basket} alt="" class="rounded-r-full overflow-hidden zoom-effect lg:h-72" />
            </div>
          </div>
        </section>

        <section id="about" class="my-16">
          <div class="container mx-auto">
            <h2 class="text-2xl font-semibold inter my-3 text-center">About Me</h2>
            <div class="flex flex-wrap mx-10 rounded-2xl shadow-2xl lg:p-7 py-7 relative " data-aos="fade-right">
              <div class="lg:flex-1 mx-auto lg:bg-gray-600 rounded-2xl lg:my-6 lg:rounded-l-full lg:mx-0 zoom-effect">
                <img src={wkwk} alt="" class="h-80 m-auto" />
              </div>
              <div class="lg:flex-1 lg:my-8 lg:mx-0 mx-10 bg-stone-300 rounded-2xl lg:rounded-r-2xl lg:rounded-l-none z-10 lg:-z-10">
                <p class="mt-3 font-inter p-7 lg:text-justify">
                  <span class="text-xl font-semibold text-slate-800"> Hi! I'm Ilham Bonardo Marpaung</span> — a student and athlete who lives by PRAY and TRAINING. I`m passionate about learning, especially in technology, sports, and
                  self-growth. I believe success comes from discipline, values, and consistency.
                </p>
                <div class="text-2xl mb-5 flex items-center justify-center gap-4 text-gray-500 lg:hidden">
                  <a href="https://www.instagram.com/ilhambonardoo/">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://x.com/JackRich84050">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ilham-bonardo-marpaung-98875a33a/ ">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/ilhambonardoo">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <div class="text-3xl mb-5 absolute bottom-26 right-65 lg:gap-6 text-gray-500 hidden lg:block">
                <a href="https://www.instagram.com/ilhambonardoo/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/JackRich84050">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/ilham-bonardo-marpaung-98875a33a/ ">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/ilhambonardoo">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" class="my-16 mb-0 bg-gradient-to-b from-white to-stone-200 shadow-2xl">
          <div class="container mx-auto">
            <div class="text-center pt-5">
              <h2 class="text-2xl font-semibold inter my-3">Portfolio</h2>
              <h3 class="text-lg font-semibold inter text-stone-500 mt-3">My Experience</h3>
            </div>
            <div class="flex flex-wrap justify-center mx-5 lg:mx-auto lg:w-10/12">
              <div class="mb-12 p-7 shadow-lg hover:shadow-2xl md:w-1/2 rounded-lg" data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
                <div class="py-7">
                  <img src={aplikasiMobile} alt="" class="w-full rounded-2xl" />
                </div>
                <h2 class="font-semibold text-xl">Monitoring Suhu</h2>
                <p class="text-base font-medium text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit assumenda dicta magni fuga consectetur suscipit commodi voluptatum nobis nisi?</p>
              </div>
              <div class="mb-12 p-7 shadow-2xl hover:shadow-lg md:w-1/2 rounded-lg cursor-pointer" data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine">
                <div class="py-7">
                  <img src={basket} alt="" class="w-full rounded-2xl" />
                </div>
                <h2 class="font-semibold text-xl">Juara 1 OMI Basket Putra</h2>
                <p class="text-base font-medium text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit assumenda dicta magni fuga consectetur suscipit commodi voluptatum nobis nisi?</p>
              </div>
              <div class="mb-12 p-7 shadow-2xl hover:shadow-lg md:w-1/2 rounded-lg " data-aos="fade-up" data-aos-duration="3000">
                <div class="py-7">
                  <img src={radig} alt="" class="w-full rounded-2xl" />
                </div>
                <h2 class="font-semibold text-xl">Smart Parking Light</h2>
                <p class="text-base font-medium text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit assumenda dicta magni fuga consectetur suscipit commodi voluptatum nobis nisi?</p>
              </div>
              <div class="mb-12 p-7 shadow-lg hover:shadow-2xl md:w-1/2 rounded-lg" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="py-7">
                  <img src={psd} alt="" class="w-full rounded-2xl" />
                </div>
                <h2 class="font-semibold text-xl">Smart Feeder</h2>
                <p class="text-base font-medium text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit assumenda dicta magni fuga consectetur suscipit commodi voluptatum nobis nisi?</p>
              </div>
              <div class="mb-12 p-7 shadow-2xl md:w-1/2 rounded-lg" data-aos="zoom-in" data-aos-duration="1500">
                <div class="py-7">
                  <img src={boxing} alt="" class="w-full rounded-2xl" />
                </div>
                <h2 class="font-semibold text-xl">Gold medal Boxing</h2>
                <p class="text-base font-medium text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit assumenda dicta magni fuga consectetur suscipit commodi voluptatum nobis nisi?</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="my-16 bg-gradient-to-b from-white to-stone-200 shadow-2xl">
          <div class="container mx-auto">
            <div class="text-center p-5">
              <h2 class="text-2xl font-semibold inter my-3">Contact Me!</h2>
              <h3 class="text-lg font-semibold inter mt-3 text-stone-500">For you and me</h3>
            </div>
            <form>
              <div class="w-full md:w-2/3 md:mx-auto">
                <div class="w-full my-9 px-8 mb-5">
                  <label for="name" class="text-base font-bold text-stone-700">
                    Name
                  </label>
                  <input type="text" id="name" class="w-full p-3 rounded-lg bg-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Enter your name" required />
                </div>
                <div class="w-full my-9 px-8 mb-5">
                  <label for="name" class="text-base font-bold text-stone-700">
                    Email
                  </label>
                  <input type="email" id="name" class="w-full p-3 rounded-lg bg-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Enter your Email" required />
                </div>
                <div class="w-full my-9 px-8 mb-5">
                  <label for="name" class="text-base font-bold text-stone-700">
                    Pesan
                  </label>
                  <textarea type="text" id="name" class="w-full p-3 mb-4 rounded-lg bg-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Enter your name" required></textarea>
                </div>
                <div class="w-full px-8 pb-10">
                  <button class="text-base font-semibold px-4 py-3 w-full bg-stone-400 rounded-full" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <footer class="bg-stone-800 pt-24 pb-12">
          <div class="container md:mx-auto">
            <div class="flex flex-wrap lg:pl-35 r-20">
              <div class="w-full px-14 mb-12 text-slate-300 font-medium md:w-1/3">
                <h2 class="font-bold text-white mb-4 text-4xl">SixDecFour</h2>
                <h3 class="font-bold text-2xl mb-4">Contact Person</h3>
                <p>ilhambonardo123@gmail.com</p>
                <p>Jl.Makassar Sydney no.114</p>
                <p>America</p>
              </div>
              <div class="w-full px-14 mb-12 md:w-1/3 text-slate-300">
                <h3 class="font-bold text-white mb-4 text-2xl">Social Media</h3>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/ilhambonardoo/" class="inline-block text-base hover:text-stone-400">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/JackRich84050" class="inline-block text-base hover:text-stone-400">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ilhambonardoo" class="inline-block text-base hover:text-stone-400">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full px-14 mb-12 md:w-1/3 text-slate-300">
                <h3 class="font-bold text-white mb-4 text-2xl">Tautan</h3>
                <ul>
                  <li>
                    <a href="#home" class="inline-block text-base hover:text-stone-400">
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a href="#about" class="inline-block text-base hover:text-stone-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" class="inline-block text-base hover:text-stone-400">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#contact" class="inline-block text-base hover:text-stone-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full border-t border-stone-300">
            <p class="text-center text-white font-semibold mt-7">© 2025 Ilham Bonardo Marpaung. All rights reserved.</p>
          </div>
        </footer>
      </section>
    </>
  );
}

AOS.init();

export default App;
