document.addEventListener('DOMContentLoaded', function () {
    const employerLoginForm = document.getElementById('employerLoginForm');
    const freelancerLoginForm = document.getElementById('freelancerLoginForm');

    employerLoginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = employerLoginForm.elements['ename'].value;
        const password = employerLoginForm.elements['epassword'].value;

        const savedEmployerData = JSON.parse(localStorage.getItem('savedEmployerData'));
        if (savedEmployerData && savedEmployerData.email === email && savedEmployerData.password === password) {
            alert('Employer Login Successful');
            // Redirect or perform any action for successful login
        } else {
            alert('Invalid Email or Password for Employer');
        }
    });

    freelancerLoginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = freelancerLoginForm.elements['fname'].value;
        const password = freelancerLoginForm.elements['fpassword'].value;

        const savedFreelancerData = JSON.parse(localStorage.getItem('savedFreelancerData'));
        if (savedFreelancerData && savedFreelancerData.username === username && savedFreelancerData.password === password) {
            alert('Freelancer Login Successful');
            // Redirect or perform any action for successful login
        } else {
            alert('Invalid Username or Password for Freelancer');
        }
    });
});
