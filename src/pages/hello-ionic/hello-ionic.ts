import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  splash = true;
  // secondPage = SecondPagePage;
  constructor(public navCtrl: NavController) {

  }
   ionViewDidLoad() {
    setTimeout(() => this.splash = false, 8000);
  }
}
