import React from 'react'

// Componentes
import HeadInfo from '@/components/elements/head-info'

// Imagenes
import family from "../../assets/family.png";

const page = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadInfo
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        image={family}
      />
    </section>
  )
}


export default page