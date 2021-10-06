let meeples = [];

for(let i = 0; i < 20; i++) {
  meeples.push( { name: "Meeple #"+i, age: Math.floor(Math.random() * 50) });
}

//log out the contents of meeples.. what is in it?

console.log(meeples);

//When a button is pressed


function addAge(){
    for (let i = 0; i < 20; i++){
        meeples[i].age++;
        console.log(meeples[i]);
    }
}

document.getElementById("addAge").addEventListener("click", addAge);

    // loop through the meeples
    
    //add one to their age
    //if their age is greater than 18 and they don't have a job..

    if([    meeples.age] > 18){
        meeples.job= "Doctor";
    }
         //set their job to (randomly) teacher, doctor, pilot
    //if their age is greater than 55
          // on a 50% chance
          // remove them from the array

//When a different button is pressed
   // clear out old data
    // write the content ofthe array to the screen

//when a  third button is pressed

  // add a new person to the meeples array