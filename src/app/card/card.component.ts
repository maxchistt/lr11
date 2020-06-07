import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cardId = 0;
  Cards: Card[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.addCard();
    }
  }

  delete(id: number) {
    for (let i = 0; i < this.Cards.length; i++) {
      if (this.Cards[i].id === id) { this.Cards.splice(i, 1); }
    }
  }

  deleteAll() {
    this.Cards.splice(0, this.Cards.length);
  }

  addCard(name: string = 'Cardname', stat: boolean = Boolean(Math.round(Math.random()))) {
    this.Cards.push(new Card(this.cardId++, Boolean(stat), name));
  }
}
