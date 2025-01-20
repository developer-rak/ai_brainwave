import Heading from "./Heading";
import Section from "./Section";
import { benefits} from "../constants";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading 
          className="md:max-w-md lg:max-w-2xl" 
          title="Chat Smarter, Not Harder with Brainwave" 
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div 
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            > 
              <div className="flex flex-col items-center text-center">
                <img 
                  src={item.iconUrl} 
                  alt={item.title}
                  className="w-12 h-12 mb-4" 
                />
                <h5 className="mb-2 text-lg font-bold">{item.title}</h5>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits;
