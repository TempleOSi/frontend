// Libraries
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ConfirmEventButton } from "@/components/confirm-event-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import HouseForm from "@/components/form/HouseForm"

// Imagenes
import ames from "../assets/ames.png";
import family from "../assets/family.png";

// Componentes
import HeadInfo from "@/components/elements/head-info"
import ImgSection from "@/components/elements/img-section"
import FourBoxes from "./four-boxes"

export default async function IndexPage() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadInfo
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        image={family}
      />
      <FourBoxes />
      <ImgSection
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        image={ames}
      />
    </section>
  )
}
