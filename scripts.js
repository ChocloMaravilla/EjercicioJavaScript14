console.log("Primera parte.");
const comida = ["π","π―","π£","π","π","π±","π","π","π₯©"];
comida.fill('πΊ',4);
console.log(comida);

console.log("\n"+"Segunda parte.");
const comida1 = ["π","π","π","π","π"];
// console.log(comida1.find(element => element >"π"));
const resultado = comida1.indexOf("π");
console.log("La piΓ±a se encuentra en la "+resultado+" posiciΓ³n de la array")

console.log("\n"+"Tercera parte.");
const comida3 = ["π","π","π","π","π"];
let filtro = comida3.filter(comida3 => comida3 == "π");
console.log(filtro);

console.log("\n"+"Cuarta parte.");
const comida4 = ["π","π","π","π","π"];
for(let i = 0; i < 3; i++){
    if(i == 0){
        let filtro2 = comida4.fill("π",0);
        filtro2 = comida4.fill("π",1);
    }
    else if(i == 1){
        let filtro2 = comida4.fill("π",2)
        filtro2 = comida4.fill("π",3);
    }
    else if(i == 2){
        let filtro2 = comida4.fill("π",4)
        filtro2 = comida4.fill("π",5);
        console.log(filtro2);
    }
}

console.log("\n"+"Quinta parte.");
let comida5 = ["πΆοΈ","π₯","πΆοΈ","π₯","πΆοΈ","π₯"];
for(let i = 0; i < 4; i++){
    if(i == 0){
        let filtro3 = comida5.fill("πΆοΈ",0);
        filtro3 = comida5.fill("π₯΅",1);
        filtro3 = comida5.fill("π₯",2);
    }
    else if(i == 1){
        let filtro3 = comida5.fill("πΆοΈ",3)
        filtro3 = comida5.fill("π₯΅",4);
        filtro3 = comida5.fill("π₯",5)
    }
    else if(i == 2){
        let filtro3 = comida5.fill("πΆοΈ",6)
        filtro3 = comida5.fill("π₯΅",7);
        filtro3 = comida5.fill("π₯",8);
    }
    else if(i == 3){
        let filtro3 = comida5.push("πΆοΈ")
        filtro3 = comida5.push("π₯΅");
        filtro3 = comida5.push("π₯");
        console.log(comida5);
    }
}
console.log("\n"+"Sexta parte.");
let comida6 = ["π΄","π΄","π΄","π","π΄","π΄","π΄"] 
let resultado4 = comida6.splice(1,0,"π");
for(let i = 0; i < 3; i++){
    resultado4 = comida6.push("π΄");
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
