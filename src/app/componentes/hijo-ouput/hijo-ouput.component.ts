import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-ouput',
  templateUrl: './hijo-ouput.component.html',
  styleUrls: ['./hijo-ouput.component.scss']
})
export class HijoOuputComponent implements OnInit {

  @Output() eventoEnviarColor = new EventEmitter<string>()

  enviarColor(valor:string){
    this.eventoEnviarColor.emit(valor)
  }

  constructor() { }
  ngOnInit(): void {
  }

}
