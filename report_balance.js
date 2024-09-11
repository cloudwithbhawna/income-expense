document.addEventListener("DOMContentLoaded", function () {
  let incomeList = document.getElementById("incomeList");
  let expenseList = document.getElementById("expenseList");
  let totalIncome = document.getElementById("totalIncome");
  let totalExpense = document.getElementById("totalExpense");

  function renderBalanceSheet() {
    let incomes = JSON.parse(localStorage.getItem("income")) || [];
    let expenses = JSON.parse(localStorage.getItem("expense")) || [];
    let totalIncomeAmt = 0;
    let totalExpenseAmt = 0;
    incomes.forEach(income => {
        let li = document.createElement("li")
        li.className = "list-group-item"
        li.textContent = `${income.date} - ${income.particular} - ${income.category} - ${income.amount}`
        incomeList.appendChild(li)
        totalIncomeAmt += parseInt(income.amount)
    });
    totalIncome.textContent = `Total Rs. ${totalIncomeAmt}`

    expenses.forEach(expense => {
        let li = document.createElement("li")
        li.className = "list-group-item"
        li.textContent = `${expense.date} - ${expense.particular} - ${expense.category} - ${expense.amount}`
        expenseList.appendChild(li)
        totalExpenseAmt += parseInt(expense.amount)
    });
    totalExpense.textContent = `Total Rs. ${totalExpenseAmt}`
  }
  renderBalanceSheet()
});
