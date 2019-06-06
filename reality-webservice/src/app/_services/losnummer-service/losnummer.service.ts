import {Injectable} from '@angular/core';
import {Losnummer} from '../../_models/losnummer';
import {Bewertung} from '../../_models/bewertung';
import {Besuchsart} from '../../_enums/besuchsart.enum';
import {Unternehmen} from '../../_enums/unternehmen.enum';
import {Bewertungsstatus} from '../../_enums/bewertungsstatus.enum';
import {UnternehmenService} from '../unternehmen-service/unternehmen.service';

@Injectable()
export class LosnummerService {
  private readonly listOfReviews: Array<Bewertung> = [];
  private countUtilizedItems: number;
  private countUnutilizedItems: number;

  constructor(private unternehmService: UnternehmenService) {
    this.listOfReviews = [
      new Bewertung(4546, Bewertungsstatus[1], Besuchsart[0], Unternehmen[0], 4,
        3, 'Die Arbeitsbedingungen des Unternehmens klingen sehr ansprechend', 'Mustermann', 'Max'),
      new Bewertung(4637, Bewertungsstatus[1], Besuchsart[0], Unternehmen[1], 4,
        4, '', 'Mustermann', 'Max'),
      new Bewertung(3526, Bewertungsstatus[1], Besuchsart[1], Unternehmen[1], 4,
        5, '', 'Mustermann', 'Max'),
      new Bewertung(8933, Bewertungsstatus[1], Besuchsart[0], Unternehmen[3], 4,
        5, '', 'Mustermann', 'Max'),
      new Bewertung(4548, Bewertungsstatus[0], null, null, null,
        null, null, null, null)
    ];
  }

  validTicketNumber(losnummer: Losnummer) {
    if (losnummer.number === 1234) {
      return true;
    } else {
      return false;
    }
  }

  getAllReviews(): Bewertung[] {
    return this.listOfReviews;
  }

  countUtilized(): number {
    let count = 0;
    const tempList = this.listOfReviews;
    for (let i = 0; i < tempList.length; i++) {
      if (Bewertungsstatus[tempList[i].utilized] === Bewertungsstatus.ja) {
        count += 1;
      }
    }
    this.countUtilizedItems = count;
    return count;
  }

  countUnutilized(): number {
    let count = 0;
    const tempList = this.listOfReviews;
    for (let i = 0; i < tempList.length; i++) {
      if (Bewertungsstatus[tempList[i].utilized] === Bewertungsstatus.nein) {
        count += 1;
      }
    }
    this.countUnutilizedItems = count;
    return count;
  }

  countUtilizedByCompany(company: Unternehmen): number {
    const temp = this.listOfReviews.filter((item) => {
      // console.log( 'callback-item: ' + item.company );
      // console.log( 'parameter: ' + company );
      item.company === Unternehmen[company];
    });
    console.log('Filter -> Array: ' + temp);
    // console.log( 'Länge des temp-Arrays: ' + temp.length );
    return temp.length;
  }

  getListOfCompanyReviews(): Array<[string, number, number, number]> {
    const listOfUtilizedCompanys: Array<[string, number, number, number]> = [];

    // Iterate over a list of companys to count the reviews
    for (const unternehmen of this.unternehmService.getListOfCompanys()) {
      let count = 0;
      let realityFactor = 0;
      let attractivityFactor = 0;

      // Iterate over the list of reviews to compare and count
      for (const review of this.listOfReviews) {
        if (review.company === unternehmen) {
          count++;
          realityFactor += review.realityFactor;
          attractivityFactor += review.attractivityFactor;
        }
      }

      // Set the avarage of the reality and attractivity factor
      realityFactor = realityFactor / count;
      attractivityFactor = attractivityFactor / count;

      // Push the number of company reviews, reality factor and the attractivity factor in the result list
      listOfUtilizedCompanys.push([unternehmen, count, realityFactor, attractivityFactor]);
    }

    // Return: Array[Unternehmen as string, countCompanyReviews as number]
    return listOfUtilizedCompanys;
  }
}
