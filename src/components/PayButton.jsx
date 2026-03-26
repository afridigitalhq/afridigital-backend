import React, { useState } from "react";
import { initializePayment } from "../utils/paystack";

export default function PayButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const response = await initializePayment(
        "test@example.com",
        1000
      );

      const { authorization_url } = response.data;

      window.location.href = authorization_url;
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initialization failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
