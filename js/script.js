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
const travelKm = prompt('Quanti chilometri vuoi percorrere?')
const age = prompt('Quanti anni hai?')

let ticketPrice = (travelKm * priceKm);

if (age < 18) {
    ticketPrice = ticketPrice - (ticketPrice * discountMinor / 100);
    console.log('Il biglietto costa', ticketPrice, '€')
}
else if (age >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * discountOver65 / 100);
    console.log('Il biglietto costa', ticketPrice, '€')
}
else {
    console.log('Il biglietto costa', ticketPrice, '€')
}


