import Button from "@/components/ui/Button";

export default function CommunityAmbassadors() {
  const ambassadors = [
    {
      name: "Efya A.",
      role: "Community Lead, Ghana",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAZbF5VlnKbopcsRZuxFJdkgKE0pW2CjTaBf1JB8_ScM44mXs_EvkyqGKAUrmgEXqryuyIM_cIvUATOMiv4ztC15xFZc_2wB2bWGoT0uXS4hYRPww7abTGYP4xzimiYx_oARiVeBqYFHJMNffmi_Tan7beMPqVmyRJEEWzpknh-kng6epgStH41FTc_WQCASQTTFByfrke6b0FPiTSzjII0DX3GAurImxaTfeFsh__xUe1D-jSWOw2xpHZQ4lUVnRxx6E8us9VF4s"
    },
    {
      name: "Wanjiku K.",
      role: "Campus Rep, Kenya",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ev7_sk4bifE-MvoBhkDNXwmWTJhXszgzTW9AoygJoAsF88l-whTkwoHWWa6DJ8eSmju5Ytc5EdF8tzrNXJKilD1B2_tfT7P2Yn-U4RFOYoBf2X3nz2wFN1J1hsoTt7V1zmwzidCiB9oktx-1xVIQUOX8qWJywGgzk9vpv98sfQduwqEjrl_rkGfNaz-WOR8S7o_dhsTUUJkDT-Sjy6_W5Z9YN_YxXbI_oAOb0yj51_BKmZ39a00TWDWJXfdm7v9RFxZhiaYP9Do"
    },
    {
      name: "Aminata S.",
      role: "Tech Advocate, Senegal",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Zodwa M.",
      role: "Stem Lead, South Africa",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Chiamaka O.",
      role: "Mentor, Nigeria",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Fatima H.",
      role: "Developer, Egypt",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Lindiwe T.",
      role: "Designer, Botswana",
      image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Amara K.",
      role: "Student, Rwanda",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-primary dark:text-white">Community Ambassadors</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg">
                    Ensuring community voices shape our programs across 15+ campuses in 3 countries.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ambassadors.map((ambassador, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition text-center border border-gray-100 dark:border-gray-700">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary dark:border-primary/50">
                        <img alt={ambassador.name} className="w-full h-full object-cover"
                            src={ambassador.image} />
                    </div>
                    <h3 className="font-bold text-primary dark:text-white">{ambassador.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ambassador.role}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
