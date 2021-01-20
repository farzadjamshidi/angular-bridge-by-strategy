import { Component, OnInit } from '@angular/core';
import { AgentMessage } from './models/AgentMessage';
import { Message } from './models/Message';
import { TradeMessage } from './models/TradeMessage';
import { LandlordMessage } from './models/LandlordMessage';
import { RectangularStyle } from './models/RectangularStyle';
import { DashedStyle } from './models/DashedStyle';
import { EllipticStyle } from './models/EllipticStyle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  messagesForShow : Message[] = new Array();
  
  ngOnInit(): void {

    const am1 = new AgentMessage(
      "Ali",
      "Akbari",
      "SaatadAbad",
      "Hi, every one",

      new RectangularStyle()
    );

    const am2 = new AgentMessage(
      "Elham",
      "Karimi",
      "Tajrish",
      "Hi, this is ok",

      new EllipticStyle()
    );

    const tm1 = new TradeMessage(
      "Jafar",
      "Sabri",
      7,
      "Hi, I can do it",

      new DashedStyle()
    );

    const lm1 = new LandlordMessage(
      "Zahra",
      "Hosseini",
      "No. 38, Kaaj St.",
      "Hi, I need help",

      new EllipticStyle()
    );
    
    this.messagesForShow = [
      am1,
      am2,
      tm1,
      lm1
    ]
  }

}
