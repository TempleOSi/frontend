import React from "react";
import Image from "next/image";

const HeadInfo = (props: any) => {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex">
          {/* Mitad Izquierda: Texto */}
          <div className="w-1/2 p-6">
            <h2 className="text-5xl font-bold">{props.title}</h2>
            <p className="mt-4">{props.text}</p>
          </div>
          {/* Mitad Derecha: Imagen */}
          <div className="w-1/3">
            <Image 
            src={props.image} 
            alt="House Examples"/>
          </div>
        </div>
      </section>
    )
}

export default HeadInfo;