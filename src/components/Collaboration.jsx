import { brainwaveSymbol, check } from "../assets";
import { collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
         <div className="max-w-[25rem]">
            <h2 className="mb-4 h2 md:mb-8">
               AI Chat App for seamless collaboration
            </h2>

            <ul className="max-w-[22rem] mb-10 md:mb-14">
               {collabContent.map((item) => (
                  <li className="py-3 mb-3" key={item.id}>
                     <div className="flex items-center">
                        <img 
                           src={check} 
                           alt="check"
                           width={24}
                           height={24} 
                        />
                        <h6 className="ml-5 body-2">{item.title}</h6>
                     </div>
                     {item.text && (
                        <p className="mt-3 body-2 text-n-4">{item.text}</p>
                     )}
                  </li>
               ))}
            </ul>

            <Button>Try it now</Button>
         </div>

         <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">{collabText}</p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
               <div className="flex m-auto border rounded-full w-60 aspect-square border-n-6 m-auto p-[0.2rem] bg-confic-gradient">
                  <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                     <img 
                        src={brainwaveSymbol}
                        width={48}
                        height={48}
                        alt="brainwave" 
                     />
                  </div>
               </div>               
            </div>
         </div>
      </div>
    </Section>
  )
}
export default Collaboration;