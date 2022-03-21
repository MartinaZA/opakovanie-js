/*Úkol 1
Přijměte jméno jako vstup od uživatele, dále nechte 
zadat jeho věk a vypište na základě věku jednu ze 
dvou vět ve tvaru:
a) Vaše jméno je Marian, je vám 30 let a tak máte 
právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte 
počkat ještě 4 let, než budete moci řídit auto.*/

let menoUz = prompt('Ake je Vase meno?');
let vekUz = Number (prompt('Kolko mate rokov?'));

if (vekUz > 18) {
  console.log(`Vase meno je ${menoUz}, mate ${vekUz} a tak mate pravo riadit auto.`)
} else {
  console.log(`Vase meno je ${menoUz}, mate ${vekUz} a tak musite este pockat ${18-vekUz} rokov, aby ste mali pravo riadit auto.`)
};

