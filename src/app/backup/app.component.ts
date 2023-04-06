import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedDate: string;
  today: string;
  yesterday: string;
  tenDaysAgo: string;
  oneYearAgo: string;
  showOutput: boolean = false;
  options: any;

  minTime: any;
  maxTime: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    let nowObj = new Date();
    nowObj.setDate(nowObj.getDate() + 1);
    this.minTime = nowObj.toISOString().slice(0, 10);
    nowObj.setFullYear(nowObj.getFullYear() + 5);
    this.maxTime = nowObj.toISOString().slice(0, 10);
  }

  setDate(val) {
    this.selectedDate = new Date(val).toISOString().slice(0, 10);
  }


  onSubmit() {
    if(!this.selectedDate) {
      return ;
    }
    console.log(this.selectedDate)
    this.showOutput = true;
    let selectedDateObj = new Date(this.selectedDate);
    let tenDaysAgoObj = new Date(selectedDateObj);
    this.today = new Date(this.selectedDate).toISOString().slice(0, 10);
    let yest = new Date(selectedDateObj);
    yest.setDate(yest.getDate() - 1);
    this.yesterday = yest.toISOString().slice(0, 10) 
    tenDaysAgoObj.setDate(tenDaysAgoObj.getDate() - 
    10);
    this.tenDaysAgo = tenDaysAgoObj.toISOString().slice(0, 10);
    let oneYearAgoObj = new Date(selectedDateObj);
    oneYearAgoObj.setFullYear(oneYearAgoObj.getFullYear() - 1);
    this.oneYearAgo = oneYearAgoObj.toISOString().slice(0, 10);
  }
}    