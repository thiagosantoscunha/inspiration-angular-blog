import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/CategoryModel';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-cloud-categories',
  templateUrl: './cloud-categories.component.html',
  styleUrls: ['./cloud-categories.component.scss']
})
export class CloudCategoriesComponent implements OnChanges {

  @Input()
  public categoriesIds: Array<number> = [];

  public categories: Array<CategoryModel> = [];

  constructor(private categoryService: CategoryService) { }

  ngOnChanges() {
    this.getByIds();
  }

  public getByIds(): void {
    if (this.categoriesIds !== null && this.categories !== []) {
      for (const id of this.categoriesIds) {
        this.categoryService.getById(id).subscribe((category: CategoryModel) => {
          this.categories.push(category);
        });
      }
    }
  }

}
