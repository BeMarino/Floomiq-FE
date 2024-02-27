import '../css/pdf.css'
import html2pdf from 'html2pdf.js';
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import { useRef } from 'react';

const productList = [{
  name: 'Abelia Edward Goucher',
  image: 'Abelia_Edward_Goucher.jpeg',
  height: "2m",
  durability: "Eternal"
},
{
  name: 'Abelia Edward Goucher',
  image: 'Abelia_Edward_Goucher.jpeg',
  height: "2m",
  durability: "Eternal"
},
{
  name: 'Abelia Edward Goucher',
  image: 'Abelia_Edward_Goucher.jpeg',
  height: "2m",
  durability: "Eternal"
},
{
  name: 'Abelia Edward Goucher',
  image: 'Abelia_Edward_Goucher.jpeg',
  height: "2m",
  durability: "Eternal"
},
{
  name: 'Abelia Edward Goucher',
  image: 'Abelia_Edward_Goucher.jpeg',
  height: "2m",
  durability: "Eternal"
}]
  
const options = {
    filename: 'my-document.pdf',
    margin: 1,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

export default function CreatePdf() {
  const doc = new jsPDF("p", "pt", "letter");
  

  const element = (<div className="pdf-column" >
      <div className="pdf-header">Le tue piante</div>
      {productList.map((plant, index) => (
        <div className="pdf-row">
          <div className="pdf-images">
            <div className="pdg-image1">
              <img src={plant.image} alt={plant.name} id="main-image1" />
            </div>
            <div className="pdg-image2">
              <img src={plant.image} alt={plant.name} id="main-image1" />
            </div>
          </div>
          <div className="pdf-grid">
            <div ></div>
            <div >G</div>
            <div >F</div>
            <div >M</div>
            <div >A</div>
            <div >M</div>
            <div >G</div>
            <div >L</div>
            <div >A</div>
            <div >S</div>
            <div >O</div>
            <div >N</div>
            <div >D</div>
            <div className="flower">Fiori</div>
            <div className="flower"></div>
            <div className="flower"></div>
            <div className="flower"></div>
            <div className="flower"></div>
            <div className="flower-fill"></div>
            <div className="flower-fill"></div>
            <div className="flower-fill"></div>
            <div className="flower"></div>
            <div className="flower"></div>
            <div className="flower"></div>
            <div className="flower"></div>
            <div className="flower"></div>
            <div className="fruit">Frutti</div>
            <div className="fruit"></div>
            <div className="fruit"></div>
            <div className="fruit"></div>
            <div className="fruit"></div>
            <div className="fruit"></div>
            <div className="fruit"></div>
            <div className="fruit"></div>
            <div className="fruit-fill"></div>
            <div className="fruit-fill"></div>
            <div className="fruit-fill"></div>
            <div className="fruit"></div>
            <div className="fruit"></div>
            <div className="leaf">Foglie</div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf-fill"></div>
            <div className="leaf-fill"></div>
            <div className="leaf-fill"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
          </div>
        </div>
      ))}
    </div>)
  

  doc.html(ReactDOMServer.renderToString(element), {
    callback: function (doc) {
      doc.save('sample.pdf');
    }
  });
  
}