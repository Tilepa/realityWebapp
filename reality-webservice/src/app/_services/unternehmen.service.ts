import { Injectable, OnInit } from '@angular/core';
import { Unternehmen } from "../_models/unternehmen";

@Injectable()
export class UnternehmenService {
  unternehmensListe: Unternehmen[];
  constructor() {
    this.unternehmensListe = [
      new Unternehmen('Accenture'),
      new Unternehmen('adesso AG'),
      new Unternehmen('adesso mobile solutions GmbH'),
      new Unternehmen('All for One Steeb AG'),
      new Unternehmen('ALMATO GmbH'),
      new Unternehmen('Andrena Objects'),
      new Unternehmen('ARITHNEA GmbH'),
      new Unternehmen('AutoForm Engineering Deutschland GmbH'),
      new Unternehmen('Beschaffungsamt des Bundesministeriums des Innern'),
      new Unternehmen('BROCKHAUS AG'),
      new Unternehmen('BSI Business Systems Integration Deutschland GmbH'),
      new Unternehmen('Capgemini'),
      new Unternehmen('CAS Concepts and Solutions AG'),
      new Unternehmen('CDI Concepts Development Integration AG'),
      new Unternehmen('CEMA GmbH Spezialisten für Informationstechnolgie'),
      new Unternehmen('CHECK24 Vergleichsportal'),
      new Unternehmen('com2m GmbH'),
      new Unternehmen('Comline AG'),
      new Unternehmen('Conciso'),
      new Unternehmen('Continentale Versicherungsverbund'),
      new Unternehmen('Crosscan GmbH'),
      new Unternehmen('e-Spirit AG'),
      new Unternehmen('FERCHAU Engineering GmbH'),
      new Unternehmen('Fiducia & GAD IT AG'),
      new Unternehmen('FINCON Unternehmensberatung GmbH'),
      new Unternehmen('G DATA Software AG'),
      new Unternehmen('IFASEC GmbH'),
      new Unternehmen('itemis AG'),
      new Unternehmen('itestra GmbH'),
      new Unternehmen('Kassenärztliche Vereinigung Westfalen-Lippe'),
      new Unternehmen('Knipp Medien und Kommunikation GmbH'),
      new Unternehmen('Materna GmbH'),
      new Unternehmen('MEGLA GmbH'),
      new Unternehmen('mindsquare GmbH'),
      new Unternehmen('msg systems ag'),
      new Unternehmen('Networkers AG'),
      new Unternehmen('Open-Xchange GmbH'),
      new Unternehmen('OpusCapita Software GmbH'),
      new Unternehmen('PSI Software AG'),
      new Unternehmen('real,- Digital Payment & Technology Services GmbH'),
      new Unternehmen('RIPS Technologies GmbH'),
      new Unternehmen('SCISYS Deutschland GmbH'),
      new Unternehmen('Setlog GmbH'),
      new Unternehmen('shopware AG'),
      new Unternehmen('Sollers Consulting GmbH'),
      new Unternehmen('SSI Schäfer Noell GmbH'),
      new Unternehmen('Swyx Solutions AG'),
      new Unternehmen('Tata Consultancy Services Deutschland GmbH'),
      new Unternehmen('Techniker Krankenkasse'),
      new Unternehmen('TRILUX Group Management GmbH'),
      new Unternehmen('UNIQ GmbH (Urlaubsguru)'),
      new Unternehmen('valantic IT Group GmbH'),
      new Unternehmen('Vanderlande Industries GmbH'),
      new Unternehmen('viadee Unternehmensberatung GmbH'),
      new Unternehmen('Viega Holding GmbH & Co. KG'),
      new Unternehmen('VMRay GmbH'),
      new Unternehmen('W3L AG'),
      new Unternehmen('Zalando SE')
    ]
  }

}