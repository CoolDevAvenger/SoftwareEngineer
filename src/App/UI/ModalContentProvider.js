export default class ModalContentProvider {
  constructor() {
    this.modalContents = {
      aboutMe: {
        title: 'About me',
        description:`
          <div class="aboutMe-Container">
            <div>
              <img src="../../Assets/Sh.jpg" alt="Andrzej-image" />
            </div>
            <p>
               I am dedicated to develop web and mobile applications through streamlined interfaces, ultimately fostering a more engaging AI and Blockchain projects.
            </p>

            <p>
               Additionally, I am committed to continuously expanding my knowledge and staying current with industry trends and emerging technologies through proactive learning initiatives.
            </p>

            <p>
               I prioritize effective communication and possess a solid technical background.
               My commitment lies in developing strong relationships with my team members and clients.
            </p>
          </div>
          `,
      },
      projects: {
        title: 'Projects',
        description: `<div class="projects-container">
                <p class="title">Three.js:</p>
                <p class="desc">&nbsp; 
                  <a href="https://app.uniformbuilder.com.au/">
                      Uniform Builder
                  </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">Blockchain:</p>
                <p class="desc">&nbsp; 
                   <a href="https://caladex.org/" target="_blank">
                      Dex(uniswap Etherium)
                   </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">MERN stack:</p>
                <p class="desc">&nbsp; 
                  <a href="https://artshole.com/" target="_blank">
                    Artists social network
                  </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">AI:</p>
                <p class="desc">&nbsp; 
                  <a href="https://getrestyle.com/genboard/" target="_blank">
                    Stable Diffusion
                  </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">OpenCart:</p>
                <p class="desc">&nbsp; 
                  <a href="https://www.custom-schmuck.de/ " target="_blank">
                    E-commerce 
                  </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">Prestashop:</p>
                <p class="desc">&nbsp; 
                  <a href="https://www.just4camper.fr/" target="_blank">
                    E-commerce PS8.1(theme&module development)
                  </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">React.js + Django:</p>
                <p class="desc">&nbsp; 
                  <a href="https://www.mirohealth.app/" target="_blank">
                     Brain health care provider 
                  </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">Shopify:</p>
                <p class="desc">&nbsp; 
                  <a href="https://solebliss.com/">
                      Eshop for shoes
                  </a>
                </p>
              </div>

              <div class="projects-container">
                <p class="title">Shopify App:</p>
                <p class="desc">&nbsp;
                  <a href="https://www.loom.com/share/f25e3d4e933f438aac43008025171bad Shopify App">
                    Fraud Order detector 
                  </a>
                </p>
           </div>
          `,
      },
      contactMe: {
        title: 'Contact Me',
        description: `
        <div class="contactMe-container">
          <p> LinkedIn: </p>
          <a href="https://www.linkedin.com/in/andrzej-doremoniec-92b424312/" target="_blank" >
              www.linkedin.com/in/andrzej-doremoniec-92b424312/
          </a> <br/>
          
          <p> GitHub: </p>
          <a href="https://github.com/crazedromeo" target="_blank">
              github.com/crazedromeo
          </a> <br/>

          <p> Gmail: </p>
          <a href="mailto:merndev0603@gmail.com" target="_blank">
            merndev0603@gmail.com
          </a> <br/>

          <p> Skype: </p>
          <a href="#" target="_blank">
            live:.cid.a2ba1b9f5af6f51d
          </a> <br/>

          <p> Telegram: </p>
          <a href="#" target="_blank">
            @nimbus973
          </a>
        </div>
       `,
      },
    };
  }

  formatDescription(description) {
    description = description.replace(/\. /g, '.<br/><br/> ');
    description = description.replace(/<br\/?>/g, '<br/><br/>');
    return description;
  }

  getModalInfo(portalName) {
    const modalInfo = this.modalContents[portalName];
    if (modalInfo && modalInfo.description) {
      modalInfo.description = this.formatDescription(modalInfo.description);
    }
    return modalInfo;
  }
}
