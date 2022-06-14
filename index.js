// Write your solution here!
const cats = (["Milo", "Otis", "Garfield"])

function destructivelyAppendCat (name){
    const destructivelyAppendCat = cats.push(name)
    return destructivelyAppendCat
}

function destructivelyPrependCat (name){
    const destructivelyPrependCat = cats.unshift(name)
    return destructivelyPrependCat
}

//Remove Last cat from the cats array
function destructivelyRemoveLastCat(name){
    const destructivelyRemoveLastCat = cats.pop(name)
    return destructivelyRemoveLastCat
}

//Remove First Cat from the cats array
function destructivelyRemoveFirstCat(name){
    const destructivelyRemoveFirstCat = cats.shift(name)
    return destructivelyRemoveFirstCat
}

//Append a cat and return a new array.
function appendCat(name){
    return [...cats, name]
}

//Prepend a cat and return a new array.
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat (name){
    return cats.slice(0, cats.length -1)
}

function removeFirstCat () {
    return cats.slice(1)
}

