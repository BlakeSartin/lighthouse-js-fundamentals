const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let i = 0
let ingredientsLength = ingredients.length;
while(i < ingredientsLength){
  i++
  console.log(ingredients)
  break
}
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i <= ingredientsLength; i++){
console.log(ingredients)
break}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = 0; i <= ingredientsLength; i++){
const reversedList = ingredients.reverse()
console.log(reversedList)
break}