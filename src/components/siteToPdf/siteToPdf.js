import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';
import Header from '../header/header';
import About from '../about/about';
import Footer from '../footer/footer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
// Create Document Component
const PdfVersion = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <About />
      <Footer />
    </Page>
  </Document>
);

function createPdf() {
  ReactPDF.render(<PdfVersion />, "./Aniello_Tortora-CsV.pdf")
}

export default createPdf