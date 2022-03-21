/*Úkol 2
Nechte uživatele zadat 3 čísla a určete největší z nich
- výsledek vypište do konzole ve formátu
"Největší číslo je A: 37"*/

let A = Number(prompt('Zadajte prve cislo A:'));
let B = Number(prompt('Zadajte prve cislo B:'));
let C = Number(prompt('Zadajte prve cislo C:'));

if(A>B) {

  if(A>C) {
    console.log(`Najvacsie cislo je A: ${A}`)
  }
  else {
    console.log(`Najvacsie cislo je C: ${C}`)
  }
}
else {
  if(B>C) {
    console.log(`Najvacsie cislo je B: ${B}`)
  }
  else{
    console.log(`Najvacsie cislo je C: ${C}`)
  }
}