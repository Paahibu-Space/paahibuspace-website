import Button from "@/components/ui/Button";

export default function RegionalImpact() {
  return (
    <section className="py-20 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">
            Where We Work
          </span>
          <h2 className="text-3xl font-bold text-neutral-dark mt-2 mb-6">
            Rooted in the Upper West Region
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our impact begins at home. While our digital reach is global, our
            physical programs are deeply rooted in Wa, Ghana. We are building a
            tech ecosystem right here in the Savannah, proving that innovation
            knows no geography.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <span className="material-symbols-outlined text-secondary text-xl">
                check_circle
              </span>
              <span>Physical Hub in Wa, Insurance Road</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="material-symbols-outlined text-secondary text-xl">
                check_circle
              </span>
              <span>Community Ambassadors Network</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="material-symbols-outlined text-secondary text-xl">
                check_circle
              </span>
              <span>Partnerships with local schools</span>
            </li>
          </ul>
          <div className="mt-8">
            <Button size="lg">Visit Our Office</Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white p-4 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              alt="Students collaborating on digital projects in Ghana"
              className="rounded-xl w-full h-80 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8I5c7zYmrrJlqp-eJXqiaNII9p2X1dXJMGfl8gAhXpk7Pxn7WNUcKHmrVIwtA2LFxx5UYZYfoK5tQgr0I4mxKdoYWCY2KOfN0qzcec82k_hcG3fTu4JCkeL5iGhhOREWdXYx4aYmULC11_Xsdy6chdK5tNzGnICUTdHxxjB7mUnAugWUNnUMdhp_CDBW7s8HzEww2AWUlg6k0zQ-jeZ8NiouLoK84URDHV0t5foSaLKtVhwUqGPF34B8_HHHfMhz4nySwJ11fDF6S"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="font-bold text-2xl">500+</p>
              <p className="text-sm opacity-90">
                Women & Girls Trained This Year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
