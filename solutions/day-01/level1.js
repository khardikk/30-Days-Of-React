// This is just for prctice. I'm not going to use this file.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

    // 1. Declare an _empty_ array;
    const emptyArray = [];
    console.log(emptyArray);

    // 2. Declare an array with more than 5 number of elements
    const moreThanFive = [1, 2, 3, 4, 5, 6, 7];
    console.log(moreThanFive);

    // 3. Find the length of your array
    console.log(moreThanFive.length);
    
    // 4. Get the first item, the middle item and the last item of the array
    console.log(moreThanFive[0]);
    console.log(moreThanFive[3]);
    console.log(moreThanFive[moreThanFive.length - 1]);

    // 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
    const mixedDataTypes = [1, 'two', true, null, undefined, 6];
    console.log(mixedDataTypes.length);
    
    // 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    console.log(itCompanies);

    // 7. Print the array using _console.log()_
    console.log(itCompanies);

    // 8. Print the number of companies in the array
    console.log(itCompanies.length);

    // 9. Print the first company, middle and last company
    console.log(itCompanies[0]);
    console.log(itCompanies[3]);
    console.log(itCompanies[itCompanies.length - 1]);

    // 10. Print out each company
    console.log(itCompanies[0]);
    console.log(itCompanies[1]);
    console.log(itCompanies[2]);
    console.log(itCompanies[3]);
    console.log(itCompanies[4]);
    console.log(itCompanies[5]);
    console.log(itCompanies[6]);

    // 11. Change each company name to uppercase one by one and print them out
    console.log(itCompanies[0].toUpperCase());
    console.log(itCompanies[1].toUpperCase());
    console.log(itCompanies[2].toUpperCase());
    console.log(itCompanies[3].toUpperCase());
    console.log(itCompanies[4].toUpperCase());
    console.log(itCompanies[5].toUpperCase());
    console.log(itCompanies[6].toUpperCase());

    // 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);

    // 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
    const company = prompt('Enter a company name: ');
    if (itCompanies.includes(company)) {
        console.log(company);
    } else {
        console.log('Company is not found');
    }

    // 14. Filter out companies which have more than one 'o' without the filter method
    const companiesWithMoreThanOneO = [];
    for (let i = 0; i < itCompanies.length; i++) {
        if (itCompanies[i].includes('oo')) {
            companiesWithMoreThanOneO.push(itCompanies[i]);
        }
    }
    console.log(companiesWithMoreThanOneO);

    // 15. Sort the array using _sort()_ method
    itCompanies.sort();
    console.log(itCompanies);
    
    // 16. Reverse the array using _reverse()_ method
    itCompanies.reverse();
    console.log(itCompanies);

    // 17. Slice out the first 3 companies from the array
    console.log(itCompanies.slice(0, 3));

    // 18. Slice out the last 3 companies from the array
    console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

    // 19. Slice out the middle IT company or companies from the array
    console.log(itCompanies.slice(3, 4));

    // 20. Remove the first IT company from the array
    itCompanies.shift();
    console.log(itCompanies);

    // 21. Remove the middle IT company or companies from the array
    itCompanies.splice(3, 1);
    console.log(itCompanies);

    // 22. Remove the last IT company from the array
    itCompanies.pop();
    console.log(itCompanies);

    // 23. Remove all IT companies
    itCompanies.splice(0, itCompanies.length);
    console.log(itCompanies);

  