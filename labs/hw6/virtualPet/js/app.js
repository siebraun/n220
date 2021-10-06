document.addEventListener("DOMContentLoaded", () => {
    updateStats();
    document.getElementById("foodButton").addEventListener("click", clickedFoodButton);
    document.getElementById("playButton").addEventListener("click", clickedPlayButton);
    
  });
    let stats = {name:"BBQ", energy:"1", happiness:"1", age:"1"};
  
    function clickedFoodButton() {
      stats.energy = (stats.energy * 1 + 5);
      updateStats();
    }

    function clickedPlayButton() {
      stats.happiness = (stats.happiness * 1 + 5);
      updateStats();
    }
    
    
    function updateStats() {
      document.getElementById("name").innerText = stats['name'];
      document.getElementById("age").innerText = stats['age'];
      document.getElementById("energy").innerText = stats['energy'];
      document.getElementById("happiness").innerText = stats['happiness'];
    }
    
  