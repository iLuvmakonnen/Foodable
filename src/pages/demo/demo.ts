import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Client, Feature, Request, Image} from 'vision-cloud-api';

const auth = 'AIzaSyCU4h-akkB0IEn2tlBbqih4nJzcx-vPDNU';
const feature1 = new Feature('LABEL_DETECTION');
const features = [feature1];

// DEMO 1
const url = 'https://pbs.twimg.com/media/C4y1qh9WEAE1XqE.jpg';
 
const image = new Image({url});
 
const request = new Request({image, features});
 
const client = new Client({auth});

 
@Injectable()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class Demo {

  constructor(
  	private alertCtrl: AlertController,
  	public navCtrl: NavController, 
  	public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo');

    
  }

  demo1() {
  	client.annotate([request]).then(response => {
            let alert = this.alertCtrl.create({
              title: 'Retrieved Data',
              subTitle: "Scanned object is: " + response.responses[0].labelAnnotations[0].description 
                        + "," 
                        + response.responses[0].labelAnnotations[1].description
                        + "," 
                        + response.responses[0].labelAnnotations[2].description
                        + "," 
                        + response.responses[0].labelAnnotations[3].description
                        + "," 
                        + response.responses[0].labelAnnotations[4].description,
              buttons: ['Dismiss']
              });
            alert.present();
            console.log("Scanned object is: " + response.responses[0].labelAnnotations[0].description);
          }).catch(e => {
            console.log(e);
          });
  }

  
  }


