document.getElementById('generate-resume').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const template = document.getElementById('template').value;

    const resumeOutput = document.getElementById('resume-output');

    let templateHTML = '';

    if (template === 'template1') {
        templateHTML = `
            <div style="font-family: Arial, sans-serif;">
                <h1 style="text-align: center;">${name}</h1>
                <hr>
                <p style="text-align: center;"><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
                <p style="text-align: center;"><strong>Address:</strong> ${address}</p>
                <h2>Skills</h2>
                <ul>
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
                <h2>Experience</h2>
                <p>${experience}</p>
                <h2>Education</h2>
                <p>${education}</p>
            </div>
        `;
    } else if (template === 'template2') {
        templateHTML = `
            <div style="font-family: 'Courier New', Courier, monospace; border: 2px solid #007bff; padding: 1rem;">
                <h1 style="color: #007bff;">${name}</h1>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <h3>Skills</h3>
                <ul style="list-style-type: square;">
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
                <h3>Work Experience</h3>
                <p>${experience}</p>
                <h3>Education</h3>
                <p>${education}</p>
            </div>
        `;
    } else {
        templateHTML = `
            <div style="font-family: Georgia, serif; padding: 2rem; border: 1px solid #333;">
                <h1>${name}</h1>
                <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <h2>Skills</h2>
                <p>${skills}</p>
                <h2>Work Experience</h2>
                <p>${experience}</p>
                <h2>Education</h2>
                <p>${education}</p>
            </div>
        `;
    }

    resumeOutput.innerHTML = templateHTML;
    document.querySelector('.resume-section').style.display = 'block';
    document.querySelector('.resume-section').scrollIntoView({ behavior: 'smooth' });
});

// Add Login and Sign-Up Functionality
function redirectToResumePage() {
    window.location.href = "resume-page.html"; // Replace with your resume page URL
}

document.getElementById('login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Login successful!');
        redirectToResumePage();
    } else {
        alert('Please enter valid credentials.');
    }
});

document.getElementById('signup-button').addEventListener('click', function () {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    
    if (newUsername && newPassword) {
        alert('Sign-Up successful! You can now log in.');
    } else {
        alert('Please fill in all fields.');
    }
});
