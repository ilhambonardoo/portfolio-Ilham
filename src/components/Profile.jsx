import basket from "../assets/basket.jpg";

export function Profile() {
  return (
    <>
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
      ;
    </>
  );
}
