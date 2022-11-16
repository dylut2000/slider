import {Component, Input, OnInit} from '@angular/core'
import {SliderInterface} from '../interface/slider-interface'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input('data') data: SliderInterface[] = []
  @Input('numberOfSeconds') numberOfSeconds: number = 3

  selectedIndex: number = 2

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.onNext(), this.numberOfSeconds * 1000)
  }

  onSelectedIndex(index: number): void {
    this.selectedIndex = index
  }

  onNext(): void {
    if (this.selectedIndex === this.data.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex++
    }
  }
}
