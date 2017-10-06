import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Step2} from '../step2/step2'

@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})
export class Step1 {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step1');
  }

  step2(){

  	this.nav.push(Step2);

  }

}
