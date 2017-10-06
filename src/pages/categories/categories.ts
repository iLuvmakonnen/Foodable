import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesService } from "../../services/categories-service";


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

	public categories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriesService: CategoriesService) {

  	this.categories = categoriesService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Categories');
  }

}
