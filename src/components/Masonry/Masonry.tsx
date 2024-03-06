import React, { FC, ReactNode } from "react";
import "./index.css";
const IMG = [
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%201.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%202.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%203.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%204.jpg",
    ratio: "aspect-box",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%205.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%202.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%205.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%204.jpg",
    ratio: "aspect-box",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%205.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%201.jpg",
    ratio: "aspect-square",
  },
];
interface Props {
  children: ReactNode | ReactNode[];
}

const Masonry: FC<Props> = ({ children }) => {
  return (
    <section className="w-full h-full p-10 mx-auto">
      <div className="space-y-4 overflow-hidden group">
        <div className="gap-3 px-6 space-y-4 columns-2 md:columns-3 rounded-xl scroll-smooth">
          {IMG.map((item, idx) => (
            <img
              alt="..."
              src={item.src}
              className={` max-w-full rounded-md overflow-hidden object-cover object-center`}
              key={idx}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="gap-3 px-6 space-y-4 columns-2 md:columns-3 rounded-xl scroll-smooth"
        >
          {IMG.map((item, idx) => (
            <img
              alt="..."
              src={item.src}
              className={` max-w-full rounded-md overflow-hidden object-cover object-center`}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masonry;
