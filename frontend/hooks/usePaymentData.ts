'use client';

// usePaymentData.ts
import { useState, useEffect } from 'react';

// Define the structure of our payment data
interface PaymentData {
  amount: string;
  name: string;
  email: string;
  phone: string;
  paymentDetails: string;
}

// Define our custom hook
export const usePaymentData = (): PaymentData | null => {
  // Initialize state to store the payment data
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    // Function to load data from localStorage
    const loadData = () => {
      const savedData = localStorage.getItem('paymentFormData');
      if (savedData) {
        setPaymentData(JSON.parse(savedData));
      }
    };

    // Load the data when the component mounts
    loadData();
    
    // Function to check if the data has expired
    const checkExpiration = () => {
      const expirationTime = localStorage.getItem('paymentFormExpiration');
      if (expirationTime && new Date().getTime() > parseInt(expirationTime)) {
        localStorage.removeItem('paymentFormData');
        localStorage.removeItem('paymentFormExpiration');
        setPaymentData(null);
      }
    };

    // Check expiration immediately and set up interval to check periodically
    checkExpiration();
    const interval = setInterval(checkExpiration, 60000); // Check every minute

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  // Return the payment data
  return paymentData;
};