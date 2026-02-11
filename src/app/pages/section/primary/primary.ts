import { Component } from '@angular/core';

@Component({
  selector: 'app-primary',
  imports: [],
  templateUrl: './primary.html',
  styleUrl: './primary.css',
})
export class Primary {
ngAfterViewInit() {
  const cards = document.querySelectorAll('.feature-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}
}
