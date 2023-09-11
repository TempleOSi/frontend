import Image from "next/image"

const ImgSection = (props: any) => {
  return (
    <section className="max-w-6xl p-8 m-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">{props.title}</h1>
      <p className="ml-10">{props.text}</p>
      <div className="mt-8 text-center">
        <Image
          src={props.image}
          alt="ImgSection"
          className="w-2/3 mx-auto rounded-md"
        />
      </div>
    </section>
  )
}

export default ImgSection
