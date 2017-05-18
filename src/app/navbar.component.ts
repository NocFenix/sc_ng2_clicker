import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { BaseService } from './base.service';

@Component({
  selector: 'navbar',
  templateUrl: './html/navbar.component.html',
  providers: [ BaseService ] 
})
export class NavBarComponent implements OnInit {
  base: Base;

  constructor(private baseService: BaseService) { }
  ngOnInit(): void {
    this.GetBase();
  }

  GetBase() : void {
    this.baseService.GetBase().then(base => this.base = base);
  }
}
