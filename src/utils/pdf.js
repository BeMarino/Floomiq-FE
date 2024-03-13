import '../css/pdf.css'
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import { useRef } from 'react';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
let refPdf =null;
/* export default function CreatePdf() {
  //const doc = new jsPDF("p", "pt", "letter");
  refPdf=useRef();

  const element = (<div className="pdf-column" id='toPrint' ref={refPdf}>
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
    return element;
 /*  doc.html(ReactDOMServer.renderToString(element), {
    callback: function (doc) {
      doc.save('sample.pdf');
    }
  }); 
}*/

export default function f(){
  return null;
}

export function savePdf(){
  /* html2canvas(pdfRef.current, { scale: 2 }).then((canvas)=>{
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF('p','pt','a4',true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth/ imgWidth, pdfHeight/imgHeight);
    console.log(pdfWidth, imgWidth, ratio);

    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = (pdfHeight - imgHeight * ratio) / 2;
    console.log(imgX, imgY);
    pdf.addImage(imgData, 'PNG',imgX, imgY,imgWidth*ratio,imgHeight*ratio);
    pdf.save('test.pdf'); 
  }) */
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const rowHeaders = ['fiori', 'frutti', 'foglie'];

  // Generate table data
  const docDefinition = {
    content: [],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10] // Margin bottom
      }
    }
  };
  productList.forEach(product =>{
    console.log(product)
    const tableData = [
      [{ text: '', fillColor: 'lightgray' }],
      [{ text: 'Product Name:', bold: true }, { text: product.name }],
      [{ text: 'Description:', bold: true }, { text: product.durability }],
      [{ text: 'Price:', bold: true }, { text: product.height }],
      // Add more rows as needed for additional product information
    ];

    const table = {
      headerRows: 1,
      body: tableData,
      widths: ['30%', '*'], // Adjust column widths as needed
      alignment: 'center', // Center align the table
      margin: [0, 0, 0, 20] // Margin bottom for the table
    };

    docDefinition.content.push({ text: product.name, style: 'header' }); // Add product name as header
    docDefinition.content.push({ table }); // Add table for product information
    /* rowHeaders.forEach(rowHeader => {
      const rowData = [{ text: rowHeader, fillColor: 'lightgray' }]; // Set row header background color
      months.forEach(month => {
        // Add your data here for each month and row header
        // For demonstration, I'm just adding placeholder data
        if (month === 'Jan' || month === 'Jul') {
          rowData.push({ text: '', fillColor: 'red' }); // Set background color to red for specific cells
        } else {
          rowData.push('');
        }
      });
      tableData.push(rowData);
    }); */
  })

  pdfMake.createPdf(docDefinition).open();
}
 