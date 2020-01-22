import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit {

  searchInput: string = '';
  people$: Observable<Person[]>;
  @ViewChild('searchBy', {static:true}) el: ElementRef;
  constructor(private http: HttpClient) {}

  private readonly url: string = 'http://localhost:9000';

  ngOnInit() {
    this.firstOption();
  }

  filterPeople(searchInput: string) : Observable<Person[]>{
      if(searchInput.length == 0){
        return of([]);
      }
  }

  firstOption(){
    fromEvent(this.el.nativeElement, 'keyup')
    .subscribe(e => {
      this.http.get(this.url)
      .subscribe(r => console.log(r));
    });
  }

}
