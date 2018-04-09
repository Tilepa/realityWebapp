import {Besuchsart} from "./besuchsart.enum";
import {Unternehmen} from "./unternehmen";

export class Bewertung {
  id: number;
  kind: Besuchsart;
  company: string;
  ratingReal: number;
  ratingAttr: number;
  annotation: string;
  lastname: string;
  firstname: string;
}
