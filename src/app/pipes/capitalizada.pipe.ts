import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizada'
})
export class CapitalizadaPipe implements PipeTransform {



  transform(value: string, todas: boolean = true): string {
    console.log(value)
    value = value.toLocaleLowerCase();
    console.log(value)
    let nombres = value.split(' ');
   

    if(todas){
     nombres = nombres.map(nombre => {
        return nombre[0].toUpperCase() + nombre.substring(1)
      })

      return nombres.join(' ')
    }else{
        
      let nom = nombres[0][0].toUpperCase()+ nombres[0].substring(1) +' '+ nombres[1]
      
      return nom
    }


  }

}
