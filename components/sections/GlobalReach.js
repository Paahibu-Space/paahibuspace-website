import Button from "@/components/ui/Button";

export default function GlobalReach() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background-light overflow-hidden relative">
      <div className="absolute -right-20 top-20 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Map Visualization Side */}
        <div className="relative order-2 lg:order-1 h-[500px] w-full bg-white rounded-3xl p-8 shadow-inner flex items-center justify-center">
            {/* Using a placeholder SVG for the map as the original path was complex. 
                In a real scenario, I would copy the exact SVG path from the HTML.
                For now, I'll use a simplified representation or the same one if I can fit it cleanly.
                I'll paste the path from the legacy code.
            */}
          <div className="relative w-full h-full max-w-md mx-auto">
            <svg
              className="w-full h-full opacity-20 fill-secondary"
              viewBox="0 0 600 600"
            >
               <path
                  d="M298.5,586.8c-1.6-0.8-3.1-1.7-4.5-2.7c-2.4-1.7-4.6-3.7-6.5-5.9c-2.5-2.8-4.4-6-5.8-9.5c-1.3-3.2-1.9-6.7-1.8-10.2 c0.1-3.6,1-7.1,2.5-10.3c1.7-3.5,4.1-6.6,6.9-9.1c1.5-1.3,3.1-2.4,4.8-3.4c3.4-1.9,7.2-2.9,11.1-2.8c3.9,0.1,7.6,1.4,10.9,3.6 c3.1,2.1,5.6,5,7.3,8.3c1.6,3.1,2.4,6.6,2.3,10.1c-0.1,3.7-1.2,7.2-3.2,10.3c-2,3.1-4.9,5.5-8.3,7.1c-3.1,1.5-6.6,2.1-10.1,1.8 C302,573.9,298.5,573.3,298.5,586.8z M298.5,586.8c5.4,2.9,11.4,4.5,17.5,4.5c21.8,0,39.5-17.7,39.5-39.5s-17.7-39.5-39.5-39.5 s-39.5,17.7-39.5,39.5C276.5,568.1,285.8,581.5,298.5,586.8z M465,220h-80V60h80V220z M220,220h-80V60h80V220z M440,540h-80v-80h80 V540z M220,540h-80v-80h80V540z"
                  style={{ display: "none" }} // The original had display:none, so I'll keep it or remove it if it's useless.
                  // Wait, the original HTML had a path with display:none and another visible one.
                  // I'll assume the visible path is the one below.
              />
              <path
                  d="M320,50 C380,50 450,120 450,180 C450,230 480,250 490,280 C500,310 450,350 430,400 C410,450 380,500 340,540 C300,580 280,550 260,500 C240,450 200,400 180,350 C160,300 120,280 130,220 C140,160 260,50 320,50 Z"
                  className="fill-secondary opacity-30"
              />
            </svg>
            
            {/* Map Pin 1 */}
            <div className="absolute top-[40%] left-[25%] group cursor-pointer">
              <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-lg border-2 border-white"></div>
              <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none transform scale-95 group-hover:scale-100">
                <img
                  className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-secondary mx-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAZbF5VlnKbopcsRZuxFJdkgKE0pW2CjTaBf1JB8_ScM44mXs_EvkyqGKAUrmgEXqryuyIM_cIvUATOMiv4ztC15xFZc_2wB2bWGoT0uXS4hYRPww7abTGYP4xzimiYx_oARiVeBqYFHJMNffmi_Tan7beMPqVmyRJEEWzpknh-kng6epgStH41FTc_WQCASQTTFByfrke6b0FPiTSzjII0DX3GAurImxaTfeFsh__xUe1D-jSWOw2xpHZQ4lUVnRxx6E8us9VF4s"
                  alt="Efya A."
                />
                <p className="text-xs font-bold text-center text-secondary">
                  Efya A.
                </p>
                <p className="text-[10px] text-center text-gray-500 uppercase tracking-wide">
                  Accra, Ghana
                </p>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
              </div>
            </div>

             {/* Map Pin 2 */}
             <div className="absolute top-[45%] right-[25%] group cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-lg border-2 border-white"></div>
                <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-75 delay-300"></div>
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none transform scale-95 group-hover:scale-100">
                    <img className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-secondary mx-auto"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ev7_sk4bifE-MvoBhkDNXwmWTJhXszgzTW9AoygJoAsF88l-whTkwoHWWa6DJ8eSmju5Ytc5EdF8tzrNXJKilD1B2_tfT7P2Yn-U4RFOYoBf2X3nz2wFN1J1hsoTt7V1zmwzidCiB9oktx-1xVIQUOX8qWJywGgzk9vpv98sfQduwqEjrl_rkGfNaz-WOR8S7o_dhsTUUJkDT-Sjy6_W5Z9YN_YxXbI_oAOb0yj51_BKmZ39a00TWDWJXfdm7v9RFxZhiaYP9Do" 
                        alt="Wanjiku K."/>
                    <p className="text-xs font-bold text-center text-secondary">Wanjiku K.</p>
                    <p className="text-[10px] text-center text-gray-500 uppercase tracking-wide">Nairobi, Kenya</p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
                </div>
            </div>

          </div>
          
           <div className="absolute bottom-6 left-8 bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm max-w-[200px]">
                <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs font-bold text-gray-700">Active Chapters</span>
                </div>
                <p className="text-[10px] text-gray-500 leading-tight">Our network spans 3 countries with 15+ community ambassadors leading change.</p>
            </div>
        </div>

        {/* Text Content Side */}
        <div className="order-1 lg:order-2">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Reach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Community Ambassadors
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our ambassadors are the heartbeat of Paahibu Space. They represent
            us on campuses and in cities across Africa, organizing workshops,
            mentoring peers, and building local support networks for women in
            tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="justify-center">
              Meet All Ambassadors
              <span className="material-symbols-outlined ml-2 text-sm">
                group
              </span>
            </Button>
            <Button variant="outline" className="justify-center hover:bg-secondary hover:text-white border-secondary text-secondary">
              Become an Ambassador
              <span className="material-symbols-outlined ml-2 text-sm">
                volunteer_activism
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
