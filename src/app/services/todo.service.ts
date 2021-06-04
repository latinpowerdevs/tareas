import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL = "https://60afb38ae6d11e00174f4e72.mockapi.io/api/tarea";
  tareas$ = new BehaviorSubject([]);
  tareas = [];

  constructor(private http: HttpClient) { 
    this.lista().then( (r:any) => {
      this.tareas = r;
      this.tareas$.next( this.tareas );
    });
  }

  async lista(){
    return await this.http.get(this.URL).toPromise().then( r => {
      return r;
    }).catch( e => console.log('Error al obtener los todos') );
  }

  async agregar(nuevaTarea){
    return await this.http.post(this.URL, nuevaTarea).toPromise().then( r => {
      this.tareas.push(r);
      this.tareas$.next( this.tareas );
      return r;
    }).catch( e => console.log('Error al guardar la tarea') );
  }

  async actualizar(tarea){
    const url = this.URL + '/' + tarea.id;
    return await this.http.put(url, tarea).toPromise().then( r => {
      const index = this.tareas.map( t => t.id).indexOf( tarea.id );
      this.tareas[index] = tarea;
      this.tareas$.next( this.tareas );
      return r;
    }).catch( e => console.log('Error al actualizar la tarea') );
  }

  async eliminar(tarea){
    const url = this.URL + '/' + tarea.id;
    return await this.http.delete(url).toPromise().then( r => {
      const index = this.tareas.map( t => t.id).indexOf( tarea.id );
      this.tareas.splice( index , 1 );
      this.tareas$.next( this.tareas );
      return r;
    }).catch( e => console.log('Error al eliminar la tarea') );
  }
}
