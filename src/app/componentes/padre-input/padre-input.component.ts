import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-input',
  templateUrl: './padre-input.component.html',
  styleUrls: ['./padre-input.component.scss']
})
export class PadreInputComponent implements OnInit {

  mensajePadre = " este mensaje va de padre ==> hijo"
  constructor() { }

  ngOnInit(): void {
  }

}
