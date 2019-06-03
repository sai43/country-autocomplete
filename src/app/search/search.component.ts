import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
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

    this.searchCountry.valueChanges.subscribe( result => console.log(result));

  }

  // ngOnInit() {
  //   this.queryField.valueChanges
  //   .subscribe(queryField =>this._searchService.search(queryField)
  //   .subscribe(response => this.results = this.response.json().artists.items);
  //  }

  PerformSearch(event) {
    console.log(`country name: ${event.target.value}`);
  }

}
