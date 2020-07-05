import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../service/produit.service';

@Component({
  selector: 'app-addcommande',
  templateUrl: './addcommande.component.html',
  styleUrls: ['./addcommande.component.scss']
})
export class AddcommandeComponent implements OnInit {
  data;
  selectedOption: [];
  data2;
  totAvTx: number;
  totTx = 0;
  totApTx = 0;
  id;
  data3;

  constructor(private produitService: ProduitService) {
  }

  ngOnInit() {
    this.allProduit();
    console.log(this.selectedOption);
  }

  public allProduit() {
    this.produitService.getAll().subscribe(data => {

      this.data = data;
      console.log(data);

    }, error => console.error(error));
  }

  public show() {
    // console.log(this.selectedOption.length);
    // tslint:disable-next-line:triple-equals
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (this.selectedOption.length == 1) {
      this.produitService.getProduitId(this.selectedOption).subscribe(data2 => {
        this.data2 = data2;
        console.log(this.data2);
        this.totAvTx = this.data2.quantite * this.data2.prixC;
        this.totTx = this.data2.tva;
        this.totApTx = this.totAvTx - (this.totTx / 100);
      }, error => console.error(error));
    } else {
      for (let i = 0; i < this.selectedOption.length; i++) {
        // @ts-ignore
        this.id = this.selectedOption.slice(i, this.selectedOption.indexOf(','));
        this.produitService.getProduitId(this.id).subscribe(data3 => {
          this.data3 = data3;
          this.totAvTx = this.data3.quantite * this.data3.prixC;

        });
      }
    }
  }
}
