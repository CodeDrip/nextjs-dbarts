"use client"

const FOOTER_LINKS = {
  About: ['Our Story', 'Our Team'],
  Programs: ['Art Workshops', 'Fashion Design'],
  Support: ['Donate', 'Volunteer'],
};

const SOCIAL_ICONS = [
  {
    name: 'Instagram',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-neon text-charcoal">
      {/* Footer Top */}
      <div className="container-dba py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <img
            src="/assets/logo.png"
            alt="D Block Arts"
            className="w-[64px] h-[64px] md:w-[96px] md:h-[96px] object-contain"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.name}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-12 h-12 rounded-full bg-orange text-charcoal flex items-center justify-center hover:bg-charcoal hover:text-orange transition-all duration-250"
                aria-label={social.name}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-peach">
        <div className="container-dba py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Navigation Links */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-body text-[14px] uppercase tracking-wider text-dark mb-4 font-bold">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="font-body text-[14px] uppercase text-dark text-decoration-link"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Right side - Slogan and credits */}
            <div className="md:col-span-1 md:text-right">
              <p className="font-display text-[22px] font-bold italic text-dark mb-6">
                "Creativity Empowers."
              </p>
              <p className="font-body text-[12px] text-dark opacity-60">
                &copy; 2024 D Block Arts. All Rights Reserved.
              </p>
              <p className="font-body text-[12px] text-dark opacity-60 mt-1">
                Designed by the D Block Arts Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
