function calculate(){
    let numInput = document.getElementById("numInput").value;

    //convert input to array
    let numArr = numInput.split(", ");

    //convert input to integers
    let intArr = numArr.map(Number);

    //set sum to 0 automatically
    let sum = 0;
    //add each num to sum
    for (let i = 0; i < intArr.length; i++) {
    sum += intArr[i]
    }

    //divide sum by amt of nums
    let avg = sum/intArr.length;


//output sum
    document.getElementById("sum").innerHTML = "sum is " + sum;
//output average
    document.getElementById("avg").innerHTML = "average is " + avg;

        //clear input
        document.getElementById('numInput').value='';




}