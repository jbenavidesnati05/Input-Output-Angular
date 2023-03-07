import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-ouput',
  templateUrl: './padre-ouput.component.html',
  styleUrls: ['./padre-ouput.component.scss']
})
export class PadreOuputComponent implements OnInit {

  colores = ["azul", "rojo","amarillo"]

  agregarColor(color:string){

    let encontrado = this.colores.find(item =>item == color)

    if(color == "")
      alert("ingresar un color")
    if(encontrado){
      alert("El color ingresado ya existe")
    }else{
      this.colores.push(color)
    }
  }

  eliminarColor(i:any){
    this.colores.splice(i,1)
  }

  constructor() { }
  ngOnInit(): void {
  }

}
