import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://dummyjson.com/recipes'
  getRecipes():Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
     map(response => response.recipes) 
    );
  }

    groupByKey(recipes: any[], key: string): { [key: string]: any[] } {
    return recipes.reduce((acc, recipe) => {
      const groupKey = recipe[key];
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(recipe);
      return acc;
    }, {} as { [key: string]: any[] });
  }
   
}
