export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "TempleOS",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Predict",
      href: "/predict",
    },
    {
      title: "About Us",
      href: "/about-us",
      
    },
    {
      title: "Sign-In",
      href: "/sign-in",
      
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
