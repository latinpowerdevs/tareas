import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  tareasPendientes = [];
  
  constructor(private tareasService: TodoService) {}

  ngOnInit() {
    this.tareasService.tareas$.subscribe( _tareas => {
      this.tareasPendientes = _tareas.filter( t => t.estado == false );
    })
  }
}
