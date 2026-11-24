let expenses = [];

function addExpense() {
  let name = document.getElementById("name").value.trim();
  let amount = parseFloat(document.getElementById("amount").value);
  let category = document.getElementById("category").value;

  
  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and positive amount.");
    return;
  }

  expenses.push({ name: name, amount: amount, category: category });


  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";

  showExpenses();
}

function showExpenses() {
  let tableBody = document.getElementById("table-body");
  let filter = document.getElementById("filter").value;
  let total = 0;

  tableBody.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    if (filter === "All" || expenses[i].category === filter) {
      total += expenses[i].amount;

      tableBody.innerHTML += `
        <tr>
          <td>${expenses[i].name}</td>
          <td>${expenses[i].category}</td>
          <td>$${expenses[i].amount.toFixed(2)}</td>
          <td><button class="del-btn" onclick="deleteExpense(${i})">Delete</button></td>
        </tr>
      `;
    }
  }

  document.getElementById("total").innerText = total.toFixed(2);
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  showExpenses();
}