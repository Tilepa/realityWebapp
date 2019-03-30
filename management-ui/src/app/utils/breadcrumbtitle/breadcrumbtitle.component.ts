import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

const breadcrumbs = [
  {
    breadcrumbId: 'dashboard',
    title: 'Dashboard',
    routes: [
      {
        title: 'Home',
        ref: '/'
      },
      {
        title: 'Dashboard',
        ref: null
      }
    ]
  },
  {
    breadcrumbId: 'mongodbtest',
    title: 'Mongodbtest',
    routes: [
      {
        title: 'Home',
        ref: '/'
      },
      {
        title: 'Mongodbtest',
        ref: null
      }
    ]
  }
];

@Component({
  selector: 'app-breadcrumbtitle',
  templateUrl: './breadcrumbtitle.component.html',
  styleUrls: ['./breadcrumbtitle.component.scss']
})
export class BreadcrumbtitleComponent implements OnInit {
  @Input()
  breadcrumbId: string;

  public breadcrumb: { routes: ({ ref: string; title: string } | { ref: null; title: string })[]; title: string; breadcrumbId: string };

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.breadcrumb = breadcrumbs.find(b => b.breadcrumbId === this.breadcrumbId);
  }

}
