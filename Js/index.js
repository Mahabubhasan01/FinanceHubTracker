

    


// first section calculation js code here 
    //  main funtion 
    function getInputAmount(){

    const foodInputText = document.getElementById('food-input').value;
    const foodInput=parseFloat(foodInputText);

    const rentInputText = document.getElementById('rent-input').value;
    const rentInput = parseFloat(rentInputText);

    const clothsInputText = document.getElementById('cloths-input').value;
    const clothsInput = parseFloat(clothsInputText);
    
        const total =foodInput + rentInput+ clothsInput;
        return total;
    };


     document.getElementById('calculate-btn').addEventListener('click',function () {
       /*  getInputAmount(); */
       const totalAmountValue = document.getElementById('income-input').value;

        const totalAmount = totalAmountValue -  getInputAmount();
    
        document.getElementById('total').innerText= getInputAmount();
        document.getElementById('balance').innerText = totalAmount;
    })



// second section calculation js code here 
     document.getElementById('save-btn').addEventListener('click',function () {

        const totalAmount = document.getElementById('income-input').value;
        const totalAmountValue = parseFloat(totalAmount);
        
        const saveText = document.getElementById('save-input').value;
        const save = parseFloat(saveText);

        const saveMoney=  save/100 * totalAmountValue;
        

        document.getElementById('saving-amount').innerText=saveMoney;
        
        const totalAmountSum = totalAmountValue - getInputAmount();
        const remainBalance = totalAmountSum - saveMoney;
        document.getElementById('remaining-balance').innerText= remainBalance;
    }) 
    