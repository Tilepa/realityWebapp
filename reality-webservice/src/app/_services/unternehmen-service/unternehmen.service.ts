import {Injectable} from '@angular/core';
import {Unternehmen} from '../../_enums/unternehmen.enum';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {Observable} from "rxjs";

@Injectable()
export class UnternehmenService {

  companiesRef: AngularFireObject<any>;
  companies: Observable<any>;

  constructor(private afs: AngularFireDatabase) {
    this.companiesRef = afs.object('companies');
    this.companies = this.companiesRef.valueChanges();
  }

  getListOfCompanys(): Array<string> {
    let tempList: Array<string> = [];
    for (let i = 0; i < 58; i++) {
      tempList.push(Unternehmen[i]);
    }
    return tempList;
  }

  getCountOfCompanys(): number {
    return this.getListOfCompanys().length;
  }

  createList() {
    const list: any = this.getCountOfCompanys();
    for (const comp of list) {
      this.companiesRef.set({name: comp});
    }
  }
}
