import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {
    public positionLatitude;
    public positionLongitude;
    public position;

    getLocation() {
        this.position = navigator.geolocation.getCurrentPosition(this.showPosition);
    }

    showPosition(position) {
        this.positionLatitude = position.coords.latitude;
        this.positionLongitude = position.coords.longitude;
        console.log(this.positionLatitude + this.positionLongitude);
    }
}
