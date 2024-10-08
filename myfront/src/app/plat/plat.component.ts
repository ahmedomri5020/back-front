import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { Plat } from '../model/plat.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
})
export class PlatsComponent implements OnInit {
  plats?: Plat[]; // Array of plats

  constructor(private platService: PlatService, public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerPlats(); // Load plats when the component initializes
  }

  chargerPlats() {
    this.platService.listePlats().subscribe(
      plats => {
        console.log('Fetched plats:', plats); // Log the response to check its structure
        this.plats = plats; // Assign the fetched data to the component's property
      },
      error => {
        console.error("Error fetching plats:", error); // Log any errors
      }
    );
  }
}
