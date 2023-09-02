const FourBoxes = () => {
    return(
        <section className="grid grid-cols-2 grid-rows-2 gap-4 m-10">
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 1</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 1.</p>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 2</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 2.</p>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 3</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 3.</p>
        </div>
        <div className="p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div> {/* Reemplaza con tu icono */}
            <h3 className="ml-2 text-lg font-bold">Título 4</h3>
          </div>
          <p>Texto descriptivo para el Recuadro 4.</p>
        </div>
      </section>
    )
}

export default FourBoxes;