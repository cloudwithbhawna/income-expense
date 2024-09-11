document.addEventListener("DOMContentLoaded", function() {
  let incomeForm = document.getElementById("incomeForm"); //getting incomeForm id from HTML page
  let incomeCategory = document.getElementById("incomeCategory"); //getting incomeCategory id from HTML page

  function showCategory() {
    incomeCategory.innerHTML = ""; //If there is already any value in incomeCategory then empty it
    let incomeList = JSON.parse(localStorage.getItem("incomecategories"));

      incomeList.forEach((category) => {
      let option = document.createElement("option");
      option.value = category; //the value of option will be category
      option.textContent = category;
        incomeCategory.appendChild(option);
    });
  }

incomeForm.addEventListener("submit", function (event) {
  event.preventDefault(); //when we submit form ,the page would not refresh

  let date = document.getElementById("incomeDate").value;
  let particular = document.getElementById("incomeParticular").value;
  let category = document.getElementById("incomeCategory").value;
  let amount = document.getElementById("incomeAmount").value;

  if (date && particular && category && amount) {
    let income = JSON.parse(localStorage.getItem("income")) || []; //If there is already a value in local storage then get it, if not then create an empty array name of income.
    income.push({ date, particular, category, amount });
    localStorage.setItem("income", JSON.stringify(income));
    incomeForm.reset();
  }
});
showCategory();
});
