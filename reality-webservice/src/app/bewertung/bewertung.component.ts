import { Component, OnInit } from '@angular/core';
import { Unternehmen } from "../_enums/unternehmen.enum";
import { UnternehmenService } from "../_services/unternehmen-service/unternehmen.service";

@Component({
  selector: 'app-bewertung',
  templateUrl: './bewertung.component.html',
  styleUrls: ['./bewertung.component.css']
})
export class BewertungComponent implements OnInit {

  unternehmensListe: Array<string> = [];

  constructor( private unternehmenService: UnternehmenService) { }

  ngOnInit() {
    this.unternehmensListe = this.unternehmenService.getListOfCompanys();
  }

}
