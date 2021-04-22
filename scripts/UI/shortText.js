const shortText = () => {
    const str = document.querySelectorAll(".news__body_text");

    let counter;

    str.forEach((el) => {
        let elText = el.textContent.replace(/\s+/g, ' ').trim().split(' ').length;
        counter = elText;

        if (counter > 20) {
            el.classList.add("short");
        }
    });
}

export {
    shortText
};