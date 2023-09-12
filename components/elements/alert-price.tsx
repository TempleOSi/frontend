'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const AlertPrice = (props: any) => {
    return (
        <AlertDialog open={props.open} onOpenChange={props.setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader className="p-4">
                    <AlertDialogTitle className="text-center">¡Su solicitud ha sido un exito!</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="p-4 text-center"> 
                    <AlertDialogDescription className="text-2xl mt-2 mb-8"> 
                    El precio estimado según tus parámetros es{props.price} dólares!
                    </AlertDialogDescription>
                </div>
                <AlertDialogFooter>
                    <AlertDialogAction>Ok!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default AlertPrice;