import { Component, OnInit } from '@angular/core';
import Wheels from '../../modals/wheel';
import { WheelItem } from '../../modals/wheelTypes';
const items: WheelItem[] = [{ id: 1, label: '0', value: 0 }, { id: 2, label: '10', value: 10 }, { id: 3, label: '20', value: 20 }, { id: 4, label: '30', value: 30 }];

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.css']
})
export class WheelsComponent implements OnInit {
  wheels;
  constructor(wheels: Wheels) {
    this.wheels = wheels;
  }
  ngOnInit(): void {
    this.wheels.setItems(items);
    console.log(this.wheels);
  }

}
