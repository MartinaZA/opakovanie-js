/*Úkol 1
• Založte proměnné pro jméno, věk, váhu v kg 
a výšku v metrech - nastavte jim libovolnou
hodnotu.
• Spočtěte BMI
• Do konzole vypište větu ve formátu:
Jmenuji se Petra, je mi 34 let, vážím 65kg, měřím
1.67m a moje BMI je 23,2.

Nápovědy
• vzoreček pro BMI je:
váha v kilogramech / výška v metrech na druhou*/

let meno = 'Martina';
let vek = 38;
let vaha = 68;
let vyska = 1.76;

let BMI = vaha / vyska ** 2;

console.log(`Volam sa ${meno}, mam ${vek} rokov, vazim ${vaha} kil a moje BMI je ${BMI}. `);