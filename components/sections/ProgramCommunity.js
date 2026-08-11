export default function ProgramCommunity({ title, description, benefits }) {
  return (
    <section className="py-20 bg-primary dark:bg-background-dark text-white relative overflow-hidden">
       {/* Background pattern matching the HTML description */}
       <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
             <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
                {title}
             </h2>
             <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                {description}
             </p>
             <ul className="space-y-4">
               {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-secondary">check_circle</span>
                     <span className="font-medium text-lg">{benefit}</span>
                  </li>
               ))}
             </ul>
          </div>
       </div>
    </section>
  );
}
