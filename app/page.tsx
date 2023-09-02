import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ConfirmEventButton } from "@/components/confirm-event-button"
import { Button } from "@/components/ui/button"
import Image from "next/image";
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
import ames from "../assets/ames.png";
// Imagenes
import family from "../assets/family.png";

// Componentes
import HeadInfo from "@/components/elements/head-info"

export default async function IndexPage() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadInfo
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        image={family}
      />
      <section className="grid grid-cols-2 grid-rows-2 gap-4">
        {/* Recuadro 1 */}
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 1</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 1.</p>
        </div>
        {/* Recuadro 2 */}
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 2</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 2.</p>
        </div>
        {/* Recuadro 3 */}
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 3</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 3.</p>
        </div>
        {/* Recuadro 4 */}
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 4</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 4.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto p-8">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-4">Título de la Sección</h1>
        {/* Descripción (Lore Ipsum) */}
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut
          dignissim mattis, ex augue hendrerit ante, ut efficitur neque dolor eu ligula. Nulla
          facilisi. Sed euismod.
        </p>
        {/* Imagen */}
        <div className="mt-8 text-right">
          <Image 
            src={ames} 
            alt="Turquoise House"
            className="w-3/4"/>;
        </div>
      </section>
    </section>
  )
}
