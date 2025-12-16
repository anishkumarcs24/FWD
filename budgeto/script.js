function addTransaction() {
  fetch("http://localhost:5000/api/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Food",
      amount: 250,
      category: "Food",
      type: "expense"
    })
  });
}

fetch("http://localhost:5000/api/transactions")
  .then(res => res.json())
  .then(data => console.log(data));