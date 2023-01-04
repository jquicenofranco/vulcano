import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  mostrarMenu: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('identificado') === 'true') {
      this.mostrarMenu = true;
    }
  }

  cerrarSesion() {
    localStorage.setItem('identificado', 'false');
    return this._router.parseUrl('/login');
  }

  setMyStyle() {
    let styles = {
      'background-image': 'url("../../assets/img/2022-12-30_172846.png")',
      'background-repeat': 'no-repeat',
      'background-position': 'center right',
      'background-size': 'contain',
    };
    return styles;
  }
}
