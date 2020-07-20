import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;

  constructor(private dataSharingService: DataSharingService,
    private authenticationService: AuthService) {
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isLoggedIn = value;
    });
     }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authenticationService.logout();
  }
  
}
