'use client';

import HouseForm from "@/components/form/HouseForm"
import { Toaster } from "@/components/ui/toaster"

export default async function PredictPage() {

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold mb-10"> Predice el precio de tu propiedad </p>
          <HouseForm />
        </div>
        <Toaster />
      </section>
    </>
  )
}
