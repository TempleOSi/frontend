import Image from "next/image";

const ImgSection = (props:any) => {

    return (
        <section className="max-w-6xl p-8 m-8">
        <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
        <p className="text-gray-400">
            {props.text}
        </p>
        <div className="mt-8 text-right">
          <Image 
            src={props.image} 
            alt="ImgSection"
            className="w-3/4"/>
        </div>
      </section>
    )
}

export default ImgSection;