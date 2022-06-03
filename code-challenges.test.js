// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return an array that length containing the numbers of the Fibonacci sequence
    // expect: Invoke the function "fibSequence" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("fibSequence Test Suite", () => {
        it("should return an array that length containing the numbers of the Fibonacci sequence", () => {
            const fibLength1 = 6
            const fibLength2 = 10            
            expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
            expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
    })

// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "fibSequence"
    // Has 1 parameter that will accept a number that will represent the length of the array, will name this parameter "length"
// Within the function
    // Create a variable named sequence that will store the numbers of the fibonacci sequence
    // Create a for loop that will execute the x number of times based on the value passed in as an arguement
        // Use conditional statements
            // If the current index is less than or equal to one push 1 into the sequence array
            // Else, add the numbers from the previous 2 indexs
    // Return the newly created array named sequence

const fibSequence = (length) => {
    let sequence = []
    for(let i = 0; i < length; i++){
        if(i <= 1 ){
            sequence.push(1)
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2])
        }
    }
    return sequence
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return a new array of only odd numbers sorted from least to greatest
    // expect: Invoke the function "oddAndSorted" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("oddAndSorted Test Suite", () => {
        it("should return a new array of only odd numbers sorted from least to greatest", () => {
            const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
            const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
            expect(oddAndSorted(fullArr1)).toEqual([-9, 7, 9, 199])
            expect(oddAndSorted(fullArr2)).toEqual([-823, 7, 23])
        })
    })


// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "oddAndSorted"
    // Has 1 parameter that will accept an array of elements, will name this parameter "arrOfElements"
// Within the function
    // Evauluate the array of elements by chaining methods to retrieve the desired output
        // Use a .filter() method to create an array of only numbers
        // Use a .filter() method to futher filter the elements so that there are only odd numbers
        // Lastly, use the .sort() method to sort the array from least to greatest
            // Input an anonymous function to correctly sort out the array of odd numbers
    // Return the newly created array

const oddAndSorted = (arrOfElements) => {
    return nums = arrOfElements
    .filter(value  => {
        return typeof value === "number"
    })
    .filter(value => {
        return value % 2 !== 0
    })
    .sort((a, b) => {
        return a - b;
      });
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// Expected output: []

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return an array of the accumulating sum
    // expect: Invoke the function "accumulatingSum" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("accumulatingSum Test Suite", () => {
        it("should return an array of the accumulating sum", () => {
            const numbersToAdd1 = [2, 4, 45, 9]
            const numbersToAdd2 = [0, 7, -8, 12]
            const numbersToAdd3 = []
            expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
            expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
            expect(accumulatingSum(numbersToAdd3)).toEqual([])
        })
    })


// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "accumulatingSum"
    // Has 1 parameter that will accept an array of numbers, will name this parameter "arr"
// Within the function
    // Create a variable named previousNumber that will store a the value of the two previous added numbers
    // Create a variable named addedValues that will add the current value added to the previous number
    // Use the higher order function .map() on the arr parameter
        // Use conditional statements
            // If the current index === 0
                // set the previousNumber to the current value and retun the value to add onto the new array
            // Else 
                // Set the value of addedValues to the current value + previousNumber
                // Set the value of previousNumber to addedValues that will carry onto the next iteration
                // Return the addedValues
    // Return the newly created array
            

const accumulatingSum = (arr) => {
    let previousNumber = 0
    let addedValues = 0
    return newArr = arr.map((value, index) => {
        if(index === 0){
            previousNumber = value
            return value
        } else {
            addedValues = value + previousNumber
            previousNumber = addedValues
            return addedValues
        }
    })
}
