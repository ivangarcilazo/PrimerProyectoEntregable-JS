
class Remeras {
    constructor(color, talla, costo){
        this.color=color.toLowerCase()
        this.talla=talla
        this.costo=parseInt(costo)
    }

}

const stockDisponibleR=[]

stockDisponibleR.push(new Remeras('rojo', 'L', '15'))
stockDisponibleR.push(new Remeras('verde','xl', '18'))
stockDisponibleR.push(new Remeras('azul', 'm', '20'))

alert("¡Bienvenido a la zona de remeras! Espero que encuentres lo que buscas")

let prendaUser=prompt("Escribe el color que deseas, haremos una búsqueda, y te diremos si está disponible y a que talle.")

prendaUser.toLowerCase()

for(const Remeras of stockDisponibleR){
    if(prendaUser==Remeras.color){

        switch(prendaUser){
            case('rojo'):
                alert(stockDisponibleR[0])
            break;

            case('verde'):
                alert(stockDisponibleR[1])
            break;

            case('azul'):
                alert(stockDisponibleR[2])
            break;

            default:
                break;
        }

    }else{
        alert("Lo siento, no encontramos la remera que buscabas")
    }
}