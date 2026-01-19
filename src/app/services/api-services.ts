import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {

  server_url = "http://localhost:3000"
  http = inject(HttpClient) //HttpClient this is imported in app.config.ts

  //api function
  // 1 - get all recipes : called by home & recipes component
  getAllRecipeAPI(){
    return this.http.get(`${this.server_url}/recipes`)
  }
}
