/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

const priceKm = 0.21
const discountMinor = 20
const discountOver65 = 40
const travelKm = parseInt(prompt('Quanti chilometri vuoi percorrere?'))
const age = parseInt(prompt('Quanti anni hai?'))

let ticketPrice = (travelKm * priceKm);


if (age < 18) {
    ticketPrice = ticketPrice - (ticketPrice * discountMinor / 100);
    let ticketPriceTotal = ticketPrice.toFixed(2);
    console.log('Il biglietto costa', ticketPriceTotal, '€');
    document.getElementById("travelkm").innerHTML = travelKm;
    document.getElementById("discount").innerHTML = 'Minorenni - 20%';
    document.getElementById("priceticket").innerHTML = ticketPriceTotal;
}
else if (age >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * discountOver65 / 100);
    let ticketPriceTotal = ticketPrice.toFixed(2);
    console.log('Il biglietto costa', ticketPriceTotal, '€');
    document.getElementById("travelkm").innerHTML = travelKm;
    document.getElementById("discount").innerHTML = 'Over 65 - 40%';
    document.getElementById("priceticket").innerHTML = ticketPriceTotal;
}
else {
    let ticketPriceTotal = ticketPrice.toFixed(2);
    console.log('Il biglietto costa', ticketPriceTotal, '€');
    document.getElementById("travelkm").innerHTML = travelKm;
    document.getElementById("discount").innerHTML = '---';
    document.getElementById("priceticket").innerHTML = ticketPriceTotal;
}


