import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public menu =[];
  constructor(public router: Router , private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.getData()
    .subscribe(data => this.menu = data);
  }

  
}
