import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private tareasService: TodoService) { }

  tareasCompletadas = [];
  ngOnInit(){
    this.tareasService.tareas$.subscribe( _tareas => {
      this.tareasCompletadas = _tareas.filter( t => t.estado == true );
    });
  }

  async cambiarEstado(tarea){
    await this.tareasService.actualizar(tarea).then(r => { });
  }

  async eliminar(tarea){
    await this.tareasService.eliminar(tarea).then(r => { });
  }

}
