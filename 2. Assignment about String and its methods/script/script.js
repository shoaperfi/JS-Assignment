function submit(){
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('email').value
    var age = document.getElementById('age').value
    if(firstName != '' && lastName != '' && email != '' && age != '' ){
            document.getElementById('firstNameOutput').innerHTML =
                firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
            document.getElementById('lastNameOutput').innerHTML =
                lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
            document.getElementById('emailIdOutput').innerHTML = email
            ageOutput(age); 
    }else{
        alert("All Fields Are Requiered");
    }
}

function ageOutput(age){
    
    if (age > 10) {
        document.getElementById('ageOutput').innerHTML = 'You are Genius'

    } else {
        document.getElementById('ageOutput').innerHTML = 'You are kid'
    }
}