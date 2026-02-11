import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-primary',
  imports: [],
  templateUrl: './pre-primary.html',
  styleUrl: './pre-primary.css',
})
export class PrePrimary {
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
