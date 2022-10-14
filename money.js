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
step 6: When we hit the item                                                                                                                                                                                                            cost value we check to see if we have the budget/limit(Done)
Step 7: If we can purchase have a popup for a "Do you want to make this purchase". If yes than we subtract the value from the budget
Step 8: We need to have the budget increase and decrease from bills and paychecks(idea 1: checking date and if its a friday then we get paid)
other steps:
Step 1: Learn to store data so we only have to enter it once
Step 2: Make it a prompt instead of a list of inputs
*/
    let date = new Date()
    let day = date.getDay()
    let cursorSwitch = 1;

    let inputTurn1 = document.getElementById('inputTurn1')
    let inputTurn2 = document.getElementById('inputTurn2')
    let inputTurn3 = document.getElementById('inputTurn3')
    let inputTurn4 = document.getElementById('inputTurn4')
    let inputTurn5 = document.getElementById('inputTurn5')
    let inputTurn6 = document.getElementById('inputTurn6')

    let currentSavingsCursor = document.getElementById('currentSavings')
    let currentPaycheckCursor = document.getElementById('currentPaycheck')
    let currentBillsCursor = document.getElementById('bills')
    let otherExpensesCursor = document.getElementById('otherExpenses')
    let otherIncomeCursor = document.getElementById('otherIncomes')
    let savingLimitCursor = document.getElementById('savingLimit')

    let currentSavingsValue 
    let currentPaycheckValue 
    let currentBillsValue 
    let otherExpensesValue 
    let otherIncomeValue 
    let savingLimitValue 

    let cursorArray = [currentSavingsCursor, currentPaycheckCursor, currentBillsCursor, otherExpensesCursor, otherIncomeCursor, savingLimitCursor]
    let valuesArray = [currentSavingsValue, currentPaycheckValue, currentBillsValue, otherExpensesValue, otherIncomeValue]
    let inputTurns = [inputTurn1, inputTurn2, inputTurn3, inputTurn4, inputTurn5, inputTurn6]

    let isAllValuesEntered
    let budget = currentSavingsValue - savingLimitValue
    let amount = currentSavingsValue + (currentPaycheckValue * 4)
    let amountIncome = amount + otherIncomeValue
    let amountDecrease = amountIncome - (currentBillsValue + otherExpensesValue)
    let htmlCreated = 0;
    let whichInputTurn = 1;
    
    function createInput(currentVar, idOne, idTwo, message, ){
        inputTurn1.innerHTML += `
        <label for="${idOne}">${message}</label>
        <input type="number" name="${idOne}" id="${idTwo}" required>
        `
        return currentVar = parseInt(document.getElementById(idTwo).value)
        }

        let functionArray = []
            functionArray.push([currentSavingsValue,'Current Savings','currentSavings','Enter in your Current Savings']);
            functionArray.push([currentPaycheckValue, 'Current Paycheck','currentPaycheck', 'Enter in your current paycheck amount']);
            functionArray.push([currentBillsValue,'Bills', 'bills','Please Enter in your monthly bills']);
            functionArray.push([otherExpensesValue,'Other Expeneses', 'otherExpenses', 'Please enter in any Other Expeneses']);
            functionArray.push([otherIncomeValue,'Other Incomes', 'otherIncomes', 'Please enter in any other incomes']);
            functionArray.push([savingLimitValue,'Current Savings', 'savingLimit', 'How much money would you like to keep at all times']);
            createInput(functionArray[0][0], functionArray[0][1], functionArray[0][2], functionArray[0][3])

   

    function checkIfNaN(){
        //looping through all of the values to make sure they have a value on them
        valuesArray.forEach((item) => {
            if(isNaN(item) == true){
                isAllValuesEntered = false;
            } else{isAllValuesEntered = true}
            
        })
    }
    

