import wkwk from "../assets/wkwk.png";

export function About() {
  return (
    <>
      <section id="about" className="my-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold inter my-3 text-center">About Me</h2>
          <div className="flex flex-wrap mx-10 rounded-2xl shadow-2xl lg:p-7 py-7 relative " data-aos="fade-right">
            <div className="lg:flex-1 mx-auto lg:bg-gray-600 rounded-2xl lg:my-6 lg:rounded-l-full lg:mx-0 zoom-effect">
              <img src={wkwk} alt="" className="h-80 m-auto" />
            </div>
            <div className="lg:flex-1 lg:my-8 lg:mx-0 mx-10 bg-stone-300 rounded-2xl lg:rounded-r-2xl lg:rounded-l-none z-10 lg:-z-10">
              <p className="mt-3 font-inter p-7 lg:text-justify">
                <span className="text-xl font-semibold text-slate-800"> Hi! I'm Ilham Bonardo Marpaung</span> — a student and athlete who lives by PRAY and TRAINING. I`m passionate about learning, especially in technology, sports, and
                self-growth. I believe success comes from discipline, values, and consistency.
              </p>
              <div className="text-2xl mb-5 flex items-center justify-center gap-4 text-gray-500 lg:hidden">
                <a href="https://www.instagram.com/ilhambonardoo/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/JackRich84050">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/ilham-bonardo-marpaung-98875a33a/ ">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/ilhambonardoo">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="text-3xl mb-5 absolute bottom-26 right-65 lg:gap-6 text-gray-500 hidden lg:block">
              <a href="https://www.instagram.com/ilhambonardoo/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com/JackRich84050">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/ilham-bonardo-marpaung-98875a33a/ ">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/ilhambonardoo">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
