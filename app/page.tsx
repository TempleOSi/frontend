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
        title="Convierte Datos en Decisiones: Precios Precisos para Bienes Raíces"
        text="En el mundo de los bienes raíces, saber cuánto vale tu propiedad es esencial. Ya sea que estés buscando vender, comprar o simplemente quieras entender mejor tu inversión, nuestra plataforma de estimación de precios para inmuebles está aquí para ti. Nuestra herramienta de análisis de datos utiliza tecnología avanzada y una vasta base de datos de propiedades comparables para proporcionarte una valoración precisa y actualizada de tu inmueble"
        image={house}
      />
      <FourBoxes />
      <ImgBox
        image={stats}
        title="Calcula el precio de tu inmueble"
        text="No importa si eres un propietario, un comprador o un agente inmobiliario, nuestra plataforma es tu aliada en el mundo de los bienes raíces. ¡Obtén tu estimación de precios ahora y comienza a tomar decisiones inteligentes con respecto a tu patrimonio!"
        buttonText="¡Prueba una demo!"
      />
      <Footer />
    </section>
  )
}
