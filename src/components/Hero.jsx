import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
   <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
   >
      <div className="container relative">
         <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
            <h1 className="mb-6 h1">
               Explore the Possibilities of AI Chatting with {` `}
               <span className="relative inline-block">
                  Brainwave{" "}
                  <img 
                     src={curve} 
                     className="absolute left-0 w-full top-full xl:-mt-2" width={624} height={28} alt="Curve"
                  />
               </span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
               Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
            </p>
            <Button href="/pricing" white>
               Get Started            
            </Button>
         </div>
      </div>
   </Section>
  )
}

export default Hero;