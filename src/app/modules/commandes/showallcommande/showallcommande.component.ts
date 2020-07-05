import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../service/commande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showallcommande',
  templateUrl: './showallcommande.component.html',
  styleUrls: ['./showallcommande.component.scss']
})
export class ShowallcommandeComponent implements OnInit {

  data: any;
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.AllCommande();
  }

  public AllCommande() {
    this.commandeService.getAll().subscribe(data => {
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
        this.commandeService.getDelete(id).subscribe(res => {


          console.log(res);
          this.AllCommande();
        });
      }
    });
  }
}
