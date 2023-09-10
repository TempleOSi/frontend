'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

const FormSchema = z.object({
    street: z.string().min(1, {
        message: "This field is required.",
    }),
    neigh: z.string().min(1, {
        message: "This field is required.",
    }),
    postal: z.string().min(1, {
        message: "This field is required.",
    }),
    price: z.number().int(),
    lotarea: z.number().int()
})

import { getTest } from "@/services/ml-services"



const HouseForm = () => {
    const { toast } = useToast()
    const [testResponse, setTestResponse] = useState(null); // Usar estado para almacenar la respuesta

    // useEffect(() => {
    //     getTest().then((res) => {
    //         setTestResponse(res);
    //     });
    // }, []);

    const defaultValues = {
        street: '',
        neigh: '',
        postal: '',
        price: 50,
        lotarea: 10000
    };

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues,
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('Data sended:', data)
        try {
            const response = await getTest();
            if (response) {
                toast({
                    title: "You submitted the following values:",
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    ),
                })
                setTestResponse(response);
            } else {
                toast({
                    title: "Error",
                    description: "There was a problem with your request."
                })
            }
        } catch (error) {
            // Error en la operación
            console.error('Error:', error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    return (
        <Fragment>
            <Card className="w-[500px]">
                <CardHeader>
                    <CardTitle className="text-center">Tell us about your dream home</CardTitle>
                    <CardDescription className="text-center">
                        {/* {testResponse ? testResponse : "Loading..."} */}
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                            <FormField
                                control={form.control}
                                name="street"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="mt-6">Street</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Example: Glenn Dr. ... " {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lotarea"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            ¿Cuál es el tamaño de tu casa ideal?<br />
                                            {field.value} ft²
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[10000]}
                                                max={20000}
                                                step={1}
                                                className={cn("")}
                                            />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="neigh"
                                render={({ field }) => (
                                    <FormItem className="mt-6">
                                        <FormLabel className="mt-10">Neighborhood</FormLabel>
                                        <FormControl>
                                            <Input className="mt-6" placeholder="Example: Glenn Dr. ... " {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="postal"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Postal Code</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Enter your desired postal code." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="03487">03487</SelectItem>
                                                <SelectItem value="03721">03721</SelectItem>
                                                <SelectItem value="04567">04567</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Enter your desired postal code.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>Price: ${field.value}</FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[50]}
                                                max={100}
                                                step={1}
                                                className={cn("")}
                                            />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <CardFooter>
                                <Button className="w-full mt-6" type="submit">Submit</Button>
                            </CardFooter>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default HouseForm
