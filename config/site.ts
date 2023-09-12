export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "NeighborHub",
  description:
    "¡Un lugar donde predecir la casa de tus sueños a un precio de ensueño!.",
  secNav: [
      {
        title: "Inicia sesión",
        href: "/sign-in",
      },
    ],
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Sobre nosotros",
      href: "/about-us",
      
    },
    {
      title: "Predice tu casa",
      href: "/predict",
    },
  ],
  

  links: {
    twitter: "https://twitter.com/solisolsoli",
    github: "https://github.com/TempleOSi",
    docs: "https://ui.shadcn.com",
  },
}
