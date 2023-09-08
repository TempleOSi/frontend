import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b h-20">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end space-x-4 mt-4">
          <nav className="flex items-center space-x-1">
            <Link
              key={1}
              href={"/sign-in"}
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                "opacity-80"
              )}
            >
              {"Iniciar sesión"}
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>


            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
