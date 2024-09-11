document.addEventListener("DOMContentLoaded", function () {
  let categoryForm = document.getElementById("categoryForm"); //getting categoryForm id from HTML page
  let incomecategories = document.getElementById("incomecategories"); //getting incomecategories id from HTML page
  let expensecategories = document.getElementById("expensecategories"); //getting expensecategories id from HTML page

  categoryForm.addEventListener("submit", function (event) {
    event.preventDefault(); //when we submit form ,the page would not refresh
    let type = document.getElementById("categoryType").value; //getting categoryType id from HTML page
    let name = document.getElementById("categoryName").value; //getting categoryName id from HTML page,the value of categoryName will store in name variable

    let categories =
      JSON.parse(localStorage.getItem(type + "categories")) || []; //
    categories.push(name); //pushing name variable value in categories
    localStorage.setItem(type + "categories", JSON.stringify(categories));
    categoryForm.reset();
    displayCategories();
  });

  displayCategories = () => {
    incomecategories.innerHTML = " "; //If there is already a value then empty it
    expensecategories.innerHTML = " ";

    let incomeList = JSON.parse(localStorage.getItem("incomecategories")) || []; //If there is already a value in local storage then get it, if not then create an empty array name of incomecategories.
    let expenseList =
      JSON.parse(localStorage.getItem("expensecategories")) || [];

    incomeList.forEach((category) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = category;
      incomecategories.appendChild(li);
    });

    expenseList.forEach((category) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = category;
      expensecategories.appendChild(li);
    });
  };
  displayCategories();
});
