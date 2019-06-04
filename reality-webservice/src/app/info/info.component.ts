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
      ['10:10', 'TEDi', 'IT in der Logistik - Anwendungsentwicklung zwischen Paletten und Cloud', 'Aleri Solutions', 'Dein Einstieg bei ARITHNEA - Technisch, kreativ, unkomplitziert!'],
      ['10:35', 'Bayer', 'BAYER: "#dcc19 - Wie digital wird Bayer im Jahr 2030 sein?"', 'Knipp Media', 'Mittendrin statt nur dabei - die Arbeit als Werkstudent bei Knipp'],
      ['11:00', 'Materna SE', 'Cloud == 7', 'CDI', 'Cloud Native Java - Mit CDI in 15 Minuten in die Cloud!'],
      ['11:25', 'com2m', 'IoT made im Ruhrgebiet', 'Brockhaus', 'Ein tag im Leben von ...'],
      ['11:50', 'Uniq', '', 'Open Knowledge', ''],
      ['12:15', 'Capgemini', '', 'Comline', ''],
      ['12:40', 'Fak. f. Informatik', '', 'Pixelboxx', ''],
      ['13:05', 'SCISYS', '', 'Crosscan', ''],
      ['13:30', 'msg', '', 'MotionMiners', ''],
      ['13:55', 'Huawei', '', 'Continentale', ''],
      ['14:20', 'img.ly', '', 'otris software', ''],
      ['14:45', 'e-Spirit', '', 'Swyx Solutions', ''],
      ['15:10', 'G DATA', '', 'itemis AG', ''],
      ['15:35', 'VMRay', '', 'Networkers', '']
    ];
  }

  ngOnInit() {
  }

}
