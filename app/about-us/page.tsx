import React from 'react'

// Componentes
import HeadInfo from '@/components/elements/head-info'
import SmtextTitleText from '@/components/elements/smtext-title-text';
import ImgThreetext from '@/components/elements/img-threetext';
import ImgSection from '@/components/elements/img-section';

// Imagenes
import family from "../../assets/family.png";
import example from "../../assets/example.png";
import neighborhood from "../../assets/neighborhood.png";


const page = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadInfo
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        image={family}
      />
      <SmtextTitleText
        legend="Nuestro propósito"
        title="Juntos, creamos un mejor futuro para todos"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
      />
      <ImgThreetext
        image={example}
      />
      <ImgSection
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus ut"
        image={neighborhood}
      />
    </section>
  )
}


export default page