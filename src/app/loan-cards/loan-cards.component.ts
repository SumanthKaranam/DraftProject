import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { KeyValuePipe } from '@angular/common';
@Component({
  selector: 'app-loan-cards',
  templateUrl: './loan-cards.component.html',
  styleUrls: ['./loan-cards.component.scss'],
})
export class LoanCardsComponent implements OnInit {
  cardData: any;
  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService.getDataList().subscribe((data) => {
      this.cardData = data['top_cards'];
    });

  }
}
