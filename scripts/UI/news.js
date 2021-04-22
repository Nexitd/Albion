import { filterCards } from './filter.js';
import { renderNews } from './renderNews.js';
import { shortText } from './shortText.js';
import { fullNews } from './fullNews.js';

const getDataNews = () => {
    const promise = getCard();
    promise.then(renderNews).then(filterCards).then(shortText);
    promise.then(fullNews).then(filterCards);
};

getDataNews();
