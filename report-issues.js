function showSuccessMessage() {
    // Prevent the default form submission
    event.preventDefault();

    // Display the success message
    document.getElementById('success-message').style.display = 'block';

    // Optionally, you can hide the form after submission
    document.querySelector('form').style.display = 'none';

    // Return false to prevent the form from submitting
    return false;
}