import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from '../model/pays.model';    // Import the Pays model
import { Plat } from '../model/plat.model';    // Import the Plat model
import { PlatService } from '../services/plat.service';  // Import the Plat service

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html'   // Ensure this path is correct
})
export class AddPlatComponent implements OnInit {

  newPlat = new Plat();            // Create a new instance of Plat model
  paysList: Pays[] = [];           // Initialize the list of countries
  newIdPays!: number;              // Store the selected country ID

  constructor(private platService: PlatService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the list of countries from the service
    this.platService.listePays().subscribe((response) => {
      if (response._embedded && response._embedded.pays) {
        this.paysList = response._embedded.pays;  // Assuming response has _embedded.pays array
        console.log(this.paysList);               // Log the list of countries for debugging
      } else {
        console.error("Unexpected response structure", response);
      }
    }, error => {
      console.error("Error fetching countries", error);
    });
  }

  addPlat(): void {
    console.log("addPlat called");
    console.log("New Plat Data:", this.newPlat);
    console.log("Selected Pays ID:", this.newIdPays);
    
    // Convert newIdPays to a number for comparison
    const selectedPays = this.paysList.find(pays => pays.idPays === Number(this.newIdPays));
    
    if (selectedPays) {
        this.newPlat.pays = selectedPays;

/*************  ✨ Codeium Command ⭐  *************/
            // Handle successful response from adding a new plat
            // Log the response and navigate to the "pays" route (list of countries)
/******  fcbfc566-b324-44ac-9274-1e7cfae77086  *******/        this.platService.ajouterPlat(this.newPlat).subscribe({
            next: (response) => {
                console.log("Plat added successfully:", response);
                this.router.navigate(['plats']);
            },
            error: (err) => {
                console.error("Error adding plat:", err);
            }
        });
    } else {
        console.error("Selected country not found. Available Pays IDs:", this.paysList.map(pays => pays.idPays));
    }
}
}