document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('emailInput').value;
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    
    if (!email || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (password.length < 8 || password.length > 20 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        alert('Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.');
        return;
    }

    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    document.getElementById('userForm').reset();

    alert('Form submitted successfully!');
});