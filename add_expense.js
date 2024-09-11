document.addEventListener("DOMContentLoaded", function () {
  let expenseForm = document.getElementById("expenseForm"); //getting expenseForm id from HTML page
  let expenseCategory = document.getElementById("expenseCategory"); //getting expenseCategory id from HTML page

  function showCategory() {
    expenseCategory.innerHTML = ""; //If there is already any value in expenseCategory then empty it
    let expenseList = JSON.parse(localStorage.getItem("expensecategories"));

    expenseList.forEach((category) => {
      let option = document.createElement("option");
      option.value = category; //the value of option will be category
      option.textContent = category;
      expenseCategory.appendChild(option);
    });
  }

  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault(); //when we submit form ,the page would not refresh

    let date = document.getElementById("expenseDate").value;
    let particular = document.getElementById("expenseParticular").value;
    let category = document.getElementById("expenseCategory").value;
    let amount = document.getElementById("expenseAmount").value;

    if (date && particular && category && amount) {
      let expense = JSON.parse(localStorage.getItem("expense")) || []; //If there is already a value in local storage then get it, if not then create an empty array name of expense.
      expense.push({ date, particular, category, amount });
      localStorage.setItem("expense", JSON.stringify(expense));
      expenseForm.reset();
    }
  });
  showCategory();
});
