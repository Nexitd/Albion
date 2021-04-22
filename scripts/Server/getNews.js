const getCard = () => {
    const promise = $.ajax('http://citizenkn.beget.tech/api/getPost.php', {
        type: "GET",
    });
    
    return promise.then((response) => {
        return response;
    });
}

const sendDataCard = (title, topic, text, file, date) => {
    let dataNews = {
        title: title,
        topic: topic,
        body: text,
        img: file[0],
        date: date
    };

    let resultData = new FormData();

    for (key in dataNews) {
        resultData.append(key, dataNews[key]);
    }

    const promise = $.ajax({
        url: 'http://citizenkn.beget.tech/api/setPost.php',
        type: "POST",
        processData: false,
        contentType: false,
        cache: false,
        data: resultData,
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });

    return promise.then((response) => {
        return response;
    });
}