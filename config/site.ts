export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "NeighborHub",
  description:
    "¡Un lugar donde predecir la casa de tus sueños a un precio de ensueño!.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about-us",
      
    },
    {
      title: "Predict",
      href: "/predict",
    },
    {
      title: "Sign-In",
      href: "/sign-in",
    },
  ],
  links: {
    twitter: "https://twitter.com/solisolsoli",
    github: "https://github.com/TempleOSi",
    docs: "https://ui.shadcn.com",
  },
}
