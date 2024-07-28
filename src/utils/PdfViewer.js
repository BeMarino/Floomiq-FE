import React from 'react';

  import { Document, Page, pdfjs } from 'react-pdf';
  const PdfViewer = () => {
   const pdfURL = 'http://77.37.120.115:9000/floomiq-docs/Privacy_Policy_Floomiq-v0.4_lug24.pdf';
   pdfjs.GlobalWorkerOptions.workerSrc =
   "../../build/webpack/pdf.worker.bundle.js";
   return (
    <div>
    <iframe src={pdfURL} className='h-screen w-full' />
    </div>
    );
  };
export default PdfViewer;
