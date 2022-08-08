
class Products{
    constructor(id, garment, size, price){
        this.id=id
        this.garment= garment
        this.size=size
        this.price=price
    }
}

let newProducts=[]

let userChoice=prompt('¿Que quiere hacer con sus productos? \n Responda: Añadir / Salir').toLocaleLowerCase()
    
switch(userChoice){
    case('añadir'):

        let quantityProducts= parseInt(prompt('¿Cúantos productos deseas agregar? \n (Número)'))

        for(let i=1; i<(quantityProducts+1); i++){

            let idNumber=i
            alert('Product id: ' + i)
            let gargamentType=prompt('Prenda (Vestido, remera...')
            let sizeNumber=prompt('Talla')
            let priceNumer=parseFloat(prompt('Precio (Numero)'))

            newProducts.push(new Products(idNumber, gargamentType, sizeNumber, priceNumer))
        }
        
        let deleteProductCheck=prompt('¿Desea remover algún producto? \n Si / No').toLocaleLowerCase()

        switch (deleteProductCheck){
            case('si'):

                let productDelete=(parseInt(prompt('¿Cúal es el ID del producto que desea eliminar?'))-1)

                newProducts.splice(productDelete,1)

            break;
            case('no'):
            break;
            default:
                alert('Dato no válido')
                break;
        }

        alert('¡Listo, todo añadido. Acceda desde el console.log.')

        for(const products of newProducts){
            console.log(products)
        }
      
    break;

    case('salir'):
        break;
    default:
        alert('Por favor, ingrese datos válidos.')
        break;
}