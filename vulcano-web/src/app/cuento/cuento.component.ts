import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuento',
  templateUrl: './cuento.component.html',
  styleUrls: ['./cuento.component.css']
})
export class CuentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setMyStyle() {
    let styles = {
      'background-image': 'url("../../../assets/img/Plantilla_cuento_volcanes_003.png")',
      'background-repeat': 'no-repeat',
      'background-position': 'center center',
      'background-size': 'contain',
    };
    return styles;
  }
}
