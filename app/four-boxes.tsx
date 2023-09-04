import SimpleCard from "@/components/elements/simple-card";

const FourBoxes = () => {
  return (
    <section className="mr-8 ml-8">
      <div className="flex">
        <div className="w-1/2 p-4">
          <SimpleCard
          title="Análisis detallado"
          content="Explora detalles específicos de tu inmueble, como su ubicación, tamaño, características y más, para comprender mejor cómo se calcula su valor"
          />
        </div>
        <div className="w-1/2 p-4">
          <SimpleCard
          title="Obtener una Estimación Instantánea"
          content="Descubre el valor estimado de tu propiedad en cuestión de segundos"
        />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 p-4">
        <SimpleCard
          title="Datos en Tiempo Real"
          content="Nuestra plataforma se actualiza constantemente con datos del mercado, lo que significa que siempre tendrás información actualizada"
        />
        </div>
        <div className="w-1/2 p-4">
        <SimpleCard
          title="Comparaciones Relevantes"
          content="Compara tu propiedad con otras similares en tu área, para una perspectiva más completa y precisa"
        />
        </div>
      </div>
    </section>
  )
}

export default FourBoxes;