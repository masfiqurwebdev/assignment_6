
const CtaSection = () => {
  return (
    
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#4F2DFF] via-[#7A2BFF] to-[#B21EFF] px-8 py-20 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
            Join thousands of professionals who are already using DigiTools to
            work smarter.
            <br className="hidden md:block" />
            Start your free trial today.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-[#6C3BFF] transition hover:bg-gray-100">
              Explore Products

            </button>

            <button className="rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-[#6C3BFF]">
              View Pricing
            </button>
          </div>

          <p className="mt-8 text-sm text-white/70">
            14-day free trial • No credit card required • Cancel anytime
          </p>

        </div>
        
      </div>
    </section>
  )
}

export default CtaSection
