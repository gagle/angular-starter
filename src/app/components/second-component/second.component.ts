import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: '',
  host: {
    class: 'app-second'
  }
})
export class SecondComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('OnInit SecondComponent');
  }
}
