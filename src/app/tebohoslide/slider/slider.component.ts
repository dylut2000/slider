import {Component, Input, OnInit} from '@angular/core'
import {SliderInterface} from '../interface/slider-interface'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() data: SliderInterface[] = []

  selectedIndex: number = 0

  constructor() {}

  ngOnInit(): void {
    console.log(this.data)
  }
}
