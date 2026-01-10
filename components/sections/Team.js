import Link from "next/link";
import Image from "next/image";

export default function Team() {
  return (
    <section className="w-full px-4 py-20 bg-background-light">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-[600px]">
            <h2 className="text-neutral-dark text-3xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-600">
              The passionate individuals working tirelessly to make our vision a
              reality.
            </p>
          </div>
          <Link
            className="text-primary font-bold hover:underline flex items-center gap-1"
            href="/team"
          >
            View all members{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="group relative flex flex-col gap-3">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
              <Image
                alt="Portrait of Amina, Founder & CEO"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaACuKg1cCK31onWda7Em-vYmqI22sjqlPAIbr5ajHEC7AyoKRStTRca5pVfmqIz541Wa7xU6nHC6ejJbsfFqZhyoHkgeqg82HJaGgALdGYBZwKncRDOTkfNKoAAf4QxJbb5eAi7BMkmXChRZ7ectyB5dX4m7sztlrNoXsKSln6yaXFmefuakQr4YtfI4KFFIkv5ZGQaERK5T_tWwP4rYkH1n_Fz18LG1QB3QIul7KD6Zj-ZbX1sNYiq-3AW8HvKFw7vb54QhwAwzP"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div>
              <h3 className="text-neutral-dark text-lg font-bold">
                Amina Diop
              </h3>
              <p className="text-primary text-sm font-medium">Founder & CEO</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="group relative flex flex-col gap-3">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
              <Image
                alt="Portrait of Sarah, Program Director"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAavQQyebqiRwNcZR35QCRZBIM-tpxUVWAFdj7aSZt8m-0a6PlFfu7GmaGfvtDjpJlr5kSuyo3rXG0sS5CIm6MB6XOfC9fwU6oXeF4yxY7funieKFcRzQJesxS9odoSHzlw2UET05AN0b91_-Q_ny87ou8_5TatRzz6cAnH2R9UEn_8D2uddOsKqHoqOGWUUiE_OzMEOL5eeLXyFClTPcpAQyxXy71SKAqNyqkRxd8JcPsBqTDCMc8may3BOyFnNhG6j1rkk8mZA5za"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div>
              <h3 className="text-neutral-dark text-lg font-bold">
                Sarah Okafor
              </h3>
              <p className="text-primary text-sm font-medium">
                Program Director
              </p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="group relative flex flex-col gap-3">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
              <Image
                alt="Portrait of Kwame, Tech Lead"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcsa-PzFsKcSMfsedW2Vy6PWmuoq3C9Ubmk_a-WNMm4bVYsIWkV6UwHU9mYSaoKZT-8KdcuVerfX-6R1sXWMCIEW9oH3Br33kC2j5SqNYquznUR2moZYz6GAaAs5GrJBaIhaGl8iFKJPnQQ4SSmwi6k1PNrXJLVXT9yNiPh6t5-fPDc1oOZ-3NbU1KVF7LAwO_3HddufcPypzH_QDZZryG6kqExI6rjZ8eT0VavYQtGFSrkrKnkLzy4R74HlhVjtkI03JcWlObdYPN"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div>
              <h3 className="text-neutral-dark text-lg font-bold">
                Kwame Mensah
              </h3>
              <p className="text-primary text-sm font-medium">
                Head of Technology
              </p>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="group relative flex flex-col gap-3">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
              <Image
                alt="Portrait of Zola, Community Manager"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPFP2i39FciFUOj6fjTRbjvjD-R_kY6O_kJfxcvXrA7sxiEizFgioPeHu0nhFWH_azSIVKbRl0muBid65DoAjwUSms2I42cpk31_2TnpF9fYjEYWigt4SPAH_uPx5HgTzEhCotHeSB1bGRslBAaSGW_1lqYuUVxAKuu-qWGTLSx-2n5qex35VCC9GWu0DWFUBcJi4Zl-zN1iyTiE0-Re0kz7zG216OU3Dkhygx2rPWRprCHFlyeLUwuHiA5zjZ7sGHPAG5d7rPX9H"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div>
              <h3 className="text-neutral-dark text-lg font-bold">
                Zola Abebe
              </h3>
              <p className="text-primary text-sm font-medium">
                Community Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
