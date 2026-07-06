import Link from 'next/link';

const footerColumns = [
  {
    title: 'Brainrots',
    links: [
      { label: 'All Brainrots', href: '/brainrots' },
      { label: 'Best Brainrots', href: '/best-brainrots' },
      { label: 'Index', href: '/catalog' },
      { label: 'Traits', href: '/traits' },
    ],
  },
  {
    title: 'Events',
    links: [
      { label: 'Admin Abuse', href: '/admin-abuse' },
      { label: 'Taco Tuesday', href: '/taco-tuesday' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: 'https://discord.gg/stealabrainrot' },
      { label: 'Roblox', href: 'https://www.roblox.com/games/' },
      { label: 'Twitter/X', href: 'https://x.com/' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#05030c] border-t border-[#2a2826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main grid: 5 columns, collapses to 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1-4: Link sections */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#d4af6a] mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8a8884] hover:text-[#f0ece4] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Copyright / Brand info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#d4af6a] mb-4">
              About
            </h3>
            <div className="space-y-2">
              <p className="text-base font-semibold text-[#f0ece4]">
                Steal a Brainrot Wiki
              </p>
              <p className="text-sm text-[#8a8884] leading-relaxed">
                The complete community wiki for Steal a Brainrot — collect, trade, and go viral with the best brainrots.
              </p>
              <p className="text-xs text-[#8a8884] pt-2">
                &copy; {new Date().getFullYear()} SAB Wiki. Not affiliated with Roblox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
