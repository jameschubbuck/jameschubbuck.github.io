document.addEventListener('keydown', function(event) {
    if (event.key === 's' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        alert('save yourself first!');
    }
    if (event.key === 't' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        alert('there is no escape!');
    }
    if (event.key === 'w' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        alert('there is no escape!');
    }
    if (event.key === 'p' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        alert('why would you want to do that?');
    }
    if (event.key === 'f' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        alert('find it yourself');
    }
});