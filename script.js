function ticketshop() {
    const normal_value = 13 ;
    const student_value = 6.5;
    let student_amount = 0;
    let normal_amount = 0;
    let total_value = 0;
    let name = "";
    let age = 0;
    let student = Boolean;
    let pay_value = 0;
    let normalas = 0;
    let change = 0;
    let pay_value2 = 0;
    let change2 = 0;

    alert("Welcome to Ticket Shop!")
        
    name = prompt("What is your name?");
    age = prompt("How old are you?");
    student = prompt("Student ? T/F");
    var truestudent = student === 'true';
    normal_amount = prompt("How much normal tickets?");

    if(truestudent || age <= 18) {
        student_amount = prompt("How much students tickets?");
        while(parseInt(student_amount) > parseInt(normal_amount)) {
            alert("Invalid amount, try again.");
            student_amount = prompt("How much students tickets?");
        }
        normalas = normal_amount - student_amount;
        total_value = (normalas * normal_value) + (student_amount * student_value);
        pay_value = prompt(`Total tickets: $${total_value}, Insert the payment value:`);
        change = pay_value - total_value
        if(change >= 0) {
            alert(`The value of your change is $${change}`);
        } else {
            pay_value2 = prompt(`There is still $${change * -1} remaining to be payed. Please enter your payment:`)
            change2 = parseFloat(change) + parseFloat(pay_value2);
            while(change2 < 0) {
                pay_value2 = prompt(`There is still $${change2 * -1} remaining to be payed. Please enter your payment:`)
                change2 = parseFloat(change2) + parseFloat(pay_value2);
            }
            alert(`The value of your change is $${change2}`);    
        }
    } else {
        total_value = (normal_amount * normal_value) + (student_amount * student_value);
        pay_value = prompt(`Total tickets: $${total_value}. Insert the payment value:`);
        change = pay_value - total_value
        if(change >= 0) {
            alert(`The value of your change is $${change}`);
        } else {
            pay_value2 = prompt(`There is still $${change * -1} remaining to be payed. Please enter your payment:`)
            change2 = parseFloat(change) + parseFloat(pay_value2);
            while(change2 < 0) {
                pay_value2 = prompt(`There is still $${change2 * -1} remaining to be payed. Please enter your payment:`)
                change2 = parseFloat(change2) + parseFloat(pay_value2);
            }
            alert(`The value of your change is $${change2}`);    
        }
    }
}

let movies = [];

function addmovies(name, duration, session) {
    movies.push({ 
        name,
        duration,
        session 
    });
}

function listmovies(){
    movies.map(movie =>
    alert(`Movies:
    Session: ${movie.session}
    Title: ${movie.name}
    Duration: ${movie.duration}`))
}

function foods() {
    const popcorn = 10;
    const soda = 2;
    let qtd_popcorn = 0;
    let qtd_soda = 0;
    let total_value = 0;

    alert("Welcome to Snack Shop THEGAME");
    prompt("How much popcorns you wanna?");
    prompt("How much sodas you wanna?");
    total_value = (popcorn * qtd_popcorn) + (soda * qtd_soda)
    alert("Value Total is", total_value);
    prompt("Insert the payment:");
    
    if (soda >= 0){
        total_value = popcorn * qtd_popcorn
        alert("The value of your popcorns is:", total_value);
        prompt("Insert the payment:");
        }
    
    if (popcorn >= 0){
        total_value = soda * qtd_soda
        alert("The value of your sodas is", total_value);
        }


    

    
} 
document.getElementById("tickets").addEventListener("click", ticketshop);
document.getElementById("movies").addEventListener("click", listmovies);
document.getElementById("foods").addEventListener("click", foods);
