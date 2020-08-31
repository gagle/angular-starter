import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  isPastDate(date: Date): boolean {
    return new Date() > date;
  }
}
