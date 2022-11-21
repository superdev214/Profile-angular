import { Component, OnInit, Input ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  @Input() title!: string;
  @Input() maxValue!: number;
  curValue: number = 0;
  id : number = 0;
  constructor() {}

  ngOnInit() {
    this.id = window.setInterval(() => {
      if (this.curValue < this.maxValue) {
        this.curValue++;
      }
    }, 50);
  }
  ngOnDestroy() {
    clearInterval(this.id);
  }
}
