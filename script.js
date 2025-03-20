document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    console.log("Age entered:", age);
 
    
    if (isNaN(age) || age < 18) {
        alert('You must be at least 18 years old to submit this form.');
        return; 
    }


    if (zip.length !== 5 || isNaN(zip)) {
        alert('Zip code must be 5 digits.');
        return;
    }


    if (phone.length !== 9 || isNaN(phone)) {
        alert('Phone number must be 9 digits.');
        return;
    }


    if (name.trim() === "") {
        alert('Name cannot be blank.');
        return; 
    }

    if (street.trim() === "") {
        alert('Street name cannot be blank.');
        return; 
    }

    if (city.trim() === "") {
        alert('city name cannot be blank.');
        return; 
    }

    if (state.trim() === "") {
        alert('State name cannot be blank.');
        return; 
    }

    if (message.trim() === "") {
        alert('Feedback message cannot be blank.');
        return; 
    }
    
    if (email.trim() === "") {
        alert('Email cannot be blank.');
        return; 
    }
 
    alert('Feedback submitted successfully!');
 });
 