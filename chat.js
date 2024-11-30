// Function to handle the form submission
        document.getElementById('replyForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            const reply = document.getElementById('userReply').value;

            // Append user message to chat box
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `<strong>You:</strong> ${reply}`;
            document.getElementById('chatBox').appendChild(userMessage);

            // Simulate AI response
            const aiResponse = generateAIResponse(reply);
            const aiMessage = document.createElement('div');
            aiMessage.className = 'message ai-message';
            aiMessage.innerHTML = `<strong>🤖 AI:</strong> ${aiResponse}`;
            document.getElementById('chatBox').appendChild(aiMessage);

            // Clear the form
            document.getElementById('userReply').value = '';
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        });

        // Function to generate a simple AI response based on user input
        function generateAIResponse(userInput) {
            // Here you can customize the AI's responses based on user input
            if (userInput.toLowerCase().includes("collection points")) {
                return "You can find the nearest collection points on our website or app.";
            } else if (userInput.toLowerCase().includes("schedule")) {
                return "The collection schedule is available on our website.";
            } else if (userInput.toLowerCase().includes("report")) {
                return "Please provide details about the issue you want to report.";
            } else if (userInput.toLowerCase().includes("recyclable")) {
                return "You can check if an item is recyclable by using our recycling guide.";
            } else if (userInput.toLowerCase().includes("contact")) {
                return "You can contact our support team via the contact form on our website.";
            } else {
                return "I'm here to help! Can you please provide more details?";
            }
        }


function handleOption(option) {
    switch(option) {
        case 'checkPoints':
        case 'checkSchedule':
        case 'reportIssues':
            window.location.href = 'another-webpage.html'; // Redirect to another webpage
            break;
        case 'identifyRubbish':
            askForCameraAccess();
            break;
        case 'contactAgent':
            confirmContactAgent();
            break;
    }
}

function askForCameraAccess() {
    // Simulating camera and album access request
    alert("Please allow access to your camera and album to upload a picture.");
    // Here you would implement actual camera access functionality
    // For now, we will simulate uploading a picture
    setTimeout(() => {
        let isRecyclable = confirm("Is the rubbish in the uploaded picture recyclable?"); // Simulate AI response
        if (isRecyclable) {
            alert("Yes, the rubbish is recyclable.");
        } else {
            alert("No, the rubbish is not recyclable.");
        }
        showMoreDetails();
    }, 1000);
}

function confirmContactAgent() {
    let confirmContact = confirm("Do you need to contact an agent?");
    if (confirmContact) {
        // Redirect to chat communication (simulate)
        alert("Redirecting you to chat with an agent...");
        // Actual redirect logic would go here
    } else {
        alert("Okay, let me know if you need anything else.");
    }
}

function showMoreDetails() {
    let moreDetails = confirm("Would you like more details?");
    if (moreDetails) {
        window.location.href = 'more-details.html'; // Redirect to more details webpage
    }
}

