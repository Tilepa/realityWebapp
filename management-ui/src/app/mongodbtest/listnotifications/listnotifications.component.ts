import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listnotifications',
  templateUrl: './listnotifications.component.html',
  styleUrls: ['./listnotifications.component.scss']
})
export class ListnotificationsComponent implements OnInit {
  private news: ({ id: string; title: string; content: string })[];

  constructor() { }

  ngOnInit() {
    this.news = [
      {
        id: 'test1',
        title: 'test1',
        content: 'test1'
      }, {
        id: 'test2',
        title: 'test2',
        content: 'test2'
      },
      {
        id: 'test1',
        title: 'test1',
        content: 'test1'
      }, {
        id: 'test2',
        title: 'test2',
        content: 'test2'
      },
      {
        id: 'test1',
        title: 'test1',
        content: 'test1'
      }, {
        id: 'test2',
        title: 'test2',
        content: 'test2'
      },
      {
        id: 'test1',
        title: 'test1',
        content: 'test1'
      }, {
        id: 'test2',
        title: 'test2',
        content: 'test2'
      }
    ];
  }

}
