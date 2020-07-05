import { Component, OnInit } from '@angular/core';
import {__importDefault} from 'tslib';
import Swal from 'sweetalert2';
import {ProduitService} from '../../service/produit.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-showallproduit',
  templateUrl: './showallproduit.component.html',
  styleUrls: ['./showallproduit.component.css']
})
export class ShowallproduitComponent implements OnInit {

  data: any;
  id;
  submitted = false;
  catEdit: FormGroup;
  constructor( private produitService: ProduitService , private  formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.allProduit();
    this.catEdit = this.formBuilder.group({
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

  public allProduit() {
    this.produitService.getAll().subscribe(data => {

        this.data = data;
        console.log(data);

    }, error => console.error(error));
  }



  remove(id) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You won t be able to revert this!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.value) {
      this.produitService.getDelete(id).subscribe(res => {


        console.log(res);
        this.allProduit();
     });
  }
});
}

// update //


  get T() {

    return this.catEdit.controls;
  }

  edit() {

    console.log('debut edit', this.catEdit.value);


    this.submitted = true;

    if (this.catEdit.invalid) {
      console.log('erreur invalid', this.catEdit.value);

      return ;

    }
    this.produitService.updateProduit(this.id, this.catEdit.value).subscribe(res => {
      console.log('updated : ', this.catEdit);

      // window.location.reload()

      this.allProduit();
    });
  }


  recuperer(id, marque, type, quantite, prixF, prixC, codeB, tva, categorie, fournisseur) {
    console.log('recuperer');
    this.id = id;

    console.log(this.id);

    this.catEdit.get('marque').setValue(marque);
    this.catEdit.get('type').setValue(type);
    this.catEdit.get('quantite').setValue(quantite);
    this.catEdit.get('prixF').setValue(prixF);
    this.catEdit.get('prixC').setValue(prixC);
    this.catEdit.get('codeB').setValue(codeB);
    this.catEdit.get('tva').setValue(tva);
    this.catEdit.get('categorie').setValue(categorie);
    this.catEdit.get('fournisseur').setValue(fournisseur);



  }
}
