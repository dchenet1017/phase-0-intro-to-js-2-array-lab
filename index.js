// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name) {
    console.log (name)

    cats.push(name)
}
function destructivelyPrependCat (name) {

    cats.unshift(name)
}
function destructivelyRemoveLastCat (name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat (name) {
    cats.shift(name)
}
function appendCat (name){
  console.log (name)
    return [...cats,name]
}
function prependCat (name){
    return [name,...cats] 
}
function removeFirstCat (name){
   const shot = [...cats] 
   shot.shift()
   return shot
}
function removeLastCat (name){
    const shot =[...cats]
    shot.pop()
    return shot

}