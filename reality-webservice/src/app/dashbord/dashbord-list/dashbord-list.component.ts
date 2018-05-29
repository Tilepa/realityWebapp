import { Component, OnInit, ViewChild } from '@angular/core';
import { Bewertung } from "../../_models/bewertung";
import { LosnummerService } from "../../_services/losnummer-service/losnummer.service";
import { MatTableDataSource, MatPaginator, MatSort} from "@angular/material";

@Component({
  selector: 'app-dashbord-list',
  templateUrl: './dashbord-list.component.html',
  styleUrls: ['./dashbord-list.component.css']
})
export class DashbordListComponent implements OnInit {
  listOfReviews: Array<Bewertung> = [];
  displayedColumns: [
    'id',
    'utilized',
    'kindOfReview',
    'company',
    'realityFactor',
    'attractivityFactor',
    'annotation',
    'lastname',
    'firstname'
    ]
  dataSource: MatTableDataSource<Bewertung>;

  @ViewChild( MatPaginator ) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort;

  constructor( private losnummerService: LosnummerService ) {
    this.dataSource = new MatTableDataSource( this.losnummerService.getAllReviews() );
  }

  ngOnInit() {
    this.listOfReviews = this.losnummerService.getAllReviews();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
