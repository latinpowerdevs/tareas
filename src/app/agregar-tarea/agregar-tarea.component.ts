import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent implements OnInit {
  nuevaTarea = { nombre: '', detalle: '' };

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  agregar(){
    if (this.nuevaTarea.nombre != '' && this.nuevaTarea.detalle != ''){
      this.modal.dismiss({nuevaTarea: this.nuevaTarea});
    }
  }

}
