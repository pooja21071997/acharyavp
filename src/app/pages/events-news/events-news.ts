import { Component } from '@angular/core';

@Component({
  selector: 'app-events-news',
  imports: [],
  templateUrl: './events-news.html',
  styleUrl: './events-news.css',
})
export class EventsNews {

  imageName: string[] = [
    "1st day of school",
    "Ashadhi Ekadashi",
    "Ashadhi Ekadashi",
    "Ashadhi Ekadashi",
    "Ashadhi Ekadashi",
    "Baldin",
    "Balswatantrya din",
    "Bhulabai mahostav",
    "Bhulabai mahostav Performance",
    "Blue Colour Day",
    "Deep Amavasya",
    "Deep Amavasya",
    "Diwali",
    "Diwali",
    "Dushera",
    "Gandhi & Shastri Jayanti",
    "Ganeshostav",
    "Ganeshostav",
    "Ganeshostav",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Grand Parent Day",
    "Gurupaurnima",
    "Independace Day",
    "Janmastami",
    "Janmastami",
    "Matrudin",
    "Nagpanchami",
    "Navratri",
    "Navratri",
    "Parents Meeting",
    "Parents Meeting",
    "Parents Meeting",
    "Parents Workshop",
    "Parents Workshop",
    "Pink Colour Day",
    "Pink Colour Day",
    "Pola",
    "Project Based Fancy dress",
    "Project Based Fancy dress",
    "Purple Colour Day",
    "Rakshabandhan",
    "Rakshabandhan",
    "Red colour day",
    "Teachers Day",
    "Teachers Training",
    "Tilak Jayanti",
    "Trip",
    "White Colour Day",
    "White Colour Day",
    "Yellow Colour Day",
    "Black Colour Day",
    "Black Colour Day",
    "Bos Jayanmti & Prajasttak Din",
    "Green Colour Day",
    "Green Colour Day",
    "Krida Mahostav",
    "Krida Mahostav",
    "Krida Mahostav",
    "Makar Sankranti Haldi Kunku",
    "Makar Sankranti Haldi Kunku",
    "Makar Sankranti Haldi Kunku",
    "Niwasi Shibir",
    "Niwasi Shibir",
    "Niwasi Shibir"
  ];

  images = Array.from({ length: this.imageName.length }, (_, i) => i + 1);

  getImagePath(img: number): string {
    return 'assets/images/events/' + img + '.jpg';
  }

  onImageError(event: any, img: number) {
    const currentSrc = event.target.src;

    if (currentSrc.endsWith('.jpg')) {
      event.target.src = 'assets/images/events/' + img + '.JPG';
    } else if (currentSrc.endsWith('.JPG')) {
      event.target.src = 'assets/images/events/' + img + '.jpeg';
    } else if (currentSrc.endsWith('.jpeg')) {
      event.target.src = 'assets/images/events/' + img + '.JPEG';
    }
  }
}

