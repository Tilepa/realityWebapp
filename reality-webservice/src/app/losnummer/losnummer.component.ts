import { Component, OnInit } from '@angular/core';
import {log} from "util";

@Component({
  selector: 'app-losnummer',
  templateUrl: './losnummer.component.html',
  styleUrls: ['./losnummer.component.css']
})
export class LosnummerComponent implements OnInit {

  title: string = "Gewinnspiel 2018";
  losnummer: number;
  checked: boolean  = false;

  constructor() { }

  ngOnInit() {
  }

  checkLosnummer(losnummer: number) {
    log('Inputeingabe: ' + losnummer);
    return true;
  }

}
