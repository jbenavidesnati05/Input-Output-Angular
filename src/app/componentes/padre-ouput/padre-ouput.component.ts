import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-ouput',
  templateUrl: './padre-ouput.component.html',
  styleUrls: ['./padre-ouput.component.scss']
})
export class PadreOuputComponent implements OnInit {

  colores = ["azul", "rojo","amarillo"]

  agregarColor(color:string){
    if(color == "")
    alert("ingresar un color")
    else{
      this.colores.push(color)
    }
  }

  constructor() { }
  ngOnInit(): void {
  }

}
