// First remove all the punctuations and change the string to array and count the number of words in the array.
//
//     let text =
//         'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
//     console.log(words);
//     console.log(words.length);
//
//     // 2. In the following shopping cart add, remove, edit items
//

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//     // add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);
//     // add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

console.log(shoppingCart);
//     // remove 'Honey' if you are allergic to honey
if (shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);
//     // modify Tea to 'Green Tea'
if (shoppingCart.includes("Tea")) {
  shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
  //     }
  console.log(shoppingCart);
}
//
//     // 3. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
console.log(countries);

// 4. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
}
console.log(webTechs);

//     // 5. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// 6. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log(ages[0]);
console.log(ages[ages.length - 1]);
//     // Find the median age(one middle item or two middle items divided by two)
console.log(ages[Math.floor(ages.length / 2)]);
//     // Find the average age(all items divided by number of items)
let sum = 0;
for (const age of ages) {
  sum += age;
}

console.log(sum / ages.length);
//     // Find the range of the ages(max minus min)

console.log(ages[ages.length - 1] - ages[0]);
//     // Compare the value of (min - average) and (max - average), use _abs()_ method 1.1 If the first one is greater than the second one print _true_ else print _false_
console.log(
  Math.abs(ages[0] - sum / ages.length) >
    Math.abs(ages[ages.length - 1] - sum / ages.length)
);
//     // 7. Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));
//     // Find the middle country(ies) in the countries array
console.log(countries[Math.floor(countries.length / 2)]);
//     // Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2));
console.log(firstHalf);
console.log(secondHalf);
