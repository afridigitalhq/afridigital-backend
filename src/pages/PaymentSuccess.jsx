import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PaymentSuccess() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reference = params.get("reference") || params.get("trxref");

    console.log("Payment reference:", reference);

    // TODO: call backend verification endpoint here
  }, [location]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Successful 🎉</h2>
      <p>Thank you for your payment.</p>
    </div>
  );
}
