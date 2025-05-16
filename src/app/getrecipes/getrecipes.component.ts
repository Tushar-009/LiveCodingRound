import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-getrecipes',
  templateUrl: './getrecipes.component.html',
  styleUrls: ['./getrecipes.component.css']
})
export class GetrecipesComponent {

  recipes: any[] = [];
  constructor(private apiService: ApiService) { 
    
  }

  ngOnInit() {
    this.getRec();
    
  }
  getRec() {
  this.apiService.getRecipes().subscribe((data: any) => {
       this.recipes = data;
      console.log(this.recipes);
       this.groupByKey() 
    });
  }

    onGroupChange() {
    this.groupByKey();
  }
 groupKey: string = 'cuisine';
  groupedRecipes: { [key: string]: any } = {};
  groupByKey() {
    if (this.groupKey && this.recipes.length > 0) {
      this.groupedRecipes = this.apiService.groupByKey(this.recipes, this.groupKey);
    } else {
      this.groupedRecipes = {};
    }
  }


}
