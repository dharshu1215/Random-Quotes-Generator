import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quoteDetails: any;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuoteDetails();
  }

  getQuoteDetails(): void {
    this.quoteService.getQuoteDetails()
      .subscribe((quoteDetails: any) => {
        this.quoteDetails = quoteDetails;
      });
  }
}
