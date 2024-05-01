import { Component, OnInit } from '@angular/core';
import { AppsService } from './services/apps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Quotes';
  randomQuote:any={}

  constructor(private api:AppsService){}
  ngOnInit(): void {
    this.getARandomQuote()
  }

  getARandomQuote(){
    this.api.getQuotesAPI().subscribe((res:any)=>{
        console.log(res);
        const quotesArray = res.quotes;
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        this.randomQuote = quotesArray[randomIndex];
        console.log(this.randomQuote);
          
    })
  }

  generateQuote(){
    this.getARandomQuote()
  }
}
