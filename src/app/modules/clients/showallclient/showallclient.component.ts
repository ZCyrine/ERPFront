import {APP_ID, Component, OnInit} from '@angular/core';
import {__importDefault} from 'tslib';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-showallclient',
  templateUrl: './showallclient.component.html',
  styleUrls: ['./showallclient.component.css']
})
export class ShowallclientComponent implements OnInit {
  data: any;
  id;
  submitted = false;
  clientEdit: FormGroup;

  constructor( private clientService: ClientService , private  formBuilder: FormBuilder) { }

  ngOnInit() {
    this.allClient();
    this.clientEdit = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      mf: ['', Validators.required]
    });
  }

  public allClient() {
    this.clientService.getAll().subscribe(data => {

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
      this.clientService.getDelete(id).subscribe(res => {


        console.log(res);
        this.allClient();
     });
  }
});
}


 // update //


 get T() {

  return this.clientEdit.controls;
}

edit() {

  console.log('debut edit', this.clientEdit.value);


  this.submitted = true;

  if (this.clientEdit.invalid) {
    console.log('erreur invalid', this.clientEdit.value);

    return ;

  }
  this.clientService.updateClient(this.id, this.clientEdit.value).subscribe(res => {
    console.log('updated : ', this.clientEdit);

    // window.location.reload()

    this.allClient();
  });
}


recuperer(id, nom, prenom, tel, mf) {
  console.log('recuperer');
  this.id = id;

  console.log(this.id);

  this.clientEdit.get('nom').setValue(nom);
  this.clientEdit.get('prenom').setValue(prenom);
  this.clientEdit.get('tel').setValue(tel);
  this.clientEdit.get('mf').setValue(mf);


}





}
