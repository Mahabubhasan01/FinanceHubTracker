

    




    function getInputAmount(){
    const totalAmountValue = document.getElementById('income-input').value;

    const foodInput = document.getElementById('food-input').value
    const rentInput = document.getElementById('rent-input').value
    const clothsInput = document.getElementById('cloths-input').value

    const total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothsInput);
    
     const totalAmount = totalAmountValue - total;

         document.getElementById('total').innerText=total
         document.getElementById('balance').innerText = totalAmount
    
    } 
     document.getElementById('calculate-btn').addEventListener('click',function () {
        getInputAmount();
    })

    
     document.getElementById('save-btn').addEventListener('click',function () {

        const totalAmount = document.getElementById('income-input').value;
        const totalAmountValue = parseFloat(totalAmount);

        const saveText = document.getElementById('save-input').value;
        const save = parseFloat(saveText);

        const saveMoney= totalAmountValue * save/100;

        document.getElementById('saving-amount').innerText=saveMoney;



    const foodInput = document.getElementById('food-input').value
    const rentInput = document.getElementById('rent-input').value
    const clothsInput = document.getElementById('cloths-input').value

    const total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothsInput);
    
    const totalAmountText = totalAmountValue - total;
    const raminBalance = totalAmountText - saveMoney;
    document.getElementById('remaining-balance').innerText= raminBalance;



        

    }) 
    