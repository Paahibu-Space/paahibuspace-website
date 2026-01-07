export default function AdvisoryBoard() {
  const advisors = [
    {
      name: "Dr. Grace N.",
      role: "Tech Policy Expert",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwwQGpPbgeZdv4VpBuPJqpgv1eXq9Iuwh-Wle289rr6_xLU7CwoUiHeeEHAXxfjIbkNLku_oGyPzGt-Iak_65jjzyPQAw8Lx_P9G8mFWK1bJlD6TQ4OZKUYna9jUESpKWvv5kBaN28ZKGxvmFv4vS37hzjjzYXVczYkuVpbIZ-8qLjuCDVmrGizMOS3OoeX05wNUHcV1IT-raj-u8Dafn6dcbnI9JcdCkGCHnuE3ygXRj4DTzNTQm6Sm4wEBpAEuR1hz9LnCL5zL8",
    },
    {
      name: "Robert K.",
      role: "Investment Strategist",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAm5f1uLTeNUe-VpljOa0FEKVob1Xe-j8ylgCV_Kr4GnlN0A8tmRjtClk7Ei8Uo4KG5iGdSw_xC8iqQcBLpPR9p7isltC_rAsDaia61AXoMk5QZr5weJieSHcKbVToXToO-s6ttulaIfb6HalaQ_Kgur9lZKzYfQFzxR9-WUL4t2YxVHoPHlYPOJPxBl-FOc72We3rrnwWB0SXzG6YAsDFmHu6M3PRj8Seic_I_cw69bOHmyB_ANfJ2th6jymgYtQTQ2qbRWphwsmo",
    },
    {
      name: "Elena M.",
      role: "Education Innovator",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBjAd4Ogp7JDSbkotTcSAkUNOiQaFzGqnUnYRggp_cDQCCQTIjHQAp8DMJI_wmbj-C2_rFuPBR4GslXSoGDQ3Uk7dbs2xfm6SqwlpveCOFlHmMOGRWIVBhdbeaXKtLjkU4yBe8fPQV2lip8hHnEocuKNOsMUxfFNkMCdj1syI07mFOUkuspyjqAKOkoBf6O3A77rJnmt5EsN5tvl9iPlagHOP4OGR1Kh7evL2zyFucMpF7xPhYBEZ_-ZzoQLbo3o1bFFnEesD3_7ys",
    },
    {
      name: "Samuel T.",
      role: "Global Partnerships",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5yj36Z1g1Z0V_tT9ApDtVu9xq6UA9HAn3OFHXW_Cs-y2y-7fq3DNXJEwHFPcbYrtVfdSxmjq4ZrIt3gCWByl_hkGMz8xR4CtNRBBqJkXRAcUsPAILexxO51Y1sri-aak6gAR4L2T7LONiYswJSf46QABxTjAi7RsjubKOCZa_QwutrXbYX3k56M9-MdeW_NOejp5LBF8evI2k9G3ejqAA45CIhu5kjGMOQa-SiEcLnabYtNBxst8q-kdA0H_8WnePg91iZEmEwKg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-secondary">
              Advisory Board
            </h2>
            <p className="mt-2 text-gray-600 max-w-lg">
              Providing strategic guidance and industry insights to ensure our
              programs remain relevant and impactful.
            </p>
          </div>
          <a
            className="text-secondary font-semibold flex items-center hover:underline"
            href="#"
          >
            View Full Board{" "}
            <span className="material-symbols-outlined ml-1 text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-background-light rounded-lg p-4 shadow-sm hover:shadow-md transition text-center border border-gray-100"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary">
                <img
                  alt={advisor.name}
                  className="w-full h-full object-cover"
                  src={advisor.image}
                />
              </div>
              <h3 className="font-bold text-secondary">{advisor.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{advisor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
