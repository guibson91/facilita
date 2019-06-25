import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  quantity: number = 5; //quantidade de estrelas

  @Input()
  initial: number; //quantidade inicial a ser marcada

  @Output() changeStar = new EventEmitter<number>();

  /**
   * small = 1em
   * medium = 2em
   * large = 3em
   * 
  */
  @Input()
  size: string = "large";

  stars: {
    rating: number,
    active: boolean
  }[] = []

  constructor() {

  }

  ngOnInit() {

    for (let i = 1; i <= this.quantity; i++) {
      this.stars.push({
        rating: i,
        active: this.initial ? i <= this.initial : false
      })
    }

  }

  select(selectedStar) {
    this.stars.forEach(star => {
      if (star.rating <= selectedStar.rating) {
        star.active = true;
      }
      else {
        star.active = false;
      }
    });
    this.changeStar.emit(selectedStar.rating)
  }

  isSmall(): boolean {
    return this.size == 'small'
  }

  isMedium(): boolean {
    return this.size == 'medium'
  }

  isLarge(): boolean {
    return this.size == 'large'
  }

}