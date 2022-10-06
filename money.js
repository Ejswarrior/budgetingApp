/*
    Needed Values:
1. The amount of money you currently have
2. Your pay for every paycheck
3. Your bills and the dates they are due
4. Other expenses(ex: coffee/driving/hobbies)
5. Other incomes
6. Amount you wish to spend


When you enter in your values. There should be a ui to display the values. Along with the budget you have left. There will be one last value
which will be how much you desire to spend. This should update the budget or give you an alert message if you try to spend over your budget

Step 1: Creating all the values in html(Done)
Step 2: Grabbing those values and storing them into variables(done)
Step 3: Creating text content or appending them onto the dom to show (Currently can have the values posted to dom)
Step 4: Create a table instead of just adding the values.
Step 5: After the table is created we have the other value/item for item costs
step 6: When we hit the item cost value we check to see if we have the budget/limit
Step 7: If we can purchase have a popup for a "Do you want to make this purchase". If yes than we subtract the value from the budget
Step 8: 

*/



document.getElementById('btn').addEventListener('click', function(){
    let currentSavingsValue = document.getElementById('currentSavings').value
    let currentPaycheckValue = document.getElementById('currentPaycheck').value
    let currentBillsValue = document.getElementById('bills').value
    let otherExpensesValue = document.getElementById('otherExpenses').value
    let otherIncomeValue = document.getElementById('otherIncomes').value
    let itemCostValue = document.getElementById('itemCosts').value
    let valuesArray = [currentSavingsValue, currentPaycheckValue, currentBillsValue, otherExpensesValue, otherIncomeValue, itemCostValue]
        
        document.getElementById('values').innerHTML += `<h2>Your Current Savings Are ${valuesArray[0]}$</h2>`
        document.getElementById('values').innerHTML += `<h2>Your current paycheck is ${valuesArray[1]}$</h2>`
        document.getElementById('values').innerHTML += `<h2>Your current bills cost ${valuesArray[2]}$</h2>`
        document.getElementById('values').innerHTML += `<h2>Your Other Expenses are ${valuesArray[3]}$</h2>`
        document.getElementById('values').innerHTML += `<h2>Your other incomes come out to ${valuesArray[4]}$</h2>`
        document.getElementById('values').innerHTML += `<h2>Your Item cost is ${valuesArray[5]}$</h2>`
        


})
