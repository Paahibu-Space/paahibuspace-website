export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhuh1k92G-0aXhTDNNSmA_DpcEdTfRix78EYhl0Nbihezk3OISXrX6k3KSxZzCbDlxqrBGy44RLJsr-8dwy0jLILUpDxezFhhlDgrcVNfZCm9fcFvl9lNiMd1H_i1FDSH64_XijjT8nmrE1HifD2WJeIFQIpf749Rydw066s6ZB2267-IlzT6dI00PyeHTUF4p2DepN6CQkU_LLXISXs7DKcoeQVRoKwlEik7af51xkXiyFQwSPHh9YctMNHSwGvDiUVf4D8zQeLE",
    },
    {
      name: "David Okonkwo",
      role: "Head of Operations",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBUCGh-u0qNcd0_ndAwKwfXoaZwO9HD9yWdOqz0i_LfmOpji-dGOJHoGUpIuSiEsGv0IQtNDsLFPOCHo4oSy_62_aBIA5e8-MBAtDJPbLle7z3Ce21hlzVF_rbIn8WCl5OlOHmLW0JqlRDeIHBaOyS2dfRzWKcBeZ4QadHVxGX_ZRwrE4Ku5p4fCsbr85pJgGWERMi10PocEslWMytjH6VzQrpCX1texADB5hCj2BmGhtv9642rW3Xov-yGxH8yKb3zWKIUrUQA05I",
    },
    {
      name: "Amina Bello",
      role: "Program Director",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEDhWrKT95K7UsuopvyyKjdBcvrZlcAt1avCmVPgBodcb60ssNfGk7U9v7M-wBDwNrNk4ZRtQHMkpsczG5PWyuC34v-saFqHj5_8V3ENvTxSMDaxxSGggsKzxWo3j8UXYk7yOrUUrW6bZXIQwWq7Uw9IL4KFlwLsabC1FifLZYVpMwEx7gTcF-kBRskANKsxy-KPjDOAw8a3rg-VnVF51tN0C9rRYevbpW0HHTrxXF8A0nBSCvK4Ge2r2IQYOuGYK6El2vc4qhm_A",
    },
    {
      name: "Kwame Mensah",
      role: "Tech Lead",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqAkCFOvbWegRF_-jEvdd7EoJuOtYsbL0-VjO3cQDjFVkX7vCsxxdk-fxB6q-cjBhJBxTzcKGbrfT6V9qPs6TJOwyrpiF9l1KU-bsmVmUPb-wqHjE2eSncF4vZrZm1zbM8udO8L56cKeSr7WQulvqLRH63DoLToZdIDGRB7jW-fsj_gpTHqgG-6spoCJV0qXQV-_yjeUNxB8iFvxltj0UD558EV5eumpmO4b10wScX5MbUlM6rNoqlI_BPTHmloU3BkxSyrXM_guU",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Leadership Team
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our executive team brings decades of experience in technology,
            education, and social entrepreneurship to guide Paahibu Space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]"
            >
              <img
                alt={leader.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={leader.image}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(39, 41, 116, 0.9) 0%, rgba(39, 41, 116, 0.6) 50%, transparent 100%)",
                }}
              >
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {leader.name}
                </h3>
                <p className="text-primary font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {leader.role}
                </p>
                <div className="flex gap-3 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <a className="text-white hover:text-primary" href="#">
                    <span className="material-symbols-outlined text-sm">link</span>
                  </a>
                  <a className="text-white hover:text-primary" href="#">
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
