console.log('Hello world! 👋🌎')

// ### LEARNING GOALS ###
// Manipulate the DOM (aka change the html & css via our JS)
// We're going to explore the Chrome Dev Tools
// Learn about the methods to do that programmatically in JS

// ⛓️ Part 1 - Changing content & Style
// getElementById
// querySelector
// querySelectorAll
// .textContent (..and .innerHTML)

const titleEl = document.getElementById("title")
console.log(titleEl)
console.dir(titleEl)

// const exampleTitleEl = document.querySelector("#title")

// grab the first h1 it sees
const exampleTitleEl = document.querySelector("h1")
console.log(exampleTitleEl)

const allTitleEls = document.querySelectorAll("h1")
console.log(allTitleEls)

// 💪 Practice 1:
// In index.html, add a <p> tag below the <h1> and give it a class of cool, then...
// Add some content inside of the <p> tag - try typing lorem [tab] to emit (using emmet) random lorem ipsum text.
// Use querySelector() to select the first element with a class of cool and assign it to a variable named pEl.
// Verify that the <p> element was selected by logging out pEl.

const pEl = document.querySelector(".cool")
const currentTextValue = pEl.textContent
console.log(currentTextValue)

// We can manipulate the CONTENT w/ .textContent
pEl.textContent = 'Placeholder text begone! Today we are cool 😎' 
// const 🛑 = "please don't do this"
// console.log(🛑)

// We can do the same thing with .innerHTML
// But .innerHTML is DANGEROUS
pEl.innerHTML = 'This is text set with innerHTML'

// Changing style with the .style property!
// note that the CSS properties are camelCase in JS!
pEl.style.backgroundColor = 'hotpink'
pEl.style.fontSize = '24px';

pEl.style.fontFamily = 'Arial'

// Question - I want the font that a particular element is
const font = pEl.style.fontFamily
console.log(font)

// ⛓️ Part 2 - Attributes
// getAttribute
// setAttribute
// hasAttribute
// removeAttribute

// 💪 Practice 2
// Add an <a> tag to index.html with content of "Visit Google" but without an href attribute.
// Reload the page and verify that the link does not work (in fact, it probably doesn't even look like a link).
// In the JS, write the line of code that will add an href attribute that will make the link navigate to "https://www.google.com".

const linkEl = document.querySelector('a')
// setAttribute example
linkEl.setAttribute('href', 'https://www.google.com')
// getAttribute example
console.log(linkEl.getAttribute('href'))
// hasAttribute example
console.log(linkEl.hasAttribute('href'))
// removeAttribute example
linkEl.removeAttribute('href')


// ⛓️ Part 3 - Creating and removing elements
    // createElement
    // appendChild
    // removeChild
// (also extra looping practice)
// how to ADD CSS classes
// .classList
    // toggle
    // remove
    // add

// Save into a variable ALL the <li> elements
const fruitEls = document.querySelectorAll("li")
console.log(fruitEls)

// Task: console.log() all of the fruit names that are in my list
// for...in helps you iterate over objects

// traditional for loop
for(let i = 0; i < fruitEls.length; i++) {
    console.log(fruitEls[i])
    fruitEls[i].classList.add("crossed-out")
}

// .remove Example: Un-cross out 'banana'
fruitEls[1].classList.remove("crossed-out")
// .toggle Example: toggle the crossed-out status of coconut
fruitEls[2].classList.toggle("crossed-out")

// javascript for...of loop
// fruitEls is our NodeList (basically an Array)
// which we're looping over
// Step 1: Start at the beginning of the arr
// and save the first item there into "item"
// Step 2: do whatever is inside of the { }
for(let item of fruitEls) {
    // console.log(item)
}

// Array.forEach
fruitEls.forEach((item) => {
    // console.log(item)
})


// Make a banana element!
// createElement Example:
const banana1 = document.createElement('li')
banana1.textContent = "Another banana!"
console.log(banana1)

// appendChild Example:
const ulEl = document.querySelector('ul')
console.log(fruitEls)
console.log(ulEl)
// fruitEls.appendChild(banana1) // didnt work - b/c cant add to a NodeList
ulEl.appendChild(banana1) // worked - b/c we're adding to the <ul> directly