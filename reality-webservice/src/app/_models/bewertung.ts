export class Bewertung {
  id: number;
  utilized: string;
  kindOfReview: string;
  company: string;
  realityFactor: number;
  attractivityFactor: number;
  annotation: string;
  lastname: string;
  firstname: string;

  constructor(id: number,
              utilized: string,
              kindOfReview: string,
              company: string,
              realityFactor: number,
              attractivityFactor: number,
              annotation: string,
              lastname: string,
              firstname:string) {
    this.id = id;
    this.utilized = utilized;
    this.kindOfReview = kindOfReview;
    this.company = company;
    this.realityFactor = realityFactor;
    this.attractivityFactor = attractivityFactor;
    this.annotation = annotation;
    this.lastname = lastname;
    this.firstname = firstname;
  }
}
