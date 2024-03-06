import React, { FC, ReactNode } from "react";
import "./index.css";

interface Props {
  children: ReactNode | ReactNode[];
}

const Masonry: FC<Props> = ({ children }) => {
  return (
    <section className="w-full h-full p-10 mx-auto">
      <div className="space-y-4 overflow-hidden group">
        <div className="gap-3 px-6 space-y-4 columns-2 md:columns-3 rounded-xl scroll-smooth">
          {children}
        </div>
        <div
          aria-hidden="true"
          className="gap-3 px-6 space-y-4 columns-2 md:columns-3 rounded-xl scroll-smooth"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Masonry;
