import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  SO: any;
  versao: any;
  modelo: any;
  espacoLivre: any;
  espacoTotal: any;
  bateria: any;
  cargaBat: any;
  idioma: any;
  batLevel: any;

  constructor() { }

  async ngOnInit() {
    this.SO = await (await Device.getInfo()).operatingSystem;
    this.versao = await (await Device.getInfo()).appVersion;
    this.modelo = await (await Device.getInfo()).model;
    this.espacoLivre = await (await Device.getInfo()).diskFree;
    this.espacoTotal = await (await Device.getInfo()).diskTotal;
    this.bateria = await (await Device.getBatteryInfo()).batteryLevel;
    this.cargaBat = await await (await Device.getBatteryInfo()).isCharging;
    this.idioma = await Device.getLanguageCode();
  }

}
