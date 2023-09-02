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
            <h2 className="text-xl font-semibold">1 Subtitulo</h2>
            <p className="text-gray-600">1 texto descriptivo</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold">2 Subtitulo</h2>
            <p className="text-gray-600">2 texto descriptivo</p>
            </div>
            <div>
            <h2 className="text-xl font-semibold">3 Subtitulo</h2>
            <p className="text-gray-600">3 texto descriptivo</p>
            </div>
        </div>
        </div>
    );
}

export default ImgThreetext;