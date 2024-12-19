"use client";
import Image from "next/image";
import next from "./../../../public/next.svg";
import styles from "./blog.module.css";
import { useState } from "react";
import clsx from "clsx";
import { lusitana } from "../ui/fonts";
import globe from "../../../public/globe.svg";
import window from "../../../public/window.svg";
export default function BlogPage() {
  const [num, setNum] = useState(0);
  return (
    <>
      <div
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        Blog page
      </div>{" "}
      <Image src={next} alt="img" width={400} />
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
      <p
        className={clsx({
          "bg-stone-400": num % 2 === 0,
          "bg-red-300": num % 2 === 1,
        })}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        possimus quaerat fuga voluptatibus tempore est illo quidem nihil magnam
        ad, veritatis eum earum maxime molestiae illum non. Autem, accusantium
        sapiente?
      </p>
      <div className={styles.shape}></div>
      {num}
      <button onClick={() => setNum(num + 1)}>+</button>
      <Image
        src={globe}
        alt="globe img"
        width={320}
        height={320}
        className="hidden md:block"
      />
      <Image
        src={window}
        alt="vercel"
        width={550}
        height={500}
        className="block md:hidden"
      />
    </>
  );
}
