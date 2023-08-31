import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ConfirmEventButton } from "@/components/confirm-event-button"
import { Button } from "@/components/ui/button"
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

// import { getTest } from "@/services/ml-services"

export default async function IndexPage() {

  //console.log(getTest())

  // Initiate both requests in parallel
  // const test = getTest()

  // Wait for the promises to resolve
  // const [testResponse] = await Promise.all([test])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-bold"> Housing Prices </p>
        <Imagen1 />
        {/* <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-center">Tell us about your dream home</CardTitle>
            <CardDescription className="text-center">
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input />
          </CardContent>
          <CardContent>
            <Input />
          </CardContent>
          <CardContent>
            <Input />
          </CardContent>
          <CardContent>
            <Input />
          </CardContent>
          <CardContent>
            <Input />
          </CardContent>
          <CardContent>
            <Input />
          </CardContent>
          <CardFooter>
          <ConfirmEventButton/>
          </CardFooter>
        </Card> */}

      </div>
    </section>
  )
}
