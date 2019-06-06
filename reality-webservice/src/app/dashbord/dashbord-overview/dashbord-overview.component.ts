import { Component, OnInit } from '@angular/core';
import { LosnummerService } from '../../_services/losnummer-service/losnummer.service';
import { UnternehmenService } from '../../_services/unternehmen-service/unternehmen.service';

@Component({
  selector: 'app-dashbord-overview',
  templateUrl: './dashbord-overview.component.html',
  styleUrls: ['./dashbord-overview.component.css']
})
export class DashbordOverviewComponent implements OnInit {
  countOfTicketNumbers: number;
  countOfUtilizedItems: number;
  countOfUnutilizedIzems: number;

  // Variablen für die Unternehmen
  listOfCompanys: Array<string> = [];
  countOfCompanys: number;

  constructor( private losnummerService: LosnummerService,
               private unternehmenService: UnternehmenService ) {
    this.listOfCompanys = unternehmenService.getListOfCompanys();
    this.countOfCompanys = unternehmenService.getCountOfCompanys();
  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.countOfTicketNumbers = this.losnummerService.getAllReviews().length;
    this.countOfUtilizedItems = this.losnummerService.countUtilized();
    this.countOfUnutilizedIzems = this.losnummerService.countUnutilized();
  }

  // Return einer Liste aus einem Tuple [Unternehmen, Anzahl] von Bewertungen
  getListOfUtilzedCompanys(): Array<[string, number, number, number]> {
    return this.losnummerService.getListOfCompanyReviews();
  }

  test() {
    this.unternehmenService.createList();
  }
}
