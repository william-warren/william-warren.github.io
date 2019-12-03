function CopyEmail() {
    var copyText = document.querySelector(".button-email").title;
    document.addEventListener('copy', function (event) {
        event.clipboardData.setData('text/plain', copyText);
        event.preventDefault();
        document.removeEventListener('copy', handler, true);
    }, true);
    document.execCommand('copy');
    alert("Copied: " + copyText);
}
