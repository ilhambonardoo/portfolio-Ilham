export function Footer() {
  return (
    <>
      <footer className="bg-stone-800 pt-24 pb-12">
        <div className="container md:mx-auto">
          <div className="flex flex-wrap lg:pl-35 r-20">
            <div className="w-full px-14 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-white mb-4 text-4xl">SixDecFour</h2>
              <h3 className="font-bold text-2xl mb-4">Contact Person</h3>
              <p>ilhambonardo123@gmail.com</p>
              <p>Jl.Makassar Sydney no.114</p>
              <p>America</p>
            </div>
            <div className="w-full px-14 mb-12 md:w-1/3 text-slate-300">
              <h3 className="font-bold text-white mb-4 text-2xl">Social Media</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/ilhambonardoo/" className="inline-block text-base hover:text-stone-400">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/JackRich84050" className="inline-block text-base hover:text-stone-400">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ilhambonardoo" className="inline-block text-base hover:text-stone-400">
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-14 mb-12 md:w-1/3 text-slate-300">
              <h3 className="font-bold text-white mb-4 text-2xl">Tautan</h3>
              <ul>
                <li>
                  <a href="#home" className="inline-block text-base hover:text-stone-400">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#about" className="inline-block text-base hover:text-stone-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="inline-block text-base hover:text-stone-400">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="inline-block text-base hover:text-stone-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-stone-300">
          <p className="text-center text-white font-semibold mt-7">© 2025 Ilham Bonardo Marpaung. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
