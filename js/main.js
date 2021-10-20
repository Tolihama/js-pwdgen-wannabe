/*
 * (insicurissimo) password generator
*/

// - chiedi all’utente il suo nome,
const name = prompt('Qual è il tuo nome?');

// - poi chiedi il suo cognome,
const surname = prompt('Qual è il tuo cognome?');

// - poi chiedi il suo colore preferito
const prefColor = prompt('Qual è il tuo colore preferito?');

// - infine scrivi sulla pagina i dati ricevuti nel formato: nomecognomecolorepreferito21
document.getElementById('password').innerHTML = `Password generata: ${name}${surname}${prefColor}21`;