function CreatingYourBudgetTable(){
    console.log(whichInputTurn)
    let updateValues = [
        //updating the values so when we use them in functions they have the values
        currentSavingsValue = parseInt(document.getElementById('currentSavings').value),
        currentPaycheckValue = parseInt(document.getElementById('currentPaycheck').value),
        currentBillsValue = parseInt(document.getElementById('bills').value),
        otherExpensesValue = parseInt(document.getElementById('otherExpenses').value),
        otherIncomeValue = parseInt(document.getElementById('otherIncomes').value),
        savingLimitValue = parseInt(document.getElementById('savingLimit').value)
        
    ]
    while (inputTurn1.hasChildNodes()) {
        inputTurn1.removeChild(inputTurn1.firstChild);
      }
        if(day == 0){
            valuesArray[0] += currentPaycheckValue
            document.getElementById('values').innerHTML += `<h2>Today was payday and you got paid ${currentPaycheckValue}$</h2>`
        }

            if(date.getDate() + 1 == 1){
            valuesArray[0] -= currentBillsValue
            valuesArray[0] -= otherExpensesValue
            valuesArray[0] += otherIncomeValue
                if(date.getDate() > 24 && date.getDate() < 31){
                    console.log(`You have an upcoming bills to be paid`)
                }

            }
            if(whichInputTurn < 5){
                updateValues[whichInputTurn]
                console.log(updateValues[whichInputTurn])
                createInput(functionArray[whichInputTurn][0], functionArray[whichInputTurn][1], functionArray[whichInputTurn][2], functionArray[whichInputTurn][3])
                
                whichInputTurn++
                
            }

            else if(whichInputTurn == 5){
                
                document.getElementById('form').remove()
                    document.getElementById('values').innerHTML += 
                        `<table id='moneyTable'>
                        <tr><th>Current Savings</th> <th>Current Paycheck</th> <th>Current Bills</th> 
                        <th>Other Expenses</th> <th>Other Income</th> <th>Budget</th></tr>
                        <tr>

                        <td id="currentSavings">${valuesArray[0]}$</td>
                        <td>${valuesArray[1]}$</td>
                        <td>${valuesArray[2]}$</td>
                        <td>${valuesArray[3]}$</td>
                        <td>${valuesArray[4]}$</td>
                        <td id="currentBudget">${budget}$</td>

                        </tr>
                        </table>
                        
                        <p> At the end of the month you will have made ${amount}$ and your bills will cost ${valuesArray[2]} and other expenses cost ${valuesArray[3]}
                        You had ${valuesArray[0]} saved up with other incomes ${valuesArray[4]}. This means you have ${amountDecrease}$ left</p>
                        

                        <div>
                            <label for="Item Cost">Please enter in the price of the item you wish to purchase</label>
                            <input type="number" name="Item cost" id="itemCosts">
                            <button id="btnItem">Click</button>
                        </div>
                        `
            htmlCreated += 1;

        if(isAllValuesEntered == false){

            if(ifErrorCreated == false){
                document.getElementById('form').innerHTML += `<p id='errorMessage'>Please enter in all values</p>`
                ifErrorCreated = true
                
            }
            document.getElementById('btn').addEventListener('click', CreatingYourBudgetTable)
            document.addEventListener('keydown', function(e) {
                checkIfNaN()
                    if(e.key == 'Enter' && cursorSwitch == 6){
                            CreatingYourBudgetTable()
                    }
                    if(e.key == 'Enter' && isAllValuesEntered == false){
                            cursorArray[cursorSwitch].focus()
                            cursorSwitch++ 
                        }
            })
        } 
        console.log('hello')
    }     
}

document.getElementById('btn').addEventListener('click', CreatingYourBudgetTable)
document.addEventListener('keydown', function(e) {
    checkIfNaN()
        if(e.key == 'Enter' && cursorSwitch == 6){
                CreatingYourBudgetTable()
        }
        if(e.key == 'Enter' && isAllValuesEntered == false){
                cursorArray[cursorSwitch].focus()
                cursorSwitch++ 
            }
})

if(htmlCreated == 1){
document.getElementById('btnItem').addEventListener('click', function(){
    let itemCostValue = parseInt(document.getElementById('itemCosts').value)
    let budgetAfterPurchase = currentSavingsValue - itemCostValue
        if(budgetAfterPurchase>savingLimitValue ){
            console.log('You can Purchase')
            currentSavingsValue -= itemCostValue
            document.getElementById('currentSavings').textContent = currentSavingsValue
            budget -= itemCostValue
            document.getElementById('currentBudget').textContent = budget
        } 
            else if(isNaN(budget)){
                console.log(`Enter in a budget`)
            }
                else {
                    console.log('You cant purchase')
                }
    }) 
}