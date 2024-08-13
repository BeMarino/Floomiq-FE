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
let refPdf = null;
let refPdf2 = null;
export default function CreatePdf() {
  const doc = new jsPDF("p", "px", "letter");
  const doc2 = new jsPDF("p", "px", "letter");
  refPdf = useRef();
  refPdf2 = useRef();

  const element = (

<div className='pdf-container' ref={refPdf} id='toPrint'>
      <div className="pdf-header flex-col flex " style={{ "align-items": "center", "row-gap": "0.75rem", "width": "100%" }}>
        <svg width="100" height="20" viewBox="0 0 63 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.14 4.82C21.18 4.82 21.212 4.836 21.236 4.868C21.268 4.892 21.284 4.924 21.284 4.964V6.104C21.284 6.144 21.268 6.18 21.236 6.212C21.212 6.236 21.18 6.248 21.14 6.248H19.976C19.936 6.248 19.916 6.268 19.916 6.308V10.856C19.916 10.896 19.9 10.932 19.868 10.964C19.844 10.988 19.812 11 19.772 11H18.368C18.328 11 18.292 10.988 18.26 10.964C18.236 10.932 18.224 10.896 18.224 10.856V6.308C18.224 6.268 18.204 6.248 18.164 6.248H17.456C17.416 6.248 17.38 6.236 17.348 6.212C17.324 6.18 17.312 6.144 17.312 6.104V4.964C17.312 4.924 17.324 4.892 17.348 4.868C17.38 4.836 17.416 4.82 17.456 4.82H18.164C18.204 4.82 18.224 4.8 18.224 4.76V4.496C18.224 4 18.3 3.616 18.452 3.344C18.604 3.064 18.848 2.868 19.184 2.756C19.528 2.636 20 2.584 20.6 2.6H21.056C21.096 2.6 21.128 2.616 21.152 2.648C21.184 2.672 21.2 2.704 21.2 2.744V3.716C21.2 3.756 21.184 3.792 21.152 3.824C21.128 3.848 21.096 3.86 21.056 3.86H20.66C20.38 3.868 20.184 3.928 20.072 4.04C19.968 4.144 19.916 4.34 19.916 4.628V4.76C19.916 4.8 19.936 4.82 19.976 4.82H21.14ZM22.2886 11C22.2486 11 22.2126 10.988 22.1806 10.964C22.1566 10.932 22.1446 10.896 22.1446 10.856V2.744C22.1446 2.704 22.1566 2.672 22.1806 2.648C22.2126 2.616 22.2486 2.6 22.2886 2.6H23.6926C23.7326 2.6 23.7646 2.616 23.7886 2.648C23.8206 2.672 23.8366 2.704 23.8366 2.744V10.856C23.8366 10.896 23.8206 10.932 23.7886 10.964C23.7646 10.988 23.7326 11 23.6926 11H22.2886ZM27.6783 11.096C27.0063 11.096 26.4303 10.92 25.9503 10.568C25.4703 10.216 25.1423 9.736 24.9663 9.128C24.8543 8.752 24.7983 8.344 24.7983 7.904C24.7983 7.432 24.8543 7.008 24.9663 6.632C25.1503 6.04 25.4823 5.576 25.9623 5.24C26.4423 4.904 27.0183 4.736 27.6903 4.736C28.3463 4.736 28.9063 4.904 29.3703 5.24C29.8343 5.568 30.1623 6.028 30.3543 6.62C30.4823 7.02 30.5463 7.44 30.5463 7.88C30.5463 8.312 30.4903 8.716 30.3783 9.092C30.2023 9.716 29.8743 10.208 29.3943 10.568C28.9223 10.92 28.3503 11.096 27.6783 11.096ZM27.6783 9.644C27.9423 9.644 28.1663 9.564 28.3503 9.404C28.5343 9.244 28.6663 9.024 28.7463 8.744C28.8103 8.488 28.8423 8.208 28.8423 7.904C28.8423 7.568 28.8103 7.284 28.7463 7.052C28.6583 6.78 28.5223 6.568 28.3383 6.416C28.1543 6.264 27.9303 6.188 27.6663 6.188C27.3943 6.188 27.1663 6.264 26.9823 6.416C26.8063 6.568 26.6783 6.78 26.5983 7.052C26.5343 7.244 26.5023 7.528 26.5023 7.904C26.5023 8.264 26.5303 8.544 26.5863 8.744C26.6663 9.024 26.7983 9.244 26.9823 9.404C27.1743 9.564 27.4063 9.644 27.6783 9.644ZM34.238 11.096C33.566 11.096 32.99 10.92 32.51 10.568C32.03 10.216 31.702 9.736 31.526 9.128C31.414 8.752 31.358 8.344 31.358 7.904C31.358 7.432 31.414 7.008 31.526 6.632C31.71 6.04 32.042 5.576 32.522 5.24C33.002 4.904 33.578 4.736 34.25 4.736C34.906 4.736 35.466 4.904 35.93 5.24C36.394 5.568 36.722 6.028 36.914 6.62C37.042 7.02 37.106 7.44 37.106 7.88C37.106 8.312 37.05 8.716 36.938 9.092C36.762 9.716 36.434 10.208 35.954 10.568C35.482 10.92 34.91 11.096 34.238 11.096ZM34.238 9.644C34.502 9.644 34.726 9.564 34.91 9.404C35.094 9.244 35.226 9.024 35.306 8.744C35.37 8.488 35.402 8.208 35.402 7.904C35.402 7.568 35.37 7.284 35.306 7.052C35.218 6.78 35.082 6.568 34.898 6.416C34.714 6.264 34.49 6.188 34.226 6.188C33.954 6.188 33.726 6.264 33.542 6.416C33.366 6.568 33.238 6.78 33.158 7.052C33.094 7.244 33.062 7.528 33.062 7.904C33.062 8.264 33.09 8.544 33.146 8.744C33.226 9.024 33.358 9.244 33.542 9.404C33.734 9.564 33.966 9.644 34.238 9.644ZM44.9137 4.736C45.5377 4.736 46.0257 4.924 46.3777 5.3C46.7297 5.676 46.9057 6.204 46.9057 6.884V10.856C46.9057 10.896 46.8897 10.932 46.8577 10.964C46.8337 10.988 46.8017 11 46.7617 11H45.3577C45.3177 11 45.2817 10.988 45.2497 10.964C45.2257 10.932 45.2137 10.896 45.2137 10.856V7.256C45.2137 6.928 45.1297 6.668 44.9617 6.476C44.7937 6.284 44.5697 6.188 44.2897 6.188C44.0097 6.188 43.7817 6.284 43.6057 6.476C43.4297 6.668 43.3417 6.924 43.3417 7.244V10.856C43.3417 10.896 43.3257 10.932 43.2937 10.964C43.2697 10.988 43.2377 11 43.1977 11H41.8057C41.7657 11 41.7297 10.988 41.6977 10.964C41.6737 10.932 41.6617 10.896 41.6617 10.856V7.256C41.6617 6.936 41.5737 6.68 41.3977 6.488C41.2217 6.288 40.9937 6.188 40.7137 6.188C40.4577 6.188 40.2417 6.264 40.0657 6.416C39.8977 6.568 39.7977 6.78 39.7657 7.052V10.856C39.7657 10.896 39.7497 10.932 39.7177 10.964C39.6937 10.988 39.6617 11 39.6217 11H38.2177C38.1777 11 38.1417 10.988 38.1097 10.964C38.0857 10.932 38.0737 10.896 38.0737 10.856V4.976C38.0737 4.936 38.0857 4.904 38.1097 4.88C38.1417 4.848 38.1777 4.832 38.2177 4.832H39.6217C39.6617 4.832 39.6937 4.848 39.7177 4.88C39.7497 4.904 39.7657 4.936 39.7657 4.976V5.444C39.7657 5.468 39.7737 5.484 39.7897 5.492C39.8057 5.5 39.8217 5.492 39.8377 5.468C40.1657 4.98 40.6737 4.736 41.3617 4.736C41.7617 4.736 42.1097 4.82 42.4057 4.988C42.7097 5.156 42.9417 5.396 43.1017 5.708C43.1257 5.756 43.1537 5.756 43.1857 5.708C43.3617 5.38 43.5977 5.136 43.8937 4.976C44.1977 4.816 44.5377 4.736 44.9137 4.736ZM48.8852 4.136C48.6132 4.136 48.3852 4.048 48.2012 3.872C48.0252 3.688 47.9372 3.46 47.9372 3.188C47.9372 2.908 48.0252 2.68 48.2012 2.504C48.3772 2.328 48.6052 2.24 48.8852 2.24C49.1652 2.24 49.3932 2.328 49.5692 2.504C49.7452 2.68 49.8332 2.908 49.8332 3.188C49.8332 3.46 49.7412 3.688 49.5572 3.872C49.3812 4.048 49.1572 4.136 48.8852 4.136ZM48.1652 11C48.1252 11 48.0892 10.988 48.0572 10.964C48.0332 10.932 48.0212 10.896 48.0212 10.856V4.964C48.0212 4.924 48.0332 4.892 48.0572 4.868C48.0892 4.836 48.1252 4.82 48.1652 4.82H49.5692C49.6092 4.82 49.6412 4.836 49.6652 4.868C49.6972 4.892 49.7132 4.924 49.7132 4.964V10.856C49.7132 10.896 49.6972 10.932 49.6652 10.964C49.6412 10.988 49.6092 11 49.5692 11H48.1652ZM54.7398 4.976C54.7398 4.936 54.7518 4.904 54.7758 4.88C54.8078 4.848 54.8438 4.832 54.8838 4.832H56.2878C56.3278 4.832 56.3598 4.848 56.3838 4.88C56.4158 4.904 56.4318 4.936 56.4318 4.976V13.088C56.4318 13.128 56.4158 13.16 56.3838 13.184C56.3598 13.216 56.3278 13.232 56.2878 13.232H54.8838C54.8438 13.232 54.8078 13.216 54.7758 13.184C54.7518 13.16 54.7398 13.128 54.7398 13.088V10.52C54.7398 10.496 54.7318 10.48 54.7158 10.472C54.6998 10.464 54.6838 10.472 54.6678 10.496C54.3478 10.896 53.8998 11.096 53.3238 11.096C52.7398 11.096 52.2478 10.948 51.8478 10.652C51.4558 10.348 51.1678 9.94 50.9838 9.428C50.8398 9.004 50.7678 8.504 50.7678 7.928C50.7678 7.384 50.8358 6.904 50.9718 6.488C51.1478 5.936 51.4358 5.508 51.8358 5.204C52.2438 4.892 52.7278 4.736 53.2878 4.736C53.8718 4.736 54.3318 4.956 54.6678 5.396C54.6838 5.412 54.6998 5.42 54.7158 5.42C54.7318 5.412 54.7398 5.396 54.7398 5.372V4.976ZM54.4638 9.164C54.6398 8.868 54.7278 8.452 54.7278 7.916C54.7278 7.404 54.6478 7 54.4878 6.704C54.2878 6.36 54.0078 6.188 53.6478 6.188C53.2558 6.188 52.9598 6.36 52.7598 6.704C52.5918 7.024 52.5078 7.424 52.5078 7.904C52.5078 8.44 52.6078 8.864 52.8078 9.176C53.0078 9.488 53.2918 9.644 53.6598 9.644C54.0118 9.644 54.2798 9.484 54.4638 9.164Z" fill="black" />
          <path d="M7.23623 13.6092L7.23622 13.6092L7.22755 13.611C6.61576 13.7384 5.55995 13.9499 4.62952 13.3171C4.13718 12.9823 3.34749 12.2363 2.5668 11.4333C1.80018 10.6447 1.0617 9.82157 0.655764 9.32534C0.472445 8.98755 0.255313 8.46699 0.250096 7.93711C0.244982 7.41776 0.441046 6.87741 1.13117 6.46724L7.60331 2.70735C8.13882 2.40751 8.81789 2.18407 9.43496 2.26775C10.0253 2.34781 10.6052 2.71467 10.9646 3.704C11.3818 4.85239 11.7895 6.03837 12.1088 7.07143C12.4298 8.11046 12.6556 8.97695 12.7172 9.49501C12.7181 9.50258 12.7193 9.51011 12.7209 9.51757C12.8617 10.179 12.4933 11.0628 11.4288 11.6269C10.862 11.9273 9.97164 12.3916 9.13831 12.7983C8.72148 13.0017 8.32097 13.1897 7.98338 13.3352C7.63906 13.4837 7.37974 13.5793 7.23623 13.6092Z" stroke="black" stroke-width="0.5" stroke-linejoin="round" />
        </svg>
        <svg width="400" height="1" viewBox="0 0 400 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="400" y2="0.5" stroke="#C8C8C8" />
        </svg>

      </div>

      <div className="plant-card">
        <img src="flower1.jpg" alt="Flower Image" />
        <div className="plant-details">
          <div className="plant-info flex-col">
            <p className="plant-title">Vaccinium macrocarpon 'Red Star'</p>
            <div className="timelinesContainer">
              <div className="flex flex-row seasons">
                <div className="season">INVERNO </div>
                <div className="season">PRIMAVERA</div>
                <div className="season">ESTATE </div>
                <div className="season">AUTUNNO </div>
              </div>
              <div className="flex flex-row seasons">
                <div className="season">G </div>
                <div className="season">F </div>
                <div className="season">M </div>
                <div className="season">A </div>
                <div className="season">M </div>
                <div className="season">G </div>
                <div className="season">L </div>
                <div className="season">A </div>
                <div className="season">S </div>
                <div className="season">O</div>
                <div className="season">N</div>
                <div className="season">D</div>
              </div>
              <div className="flex-row">
                <div className="" style={{ flex: 1 }}>Fiore</div>
                <div className="timeline" style={{ flex: 1 }}></div>
              </div>
              <div className="flex-row">
                <div className="" style={{ flex: 1 }}>Foglia</div>
              </div>
              <div className="flex-row">
                <div className="" style={{ flex: 1 }}>Frutto</div>
              </div>
            </div>
          </div>
          <div className="image-section">
            <img src="human-icon.png" alt="Human Icon" />
          </div>
        </div>
        <div className="icons">
          <img src="icon1.png" alt="Icon" />
          <p>Tappezzante</p>
        </div>
      </div>

    </div>

  )
   const element2 = (<div className="" id='toPrint' ref={refPdf2}>
      <div className="pdf-header">Le tue piante</div>
      {productList.map((plant, index) => (
        <div className="pdf-row gap-y flex-r">
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
      doc.html(ReactDOMServer.renderToString(element2), {
        callback: function (doc) {
          doc.save('sample.pdf');
        }
      }); 
  doc2.html(ReactDOMServer.renderToString(element), {
    callback: function (doc) {
      doc2.save('sample2.pdf');
    }
  });

  return element2;
  
}



/*export default function savePdf(){
   html2canvas(pdfRef.current, { scale: 2 }).then((canvas)=>{
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
/* 
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
    rowHeaders.forEach(rowHeader => {
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
    });
  })

  pdfMake.createPdf(docDefinition).open(); */

