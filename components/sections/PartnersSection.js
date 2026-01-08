export default function PartnersSection() {
  return (
    <div className="py-24 bg-white dark:bg-background-dark/80 relative overflow-hidden transition-colors">
      <div className="absolute left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent -z-10 pointer-events-none">
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-10">
              <h2 className="text-primary dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-3">Our Network</h2>
              <h1 className="text-[#161019] dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.015em] px-4 pb-4">
                Trusted By Leading Organizations
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-[600px]">
                Together with our partners, we are redefining the future of technology for women across Africa through education, mentorship, and opportunity.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 p-4 mb-16 items-center justify-items-center">
              {[
                { name: "TechAfrica", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBszxGP8MS_FpH6aAgZmyATuUyfYj90t3QlOt9B1ZOXr_-D98J5FhkNctgkjxOOi5IaGTMw8asxw_Uy87mPxN8mL2XXm7xd1D_3l-hp18DhtR8leWLe14hBlF_eg8A7Xzn7Mw5qbJc4-CCzTNmFZmQztgExCOMRXDKhAJwMcsU36I9Sgf2xDYRKfil1h0O2xZknHrObat2BM2Go8X7esXx9bRiMoVNciClj9h8AHbQjw-gkTT-toX4Z63rW9NCif7BgzOxGl51j-1g" },
                { name: "Global Dev", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0vQ0d3yIMhKOFKo7UKC-Iemj_h9AitpeMlV6Ke611PgNy5Pu5V3bBuFa5BhUVaNiyRvRCFnCqQ4j1SG9wVcpIWcXNIQG3aHroYNe-6vgmjHSDsoONjHNeWEx4xXJA9C_BPTDkiVU8QwS7srZGELpzrCX_gs7LtZVaO5y77u0ojFQSe1NGG23ye5jW-prUqp0y5yzpC6CZzKlwICBNbsmjR9iAzFIbM9Jj4lMlKT0xb1wPN5vEb0RC3IqRdokdf9chRQkZCO8O6Uk" },
                { name: "Innovate Her", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5mEUW-VmYPrKXvjgQhRU2dP3BCKPAVRLZcEmA_IJtPTF-UbVV3uObXq1PDkVeZjQAmFNvtAauUTcPnFQ8ik-KQ7vO_4S96Sh5w6CeOIo3NQ5hQULGkwPwE-9NV0xoQETsIpueTeFYHrALl3cnVgkri8UiMKXvtVogtcAKiPpG5I3l10hg4NW5W0BuC4apjfwEIj3n8gIc0OaeJ5cYfbJgIp3h7yQVszB_IiiLRsvGYam0RMrJili__Er54LiQU_hkCE9X6eViO0I" },
                { name: "Cloud Systems", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgn3RMznlSZ2xQNQz3C5imWki4kYghctOD3WfbKK2aoZCdCfvi3TL-Yv43pceXv8TVVaPeDawPVivP61DJUuuBVsgdzJYjyokQmNeA3eDB4X82OPNDZ4xYzli9Lz-Hkf6iKThpztrEgXH5ogid-LxVzEphmd3V7WS_tvxs1OoeFSNgBzQT05--SWP1WmFWSM_R8NO-sqlPO-8u85XWOy8U6kdWIv_PIjeBr2OGhC_ydmN1aUW8_G9waCR_YbnegPPSJOVdWRm12Oo" },
                { name: "Future Code", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASuV4zRYRgzRtTwGPtxSnfE2r34XDpkXVz5KF2ci7WXdDb27YUD6ZOuepv0RqE_ocFtrRlZoyMs8n9taOTozBtmr0PIzIXAkPRRByZgqP-J_xo3b7BSHB-orId7vt9KpMLkVoivmJ3u4L50HIjwfM-lLVWNlT3xm1IK6TrpallEzCYPAD0tSg-x4FKqMXSdS4lrpyIoGJH4ePcihE7Do25LTW8ZRmU9nLtzHSYV7qAQGIvigklypxLrapQpsZWvgyYLZAyun9Ui6g" },
                { name: "Edu Access", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgy0b0x5s_Kvjx2ivxVhpKRf4257s9juHboOYQZsz4Df32fct2MHUg6AQFRvtA8c8exThujhjBxkPFhov_5peMsPLz4LCI8nIqJow_RXvGf_SeDl-g4DUOBHiWVlJQEFk66pVY-9L81iDqf0BjWrrwhePOxuqTzk2ZCK0vZpqz4JeTBBiuARpymy9Z3p1dLbTGthNdyDdG3oiqLVJmjQTFLDlIZwB8L_Fqa4JOeQmZJ0i4wtXU9sUNiq5ZQWY5nLtzHSYV7qAQGIvigklypxLrapQpsZWvgyYLZAyun9Ui6g" },
                { name: "Women In Tech", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3FxhWpuPEugHSjInbMjHQ9zduq2TcGPHVPlNBshe1oPpW2AK5pW4iLt-iRhev-s9edUBHvI6dD0EKoTSnZzpxMdOHOQqizJGHF0czvZFaZ8Hxb_CVi1qgoOs7RNdFR6nTFThjq5W0sUAFhutChNvSGc2ab5baTHLfP_ysdqZIN8HItumXi6EFbSZmbWXRAK8WSCx5j1EDJLMEwbHvWRdNJ_t4d4YqathwOUnYPIzRfZ1rGA5D5db7GdSFnodC6m4MiO1Fy2fVmfY" },
                { name: "Build Africa", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCORrjA2xOXiaXxEI4nrbnd0w0LOhQLFu9i_rvaHOV3YLCkEB8Ak6pl0mzlPZfZUzUFvrjF8db5_3sveNqUcKd1c4hYB-t_xhhmvUQP94q5QyrkUdxm_2Qokd7qiyxPiB5TOmgopmDKyF4C7W1LsQ4N5W7fNEQ5ISLbkm53MUa-BCJ2XkmvX3TiljFbIyrkzRnqLflTBq8JIXS3IHxyJ7RyI83T3_D9qNFiED1kH5gB0WKF-J_jQjpGoUED_8BWzpkxSRlVkxLwAMo" },
                { name: "Startup Hub", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK3Ov0fi-9XyuYQrxHuAcbIaIOP0JhmcBpqzH4Rn_hb3LvgDfwxWJSmyK5u7uDAIh0H8-ZjMk5QsqBJ0eda6FNrV_iP-PyCq3uwy8Qi5dFpYTq2N1XJIE0pak4KZDqk99bepWt0ze_lChmjCAkzJ4XF9S0JOZPXpWjkvOcB0mSNUah7AEQ4zJg-E92t2davcDM_mP5QHjiTZ_4Wj2m9VvbG1mUPJ-MIT-ejKcX2ghKjTQnYU6GnyP-ie3SCpmPm00OVk1FbhWhGhY" },
                { name: "Digital Rights", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Avs4ekxKYkNgeKrovR2Y1-kaIEROrXcfdicMxEjw2Pk9Aoa7LfMvLnG8Hv6vYxczS9YzLXLk4G0PDudJcg22PM9OZ0BhsVeY8PaUIE5g8fFijdzMW68kXH3ElcuAE3wQFgFk3g3TIjjoLtqpOyA5rp6Rfp5JIpyK4A_dap70xdc50I7AysRQ78IT7vKKSfdZCd3IvjdcEFFfxDHPQDPsc74z0-wO0nGSUbp16R7PdQUaVTW2ezs2-CpUu6M64CWSyXJWVaCjQjc" },
              ].map((partner, index) => (
                <div key={index} className="group flex items-center justify-center w-full h-[80px] p-2 dark:bg-white/5 dark:rounded-lg transition-all duration-300">
                  <img 
                    alt={`${partner.name} Partner Logo`} 
                    className="h-[40px] md:h-[50px] w-auto object-contain dark:brightness-0 dark:invert opacity-80 group-hover:opacity-100 transition-all"
                    src={partner.src} 
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-6">
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border-2 border-primary dark:border-white text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-colors duration-300 text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Become a Partner</span>
              </button>
            </div>
      </div>
    </div>
  );
}
