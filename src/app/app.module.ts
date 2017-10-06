import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';

// import services
import {FoodService} from '../services/food-service';
import {GatewayService} from '../services/gateway-service';
import {RestaurantService} from '../services/restaurant-service';
import {ContactService} from '../services/contact-service';
import {CategoriesService} from '../services/categories-service';
// end import services

// import pages
import { FindFriendPage} from '../pages/find-friend/find-friend';
import { HomePage} from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { MainTabsPage} from '../pages/main-tabs/main-tabs';
import { ModalFilterPage} from '../pages/modal-filter/modal-filter';
import { MyProfilePage} from '../pages/my-profile/my-profile';
import { RegisterPage} from '../pages/register/register';
import { RestaurantDetailPage} from '../pages/restaurant-detail/restaurant-detail';
import { RestaurantsPage} from '../pages/restaurants/restaurants';
import { SearchPage} from '../pages/search/search';
import { SettingPage} from '../pages/setting/setting';
import { WelcomePage} from '../pages/welcome/welcome';
import { CategoriesPage} from '../pages/categories/categories';
import { Demo } from '../pages/demo/demo';

import { Step1 } from '../pages/step1/step1';
import { Step2 } from '../pages/step2/step2';
import { Step3 } from '../pages/step3/step3';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    FindFriendPage,
    HomePage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage,
    CategoriesPage,
    Demo,
    Step1,
    Step2,
    Step3
],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindFriendPage,
    HomePage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage,
    CategoriesPage,
    Demo,
    Step1,
    Step2,
    Step3
],
  providers: [
    FoodService,
    GatewayService,
    RestaurantService,
    ContactService,
    CategoriesService,
    Camera
    /* import services */
]
})
export class AppModule {}
