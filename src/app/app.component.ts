import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre: string = 'capitan america'
  arreglo= [1,2,3,4,5,6,7]
  PI     :number= Math.PI;
  porcenaje: number = 0.234;
  salario: number= 12345
  fecha: Date = new Date();
  nombre2:string='juAn cArLoS'
  lengua:string='en'
  video:string="https://www.youtube.com/embed/nsEMN4O0CmQ";
  contrasena: string= '123jjuan'
  varii: boolean=true



  

}
