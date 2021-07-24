import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  quoteData: any

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
    this._gameService.getQuote().subscribe(data => {
      this.quoteData = data.quotes[0];
      console.log(this.quoteData.text);
      
    })
    
    
  }

}
