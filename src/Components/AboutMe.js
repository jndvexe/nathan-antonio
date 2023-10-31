export const AboutMe = () => {
    return (

    
        <div className="relative mb-14">

          <div className="absolute inset-0 backdrop-blur-lg bg-cyan opacity-[.15] rounded-lg blur-[2px] py-[250px] text-white">
          </div>

          <div className="relative z-10 text-white p-24 ">
                
                <div className="mb-20">
                  <h1 className="text-3xl mb-2">About Me</h1>
                  <p>Hello! My name is Nathan. I am 23 years old. I enjoy designing websites and nerd out on its UI/UX functionalities. I love making wireframes and prototypes, then implementing them in real life applications!</p>
                </div>

                <div className="mb-20">
                  <h1 className="text-3xl mb-2">Skills</h1>
                  <div className="ml-4">
                      <ul className="list-disc list-inside">
                        <li>Web Design (Figma) </li>
                        <li>Web Development</li>
                          <ul className="list-disc list-inside ml-4">
                            <li>(HTML, Tailwind CSS, Javascript)</li>
                            <li>(ReactJS, NextJS, MongoDB, SQL)</li>
                          </ul>
                        <li>Graphic Design and Illustrations </li>
                          <ul className="list-disc list-inside ml-4">
                            <li>Photoshop, Illustrator, Clip Paint Studio, Aseprite</li>
                          </ul>
                      </ul>
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl mb-2">Education</h1>
                  <ul className="list-disc list-inside ml-4">
                    <li className="font-bold">Bachelor of Science in Computer Science</li>
                      <ul className="ml-6">
                        <li>University of the Cordilleras</li>
                        <li>2023</li>
                      </ul>
                  </ul>
                </div>

          </div>
        </div>
     
      
        
        
    );
};