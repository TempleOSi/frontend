import Image from "next/image";

const ImgThreetext = (props:any) => {
    return (
        <div className="flex w-5/6 p-8">
        <div className="w-1/2">
            <Image
            src={props.image}
            alt="ImgSection"
            className="w-full h-auto"
            />      
        </div>
        <div className="w-1/2 p-4">
            <div className="mb-4">
            <h2 className="text-xl font-semibold">Misión</h2>
            <p className="text-gray-600">Estamos comprometidos en proporcionar a propietarios, compradores y agentes inmobiliarios las herramientas y la información necesarias para tomar decisiones inteligentes y estratégicas en el mercado de bienes raíces. Nos esforzamos por democratizar el acceso a estimaciones de precios inmobiliarios precisos y confiables.</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold">Visión</h2>
            <p className="text-gray-600">Visualizamos un mundo en el que la analítica de datos sea la fuerza motriz detrás de cada decisión en el mercado inmobiliario. Vemos un futuro en el que propietarios, compradores y agentes inmobiliarios confíen en datos precisos y actualizados para dar forma a sus inversiones y estrategias.</p>
            </div>
            <div>
            <h2 className="text-xl font-semibold">Un futuro basado en datos</h2>
            <p className="text-gray-600">En Neighborhub, estamos comprometidos en liderar este cambio hacia un futuro basado en datos en el mundo de los bienes raíces. Nuestra visión es ser la fuerza impulsora detrás de una toma de decisiones más inteligente, inversiones más exitosas y un mercado inmobiliario más transparente y accesible para todos.</p>
            </div>
        </div>
        </div>
    );
}

export default ImgThreetext;