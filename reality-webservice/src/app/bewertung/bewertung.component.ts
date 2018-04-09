import { Component, OnInit } from '@angular/core';
import { Unternehmen } from "../_models/unternehmen";
import { UnternehmenService } from "../_services/unternehmen.service";

@Component({
  selector: 'app-bewertung',
  templateUrl: './bewertung.component.html',
  styleUrls: ['./bewertung.component.css']
})
export class BewertungComponent implements OnInit {

  unternehmensListe: Unternehmen[];

  constructor( private unternehmensService: UnternehmenService) { }

  ngOnInit() {
    this.unternehmensListe = this.unternehmensService.unternehmensListe;
  }

}
