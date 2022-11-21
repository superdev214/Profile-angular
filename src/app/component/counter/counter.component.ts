import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  curValue: number = 0;
  id: number = 0;
  curValueString!: string;
  @Input() time!: number;
  @Input() maxValue!: number;
// Intersection Observer

  isVisibleInView = false;
  private observer!: IntersectionObserver;
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      if ( entries[0].isIntersecting === true ) {
        this.isVisibleInView = true;

        // Probably needs to be called in production
        //
        // this.observer.disconnect();
      }
    }, {
      threshold: 0.75
    });

    this.observer.observe(this.el.nativeElement as HTMLElement);
  }
  ngOnInit() {
    this.id = window.setInterval(() => {
      if ((this.curValue < this.maxValue) && (this.isVisibleInView)) {
        if (this.maxValue > 1000) this.curValue += 2;
        else this.curValue++;
        this.curValueString = this.numberWithCommas(this.curValue);
      }
    }, this.time);
  }
  ngOnDestroy() {
    this.observer.disconnect();
    clearInterval(this.id);
  }
  numberWithCommas(x: number) {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join(',');
  }
}
