import { Component } from '@angular/core';
import { IntroType } from './class/intro-type';
import { Kendaraan } from './class/kendaraan';
import { Mobil } from './class/mobil';
import { Motor } from './class/motor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-fauzia';
  say = 'hello fauzia';

  constructor(){
    const MobilA = new Kendaraan();

    MobilA.setMesin("10 silinder");
    MobilA.setRoda(6);

    console.log(MobilA.getMesin());
    console.log(MobilA.getRoda());

    const MobilBaleno = new Mobil();

    MobilBaleno.setMesin("4 silinder");
    MobilBaleno.setRoda(4);

    console.log(MobilBaleno.getMesin());
    console.log(MobilBaleno.getRoda());

    const MotorHonda = new Motor();

    MotorHonda.setMesin("2 silinder");
    MotorHonda.setRoda(2);

    console.log(MotorHonda.getMesin());
    console.log(MotorHonda.getRoda());
  }
}
