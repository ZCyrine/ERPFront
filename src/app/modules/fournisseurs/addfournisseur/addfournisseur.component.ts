import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FournisseurService} from '../../service/fournisseur.service';

@Component({
  selector: 'app-addfournisseur',
  templateUrl: './addfournisseur.component.html',
  styleUrls: ['./addfournisseur.component.css']
})
export class AddfournisseurComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  fournisseur;
  constructor(private formBuilder: FormBuilder , private fourService: FournisseurService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required]
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


    this.fourService.addFournisseur(this.registerForm.value).subscribe(res=> {


      console.log(this.registerForm);


      console.log(res);
      this.fournisseur = res;
      this.registerForm.reset();
    });
  }
}
