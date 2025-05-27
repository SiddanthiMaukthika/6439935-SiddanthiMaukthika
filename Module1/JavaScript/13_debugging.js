form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Form submission started');

  const userData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim()
  };
  console.log('User Data:', userData);

  responseMsg.textContent = '⏳ Sending your registration...';

  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    .then(res => {
      console.log('Fetch response status:', res.status);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      console.log('Fetch response data:', data);
      responseMsg.textContent = `✅ Thanks, ${userData.name}! Registration successful.`;
      form.reset();
    })
    .catch(err => {
      console.error('Fetch error:', err);
      responseMsg.textContent = `❌ Registration failed: ${err.message}`;
    });
  }, 1500);
});
