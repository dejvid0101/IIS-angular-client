import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    //get token from here on
    const apiUrl2 = 'http://localhost:8080/api/generateToken';

    const body2 = new HttpParams()
    .append("user", "fefe")
    .append("key", "12345678900000000000000000000000000000000000000000000000000");
this.http.post(apiUrl2,body2,{responseType:'text'}).subscribe(data=>{console.log(data);

//access restricted endpoint with key
    const apiUrl = 'http://localhost:8080/api/getCitiesRestricted?temp=21'; 
    const headers = new HttpHeaders({'Authorization': 'Bearer '+data});
    this.http.post(apiUrl,{},{headers: headers,responseType:'text'});

}
);

    return new Observable<any>();
    
  }
}
