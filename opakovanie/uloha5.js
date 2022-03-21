/*Úkol 3
Nechte uživatele zadat 3 čísla - strany trojúhelníku a 
zjistěte, zda jde trojúhelník sestrojit
- trojuhelnik jde sestrojit, pokud soucet 2 
nejmensich stran je > nez treti strana
- principialne jde POUZE o podminku navic do 
prikladu 2... */

let A = Number(prompt('Zadajte stranu trojuholnika A:'));
let B = Number(prompt('Zadajte stranu trojuholnika B:'));
let C = Number(prompt('Zadajte stranu trojuholnika C:'));

if(A>B) {
  if(A>C){
    if(B+C > A){
      console.log(`Trojuholnik je mozne zostrojit, pretoze B+C > A.`)
    } else {
      console.log(`Trojuholnik nie je mozne zostrojit, pretoze B+C < A.`)
    }
  }else {
    if(C>B){
      console.log(`Trojuholnik je mozne zostrojit, pretoze A+B > C.`)
    }else {
      console.log(`Trojuholnik je mozne zostrojit, pretoze A+B > C`)
    }
  }
}
