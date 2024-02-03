import React from "react";

class Curiosities extends React.Component{
    constructor(props) {
        super(props);
  
        const images = [
          "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx",
          "https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg"
        ];
  
        this.state = {
          images,
          currentImg: 0
        }
      }

      componentDidMount() {
        this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
      }
  
      componentWillUnmount() {
        if (this.interval) {
          clearInterval(this.interval);
        }
      }
  
      changeBackgroundImage() {
        let newCurrentImg = 0;
        const {images, currentImg} = this.state;
        const noOfImages = images.length;
  
        if (currentImg !== noOfImages - 1) {
          newCurrentImg = currentImg + 1;
        }
  
        this.setState({currentImg: newCurrentImg});
      }

      render() {
        const {images, currentImg} = this.state;
        const urlString = `url('${images[currentImg]}')`;
  
        return (
            <>
            <div className="column-curiosity">
                <div className="row">
                    <div className="column-curiosity-inner">
                        <div className={currentImg === 0 ? "curiosity-active" : "curiosity"}>
                            <div className="curiosity-title">Lorem Ipsum</div>
                            <div className="curiosity-description">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo</div>
                        </div>
                        <div className={currentImg === 1 ? "curiosity-active" : "curiosity"}>
                            <div className="curiosity-title">Lorem Ipsum</div>
                            <div className="curiosity-description">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo</div>
                        </div>
                        <div className={currentImg === 2 ? "curiosity-active" : "curiosity"}>
                            <div className="curiosity-title">Lorem Ipsum</div>
                            <div className="curiosity-description">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo</div>
                        </div>
                    </div>
                    <div className="column-curiosity-inner">
                        <div className="curiosity-image" style={{backgroundImage : urlString}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
      }
}

export default Curiosities;