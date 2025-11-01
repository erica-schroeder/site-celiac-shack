import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Hamburger button visible only on mobile */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-stone-900 text-amber-50 p-2 rounded"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-stone-900 text-amber-50 p-6
          flex flex-col gap-6 z-40
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          sm:translate-x-0 sm:static sm:flex
        `}
      >
        <h1 className="text-2xl font-bold">Sunrise Bakery</h1>

        <nav className="flex flex-col gap-4 text-lg mt-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-amber-300"
              onClick={() => setOpen(false)} // auto-close on mobile
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Overlay behind drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
