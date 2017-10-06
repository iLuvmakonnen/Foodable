import {Component, Injectable} from "@angular/core";
import {App, NavController, AlertController} from "ionic-angular";
import {GatewayService} from "../../services/gateway-service";
import {RestaurantService} from "../../services/restaurant-service";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";
import {RestaurantsPage} from "../restaurants/restaurants";
import {Step1} from "../step1/step1";
import {Client, Feature, Request, Image} from 'vision-cloud-api';
import {Camera} from 'ionic-native';


 
declare var CameraPreview:any;

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  public photos : any;
  public base64Image : string;
  public restaurants: any;
 
  public image: string;

  constructor(
    private alertCtrl: AlertController,
    public app: App, 
    public nav: NavController, 
    public gatewayService: GatewayService, 
    public restaurantService: RestaurantService) {
    // set sample data
    this.restaurants = restaurantService.getAll();

    
  }

  step1() {
      this.nav.push(Step1);
  }



  public takePicture() {
        Camera.getPicture({
            quality : 100,
            saveToPhotoAlbum: false,
            destinationType : Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : false
            
        })
        .then((result) => {
          this.base64Image = result;
   
          console.log("Image URI: " + this.base64Image);


        }, (error) => {
          console.log("ERROR -> " + JSON.stringify(error));
        });
    }



  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.app.getRootNav().push(RestaurantDetailPage, {id: id})
  }


  // view all restaurants
  viewAllRestaurants() {
    this.app.getRootNav().push(RestaurantsPage);
  }

}
