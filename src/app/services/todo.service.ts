import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL = "https://60afb38ae6d11e00174f4e72.mockapi.io/api/tarea";

  constructor(private http: HttpClient) { }

  async lista(){
    return await this.http.get(this.URL).toPromise().then( r => {
      return r;
    }).catch( e => console.log('Error al obtener los todos') );
  }

  async agregar(nuevaTarea){
    return await this.http.post(this.URL, nuevaTarea).toPromise().then( r => {
      return r;
    }).catch( e => console.log('Error al guardar la tarea') );
  }

  async actualizar(tarea){
    const url = this.URL + '/' + tarea.id;
    return await this.http.put(url, tarea).toPromise().then( r => {
      return r;
    }).catch( e => console.log('Error al actualizar la tarea') );
  }

  async eliminar(tarea){
    const url = this.URL + '/' + tarea.id;
    return await this.http.delete(url).toPromise().then( r => {
      return r;
    }).catch( e => console.log('Error al eliminar la tarea') );
  }
}
