'use server'

export async function addToWaitlist(prevState, formData) {
  const email = formData.get('email');

  if (!email) {
    return { success: false, message: 'Email is required.' };
  }

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
      console.error('BREVO_API_KEY is missing in environment variables');
      return { success: false, message: 'System configuration error. Please contact support.' };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email,
        updateEnabled: false, // FAIL if email exists
        listIds: [2] // Optional: You can create a list in Brevo and put ID here. Defauts to just 'All Contacts' if omitted, but best to have a list.
        // For now, I'll omit listIds to be safe unless user specifies one, but usually it's better to just add to contacts.
        // Actually, without a listId, they are just a "contact". Automation can trigger on "New Contact".
      }),
    });

    const data = await response.json();

    if (!response.ok) {
        // Brevo returns 'duplicate_parameter' code if email exists
        if (data.code === 'duplicate_parameter') {
             return { success: false, message: "You're already on the list! We'll be in touch." };
        }
        
        console.error("Brevo Error:", data);
        return { success: false, message: 'Something went wrong. Please try again later.' };
    }

    return { success: true, message: "You're in! Welcome to the Maporia journey." };

  } catch (error) {
    console.error('Brevo API Submission Error:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
}
