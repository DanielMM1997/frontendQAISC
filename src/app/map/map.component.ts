import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';
import * as $ from 'jquery';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit  {
  private map: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
  open(): void {
    console.log('abierto')
  }

  private initMap(): void {
    this.map = L.map('map').setView([27.950, -15.60], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      // minZoom: 10,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      errorTileUrl: '/assets/imgs/verde.png', //imagen que se muestra cuando el mapa no se carga
      detectRetina: true,
    }).addTo(this.map);
    var cam_verde = L.icon({
      iconUrl: '/assets/imgs/verde.png',
      iconSize: [24, 24],
    });
    var cam_gris = L.icon({
      iconUrl: '/assets/imgs/gris.png',
      iconSize: [24, 24],
    });
    var cam_amarillo = L.icon({
      iconUrl: '/assets/imgs/amarillo.png',
      iconSize: [24, 24],
    });
    var cam_Nelson_Mandela = L.marker([28.1622092, -15.4014788], {icon: cam_amarillo}).addTo(this.map)
    .bindTooltip("Puerto Nelson Mandela",{direction: 'top'})
    .on('click', function(e) {
      $('.close-panel').removeClass('none');
      $('.camara-panel').removeClass('none');
    });;
    var cam_playa_laja = L.marker([28.0600000, -15.4200000], {icon: cam_gris}).addTo(this.map)
    .bindTooltip("Playa de la Laja",{direction: 'top'})
    .on('click', function(e) {
      $('.close-panel').removeClass('none');
      $('.camara-panel').removeClass('none');
    });;
    var cam_telde = L.marker([27.991224, -15.3674457], {icon: cam_verde}).addTo(this.map)
    .bindTooltip("Telde",{direction: 'top'})
    .on('click', function(e) {
      $('.close-panel').removeClass('none');
      $('.camara-panel').removeClass('none');
    });;
    var cam_puerto_arguineguin = L.marker([27.7569610, -15.6835057], {icon: cam_verde}).addTo(this.map)
    .bindTooltip("Puerto de Arguineguin",{direction: 'top'})
    .on('click', function(e) {
      $('.close-panel').removeClass('none');
      $('.camara-panel').removeClass('none');
    });;
    var cam_puerto_anfi = L.marker([27.7720116, -15.7000000], {icon: cam_gris}).addTo(this.map)
    .bindTooltip("Puerto Anfi",{direction: 'top'})
    .on('click', function(e) {
      $('.close-panel').removeClass('none');
      $('.camara-panel').removeClass('none');
    });;
  }
}
