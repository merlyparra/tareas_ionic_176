import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TareaHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaHttpProvider {
url
headers

  constructor(public http: HttpClient) {
    //console.log('Hello TareaHttpProvider Provider');
    this.url = localStorage.getItem('url');
    let jwt = localStorage.getItem('jwt');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })
  }
  obtenerTareas() {
    return this.http.get(this.url + 'tareas',{headers: this.headers})
    
  }

  agregarTarea(tarea) {
    return this.http.post(this.url+'tareas', {
      "tarea": {
        "titulo":tarea,
        "finalizada": false
      }
    })
  }

  editarTarea(id, tarea) {
    return this.http.put(this.url + 'tareas/' + id,  {
      "tarea": {
        "titulo":tarea
      }
    })
  }


  archivarTarea(id) {
    return this.http.delete(this.url + 'tareas/' + id,  {
      }
    )
  }

  
}
