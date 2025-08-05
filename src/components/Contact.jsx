export function Contact() {
  return (
    <>
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
    </>
  );
}
