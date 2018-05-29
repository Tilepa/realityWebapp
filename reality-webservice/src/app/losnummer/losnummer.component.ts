import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { LosnummerService } from "../_services/losnummer-service/losnummer.service";
import { Losnummer } from "../_models/losnummer";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-losnummer',
  templateUrl: './losnummer.component.html',
  styleUrls: ['./losnummer.component.css']
})

export class LosnummerComponent implements OnInit {
  ticketNumber: number;
  invalidTicket: boolean;

  constructor(private losnummerService: LosnummerService,
              private titleService: Title,
              private router: Router) {
  }

  ngOnInit() {
    this.titleService.setTitle( "Gewinnspiel 2018" );
    this.invalidTicket = false;
  }

  checkTicketNumber() {
    console.log(this.ticketNumber);
      if( !this.losnummerService.validTicketNumber( new Losnummer( this.ticketNumber, false ) ) ) {
        this.invalidTicket = true;
        console.log("invalid ticket number: " + this.invalidTicket)
      } else {
        this.invalidTicket = false;
        this.router.navigate(['/bewertung']);
      }

  }
}
