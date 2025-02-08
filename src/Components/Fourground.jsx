
 
import { useRef } from "react";
import Card from "./Card";

const Fourground = () => {
  const ref = useRef(null);
    
    
  const userData = [
    {
      desc: "this is the back entry of the board",
      filesize: ".1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "green" },
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. corporis molestias?",
        filesize: ".1mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "this is the back entry of the board",
        filesize: ".4mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "green" },
      },
      {
        desc: "   odit possimus tenetur et! Fugit quam facere ",
        filesize: ".2tb",
        close: false,
        tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "green" },
      },
      {
        desc: " incidunt praesentium perferendis obcaecati soluta facere ut et",
        filesize: ".10mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "this is the back entry of the board",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
  ];

  return (
    <div ref={ref} className="w-full top-0 left-0 h-full fixed z-[3] flex gap-10 flex-wrap p-5">
   {userData.map((item, index) => (
    <Card userData={item} reference={ref} key={index} />
     ))}
    </div>
  );
};

export default Fourground;