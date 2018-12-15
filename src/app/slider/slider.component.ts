import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
    ]
  }

  showHover(event:any){
    
  }
  ngOnInit() {
    
  }

}
