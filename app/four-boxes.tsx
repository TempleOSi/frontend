import { BsFillHousesFill } from "react-icons/bs"
import { HiChartPie } from "react-icons/hi"
import { FaChartBar } from "react-icons/fa"
import { IoAnalyticsSharp } from "react-icons/io5"

import IconCard from "@/components/elements/icon-card"

const FourBoxes = () => {
  return (
    <section className="mr-8 ml-8">
      <div className="flex">
        <div className="w-1/2 p-4">
          <IconCard
            title="Datos en Tiempo Real"
            content="Nuestra plataforma se actualiza constantemente con datos del mercado, lo que significa que siempre tendrás información actualizada"
            icon={<IoAnalyticsSharp />}
          />
        </div>
        <div className="w-1/2 p-4">
          <IconCard
            title="Obtener una Estimación Instantánea"
            content="Descubre el valor estimado de tu propiedad en cuestión de segundos"
            icon={<FaChartBar />}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 p-4">
          <IconCard
            title="Datos en Tiempo Real"
            content="Nuestra plataforma se actualiza constantemente con datos del mercado, lo que significa que siempre tendrás información actualizada"
            icon={<HiChartPie />}
          />
        </div>
        <div className="w-1/2 p-4">
          <IconCard
            title="Comparaciones Relevantes"
            content="Compara tu propiedad con otras similares en tu área, para una perspectiva más completa y precisa"
            icon={<BsFillHousesFill />}
          />
        </div>
      </div>
    </section>
  )
}

export default FourBoxes
