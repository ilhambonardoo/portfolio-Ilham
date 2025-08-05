import basket from "../assets/basket.jpg";

export function Profile() {
  return (
    <>
      <section id="home" className="mt-24">
        <div className="container mx-auto rounded-2xl flex md:p-0 justify-evenly shadow-lg animate__animated animate__fadeInDown" data-aos="fade-up">
          <div className="rounded-lg mx-10 my-12 shadow-lg p-4 md:w-1/2 lg:bg-stone-500 md:mr-0 lg:mr-0 lg:pt-20 z-10">
            <h1 className="text-lg font-semibold font-inter text-gray-900 pt-3 pl-4 lg:text-2xl lg:text-center">Hi 👋 Welcome I'm.....</h1>
            <h2 className="lg:text-white text-stone-500 font-bold lg:text-center text-2xl lg:text-4xl pt-3 pl-4">Ilham Bonardo Marpaung</h2>
            <h3 className="text-stone-900 lg:text-stone-300 font-bold text-lg lg:text-center py-3 pl-4">STUDENT | ATLET</h3>
            <img src={basket} className="md:hidden px-4 py-5 sm:w-full sm:object-cover zoom-effect sm:object-center -z-10" />
            <button className="bg-stone-600 text-amber-50 rounded-full px-12 flex lg:mx-auto m-auto font-semibold text-lg inter lg:mt-10 my-7 p-2 hover:transition-shadow hover:bg-gray-700 hover:text-white cursor-pointer md:mb-6 zoom-effect">
              Contact Me!
            </button>
          </div>
          <div className="py-2 md:block hidden md:my-16 lg:flex lg:items-center flex-1">
            <img src={basket} alt="" className="rounded-r-full overflow-hidden zoom-effect lg:h-72" />
          </div>
        </div>
      </section>
      ;
    </>
  );
}
