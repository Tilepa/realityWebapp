import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  programmList: Array<[string, string, string, string, string]> = [];

  constructor() {
    this.programmList = [
      ['10:10', 'OpusCapita Software', 'Software aus`m Pott', 'Arithnea GmbH', 'Dein Einstieg bei ARITHNEA – Technisch, kreativ, unkompliziert!'],
      ['10:35', 'adesso mobile solutions', '"Ask Mercedes" by adesso mobile solutions', 'Conciso GmbH', 'Exzellente Coder sind die wahren Superhelden unserer Zeit. #codingman'],
      ['11:00', 'itemis AG', 'Werde Software Craftsman bei itemis', 'PSI Software AG', 'Smart software for a sustainable planet - Karrierepfade bei der PSI Software AG'],
      ['11:25', 'AutoForm Engineering', 'Von der Dissertation zum Weltmarktführer', 'Vanderlande Industries', 'Ein Blick hinter die Kulissen eines Weltmarktführers im Bereich der Intralogistik'],
      ['11:50', 'G Data Software AG', 'Entwicklung von verteilten Systemen zur Datenanalyse', 'msg systems ag', 'Mit Machine Learning und Big Data zum digitalen Staat'],
      ['12:15', 'e-Spirit AG', 'e-Spirit - wir sind nicht dieser Klamottenladen', 'Knipp Medien', '"Beyond Scrum" - Agile Softwareentwicklung in einem dynamischen Umfeld'],
      ['12:40', 'mindsquare GmbH', '(Wirtschafts-)Informatiker im Vorstellungsgespräch - Do´s und Don´ts um erfolgreich zu überzeugen', 'Ifasec GmbH', 'Device Flut und Innentäter – Neue Ansätze für ein adaptives Infrastructure Security Managment'],
      ['13:05', 'Zalando', 'Skills von morgen', 'Fincon', 'FINCON – Modernes Arbeiten in Großkundenprojekten'],
      ['13:30', 'com2m', 'IoT made im Ruhrgebiet: Technologien und Architektur für das Internet of Things', 'Networkers AG', 'Network Up Your Life!'],
      ['13:55', 'Capgemini', 'Unser Einstieg bei Capgemini - Erfahrungsberichte von Berufseinsteigern', 'Cema GmbH', 'Komplexe IT Infrastrukturen sind unsere Leidenschaft!'],
      ['14:20', 'Materna GmbH', 'Cloud == 7?', 'W3L AG', 'Wer braucht schon Softwareentwickler?'],
      ['14:45', 'Check24', 'Softwareentwicklung bei CHECK24 in Münster', 'viadee', 'Gekommen, um zu bleiben'],
      ['15:10', 'itestra GmbH', 'Ganzheitliche Betriebsüberwachung: Durchblick im Anwendungs-Dschungel', 'Crosscan GmbH', 'Informatiker sind Programmierer?'],
      ['15:35', 'adesso AG', 'Karriereperspektiven bei adesso', 'andrena objects ag', 'Agile Software Entwicklung – mehr als Scrum'],
      ['16:00', 'Accenture', 'Gemeinsam mehr erreichen. Starten Sie Ihre Karriere bei Accenture.', 'Comline AG', 'Comline - ein Blick hinter die Kulissen'],
    ];
  }

  ngOnInit() {
  }

}
