import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestaurantService} from "../../services/restaurant-service";


@Component({
  selector: 'page-step2',
  templateUrl: 'step2.html',
})
export class Step2 {

	public restaurants;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restaurantService: RestaurantService) {
  	this.restaurants = restaurantService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step2');
     
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

}
