import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAdmin(data:any){
   return this.http.post('http://localhost/project-mgmt/api/admin',data);
  }
  addProject(data:any){
    return this.http.post('http://localhost/project-mgmt/api/saveProject',data);
   }
   projectList():Observable<any>{
    return this.http.get('http://localhost/project-mgmt/api/projectList');
   }
   changeStatus(id:any,data:any){
    return this.http.put('http://localhost/project-mgmt/api/changeStatus/'+id,data);
   }
   chartData(){
    return this.http.get('http://localhost/project-mgmt/api/chartData');
   }
   countData(){
    return this.http.get('http://localhost/project-mgmt/api/countData');
   }
}
