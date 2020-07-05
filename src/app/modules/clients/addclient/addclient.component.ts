import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  client;
  constructor(private formBuilder: FormBuilder , private clientSrvice: ClientService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      mf: ['', Validators.required],
      email : ['', Validators.required],
      adresse : ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    this.clientSrvice.addClient(this.registerForm.value).subscribe(res=> {


      console.log(this.registerForm);


      console.log(res);
      this.client = res;
      this.registerForm.reset();
    })
  }

}
