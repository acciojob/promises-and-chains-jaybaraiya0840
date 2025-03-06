document.getElementById("btn").addEventListener("click", function () {
    const nameInput = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;
    
    if (!nameInput || !ageInput) {
        alert("Please enter valid details.");
        return;
    }
    
    checkAge(nameInput, parseInt(ageInput))
        .then(message => alert(message))
        .catch(error => alert(error));
});

function checkAge(name, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });
}
