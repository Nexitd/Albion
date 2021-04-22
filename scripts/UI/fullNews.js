function fullNews(full) {
    const fullNewsBlock = document.querySelector(".news__container"),
        fullBtn = document.querySelectorAll(".news__full"),
        logoBtn = document.querySelector(".logo");

    full.forEach((el) => {
        let newsId;
        for (let i = 0; i < fullBtn.length; i++) {
            fullBtn[i].addEventListener("click", () => {

                newsId = fullBtn[i].closest(".news__item").getAttribute("id");

                if (newsId == el.post_id) {
                    let fullNewsItem = document.createElement('div');

                    fullNewsItem.innerHTML = `
                            <div class="full__content">
                                <h3 class="full__content_title">${el.title}</h3>
                                <p class="full__content_topic">${el.topic} ● ${el.date}</p>
                                <img src=${el.img} alt="" class="full__content_img">
                                <p class="full__content_text">${el.body}</p>
                           </div>
                        `;

                    fullNewsBlock.innerHTML = fullNewsItem.innerHTML;
                }

            });
        }
    });

    logoBtn.addEventListener("click", () => {
        document.location.reload();
    });
}

export { fullNews };