export default function ImpactAction() {
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                Impact in Action
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark dark:text-white mb-6">
                 Empowering Rural Economies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                 Our Ambassadors are on the ground, creating tangible change. They identify local challenges and leverage technology to create sustainable solutions.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="mb-4 inline-flex items-center gap-2 rounded bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Success Story
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-dark dark:text-white">Project: Digital Market Access</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Sarah identified that women in her local market were losing sales due to lack of digital payment options. Through the Ambassador program, she organized training sessions partnering with local fintechs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                      <div>
                          <p className="text-3xl font-bold text-primary">500+</p>
                          <p className="text-sm text-gray-500">Women Trained</p>
                      </div>
                      <div>
                          <p className="text-3xl font-bold text-primary">30%</p>
                          <p className="text-sm text-gray-500">Income Increase</p>
                      </div>
                  </div>
              </div>
           </div>
           
           <div className="relative h-[600px] hidden lg:block">
              {/* This represents the visual collage in the HTML - simplified for React */}
              <div className="absolute top-10 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-xl transform rotate-3 z-10">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBszxGP8MS_FpH6aAgZmyATuUyfYj90t3QlOt9B1ZOXr_-D98J5FhkNctgkjxOOi5IaGTMw8asxw_Uy87mPxN8mL2XXm7xd1D_3l-hp18DhtR8leWLe14hBlF_eg8A7Xzn7Mw5qbJc4-CCzTNmFZmQztgExCOMRXDKhAJwMcsU36I9Sgf2xDYRKfil1h0O2xZknHrObat2BM2Go8X7esXx9bRiMoVNciClj9h8AHbQjw-gkTT-toX4Z63rW9NCif7BgzOxGl51j-1g" alt="Impact 1" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-40 left-10 w-60 h-72 rounded-2xl overflow-hidden shadow-xl transform -rotate-6 z-20 border-4 border-white">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0vQ0d3yIMhKOFKo7UKC-Iemj_h9AitpeMlV6Ke611PgNy5Pu5V3bBuFa5BhUVaNiyRvRCFnCqQ4j1SG9wVcpIWcXNIQG3aHroYNe-6vgmjHSDsoONjHNeWEx4xXJA9C_BPTDkiVU8QwS7srZGELpzrCX_gs7LtZVaO5y77u0ojFQSe1NGG23ye5jW-prUqp0y5yzpC6CZzKlwICBNbsmjR9iAzFIbM9Jj4lMlKT0xb1wPN5vEb0RC3IqRdokdf9chRQkZCO8O6Uk" alt="Impact 2" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-secondary z-30">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5mEUW-VmYPrKXvjgQhRU2dP3BCKPAVRLZcEmA_IJtPTF-UbVV3uObXq1PDkVeZjQAmFNvtAauUTcPnFQ8ik-KQ7vO_4S96Sh5w6CeOIo3NQ5hQULGkwPwE-9NV0xoQETsIpueTeFYHrALl3cnVgkri8UiMKXvtVogtcAKiPpG5I3l10hg4NW5W0BuC4apjfwEIj3n8gIc0OaeJ5cYfbJgIp3h7yQVszB_IiiLRsvGYam0RMrJili__Er54LiQU_hkCE9X6eViO0I" alt="Impact 3" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
