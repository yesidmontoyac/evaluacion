import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AlertEliminar() {
    Swal.fire({
      title: "¿Seguro quiere eliminar el proyecto?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      icon: "warning"
    }).then((value) => {
      if (value) {

      } else {
        return
      }
    })
  }

}
