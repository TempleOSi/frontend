import ames from "../assets/ames.png";
import React from "react";
import Image from "next/image";


const Imagen1: React.FC = () => {
    return <Image src={ames} alt="ames" />;
};

export default Imagen1;