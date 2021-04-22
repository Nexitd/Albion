const filterCards = () => {
    const filterList = document.querySelectorAll("input[type=checkbox]"),
        filtersItem = document.querySelectorAll(".news__topic");

    let filteredBlock = [],
        newsBlock = document.querySelector(".news__container");

    for (let i = 0; i < filterList.length; i++) {
        filterList[i].addEventListener('change', () => {
            if (filterList[i].checked) {
                filtersItem.forEach((el) => {
                    if (filterList[i].value == el.innerHTML) {
                        filteredBlock.push(el.closest(".news__item"));
                    }
                });

                newsBlock.innerHTML = '';
                for (let i = 0; i < filteredBlock.length; i++) {
                    newsBlock.append(filteredBlock[i]);
                }


            } else {
                filtersItem.forEach((el) => {
                    if (filterList[i].value == el.innerHTML) {
                        let deleteElem = el.closest(".news__item");
                        let index = filteredBlock.indexOf(deleteElem);

                        if (index > -1) {
                            filteredBlock.splice(index, 1);
                        }
                    }
                });
                
                newsBlock.innerHTML = '';
                for (let i = 0; i < filteredBlock.length; i++) {
                    newsBlock.append(filteredBlock[i]);
                }

                if (filteredBlock.length == 0) {
                    document.location.reload();
                }
            }
        });
    }
}

export { filterCards };