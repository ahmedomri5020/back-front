import { Pays } from "./pays.model"; // Assuming you will reference Pays later

export class Plat {
    idPlat!: number; // Changed from idProduit to idPlat
    nomPlat!: string;
    prixPlat!: number;
    pays!: {              // Adding the pays object if needed
        idPays: number;
        nomPays: string;
        descriptionPays: string;
      };// Assuming these are the properties you have
}
