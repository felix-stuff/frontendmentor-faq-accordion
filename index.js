const accordions = document.getElementsByClassName("accordion");

for (const accordion of accordions) {
    let accordionToggle = accordion.getElementsByClassName("accordion__toggle")[0];
    let accordionContent = accordion.getElementsByClassName("accordion__content")[0];

    accordionToggle.addEventListener("click", (event) => {
        accordion.classList.toggle("accordion--open");
        accordionContent.setAttribute("hidden", "true");

        accordionToggle.setAttribute("aria-expanded", "false");

        if(accordion.classList.contains("accordion--open")) {
            accordionContent.removeAttribute("hidden");
            accordionToggle.setAttribute("aria-expanded", "true");
        }
    })
}