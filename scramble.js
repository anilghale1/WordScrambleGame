

let word = document.getElementById("word");

let stringArray = [
    "Apple",
    "Banana",
    "Cherry",
    "Orange",
    "Grapes",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Mango",
    "Peach",
    "Kiwi",
    "Blueberry",
    "Lemon",
    "Raspberry",
    "Pear",
    "Plum",
    "Avocado",
    "Coconut",
    "Pomegranate",
];





  var randomIndex;
 

 function scramble()
 {
    let newArray = stringArray.slice();
     randomIndex = Math.floor(Math.random() * newArray.length);
    
    

      newArray[randomIndex] = (newArray[randomIndex]).split('').sort(() => Math.random() - 0.5).join('');
      document.querySelector("#Scramble").innerHTML = newArray[randomIndex];

      
      
     }

 function checkWord()
 {
       let tempArray = stringArray.slice();
       
          if(tempArray[randomIndex] == word.value)
          {
            alert("correct you WON");
          }
          else{
            alert(" Incorrect Answer");
          }
 }