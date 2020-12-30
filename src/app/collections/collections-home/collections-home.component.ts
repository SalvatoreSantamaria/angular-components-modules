import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Kuma', age: 11, job: 'Job 1'},
    { name: 'Mona', age: 12, job: 'Job 1'},
    { name: 'Raven', age: 14, job: 'Job 2'}
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
