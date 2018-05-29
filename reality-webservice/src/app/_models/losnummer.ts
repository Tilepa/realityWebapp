import {Besuchsart} from "../_enums/besuchsart.enum";

export class Losnummer {
  number: number;
  status: boolean;


  constructor(number: number, status: boolean) {
    this.number = number;
    this.status = status;
  }
}
