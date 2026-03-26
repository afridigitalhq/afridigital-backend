export const initializePayment = async (email, amount) => {
  const res = await fetch("https://afridigital-fmdash.onrender.com/api/paystack/initialize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, amount })
  });

  const data = await res.json();
  return data;
};
