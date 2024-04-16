import React, { useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string
}

const Paragraph = ({ children, className }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const childCount = React.Children.count(children);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % childCount);
    }, 6000);
    return () => clearInterval(interval);
  }, [children]);

  return <p className={className}>{Array.isArray(children) ? children[currentIndex] : children}</p>;
};

export default Paragraph;
