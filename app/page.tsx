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

// Imagenes
import house from "../assets/house-example.png";
import stats from "../assets/stats.avif";

// Componentes
import HeadInfo from "@/components/elements/head-info"
import FourBoxes from "./four-boxes"
import ImgBox from "@/components/elements/img-box"
import Footer from "@/components/elements/footer"

export default async function IndexPage() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadInfo
        title="Home"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        image={house}
      />
      <FourBoxes />
      <ImgBox
        image={stats}
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        buttonText="¡Prueba una demo!"
      />
      <Footer />
    </section>
  )
}
