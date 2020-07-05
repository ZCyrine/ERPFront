import { Component, OnInit } from '@angular/core';
import {__importDefault} from 'tslib';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FournisseurService} from "../../service/fournisseur.service";


@Component({
  selector: 'app-showallfournisseur',
  templateUrl: './showallfournisseur.component.html',
  styleUrls: ['./showallfournisseur.component.css']
})
export class ShowallfournisseurComponent implements OnInit {
  data: any;
  id;
  submitted = false;
  fourEdit: FormGroup;
  constructor(private fournisseurService: FournisseurService, private  formBuilder: FormBuilder) { }

  ngOnInit() {
    this.allFournisseur();
    this.fourEdit = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }

  public allFournisseur() {
    this.fournisseurService.getAll().subscribe(data => {

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
      this.fournisseurService.getDelete(id).subscribe(res => {


        console.log(res);
        this.allFournisseur();
     });
  }
});
}

// update //


  get T() {

    return this.fourEdit.controls;
  }

  edit() {

    console.log('debut edit', this.fourEdit.value);


    this.submitted = true;

    if (this.fourEdit.invalid) {
      console.log('erreur invalid', this.fourEdit.value);

      return ;

    }
    this.fournisseurService.updateFournisseur(this.id, this.fourEdit.value).subscribe(res => {
      console.log('updated : ', this.fourEdit);

      // window.location.reload()

      this.allFournisseur();
    });
  }


  recuperer(id, nom, adresse, tel) {
    console.log('recuperer');
    this.id = id;

    console.log(this.id);

    this.fourEdit.get('nom').setValue(nom);
    this.fourEdit.get('adresse').setValue(adresse);
    this.fourEdit.get('tel').setValue(tel);



  }
}
