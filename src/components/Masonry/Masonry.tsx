import React, { FC, JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from "react";
import "./index.css";

interface Props {
  // children: ReactNode | ReactNode[];
  // children : ReactElement<any, 
  // string | JSXElementConstructor<any>>
  children : any
  gutter_bottom: String,
  marquee : Boolean,
  columnsCount: Number,
  animateCount : String,
  speed: String,
  height: String,
  hoverToStop : Boolean,
  width : Number
}

const Masonry: FC<Props> = ({ children,
  gutter_bottom,
  marquee,
  columnsCount,
  speed,
  animateCount,
  height,
  hoverToStop }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(3);
  const columnValues = Object.values(columnsCount);
  const columnKeys = Object.keys(columnsCount);

  useEffect(() => {
    const onChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onChange);

    return () => {
      window.removeEventListener("resize", onChange);
    };
  }, []);

  useEffect(() => {
    if (columnKeys) {
      width >= 1440
        ? setCount(4)
        : width >= Number(columnKeys[2])
        ? setCount(columnValues[2])
        : width >= Number(columnKeys[1])
        ? setCount(columnValues[1])
        : width >= Number(columnKeys[0])
        ? setCount(columnValues[0])
        : setCount(1);
    } else {
      setCount(3);
    }
  }, [width, count, columnKeys, columnValues]);

  const myStyle = {
    columns: count,
    gap: "30px",
    marginBottom: `${gutter_bottom && gutter_bottom}`,
    animationName: `${marquee ? "marquee_v" : ""}`,
    animationDuration: `${speed ? speed : "20s"}`,
    animationIterationCount: `${animateCount ? animateCount : "infinite"}`,
    animationTimingFunction: "linear",
  };

  const bottom = {
    marginBottom: `${gutter_bottom && gutter_bottom}`,
    backgroundColor: 'red'
  };
  return (
    <section
      className={`w-full ${
        height === "fill"
          ? "h-auto"
          : height === "screen"
          ? "h-screen"
          : "h-auto"
      } p-10 overflow-hidden group`}
    >
      <div
        style={myStyle}
        className={` rounded-xl ${
          hoverToStop ? "group-hover:paused" : ""
        }  break-inside-avoid`}
      >
        {React.Children.map(children, child => (
        <div style={bottom}>{child}</div>
      ))}
      </div>
      {marquee &&
        React.cloneElement(children)}
    </section>
  );
};

export default Masonry;
