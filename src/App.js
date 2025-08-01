import React, { useState, useRef, useEffect } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  StyleSheet,
  Text,
  Image,
} from "@react-pdf/renderer";
import TicketForm from "./TicketForm";
import ticket from "./ticket.png";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const downloadLinkRef = useRef(null);

  const generateTickets = (start, end) => {
    const startNum = parseInt(start);
    const endNum = parseInt(end);
    const count = endNum - startNum + 1;

    // More efficient array generation for large ranges
    const ticketNumbers = Array.from({ length: count }, (_, i) => startNum + i);
    setTickets(ticketNumbers);
  };

  useEffect(() => {
    if (tickets.length > 0 && downloadLinkRef.current) {
      // Trigger download automatically after a short delay
      setTimeout(() => {
        downloadLinkRef.current.click();
      }, 100);
    }
  }, [tickets]);

  // Number of tickets per page (adjust based on your ticket size)
  const TICKETS_PER_PAGE = 4; // 4 tickets per page for A4

  // Function to split tickets into pages
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    ticketContainer: {
      position: "relative", // Use relative positioning
      width: "100%",
      height: "200px",
      marginBottom: 3,
    },
    backgroundImage: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
    ticket1: {
      position: "absolute",
      top: 50,
      left: 20,
      width: "50%",
      padding: 10,
    },
    ticket2: {
      position: "absolute",
      top: 50,
      right: 20,
      width: "50%",
      padding: 10,
    },
    serialNumber: {
      fontSize: 13,
      textAlign: "center",
      color: "black",
      position: "absolute",
      top: "-30px",
    },
  });

  const TicketPDF = React.memo(({ tickets }) => {
    const ticketPages = chunkArray(tickets, TICKETS_PER_PAGE);

    return (
      <Document>
        {ticketPages.map((pageTickets, pageIndex) => (
          <Page key={pageIndex} size="A4" style={styles.page}>
            {pageTickets.map((serialNumber) => (
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
        ))}
      </Document>
    );
  });

  return (
    <div className="p-6">
      <TicketForm onGenerate={generateTickets} />
      {tickets.length > 0 && (
        <div className="mb-4 p-4 bg-blue-100 border border-blue-300 rounded-lg">
          <p className="text-blue-800">
            <strong>Generated:</strong> {tickets.length} tickets across{" "}
            {Math.ceil(tickets.length / TICKETS_PER_PAGE)} pages
          </p>
          {tickets.length > 1000 && (
            <p className="text-yellow-600 mt-2">
              ⚠️ Large number of tickets - PDF generation may take a moment
            </p>
          )}
        </div>
      )}
      {tickets.length > 0 && (
        <PDFDownloadLink
          ref={downloadLinkRef}
          document={<TicketPDF tickets={tickets} />}
          fileName="tickets.pdf"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      )}

      {/* {
        tickets.length > 0 && (
          <div className="mt-6">
            <TicketPDF tickets={tickets} />
          </div>
        )
      } */}
    </div>
  );
};

export default App;
