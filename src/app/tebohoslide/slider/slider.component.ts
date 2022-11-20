import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core'
import {SliderInterface} from '../interface/slider-interface'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input('data') data: SliderInterface[] = []
  @Input('timer') timer: number | undefined

  cardContainers: number = window.innerWidth > 990 ? 5 : 3
  containerArrayBlock: Array<any> = new Array(this.cardContainers)
  sliderData: SliderInterface[] = []
  selectedIndex: number = 0

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

  ngOnInit(): void {
    this.setSliderItems()
    this.onAutoScroll()
  }

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

  onNext(): void {
    if (this.selectedIndex < this.data.length - 1) {
      this.selectedIndex++
    } else {
      this.selectedIndex = 0
    }

    this.setSliderItems()
  }

  onPrevious(): void {}

  setSliderItems(): void {
    let temp = 0

    this.sliderData = []

    for (let i = 0; i < this.cardContainers; i++) {
      if (this.data[i + this.selectedIndex]) {
        this.sliderData.push(this.data[i + this.selectedIndex])
      } else {
        this.sliderData.push(this.data[temp])
        temp++
      }
    }
  }

  onAutoScroll(): void {
    if (Number(this.timer)) {
      setInterval(() => this.onNext(), Number(this.timer) * 1000)
    }
  }
}
