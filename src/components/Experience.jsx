import aplikasiMobile from "../assets/aplikasi-mobile.jpg";
import basket from "../assets/basket.jpg";
import radig from "../assets/radig.jpg";
import psd from "../assets/psd.jpg";
import boxing from "../assets/boxing.jpg";

export function Experience() {
  return (
    <>
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
    </>
  );
}
