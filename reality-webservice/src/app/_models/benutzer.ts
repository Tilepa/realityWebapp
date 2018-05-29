export class Benutzer {

  static create(data: any) {
    return new Benutzer( data.userName, data.password);
  }

  constructor( public userName: string, public password: string) {
  }

}
