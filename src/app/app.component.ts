import {Component} from '@angular/core';
import {Platform, MenuController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

// import pages
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {SettingPage} from '../pages/setting/setting';
import {FindFriendPage} from '../pages/find-friend/find-friend';
import {HotelsPage} from '../pages/hotels/hotels';
import {RestaurantsPage} from '../pages/restaurants/restaurants';
// end import pages

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public pages = [
    {
      title: 'Home',
      count: 0,
      component: MainTabsPage
    },

    {
      title: 'Invite Friend',
      count: 0,
      component: FindFriendPage
    },

    {
      title: 'Settings',
      count: 0,
      component: SettingPage
    },

    {
      title: 'Logout',
      count: 0,
      component: LoginPage
    },


    // import menu


  ];

  constructor(public platform: Platform,public menu: MenuController) {
    this.rootPage = MainTabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  closeMenu(){
      this.menu.close();
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
