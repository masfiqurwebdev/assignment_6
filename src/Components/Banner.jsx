

const stats = [
  {
    
    number: "50K+",
    title: "Active Users",
  },
  {
    number: "200+",
    title: "Premium Tools",

  },
  {
    number: "4.9",

    title: "Rating",
  },
];


const Banner = () => {
  return (
      <section className="py-12 w-[100vw]">
      <div className=" px-6">
        <div className="rounded-md bg-gradient-to-r from-[#4F2DFF] via-[#7B2EFF] to-[#B21EFF] py-10 text-white shadow-lg">
          <div className="grid grid-cols-1 divide-y divide-white/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-8 md:py-0"
              >
                <h2 className="text-5xl font-bold">{item.number}</h2>

                <p className="mt-3 text-lg text-white/80">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner