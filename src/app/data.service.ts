import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private countryNameSource = new BehaviorSubject<string>("");
  currentCountryName = this.countryNameSource.asObservable();

  constructor() { }

  changeCountryName(country: string) {
    this.countryNameSource.next(country);
  }


}
