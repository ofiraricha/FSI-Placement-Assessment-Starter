// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

let yourName = "Ofir Aricha"
// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
var total = gb + cc + sugar;

document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    document.getElementById('qty-gb').innerHTML = gb; 
    var total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = total
})

document.getElementById('minus-gb').addEventListener('click', function(x) {
    if (gb > 0) {
        gb--
        document.getElementById('qty-gb').innerHTML = gb;
        var total = gb + cc + sugar;
        document.getElementById('qty-total').innerHTML = total
    }   
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    document.getElementById('qty-cc').innerHTML = cc;
    var total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = total
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) {
        cc--
        document.getElementById('qty-cc').innerHTML = cc;
        var total = gb + cc + sugar;
        document.getElementById('qty-total').innerHTML = total
    }   
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    document.getElementById('qty-sugar').innerHTML = sugar;
    var total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = total
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
        document.getElementById('qty-sugar').innerHTML = sugar;
        var total = gb + cc + sugar;
        document.getElementById('qty-total').innerHTML = total
    }   
})




// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons