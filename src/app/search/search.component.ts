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
  searchForm: FormGroup;
  searchCountry: FormControl;
  results: any[] = [];

  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchCountry: [null, Validators.required]
    });

    this.searchForm.get('searchCountry').valueChanges
    .debounceTime(300)
    .distinctUntilChanged()
    .subscribe( result => this.service.changeCountryName(result));
    
  }

}
