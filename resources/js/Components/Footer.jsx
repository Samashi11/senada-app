export default function Footer() {
  return (
    <footer className="bg-[#f8f3ec] dark:bg-[#151411] rounded-t-[3rem] w-full mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto font-['Plus_Jakarta_Sans'] text-sm leading-relaxed">
        <div className="space-y-6">
          <div className="text-xl font-black text-[#2b4459] dark:text-[#d0e4ff]">
            SENADA
          </div>
          <p className="text-[#43474c] dark:text-[#fef9f2]/60">
            Lembaga Dakwah Kampus STT Nurul Fikri. Bridging spirituality and
            technology for a better future.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-[#2b4459] cursor-pointer hover:bg-[#904d03] hover:text-white transition-all">
              <span
                className="material-symbols-outlined text-lg"
                data-icon="alternate_email"
              >
                alternate_email
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-[#2b4459] cursor-pointer hover:bg-[#904d03] hover:text-white transition-all">
              <span
                className="material-symbols-outlined text-lg"
                data-icon="public"
              >
                public
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-[#2b4459] dark:text-[#d0e4ff] mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-[#43474c] dark:text-[#fef9f2]/60 hover:text-[#904d03] transition-colors"
                  href="#"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  className="text-[#43474c] dark:text-[#fef9f2]/60 hover:text-[#904d03] transition-colors"
                  href="#"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  className="text-[#43474c] dark:text-[#fef9f2]/60 hover:text-[#904d03] transition-colors"
                  href="#"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2b4459] dark:text-[#d0e4ff] mb-6">
              Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-[#43474c] dark:text-[#fef9f2]/60 hover:text-[#904d03] transition-colors"
                  href="https://www.instagram.com/senada.sttnf/"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className ="text-[#43474c] dark:text-[#fef9f2]/60 hover:text-[#904d03] transition-colors"
                  href="https://www.youtube.com/c/LDKSenadaSTTNF"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  className="text-[#43474c] dark:text-[#fef9f2]/60 hover:text-[#904d03] transition-colors"
                  href="https://id.linkedin.com/company/senada-stt-nf"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-[#43474c] dark:text-[#fef9f2]/60 hover:text-[#904d03] transition-colors"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-[#2b4459] dark:text-[#d0e4ff]">
            Join Our Newsletter
          </h4>
          <p className="text-[#43474c] dark:text-[#fef9f2]/60">
            Get spiritual insights and campus updates directly.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-white border-none rounded-full px-4 py-2 flex-grow focus:ring-2 focus:ring-[#904d03] text-sm"
              placeholder="Your email"
              type="email"
            />
            <button className="bg-[#2b4459] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#904d03] transition-colors">
              <span className="material-symbols-outlined" data-icon="send">
                send
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2d2c28]/5 dark:border-[#fef9f2]/5 py-8 text-center text-[#43474c]/40 dark:text-[#fef9f2]/40 text-xs">
        © 2024 SENADA STT Nurul Fikri. All Rights Reserved.
      </div>
    </footer>
  );
}
