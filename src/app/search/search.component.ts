import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCountry: FormControl = new FormControl();
  searchForm: FormGroup;
  results: any[] = [];

  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {

    this.searchForm = this.fb.group({
      'searchCountry': [null]
    });

    this.searchCountry.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe( result => this.service.changeCountryName(result));
    
  }

}
