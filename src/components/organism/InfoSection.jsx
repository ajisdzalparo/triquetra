import { useState } from "react";
import MoreInfo from "../molecules/MoreInfo";

const InfoSection = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <MoreInfo
          key={index}
          title={{
            text: item.title,
            className: "font-bold text-base sm:text-lg md:text-xl lg:text-2xl",
          }}
          description={{
            text: item.content,
            className:
              "text-sm sm:text-base md:text-lg lg:text-xl text-gray-500",
          }}
          isOpen={index === activeIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default InfoSection;
