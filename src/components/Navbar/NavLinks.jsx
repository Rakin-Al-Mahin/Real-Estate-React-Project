export default function NavLinks() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "blog-grids.html", label: "Blog" },
  ];

  return (
    <ul className="hidden lg:flex">
      {links.map((link, index) => (
        <li className="group relative" key={index}>
          <a
            href={link.href}
            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
