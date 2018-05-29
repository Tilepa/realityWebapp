import { Injectable } from '@angular/core';
import { Unternehmen } from "../../_enums/unternehmen.enum";

@Injectable()
export class UnternehmenService {

  constructor() {
  }

  getListOfCompanys(): Array<string> {
    let tempList: Array<string> = [];
    for( let i = 0; i < 58; i++ ) {
      tempList.push( Unternehmen[i] );
    }
    return tempList;
  }

  getCountOfCompanys(): number {
    return this.getListOfCompanys().length;
  }
}
