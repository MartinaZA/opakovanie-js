/*Úkol 2
• Nadefinujme si proměnné a jejich hodnoty potřebné k uložení 
následujících informací:
• Jméno muže a ženy 
• Rok a měsíc narození muže i ženy
• Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu
"[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců"
• Pro zjednodušení úkolu počítejme, že je muž vždy starší! (ať 
nemusíme řešit absolutní hodnotu z Math.abs()*/

let menoM = 'Jozef';
let menoZ = 'Martina';
let rokM = 1982;
let rokZ = 1984;
let mesiacM = 5;
let mesiacZ = 4;

let rozdiel = (rokZ * 12 + mesiacZ) - (rokM * 12 + mesiacM);
console.log(`${menoM} a ${menoZ} su od seba vekovo vzdialeni ${rozdiel} mesiacov.`);