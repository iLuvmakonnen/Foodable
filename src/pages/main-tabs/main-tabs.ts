import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";
import {SearchPage} from "../search/search";
import {MyProfilePage} from "../my-profile/my-profile";
import {CategoriesPage} from "../categories/categories";
import {Demo} from "../demo/demo";

@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html'
})
export class MainTabsPage {
  // set tabs
  public tabHome = HomePage;
  public tabCategories = CategoriesPage;
  public tabDemo = Demo;
  public tabMe = MyProfilePage;

  constructor(public nav: NavController) {
  }
}
