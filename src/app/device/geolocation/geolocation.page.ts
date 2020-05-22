import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  constructor() { }

   async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Onde estou:', coordinates.coords);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    });
  }
}
