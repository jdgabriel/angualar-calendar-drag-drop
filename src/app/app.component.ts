import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  days: any = [];
  visionMonth: boolean = true;
  daysWeek: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  users: any = [
    {
      id: `${Math.floor(Math.random() * 1000000)}`,
      name: 'Gabriel Duarte',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
    {
      id: `${Math.floor(Math.random() * 1000000)}`,
      name: 'Aline Batista',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
    {
      id: `${Math.floor(Math.random() * 1000000)}`,
      name: 'Arthur Batista',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
    {
      id: `${Math.floor(Math.random() * 1000000)}`,
      name: 'Theo Batista',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
    {
      id: `${Math.floor(Math.random() * 1000000)}`,
      name: 'Alisson Batista',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
  ];

  ngOnInit(): void {
    this.getDaysInMonth();
  }

  drop(event: CdkDragDrop<string[]>) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getDaysInMonth() {
    let calendar = [];
    const today = moment();
    const startDay = today.clone().startOf('month').startOf('week');
    const endDay = today.clone().endOf('month').endOf('week');

    let date = startDay.clone().subtract(1, 'day');

    while (date.isBefore(endDay, 'day'))
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => date.add(1, 'day').clone())
      );

    calendar.map((week) =>
      week.map((day) => {
        const isCurrentDay =
          moment().format('DD-MM-YY') === moment(day).format('DD-MM-YY');
        const currentMonth = moment(day).clone().startOf('month');

        this.days.push({
          id: `${Math.floor(Math.random() * 1000000)}`,
          day: moment(day).format('D').toString(),
          dayWeekName: moment(day).locale('pt_BR').format('dddd').toString(),
          isCurrentDay,
          isMonth: moment().isBetween(
            moment(currentMonth).startOf('month'),
            moment(currentMonth).endOf('month')
          ),
          actions: [],
        });
      })
    );
  }

  trackIds(): string[] {
    return this.days.map((track: any) => track.id);
  }
}
