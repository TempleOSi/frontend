"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import BarChar from "@/components/charts/barchar";

const page = () => {
  return (
    <section className="container w-screen">
      <div className="p-8 mt-4">
        <h2 className="text-5xl font-bold">Visualización</h2>
        <p className="mt-4">Esto es:</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChar />
        </CardContent>
      </Card>
      <Toaster />
    </section>
  )
}


export default page