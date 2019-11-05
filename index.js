function initializeAccordion() {
    const accordions = document.querySelectorAll(".accordion");
    for (const accordion of accordions) {
        const rows = accordion.querySelectorAll(".accordion-category-header");
        for (const row of rows) {
            row.addEventListener("click", function openThisItem() {
                const item = event.target.closest(".accordion-category");
                const accordion = event.target.closest(".accordion");
                const items = accordion.querySelectorAll(".accordion-category");
                if (item.classList.contains("accordion-category--open")) {
                    item.classList.remove("accordion-category--open");
                } else {
                    for (const sibling of items) {
                        sibling.classList.remove("accordion-category--open");
                    }
                    item.classList.add("accordion-category--open");
                }
            })
        }
    }
}

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

initializeAccordion();