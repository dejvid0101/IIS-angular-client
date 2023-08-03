import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {

    //get token from here on
    const apiUrl2 = 'http://localhost:8080/api/generateToken';

    const body2 = new HttpParams()
    .append("user", "fefe")

    //key required by endpoint
    .append("key", "12345678900000000000000000000000000000000000000000000000000");
return this.http.post(apiUrl2,body2,{responseType:'text'})
    
  }

  getCities(token:string){
    
      //access restricted endpoint with token
          const apiUrl = 'http://localhost:8080/api/getCitiesRestricted?temp=11'; 
          const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
      
          return this.http.post(apiUrl,{},{headers: headers,responseType:'text'});
      
      }
  }
