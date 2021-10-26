function tipCalc(){

    // grab the input values from html doc and assign variables
    let tipAmount= .15;
    let billAmt = document.getElementById("billAmt").value;


    //turn strings into numbers
    let billAmountNumber = parseFloat(billAmt);

    // calculate tip = tip percentage * bill before tip
    let totalTip = (tipAmount * billAmountNumber);
    //total bill = tip + bill before tip
    let totalBill = totalTip + billAmountNumber;


    // log tip and total amts
    console.log("tip: $" + totalTip +", total bill: $" + totalBill);
}
  

