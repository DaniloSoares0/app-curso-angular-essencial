import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private hearderService: HeaderService) { }

  ngOnInit(): void {
  }

  get title():string{
    return this.hearderService.headerData.title
  }

  get icon():string{
    return this.hearderService.headerData.icon
  }

  get routeUrl():string{
    return this.hearderService.headerData.routeUrl
  }
}
