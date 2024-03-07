import React, {
  FC,
  useEffect,
  useState,
} from "react";
import "./index.css";

interface Props {
  // children: ReactNode | ReactNode[];
  // children : ReactElement<any,
  // string | JSXElementConstructor<any>>
  // gutter_bottom: String,
  // animateCount : String,
  children: any;
  animation?: Boolean;
  columnCount?: {
    [key: number]: Number;
  };
  speed?: String;
  height: String;
  stopOnHover?: Boolean;
  width?: Number;
}

const Masonry: FC<Props> = ({
  children,
  animation,
  columnCount,
  speed,
  height,
  stopOnHover,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(3);
  const columnValues = Object.values(Number(columnCount));
  const columnKeys = Object.keys(Number(columnCount));

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
        ? setCount(Number(columnValues[2]))
        : width >= Number(columnKeys[1])
        ? setCount(Number(columnValues[1]))
        : width >= Number(columnKeys[0])
        ? setCount(Number(columnValues[0]))
        : setCount(1);
    } else {
      setCount(3);
    }
  }, [width, count, columnKeys, columnValues]);

  const myStyle = {
    columns: count,
    gap: "30px",
    animationName: `${animation ? "animation_v" : ""}`,
    animationDuration: `${speed ? speed : "20s"}`,
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  };

  // const bottom = {
  //   marginBottom: `${gutter_bottom && gutter_bottom}`,
  // };
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
        {/* {React.Children.map(children, child => (
        <div style={bottom}>{child}</div>
      ))} */}
        {children}
      </div>
      {animation && React.cloneElement(children)}
    </section>
  );
};

export default Masonry;
