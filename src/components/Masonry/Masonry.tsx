import React, { FC, ReactNode, useEffect, useState } from "react";
import "./index.css";

interface Props {
  children: ReactNode;
  animation?: boolean;
  columnCount: {
    [key: number]: number;
  };
  speed?: string;
  height: string;
  stopOnHover?: boolean;
  width?: number;
}

const Masonry: FC<Props> = ({
  children,
  animation = false,
  columnCount,
  speed = "20s",
  height = "screen",
  stopOnHover = false,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(3);

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
    if (columnCount) {
      const columnKeys = Object.keys(columnCount);
      const columnValues = Object.values(columnCount);
      width >= 1440
        ? setCount(3)
        : width >= parseInt(columnKeys[2])
        ? setCount(columnValues[2])
        : width >= parseInt(columnKeys[1])
        ? setCount(columnValues[1])
        : width >= parseInt(columnKeys[0])
        ? setCount(columnValues[0])
        : setCount(1);
    } else {
      setCount(3);
    }
  }, [width, columnCount]);

  const myStyle = {
    columns: count,
    gap: "30px",
    animationName: animation ? "animation_v" : "",
    animationDuration: speed,
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  };
  // console.log("props", animation, columnCount, speed, height, stopOnHover);
  return (
    <section
      className={`w-full ${
        height === "fill" ? "h-auto" : "h-screen"
      } p-10 overflow-hidden group`}
    >
      <div
        style={myStyle}
        className={`${
          stopOnHover ? "group-hover:paused" : ""
        }  break-inside-avoid`}
      >
        {children}
      </div>
      {animation && (
        <div
          style={myStyle}
          className={`${
            stopOnHover ? "group-hover:paused" : ""
          }  break-inside-avoid`}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Masonry;
