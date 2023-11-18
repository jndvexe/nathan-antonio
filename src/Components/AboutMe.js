import { Footer } from "./Footer";
import { SplitScreen } from "./SplitScreen";

export const AboutMe = () => {
  const LeftHandComponent = () => {
    return (
      <div className="text-white pl-24 pt-24 mb-12
                      md:px-8 
                      max-sm:px-8 max-sm:pt-0">  
        <div className="mb-20">
          <h1 className="text-3xl mb-2 text-yellow text-center font-bold
                          ">About Me</h1>
          <p className="bg-cyan/50 text-black p-4 font-bold text-lg">Hello! My name is Nathan. I am 23 years old. I enjoy designing websites and nerd out on its UI/UX functionalities. I love making wireframes and prototypes, then implementing them in real life applications!</p>
        </div>

        <div className="mb-20">
          <h1 className="text-3xl mb-2 text-yellow text-center font-bold">Skills</h1>
          <div className="bg-cyan/50 text-black p-4 font-bold text-lg">
              <span>HTML, CSS, JavaScript, Typescript | Figma, Adobe XD, Adobe Dreamweaver | React,
Redux, Next.js | Node.js, Express.js | Wordpress, Elementor, Woocommerce |
MySQL, MongoDB | Git, Github | Photoshop, Illustrator, Aseprite, Clip Studio Paint
</span>
          </div>
        </div>

        

        <div>
          <h1 className="text-3xl mb-2 text-yellow text-center font-bold">Education</h1>
          <ul className="list-disc list-inside bg-cyan/50 text-black p-4 font-bold text-lg">
            <li className="">Bachelor of Science in Computer Science</li>
              <ul className="ml-6">
                <li>University of the Cordilleras</li>
                <li>2023</li>
              </ul>
          </ul>
        </div>

      </div>
    )
  }

  const RightHandComponent = () => {
    return (
      <div className=" m-14">
      
          <img className="rounded-full border-2 border-cyan" alt="nathan portrait" src="/IMG_9981-removebg-preview 1.png"/>
        
      </div>
    )
  }



    return (
      <div>
        <SplitScreen 
          left={LeftHandComponent}
          right={RightHandComponent} 
        />

        <Footer />
      </div>
        
        
    );
};