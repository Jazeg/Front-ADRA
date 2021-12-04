import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Vista General', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/icons', title: 'Iconos', icon: 'ni-planet text-blue', class: ''},
  {path: '/maps', title: 'Culto', icon: 'ni-pin-3 text-orange', class: ''},
  {path: '/user-profile', title: 'Usuarios', icon: 'ni-single-02 text-yellow', class: ''},
  {path: '/tables', title: 'Avance', icon: 'ni-bullet-list-67 text-red', class: ''},
  /**
  {path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: ''},
  mmm 50/50 si implementar el login :V xd
  */
  {path: '/register', title: 'Registrar Usuario', icon: 'ni-circle-08 text-pink', class: ''},
  {path: '/products', title: 'Módulos', icon: 'ni-bullet-list-67 text-red', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
