import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {

  time = new Observable<Date>(observer => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  constructor() {}

  ngOnInit(): void {}


}


