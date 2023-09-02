'use client';

import React, { useEffect, useState } from 'react';
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
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const FormSchema = z.object({
    street: z.string().min(1, {
        message: "This field is required.",
    }),
    neigh: z.string().min(1, {
        message: "This field is required.",
    }),
})

import { getTest } from "@/services/ml-services"

const HouseForm = () => {
    const [testResponse, setTestResponse] = useState(null); // Usar estado para almacenar la respuesta

    useEffect(() => {
        getTest().then((res) => {
            setTestResponse(res);
        });
    }, []);

    const defaultValues = {
        street: '',
        neigh: '', // Proporciona un valor inicial para los campos del form.
    };

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues,
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('form submitted!', data)
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    <code>{getTest()}</code>
                </pre>
            ),
        })
    }

    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle className="text-center">Tell us about your dream home</CardTitle>
                <CardDescription className="text-center">
                    {testResponse ? testResponse : "Loading..."}
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
                        name="neigh"
                        render={({ field }) => (
                            <FormItem className="mt-6">
                                <FormLabel className="mt-10" >Neighborhood</FormLabel>
                                <FormControl>
                                    <Input className="mt-6" placeholder="Example: Glenn Dr. ... " {...field} />
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





    )
}

export default HouseForm
