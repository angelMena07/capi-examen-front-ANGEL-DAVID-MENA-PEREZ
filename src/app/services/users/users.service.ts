import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url_base = environment.URL_API


  constructor(private http:HttpClient) { }
  

async getUser() {
  try {
    let res = await this.http.get<{code:number,message:string,data:any[]}>(`${this.url_base}/getusers`).toPromise();
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


}
