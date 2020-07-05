import { Component, OnInit } from '@angular/core';
import {__importDefault} from 'tslib';
import Swal from 'sweetalert2';
import {ProduitService} from '../../service/produit.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FournisseurService} from "../../service/fournisseur.service";
import {CategorieService} from "../../service/categorie.service";

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})

export class AddproduitComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  produit: any;
  data: any;
  data1: any;
  constructor(private formBuilder: FormBuilder , private produitService: ProduitService,
              private fournisseurService: FournisseurService , private categorieService: CategorieService) {}

  ngOnInit() {
    this.allFournisseur();
    this.allCategorie();
    this.registerForm = this.formBuilder.group({
      marque: ['', Validators.required],
      type: ['', Validators.required],
      quantite: ['', Validators.required],
      prixF: ['', Validators.required],
      prixC: ['', Validators.required],
      codeB: ['', Validators.required],
      tva: ['', Validators.required],
      categorie: ['', Validators.required],
      fournisseur: ['', Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.get('fournisseur').value);
    this.produitService.addProduit(this.registerForm.value).subscribe(res => {


      console.log(this.registerForm.value);


      console.log(res);
      this.produit = res;
      this.registerForm.reset();
    });
  }

  public allFournisseur() {
    this.fournisseurService.getAll().subscribe(data => {
      this.data = data;
      console.log(data);

    }, error => console.error(error));
  }

  public allCategorie() {
      this.categorieService.getAll().subscribe(data1 => {

        this.data1 = data1;
        console.log(data1);

      }, error => console.error(error));
  }
}
