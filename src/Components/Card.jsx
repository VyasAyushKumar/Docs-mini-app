import { FaRegFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({userData, reference}) => {
  
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 0.9}} 
                dragTransition={{bounceStiffness: 900, bounceDamping: 20}}
    className=" flex-shrink-0 relative w-60 h-72 pb-8 bg-zinc-900/90 rounded-[40px] text-white py-7 px-5 overflow-hidden">
        <FaRegFileAlt  size="1.2em" color="#fff" />
        <p className="text-base leading-tight tracking-wider mt-5 font-semibold">{userData.desc}</p>
        <div className="footer absolute bottom-0 w-full  h-19   left-0"> 
            <div className="flex items-center px-7 justify-between"> 
                <h5>{userData.filesize}</h5>
                <span className=" w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                    {userData.close ? <IoMdClose /> :  <FaCloudDownloadAlt />   }
           
                </span>
            </div>
            {
                userData.tag.isOpen &&  (
                    <div className={`tag w-full py-4 mt-3 ${userData.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} tracking-wider flex items-center justify-center`}>
                <h3>{userData.tag.tagTitle}</h3>
            </div>
                )
            }
            
        </div>
    </motion.div>
  );
}
// ////////////////////////////////////////////////////////////
// /////////////////////////////////////////
export default Card
