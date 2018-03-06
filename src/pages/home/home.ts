import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportService } from '../../sport.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allMatches: any = [];
  matchList: any = [];
  matchSelected: string = 'upcoming';

  constructor(public navCtrl: NavController, public sportService: SportService) {
    this.getMatches();

  }


  getMatches() {
    this.sportService.getMatches().subscribe(data => {
      this.allMatches = data.data;
      var filtrData;
      if (this.matchSelected == 'upcoming') {
        filtrData = '1'
      } else if (this.matchSelected == 'live') {
        filtrData = '2'
      } else if (this.matchSelected == 'completed') {
        filtrData = '3'
      }
      this.filterMatch(filtrData);
    })
  }

  segmentChanged(event) {
    var filtrData;
    if (this.matchSelected == 'upcoming') {
      filtrData = '1'
    } else if (this.matchSelected == 'live') {
      filtrData = '2'
    } else if (this.matchSelected == 'completed') {
      filtrData = '3'
    }
    this.filterMatch(filtrData);
  }


  filterMatch(filter) {
    this.matchList = [];
    for (let item of this.allMatches) {
      console.log(filter == item.status);
      if (filter == item.status) {
        this.matchList.push(item);
      }
    }

    console.log(this.matchList);

  }



}
