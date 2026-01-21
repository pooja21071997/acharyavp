import { Component } from '@angular/core';

@Component({
  selector: 'app-events-news',
  imports: [],
  templateUrl: './events-news.html',
  styleUrl: './events-news.css',
})
export class EventsNews {
images = Array.from({ length: 45 }, (_, i) => i + 1);

}
