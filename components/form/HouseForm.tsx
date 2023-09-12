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

    MSZoning: z.string(),
    LotFrontage: z.number().int(),
    LotArea: z.number().int(),
    LotShape: z.string(),
    LotConfig: z.string(),
    Neighborhood: z.string(),
    HouseStyle: z.string(),
    YearBuilt: z.string().length(4, {
        message: "Por favor usa un formato de 4 dígitos."
    }),
    Exterior1st: z.string(),
    BsmtExposure: z.string(),
    HeatingQC: z.string(),
    FullBath: z.any(),
    GarageType: z.string(), //Garage location.
    WoodDeckSF: z.number().int(), //Area de terraza de madera.
    OpenPorchSF: z.number().int(), //Área cubierta del Porche.

})

import AlertPrice from '../elements/alert-price';
import { getTest } from "@/services/ml-services"



const HouseForm = () => {
    const { toast } = useToast()
    const [testResponse, setTestResponse] = useState(null); // Usar estado para almacenar la respuesta
    const [price, setPrice] = useState(null); // Usar estado para almacenar la respuesta
    const [load, setLoad] = useState(false);

    // useEffect(() => {
    //     getTest().then((res) => {
    //         setTestResponse(res);
    //     });
    // }, []);

    const defaultValues = {

        MSZoning: "A",
        LotFrontage: 68,
        LotArea: 10516,
        LotShape: "Reg",
        LotConfig: "Inside",
        Neighborhood: "Blmngtn",
        HouseStyle: "1Story",
        YearBuilt: "1984",
        Exterior1st: "AsbShng",
        BsmtExposure: "Gd",
        HeatingQC: "Ex",
        FullBath: 1,
        GarageType: "2Types", //Garage location.
        WoodDeckSF: 95, //Area de terraza de madera.
        OpenPorchSF: 46, //Área cubierta del Porche.

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
                setPrice(response)
                setLoad(true)
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
                    <CardTitle className="text-center">¡Cuéntanos todos los detalles!</CardTitle>
                    <CardDescription className="text-center">
                        {/* {testResponse ? testResponse : "Loading..."} */}
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">

                            <FormField
                                control={form.control}
                                name="MSZoning"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>¿En qué zona del vecindario está ubicada la propiedad? (MSZoning)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Clasificación de zonificación." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="A">Agricultura</SelectItem>
                                                <SelectItem value="C">Comercial</SelectItem>
                                                <SelectItem value="FV">Zona Residencial de Aldea Flotante</SelectItem>
                                                <SelectItem value="I">Industrial</SelectItem>
                                                <SelectItem value="RH">Densidad Alta Residencial</SelectItem>
                                                <SelectItem value="RL">Densidad Baja Residencial</SelectItem>
                                                <SelectItem value="RP">Densidad Baja Residencial (Parque)</SelectItem>
                                                <SelectItem value="RM">Densidad Media Residencial</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Identificación de la clasificación de zonificación general de la venta.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="LotFrontage"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            Estacionamiento de la calle conectado a la casa (LotFrontage)<br />
                                            {field.value} ft
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[68]}
                                                max={100}
                                                min={22}
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
                                name="LotArea"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            ¿Cuál es el tamaño de tu propiedad ideal? (LotArea)<br />
                                            {field.value} ft²
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[10516]}
                                                max={20000}
                                                min={2000}
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
                                name="LotShape"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Forma General de la Propiedad (LotShape)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona la forma general de la propiedad." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Reg">Regular</SelectItem>
                                                <SelectItem value="IR1">Ligeramente irregular</SelectItem>
                                                <SelectItem value="IR2">Moderadamente irregular</SelectItem>
                                                <SelectItem value="IR3">Irregular</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Se refiere a la forma general de la propiedad.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="LotConfig"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>¿Cómo está ubicada la propiedad? (LotConfig)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Configuración del lote." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Inside">Lote interior</SelectItem>
                                                <SelectItem value="Corner">Lote en esquina</SelectItem>
                                                <SelectItem value="CulDSac">Cul-de-sac</SelectItem>
                                                <SelectItem value="FR2">Frente en 2 lados de la propiedad</SelectItem>
                                                <SelectItem value="FR3">Frente en 3 lados de la propiedad</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Configuración del lote.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Neighborhood"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>¿En qué vecindario de Ames está tu propiedad? (Neighborhood)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona un barrio." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Blmngtn">Bloomington Heights</SelectItem>
                                                <SelectItem value="Blueste">Bluestem</SelectItem>
                                                <SelectItem value="BrDale">Briardale</SelectItem>
                                                <SelectItem value="BrkSide">Brookside</SelectItem>
                                                <SelectItem value="ClearCr">Clear Creek</SelectItem>
                                                <SelectItem value="CollgCr">College Creek</SelectItem>
                                                <SelectItem value="Crawfor">Crawford</SelectItem>
                                                <SelectItem value="Edwards">Edwards</SelectItem>
                                                <SelectItem value="Gilbert">Gilbert</SelectItem>
                                                <SelectItem value="IDOTRR">Iowa DOT and Rail Road</SelectItem>
                                                <SelectItem value="MeadowV">Meadow Village</SelectItem>
                                                <SelectItem value="Mitchel">Mitchell</SelectItem>
                                                <SelectItem value="Names">North Ames</SelectItem>
                                                <SelectItem value="NoRidge">Northridge</SelectItem>
                                                <SelectItem value="NPkVill">Northpark Villa</SelectItem>
                                                <SelectItem value="NridgHt">Northridge Heights</SelectItem>
                                                <SelectItem value="NWAmes">Northwest Ames</SelectItem>
                                                <SelectItem value="OldTown">Old Town</SelectItem>
                                                <SelectItem value="SWISU">South y West de la Universidad Estatal de Iowa</SelectItem>
                                                <SelectItem value="Sawyer">Sawyer</SelectItem>
                                                <SelectItem value="SawyerW">Sawyer West</SelectItem>
                                                <SelectItem value="Somerst">Somerset</SelectItem>
                                                <SelectItem value="StoneBr">Stone Brook</SelectItem>
                                                <SelectItem value="Timber">Timberland</SelectItem>
                                                <SelectItem value="Veenker">Veenker</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Ubicación física dentro de los límites de la ciudad de Ames.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="HouseStyle"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Estilo de vivienda (HouseStyle)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona un estilo de vivienda." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1Story">Una planta</SelectItem>
                                                <SelectItem value="1.5Fin">Una y media planta: 2do nivel terminado</SelectItem>
                                                <SelectItem value="1.5Unf">Una y media planta: 2do nivel sin terminar</SelectItem>
                                                <SelectItem value="2Story">Dos plantas</SelectItem>
                                                <SelectItem value="2.5Fin">Dos y media plantas: 2do nivel terminado</SelectItem>
                                                <SelectItem value="2.5Unf">Dos y media plantas: 2do nivel sin terminar</SelectItem>
                                                <SelectItem value="SFoyer">Split Foyer</SelectItem>
                                                <SelectItem value="SLvl">Split Level</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Estilo de la vivienda.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="YearBuilt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="mt-6">¿En qué año fue construida la vivienda? (YearBuilt)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Por favor use un formato de 4 dígitos." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Exterior1st"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Cubierta exterior de la casa (Exterior1st)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona una cubierta exterior." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="AsbShng">Asbestos Shingles (Tejas de asbesto)</SelectItem>
                                                <SelectItem value="AsphShn">Asphalt Shingles (Tejas de asfalto)</SelectItem>
                                                <SelectItem value="BrkComm">Brick Common (Ladrillo común)</SelectItem>
                                                <SelectItem value="BrkFace">Brick Face (Ladrillo a la vista)</SelectItem>
                                                <SelectItem value="CBlock">Cinder Block (Bloque de ceniza)</SelectItem>
                                                <SelectItem value="CemntBd">Cement Board (Tablero de cemento)</SelectItem>
                                                <SelectItem value="HdBoard">Hard Board (Tablero duro)</SelectItem>
                                                <SelectItem value="ImStucc">Imitation Stucco (Estuco de imitación)</SelectItem>
                                                <SelectItem value="MetalSd">Metal Siding (Revestimiento de metal)</SelectItem>
                                                <SelectItem value="Other">Other (Otro)</SelectItem>
                                                <SelectItem value="Plywood">Plywood (Madera contrachapada)</SelectItem>
                                                <SelectItem value="PreCast">PreCast (Prefabricado)</SelectItem>
                                                <SelectItem value="Stone">Stone (Piedra)</SelectItem>
                                                <SelectItem value="Stucco">Stucco (Estuco)</SelectItem>
                                                <SelectItem value="VinylSd">Vinyl Siding (Revestimiento de vinilo)</SelectItem>
                                                <SelectItem value="Wd Sdng">Wood Siding (Revestimiento de madera)</SelectItem>
                                                <SelectItem value="WdShing">Wood Shingles (Tejas de madera)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Cubierta exterior de la casa.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="BsmtExposure"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Exposición del sótano (BsmtExposure)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona la exposición del sótano." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Gd">Buena Exposición</SelectItem>
                                                <SelectItem value="Av">Exposición Promedio (los niveles divididos o entradas típicamente tienen puntajes promedio o superiores)</SelectItem>
                                                <SelectItem value="Mn">Exposición Mínima</SelectItem>
                                                <SelectItem value="No">Sin Exposición</SelectItem>
                                                <SelectItem value="NA">Sin Sótano</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Se refiere a las paredes del nivel de salida o jardín del sótano.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="HeatingQC"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Calidad y Condición del Sistema de Calefacción (HeatingQC)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona la calidad y condición de calefacción." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Ex">Excelente</SelectItem>
                                                <SelectItem value="Gd">Buena</SelectItem>
                                                <SelectItem value="TA">Promedio/Típica</SelectItem>
                                                <SelectItem value="Fa">Regular</SelectItem>
                                                <SelectItem value="Po">Mala</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Se refiere a la calidad y condición del sistema de calefacción.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="FullBath"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>¿Cuántos baños completos tiene la vivienda? (FullBath)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Número de baños completos." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Número de baños completos.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <FormField
                                control={form.control}
                                name="FullBath"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            ¿Cuántos baños completos tiene la vivienda? (FullBath)<br />
                                            {field.value}
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[1]}
                                                max={3}
                                                min={0}
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
                                name="GarageType"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Ubicación del Garaje (GarageType)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona la ubicación del garaje." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="2Types">Más de un tipo de garaje</SelectItem>
                                                <SelectItem value="Attchd">Adjunto a la casa</SelectItem>
                                                <SelectItem value="Basment">Garaje en el sótano</SelectItem>
                                                <SelectItem value="BuiltIn">Incorporado (parte de la casa, típicamente tiene habitación encima del garaje)</SelectItem>
                                                <SelectItem value="CarPort">Cochera</SelectItem>
                                                <SelectItem value="Detchd">Independiente de la casa</SelectItem>
                                                <SelectItem value="NA">Sin Garaje</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Se refiere a la ubicación del garaje.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <FormField
                                control={form.control}
                                name="WoodDeckSF"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            ¿Cuál es el área de la terraza de madera? (WoodDeckSF)<br />
                                            {field.value} ft²
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[1515]}
                                                max={4000}
                                                min={1000}
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
                                name="OpenPorchSF"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            ¿Cuál es el área del porche? (OpenPorchSF)<br />
                                            {field.value} ft²
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[75]}
                                                max={150}
                                                min={0}
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
            <AlertPrice open={load} setOpen={setLoad} price={price} />
        </Fragment>
    )
}

export default HouseForm
