$(document).ready(function () {

    $('#get-data').click(function () {
        // funkcja $.get() nie zadziałała, druga wersja funkcji $.getJSON(). tak
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {

                let daneProgramisty = $('<div id=dane-programisty></div>').text(`Dane programisty: Imię: ${data.imie}, Nazwisko: ${data.nazwisko}, Zawód: ${data.zawod}, Firma: ${data.firma}.`);

                let jqBody = $('body');

                jqBody.append(daneProgramisty);

                // console.log(data);
            })
            .fail(function (error) {
                console.error(error);
            });
    });
});


/* const getUserData = () => {

    // utworzenie obiektu
    let httpReq = new XMLHttpRequest();

    // otwarcie połączenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');

    // jeśli status połączenia został zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

    httpReq.onreadystatechange = () => {
        // console.log(httpReq.readyState);

        // jeśli 4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState === 4) {
            console.log('dane zwrócone i gotowe do użycia');
            // Kody statusu połączenia HTTP - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if (httpReq.status === 200) {

                let data = httpReq.responseText;
                let dataJSON = JSON.parse(data);
                // console.log(data);
                console.log(dataJSON);
                // console.log(dataJSON.name);
                // console.log(dataJSON.email);

                // zwolnij obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
            }
        }
    }
    httpReq.send();
}

// ustawienie timera, który wczyta dane co 10 sekund
// setInterval(getUserData, 10000); */