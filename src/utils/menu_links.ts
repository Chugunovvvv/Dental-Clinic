interface IMenuLinks {
  id: number;
  title: string;
  href: string;
}

export const menu_links: IMenuLinks[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
  },
  {
    id: 3,
    title: "Blogs",
    href: "/blogs",
  },
  {
    id: 4,
    title: "About",
    href: "/about",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
];
