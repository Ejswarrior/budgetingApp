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
Step 4: Create a table instead of just adding the values. (done)
Step 5: After the table is created we have the oa input for item cost(Done)
step 6: When we hit the item cost value we check to see if we have the budget/limit(Done)
Step 7: If we can purchase have a popup for a "Do you want to make this purchase". If yes than we subtract the value from the budget
Step 8: We need to have the budget increase and decrease from bills and paychecks

*/



document.getElementById('btn').addEventListener('click', function(){
    let currentSavingsValue = parseInt(document.getElementById('currentSavings').value)
    let currentPaycheckValue = parseInt(document.getElementById('currentPaycheck').value)
    let currentBillsValue = parseInt(document.getElementById('bills').value)
    let otherExpensesValue = parseInt(document.getElementById('otherExpenses').value)
    let otherIncomeValue = parseInt(document.getElementById('otherIncomes').value)
    let savingLimitValue = parseInt(document.getElementById('savingLimit').value)
    let valuesArray = [currentSavingsValue, currentPaycheckValue, currentBillsValue, otherExpensesValue, otherIncomeValue]
    let amount = currentSavingsValue + (currentPaycheckValue * 4)
    let amountIncome = amount + otherIncomeValue
    let amountDecrease = amountIncome - (currentBillsValue + otherExpensesValue)
        document.getElementById('values').innerHTML += 
            `<table id='moneyTable'>
            <tr><th>Current Savings</th> <th>Current Paycheck</th> <th>Current Bills</th> 
            <th>Other Expenses</th> <th>Other Income</th> <th>Budget</th></tr>
            <tr>

            <td>${valuesArray[0]}$</td>
            <td>${valuesArray[1]}$</td>
            <td>${valuesArray[2]}$</td>
            <td>${valuesArray[3]}$</td>
            <td>${valuesArray[4]}$</td>
            <td>${amount}%</td>

            </tr>
            </table>
            
            <p> At the end of the month you will have made ${amount}$ and your bills will cost ${valuesArray[2]} and other expenses cost ${valuesArray[3]}
            You had ${valuesArray[1]} saved up with other incomes ${valuesArray[4]}. This means you have ${amountDecrease}$ left</p>
            

            <div>
                <label for="Item Cost">Please enter in the price of the item you wish to purchase</label>
                <input type="number" name="Item cost" id="itemCosts">
                <button id="btnItem">Click</button>
            </div>
            `
        
        document.getElementById('btnItem').addEventListener('click', function(){
            let itemCostValue = parseInt(document.getElementById('itemCosts').value)
            let budget = currentSavingsValue -= itemCostValue
            if(budget>savingLimitValue ){
                console.log('You can Purchase')
            } else {
                console.log('You cant purchase')
            }
       })
})
