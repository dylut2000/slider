import { Component, Input, OnInit } from '@angular/core';
import { SliderInterface } from "../interface/slider-interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('item') item: SliderInterface | undefined
  @Input('selectedIndex')

  constructor() { }

  ngOnInit(): void {
  }

}
