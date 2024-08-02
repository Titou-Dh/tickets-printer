import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, View, StyleSheet, Text, Font } from '@react-pdf/renderer';
import TicketForm from './TicketForm';

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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      border: '1px solid black',
      padding: 10,
      marginBottom: 10,
    },
    ticket: {
      width: '49%',
      border: '1px solid black',
      padding: 10,
    },
    text: {
      fontSize: 12,
      textAlign: 'right',
    },
    header: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    boldText: {
      fontWeight: 'bold',
      color: 'red',
    }
  });

  const TicketPDF = ({ tickets }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        {tickets.map((serialNumber) => (
          <View key={serialNumber} style={styles.ticketContainer}>
            <View style={styles.ticket}>
              <Text style={styles.header}>المدرسة الإبتدائية الخاصة</Text>
              <Text style={styles.text}>وصل خاص عدد {serialNumber}</Text>
              <Text style={styles.boldText}>المعلوم :</Text>
              <Text style={styles.boldText}>الهاتف : 97487775</Text>
              <Text style={styles.text}>الإسم و اللقب :</Text>
              <Text style={styles.text}>القسم :</Text>
              <Text style={styles.text}>المعلم :</Text>
              <Text style={styles.text}>التاريخ :</Text>
              <Text style={styles.text}>الإمضاء :</Text>
            </View>
            <View style={styles.ticket}>
              <Text style={styles.header}>المدرسة الإبتدائية الخاصة</Text>
              <Text style={styles.text}>وصل خاص عدد {serialNumber}</Text>
              <Text style={styles.boldText}>المعلوم :</Text>
              <Text style={styles.boldText}>الهاتف : 97487775</Text>
              <Text style={styles.text}>الإسم و اللقب :</Text>
              <Text style={styles.text}>القسم :</Text>
              <Text style={styles.text}>المعلم :</Text>
              <Text style={styles.text}>التاريخ :</Text>
              <Text style={styles.text}>الإمضاء :</Text>
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

      
    </div>
  );
};

export default App;
