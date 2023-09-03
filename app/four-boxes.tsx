const FourBoxes = () => {
    return(
        <section className="grid grid-cols-2 grid-rows-2 gap-4 m-10 bg-border">
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Análisis detallado</h3>
          </div>
          <p>Explora detalles específicos de tu inmueble, como su ubicación, tamaño, características y más, para comprender mejor cómo se calcula su valor</p>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Obtener una Estimación Instantánea</h3>
          </div>
          <p>Descubre el valor estimado de tu propiedad en cuestión de segundos</p>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Datos en Tiempo Real</h3>
          </div>
          <p>Nuestra plataforma se actualiza constantemente con datos del mercado, lo que significa que siempre tendrás información actualizada</p>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Comparaciones Relevantes</h3>
          </div>
          <p>Compara tu propiedad con otras similares en tu área, para una perspectiva más completa y precisa</p>
        </div>
      </section>
    )
}

export default FourBoxes;