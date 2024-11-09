// Function to dynamically generate the resume
function generateResume(event: Event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get values from the form inputs
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    
    // Get the profile image file
    const profileImage = (document.getElementById('profileImage') as HTMLInputElement).files?.[0];
    const profileImagePreview = document.getElementById('profileImagePreview') as HTMLImageElement;

    // Display text values in the resume section
    (document.getElementById('displayName') as HTMLElement).textContent = name;
    (document.getElementById('displayEmail') as HTMLElement).textContent = email;
    (document.getElementById('displayEducation') as HTMLElement).textContent = education;
    (document.getElementById('displayWorkExperience') as HTMLElement).textContent = workExperience;

    // Display the profile image in the resume section
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImagePreview.src = e.target?.result as string;
        };
        reader.readAsDataURL(profileImage); // Convert the image file to a data URL
    }

    // Show the generated resume
    (document.getElementById('generatedResume') as HTMLElement).style.display = 'block';

    // Generate a unique URL with query parameters (username, name, email, etc.)
    const queryString = `?username=${encodeURIComponent(username)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&education=${encodeURIComponent(education)}&workExperience=${encodeURIComponent(workExperience)}`;

    // Display the shareable link
    const shareableLink = `https://your-deployed-site.vercel.app/resume${queryString}`;
    const shareableLinkElement = document.getElementById('shareableLink') as HTMLAnchorElement;
    shareableLinkElement.href = shareableLink;
    shareableLinkElement.textContent = shareableLink;
    
    // Show the shareable link section
    (document.getElementById('shareableLinkSection') as HTMLElement).style.display = 'block';
}

// Attach the submit event listener to the form
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
resumeForm.addEventListener('submit', generateResume);
