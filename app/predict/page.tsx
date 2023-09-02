'use client';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ConfirmEventButton } from "@/components/confirm-event-button"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import Imagen1 from "@/components/imagen1"
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

export default async function IndexPage() {

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold"> Predict </p>
          <HouseForm />
        </div>
        <Toaster />
      </section>
    </>
  )
}
