function renderNews(news) {
    let resultBlock = document.querySelector(".news__container");
    news.forEach((el) => {
        let newsItem = document.createElement('div');

        el.img = el.img.replace('/\/g', '');
        el.date = el.date.replace(/ /g, '.');

        newsItem.className = 'news__item';
        newsItem.setAttribute("id", `${el.post_id}`);
        newsItem.innerHTML = `
                <div class="news__head">
                    <div class="news__head_info">
                        <h3 class="news__title">${el.title}</h3>
                    </div>
                    <div class="news__head_img">
                        <img src=${el.img} alt="" />
                    </div>
                </div>
                <div class="news__body">
                        <p class="news__body_text">
                        ${el.body}
                        </p>
                    <div class="news__body_info">
                        <span class="news__topic">${el.topic}</span>
                        <button class="news__full" id="news__full">
                            Full content
                        </button>
                    </div>
                </div>
        `;

        resultBlock.append(newsItem);
    });
};

export { renderNews };