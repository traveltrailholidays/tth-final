"use client";

import React from "react";
import { Document, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";
import Container from "@/components/features/Container";
import Section from "@/components/features/Section";

const styles = StyleSheet.create({
  pageProps: {
    padding: '10px', 
  }
});

const DownloadVoucher = () => {
  return (
    <Section>
      <Container className="mt-28 mb-20">
        <PDFViewer height={760} width={1200} className="rounded">
          <Document>
            <Page size="A4">
              <View>
                <Text>Hello</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </Container>
    </Section>
  );
};

export default DownloadVoucher;
