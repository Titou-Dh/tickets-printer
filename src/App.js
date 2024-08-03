import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, View, StyleSheet, Text, Image } from '@react-pdf/renderer';
import TicketForm from './TicketForm';
import ticket from './ticket.png'; 

const App = () => {
  const [tickets, setTickets] = useState([]);

  const generateTickets = (start, end) => {
    const ticketNumbers = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
      ticketNumbers.push(i);
    }
    setTickets(ticketNumbers);
  };


  const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    ticketContainer: {
      position: 'relative', // Use relative positioning
      width: '100%',
      height: '180px',
      marginBottom: 10,
    },
    backgroundImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    },
    ticket1: {
      position: 'absolute',
      top: 50,
      left: 20,
      width: '50%',
      padding: 10,
    },
    ticket2: {
      position: 'absolute',
      top: 50,
      right: 20,
      width: '50%',
      padding: 10,
    },
    serialNumber: {
      fontSize: 13,
      textAlign: 'center',
      color: 'black',
      position:'absolute',
      top:"-30px",
    },
  });

  const TicketPDF = ({ tickets }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        {tickets.map((serialNumber) => (
          <View key={serialNumber} style={styles.ticketContainer}>
            <Image src={ticket} style={styles.backgroundImage} />
            <View style={styles.ticket1}>
              <Text style={styles.serialNumber}>{serialNumber}</Text>
            </View>
            <View style={styles.ticket2}>
              <Text style={styles.serialNumber}>{serialNumber}</Text>
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );


  return (
    <div className="p-6">
      <TicketForm onGenerate={generateTickets} />
      {tickets.length > 0 && (
        <PDFDownloadLink
          document={<TicketPDF tickets={tickets} />}
          fileName="tickets.pdf"
          className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      )}

      {
        tickets.length > 0 && (
          <div className="mt-6">
            <TicketPDF tickets={tickets} />
          </div>
        )
      }


    </div>
  );
};

export default App;
