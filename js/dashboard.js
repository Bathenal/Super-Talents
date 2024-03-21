document.addEventListener('DOMContentLoaded', function() {
    // Form submission for adding project
    const addProjectForm = document.getElementById('addProjectForm');
    addProjectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const freelancerId = document.getElementById('freelancer-id').value;
        const projectName = document.getElementById('project-name').value;
        const hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
        
        if (freelancerId && projectName && hourlyRate) {
            // Add logic to process the project details, such as sending data to the server or updating UI
            console.log('Freelancer ID:', freelancerId);
            console.log('Project Name:', projectName);
            console.log('Hourly Rate:', hourlyRate);
            // You can add more logic here, such as AJAX requests or updating UI elements
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Form submission for withdrawal method
    const withdrawalForm = document.getElementById('withdrawalForm');
    withdrawalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const withdrawalType = document.getElementById('withdrawalType').value;
        
        if (withdrawalType) {
            // Add logic to save the withdrawal method, such as sending data to the server or updating UI
            console.log('Withdrawal Method:', withdrawalType);
            
            // Display payment details form after selecting withdrawal method
            document.getElementById('paymentDetails').style.display = 'block';
        } else {
            alert('Please select a withdrawal method.');
        }
    });

    // Payment button click event
    const paymentBtn = document.getElementById('payment-btn');
    paymentBtn.addEventListener('click', function() {
        const paymentDetails = document.getElementById('payment-details').value;
        
        if (paymentDetails) {
            // Add logic to process the payment details, such as sending data to the server or updating UI
            console.log('Payment Details:', paymentDetails);
            // You can add more logic here, such as AJAX requests or updating UI elements
        } else {
            alert('Please fill in payment details.');
        }
    });
});
