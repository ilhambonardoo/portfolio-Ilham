export function Contact() {
  return (
    <>
      <section id="contact" className="my-16 bg-gradient-to-b from-white to-stone-200 shadow-2xl">
        <div className="container mx-auto">
          <div className="text-center p-5">
            <h2 className="text-2xl font-semibold inter my-3">Contact Me!</h2>
            <h3 className="text-lg font-semibold inter mt-3 text-stone-500">For you and me</h3>
          </div>
          <form>
            <div className="w-full md:w-2/3 md:mx-auto">
              <div className="w-full my-9 px-8 mb-5">
                <label htmlFor="name" className="text-base font-bold text-stone-700">
                  Name
                </label>
                <input type="text" id="name" className="w-full p-3 rounded-lg bg-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Enter your name" required />
              </div>
              <div className="w-full my-9 px-8 mb-5">
                <label htmlFor="name" className="text-base font-bold text-stone-700">
                  Email
                </label>
                <input type="email" id="name" className="w-full p-3 rounded-lg bg-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Enter your Email" required />
              </div>
              <div className="w-full my-9 px-8 mb-5">
                <label htmlFor="name" className="text-base font-bold text-stone-700">
                  Pesan
                </label>
                <textarea type="text" id="name" className="w-full p-3 mb-4 rounded-lg bg-stone-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Enter your name" required></textarea>
              </div>
              <div className="w-full px-8 pb-10">
                <button className="text-base font-semibold px-4 py-3 w-full bg-stone-400 rounded-full" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
