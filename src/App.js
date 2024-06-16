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
      <div class="flex p-4 mb-4 w-2/4 mx-auto my-7 text-sm text-blue-800 rounded-lg bg-blue-50  " role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div className='flex  items-center'>
          <span class="font-medium">Clicker ici pour telecharger le pdf :</span>
          
          {tickets.length > 0 && (
            <div className='text-blue-800 mx-3 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800'>
            <PDFDownloadLink
              document={<TicketPDF tickets={tickets} />}
              fileName="tickets.pdf"
            >
              {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
            </PDFDownloadLink>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
