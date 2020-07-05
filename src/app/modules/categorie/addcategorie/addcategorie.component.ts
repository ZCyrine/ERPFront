import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../service/categorie.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
    categorie;
  constructor(private formBuilder: FormBuilder , private catService: CategorieService) {
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required]
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


    this.catService.addCategorie(this.registerForm.value).subscribe(res => {


      console.log(this.registerForm);


      console.log(res);
      this.categorie = res;
      this.registerForm.reset();
    });
  }
}
