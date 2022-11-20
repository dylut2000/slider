import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core'
import {SliderInterface} from '../interface/slider-interface'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input('data') data: SliderInterface[] = []

  containerArrayBlock: Array<any> = new Array(window.innerWidth > 990 ? 5 : 3)

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let windowWidth = event.target.innerWidth
    if (windowWidth > 990) {
      this.containerArrayBlock = new Array(5)
    } else {
      this.containerArrayBlock = new Array(3)
    }
  }

  constructor() {}

  ngOnInit(): void {}

  getClass(i: number): string {
    let className = ''
    if (window.innerWidth > 990) {
      switch (i) {
        case 0:
        case 4:
          className = 'last'

          break
        case 1:
        case 3:
          className = 'next'
          break
        case 2:
          className = 'active'
          break
      }
    } else {
      switch (i) {
        case 0:
        case 2:
          className = 'next'
          break
        case 1:
          className = 'active'
          break
      }
    }

    return className
  }
}
