import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-input',
  templateUrl: './hijo-input.component.html',
  styleUrls: ['./hijo-input.component.scss']
})
export class HijoInputComponent implements OnInit {

  @Input() mensaje:string = "mensaje desde el hijo"

  constructor() { }

  ngOnInit(): void {
  }

}
