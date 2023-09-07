// Componentes
import HeadInfo from '@/components/elements/head-info'
import SmtextTitleText from '@/components/elements/smtext-title-text';
import ImgThreetext from '@/components/elements/img-threetext';
import ImgSection from '@/components/elements/img-section';
import Footer from '@/components/elements/footer';

// Imagenes
import family from "../../assets/family.png";
import bigd from "../../assets/bigd.jpg";
import neighborhood from "../../assets/neighborhood.png";
import analytics from "../../assets/analytics.jpg";


const page = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadInfo
        title="About Us"
        text="Desde nuestros inicios, hemos estado en una misión implacable para revolucionar la forma en que las personas entienden y aprovechan los datos en el sector inmobiliario. Lo que comenzó como una visión audaz se ha convertido en una plataforma líder que utiliza el poder de la analítica avanzada para proporcionar estimaciones de precios inmobiliarios de primera calidad. En Neighborhub, creemos que los datos son la brújula que guía el mundo de los bienes raíces. Fundada por un equipo de apasionados por la analítica de datos, nuestra empresa se ha convertido en un faro de precisión en el mercado inmobiliario."
        image={family}
      />
      <SmtextTitleText
        legend="Nuestro propósito"
        title="Juntos, creamos un mejor futuro para todos"
        text="Imaginamos un futuro en el que cualquier persona, en cualquier parte del mundo, pueda acceder a estimaciones de precios inmobiliarios precisas y confiables con facilidad. Vemos un mercado inmobiliario más eficiente y equitativo, en el que las personas tomen decisiones basadas en información sólida en lugar de suposiciones inciertas."
      />
      <ImgThreetext
        image={analytics}
      />
      <ImgSection
        title="Analítica de datos"
        text="Estamos comprometidos a ser tu socio de confianza en el mundo de los bienes raíces, gracias a nuestra experiencia en analítica de datos. Te invitamos a unirte a nosotros en esta emocionante jornada hacia un mercado inmobiliario más transparente y basado en datos. Confía en nosotros para tomar decisiones más inteligentes y estratégicas en tu inversión inmobiliaria.
        ¡Descubre el poder de los datos con Neighborhub!"
        image={bigd}
      />
      <Footer />
    </section>
  )
}


export default page