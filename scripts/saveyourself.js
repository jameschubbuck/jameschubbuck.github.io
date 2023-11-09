document.addEventListener('keydown', function(event) {
    if (event.key === 's' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        alert('save yourself!');
    }
});