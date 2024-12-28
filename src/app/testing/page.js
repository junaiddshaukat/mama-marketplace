import { useState } from 'react';
import axios from 'axios';


const SubscriptionPage = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      // Call your backend to create payment
      const response = await axios.post<PaymentResponse>('/api/create-payment', {
        amount: 99.99, // Your subscription amount
        currency: 'EUR',
        userId: 'current-user-id' // Get this from your auth context
      });
      
      // Store transaction ID in localStorage for verification
      localStorage.setItem('pendingPaymentId', response.data.transactionId);
      
      // Redirect to PayRexx hosted page
      window.location.href = response.data.link;
    } catch (error) {
      console.error('Payment initiation failed:', error);
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1>Yearly Subscription</h1>
      <button 
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default SubscriptionPage;