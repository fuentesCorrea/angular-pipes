import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenaseg'
})
export class ContrasenasegPipe implements PipeTransform {

  transform(value: string,  activate: boolean = true): any {

    let pass = value
   
    if(activate){
      let password = pass.split('').map(item=>{
      return   item = '*'
    
      })
      console.log(password.join(' '))
      return password.join(' ')
    }else{

      return pass

    }
    
    



  }

}
