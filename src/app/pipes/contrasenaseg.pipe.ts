import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenaseg'
})
export class ContrasenasegPipe implements PipeTransform {

  transform(value: string,  activate: boolean = true): string {

    let pass = value
   
    if(activate){

      return '*'.repeat(value.length)

      // *****esta es otre forma de realizarlo de otra forma******
      // let password = pass.split('').map(item=>{
      // return   item = '*'
    
      // })
      // return password.join(' ')

      // ******************************************//

    //desde qeui 
    }else{

      return pass

    }
    
    



  }

}
