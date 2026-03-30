export const verifyPayment = async (reference) => {
  const res = await fetch("https://afridigital-hub.onrender.com/api/paystack/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ reference })
  });

  return await res.json();
};
