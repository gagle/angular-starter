import { Component, OnInit } from '@angular/core';

import { ApiService } from '@/services/api.service';
import { DateService } from '@/services/date.service';

@Component({
  selector: 'app-first',
  template: '',
  styleUrls: ['./first.component.scss'],
  host: {
    class: 'app-first'
  }
})
export class FirstComponent implements OnInit {
  constructor(
    private dateService: DateService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.dateService.isPastDate(new Date('2019-01-01T00:00:00.000Z'));
    this.apiService.throwError();
  }
}
