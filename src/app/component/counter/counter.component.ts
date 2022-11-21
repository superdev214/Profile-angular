import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  curValue : number = 0;
  id : number = 0;
  curValueString! : string;
  @Input() time! : number;
  @Input() maxValue! : number;
  constructor() {}

  ngOnInit() {
    this.id = window.setInterval(() => {
      if (this.curValue < this.maxValue) {
        if(this.maxValue > 1000)
          this.curValue += 2;
        else this.curValue++;
        this.curValueString = this.numberWithCommas(this.curValue);
      }
    }, this.time);
  }
   numberWithCommas(x : number) {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return parts.join(",");
    }

}
