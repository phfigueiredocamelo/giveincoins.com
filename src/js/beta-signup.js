/**
 * Sets up beta signup form functionality
 */
export function setupBetaSignup() {
  const form = document.getElementById('beta-form');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Create a success message element
          const successMessage = document.createElement('div');
          successMessage.className = 'success-message fade-in';
          successMessage.textContent = 'Thank you for signing up! We\'ll be in touch.';
          
          // Add styles for the success message
          const style = document.createElement('style');
          style.textContent = `
            .success-message {
              margin-top: 1rem;
              padding: 1rem;
              background-color: rgba(255, 255, 255, 0.1);
              border-radius: 8px;
              color: white;
              text-align: center;
            }
          `;
          
          document.head.appendChild(style);
          
          // Replace the form with the success message
          form.innerHTML = '';
          form.appendChild(successMessage);
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was a problem submitting your form. Please try again.');
      }
    });
  }
}