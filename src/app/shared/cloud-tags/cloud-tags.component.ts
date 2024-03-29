import { Component, OnInit, Input, AfterContentChecked, AfterViewChecked, AfterContentInit, DoCheck, OnChanges } from '@angular/core';
import { TagModel } from 'src/app/core/models/TagModel';
import { TagService } from 'src/app/core/services/tag.service';

@Component({
  selector: 'app-cloud-tags',
  templateUrl: './cloud-tags.component.html',
  styleUrls: ['./cloud-tags.component.scss']
})
export class CloudTagsComponent implements OnChanges {

  @Input()
  public tagIds: Array<number> = [];

  public tags: Array<TagModel> = [];

  constructor(private tagService: TagService) { }

  ngOnChanges() {
    this.getById();
  }

  public getById(): void {
    if (this.tagIds !== null && this.tagIds.length > 0) {
      for (const id of this.tagIds) {
        this.tagService.getById(id).subscribe((tag: TagModel) => {
          this.tags.push(tag);
        });
      }
    }
  }



}
