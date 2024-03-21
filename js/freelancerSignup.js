// Freelancer Signup
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('fname');
    const fullNameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('fpassword');
    const confirmPasswordInput = document.getElementById('cpassword');
    const ageInput = document.getElementById('age');
    const phoneNumberInput = document.getElementById('phone');
    const cityInput = document.getElementById('city');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            saveFreelancerFormData();
            form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        if (!validateUsername(usernameInput.value)) {
            isValid = false;
            alert('Please enter a valid username.');
        }

        if (!validateFullName(fullNameInput.value)) {
            isValid = false;
            alert('Please enter your full name.');
        }

        if (!validateEmail(emailInput.value)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        if (!validatePassword(passwordInput.value)) {
            isValid = false;
            alert('Please enter a valid password (minimum 6 characters).');
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            isValid = false;
            alert('Password and confirm password do not match.');
        }

        if (!validateAge(ageInput.value)) {
            isValid = false;
            alert('Please enter a valid age.');
        }

        if (!validatePhoneNumber(phoneNumberInput.value)) {
            isValid = false;
            alert('Please enter a valid phone number.');
        }

        if (!validateCity(cityInput.value)) {
            isValid = false;
            alert('Please enter a valid city name.');
        }

        return isValid;
    }

    function validateUsername(username) {
        return username.trim() !== '';
    }

    function validateFullName(fullName) {
        return fullName.trim() !== '';
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function validateAge(age) {
        return !isNaN(age) && parseInt(age) > 0;
    }

    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    function validateCity(city) {
        return city.trim() !== '';
    }

    function saveFreelancerFormData() {
        const formData = {
            username: usernameInput.value,
            fullName: fullNameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            age: ageInput.value,
            phoneNumber: phoneNumberInput.value,
            city: cityInput.value
        };

        localStorage.setItem('freelancerFormData', JSON.stringify(formData));
    }
});
// Freelancer Login
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('freelancerLoginForm');
    const usernameInput = document.querySelector('input[name="fname"]');
    const passwordInput = document.querySelector('input[name="fpassword"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const storedData = JSON.parse(localStorage.getItem('freelancerFormData'));
        if (storedData && storedData.username === usernameInput.value && storedData.password === passwordInput.value) {
            alert('Login successful!');
            // Redirect to freelancer homepage or perform other actions
        } else {
            alert('Invalid username or password.');
        }
    });
});
