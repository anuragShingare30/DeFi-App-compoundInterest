import { dapps } from "../../declarations/dapps";

// THIS WILL DISPLAY THE CURRENT BALANCE AS SOON WE LOAD THE PAGE.
window.addEventListener("load", async ()=>{
   update();
});

// THIS FUNCTION WILL RUN AS SOON AS WE CLICK SUBMIT BUTTON.
document.querySelector("form").addEventListener("submit", async (event)=>{
    event.preventDefault();
    // THIS IS INPUT FIELD.
    let inputAmount = parseFloat(document.querySelector(".Amountinput").value);
    let outputAmount = parseFloat(document.querySelector(".Amountwithdraw").value);

    // THIS IS TRANSCATION BUTTON
    let button = document.querySelector(".btn");
    button.setAttribute("disabled", true);
    
    // THIS WILL CALL THE 'topUp' FUNCTION.
    if(document.querySelector(".Amountinput").value.length != 0){
        await dapps.topUp(inputAmount);
    }
    // THIS WILL CALL THE 'withdrawAmount' FUNCTION.
    if(document.querySelector(".Amountwithdraw").value.length != 0){
        await dapps.withdrawAmount(outputAmount);
    }
    // THIS WILL CONTINUOUSLY DISPLAY THE CURRENT BALANCE ON DISPLAY AS SOON AS WITHDRAW OR DEBIT HAS CALLED.
    await dapps.compound();

    button.removeAttribute("disabled");

    document.querySelector(".Amountinput").value = "";
    document.querySelector(".Amountwithdraw").value = "";
    update();
});

// THIS FUNCTION WILL DISPLAY THE CURRENT BALANCE ON SCREEN.
async function update(){
    var currentAmount = await dapps.checkBalance();
    document.querySelector(".para"). innerHTML = `Current Balance : $${Math.round(currentAmount * 100) / 100}`
};