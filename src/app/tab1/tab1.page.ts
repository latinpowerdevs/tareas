import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private tareasService: TodoService, private modal: ModalController) {}
  tareas = null;
  
  ngOnInit(){
    this.tareasService.tareas$.subscribe( _tareas => {
      this.tareas = _tareas;
    });
  }

  async agregarTarea(nuevaTarea){
    await this.tareasService.agregar(nuevaTarea).then( r => { });
  }

  async agregar(){
    const agregarModal = await this.modal.create( {
      component: AgregarTareaComponent,
    });

    await agregarModal.present();
    const data:any = await agregarModal.onWillDismiss();

    if (data.data){
      if (data.data.nuevaTarea){
        this.agregarTarea(data.data.nuevaTarea);
      }
      console.log('DATA RECEIVED', data);
    }
  }

  async cambiarEstado(tarea){
    await this.tareasService.actualizar(tarea).then(r => { });
  }

  async eliminar(tarea){
    await this.tareasService.eliminar(tarea).then(r => { });
  }
}
