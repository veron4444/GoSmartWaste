document.getElementById('google-calendar-toggle').addEventListener('change', function() {
    alert('Google Calendar is now ' + (this.checked ? 'enabled' : 'disabled'));
});

document.getElementById('google-maps-toggle').addEventListener('change', function() {
    alert('Google Maps is now ' + (this.checked ? 'enabled' : 'disabled'));
});

document.getElementById('notification-toggle').addEventListener('change', function() {
    alert('Notifications are now ' + (this.checked ? 'enabled' : 'disabled'));
});

document.getElementById('theme-select').addEventListener('change', function() {
    if (this.value === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('header').classList.add('dark-theme');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('dark-theme');
        });
    } else {
        document.body.classList.remove('dark-theme');
        document.querySelector('header').classList.remove('dark-theme');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('dark-theme');
        });
    }
});
