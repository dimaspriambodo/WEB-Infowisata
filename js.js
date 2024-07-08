document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih sudah menghubungi Kami , ' + document.getElementById('name').value + '!');
    document.getElementById('contactForm').reset();
});
