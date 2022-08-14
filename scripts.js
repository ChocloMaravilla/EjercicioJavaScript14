console.log("Primera parte.");
const comida = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
comida.fill('🍺',4);
console.log(comida);

console.log("\n"+"Segunda parte.");
const comida1 = ["🍕","🍕","🍍","🍕","🍕"];
// console.log(comida1.find(element => element >"🍍"));
const resultado = comida1.indexOf("🍍");
console.log("La piña se encuentra en la "+resultado+" posición de la array")

console.log("\n"+"Tercera parte.");
const comida3 = ["🍕","🍕","🍍","🍕","🍕"];
let filtro = comida3.filter(comida3 => comida3 == "🍕");
console.log(filtro);

console.log("\n"+"Cuarta parte.");
const comida4 = ["🍓","🍋","🍓","🍋","🍓"];
for(let i = 0; i < 3; i++){
    if(i == 0){
        let filtro2 = comida4.fill("🍄",0);
        filtro2 = comida4.fill("🍋",1);
    }
    else if(i == 1){
        let filtro2 = comida4.fill("🍄",2)
        filtro2 = comida4.fill("🍋",3);
    }
    else if(i == 2){
        let filtro2 = comida4.fill("🍄",4)
        filtro2 = comida4.fill("🍋",5);
        console.log(filtro2);
    }
}

console.log("\n"+"Quinta parte.");
let comida5 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];
for(let i = 0; i < 4; i++){
    if(i == 0){
        let filtro3 = comida5.fill("🌶️",0);
        filtro3 = comida5.fill("🥵",1);
        filtro3 = comida5.fill("🥛",2);
    }
    else if(i == 1){
        let filtro3 = comida5.fill("🌶️",3)
        filtro3 = comida5.fill("🥵",4);
        filtro3 = comida5.fill("🥛",5)
    }
    else if(i == 2){
        let filtro3 = comida5.fill("🌶️",6)
        filtro3 = comida5.fill("🥵",7);
        filtro3 = comida5.fill("🥛",8);
    }
    else if(i == 3){
        let filtro3 = comida5.push("🌶️")
        filtro3 = comida5.push("🥵");
        filtro3 = comida5.push("🥛");
        console.log(comida5);
    }
}
console.log("\n"+"Sexta parte.");
let comida6 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"] 
let resultado4 = comida6.splice(1,0,"🃏");
for(let i = 0; i < 3; i++){
    resultado4 = comida6.push("🎴");
}
for(let i = 0; i < 5; i++){
    if(i==0){
        resultado4 = comida6.copyWithin(3,0);
    }
    else if(i==1){
        resultado4 = comida6.copyWithin(3,1);
    }
    else if(i==2){
        resultado4 = comida6.copyWithin(5,3);
    }
    else if(i==3){
        resultado4 = comida6.copyWithin(6,4);
    }
    else if(i==4){
        resultado4 = comida6.copyWithin(7,5);
    }
}
console.log(comida6);
