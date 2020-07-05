import { Component, OnInit } from '@angular/core';
import {__importDefault} from 'tslib';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategorieService} from '../../service/categorie.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-showallcategorie',
  templateUrl: './showallcategorie.component.html',
  styleUrls: ['./showallcategorie.component.css']
})
export class ShowallcategorieComponent implements OnInit {

  data: any;
  id;
  submitted = false;
  catEdit: FormGroup;
  constructor( private categorieService: CategorieService, private  formBuilder: FormBuilder) { }

  ngOnInit() {
    this.allCategorie();
    this.catEdit = this.formBuilder.group({
      nom: ['', Validators.required]
    });
  }

  public allCategorie() {
    this.categorieService.getAll().subscribe(data => {

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
      this.categorieService.getDelete(id).subscribe(res => {


        console.log(res);
        this.allCategorie();
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
    this.categorieService.updateCategorie(this.id, this.catEdit.value).subscribe(res => {
      console.log('updated : ', this.catEdit);

      // window.location.reload()

      this.allCategorie();
    });
  }


  recuperer(id, nom) {
    console.log('recuperer');
    this.id = id;

    console.log(this.id);

    this.catEdit.get('nom').setValue(nom);



  }
}
