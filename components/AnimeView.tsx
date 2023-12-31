"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 2;

export default function AnimeView() {
  const [data, setData] = useState<React.ReactElement[]>([]);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => setData((prev) => [...prev, ...res]));
      page = page + 1;
    }
  }, [inView]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full" ref={ref}>
        <div>Cargando más animes...</div>
      </section>
    </>
  );
}
