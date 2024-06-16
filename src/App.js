import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import TicketForm from './TicketForm';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);

  const generateTickets = (start, end) => {
    const ticketNumbers = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
      ticketNumbers.push(i);
    }
    setTickets(ticketNumbers);
  };

  const TicketPDF = ({ tickets }) => {
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 10,
      },
      ticket: {
        width: '100%',
        height: '30%',
        border: '1px solid black',
        padding: 10,
        margin: 'auto',
      },
    });

    const ticketsPerPage = 3;
    const pages = [];

    for (let i = 0; i < tickets.length; i += ticketsPerPage) {
      pages.push(tickets.slice(i, i + ticketsPerPage));
    }

    return (
      <Document>
        {pages.map((pageTickets, pageIndex) => (
          <Page key={pageIndex} size="A4" style={styles.page}>
            {pageTickets.map((ticket, index) => (
              <View key={index} style={styles.ticket}>
                <Text>Ticket Serial: {ticket}</Text>
              </View>
            ))}
          </Page>
        ))}
      </Document>
    );
  };

  return (
    <div>
      <TicketForm onGenerate={generateTickets} />
      {tickets.length > 0 && (
        <PDFDownloadLink
          document={<TicketPDF tickets={tickets} />}
          fileName="tickets.pdf"
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default App;
