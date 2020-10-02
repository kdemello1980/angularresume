import { Component, OnInit, Input, OnChanges, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Title } from '../model/title';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() employer: number;
  titles: Title[];

  constructor(private aboutmeService: AboutmeService) {
    // console.log(2);
    // console.log(this.employer);

  }


  // onExpandTitle(id: number): void {
  //   // console.log("expand");
  //   this.aboutmeService.getTitlesByEmployer(this.employer).subscribe(
  //     response => {
  //       this.titles = response as Title[];
  //       console.log(this.titles);
  //     }
  //   );
  //   console.log(this.employer);

  // }

  ngOnInit(): void {
    // console.log(this.employer);
    // console.log("expand");
    this.aboutmeService.getTitlesByEmployer(this.employer).subscribe(
      response => {
        this.titles = response as Title[];
        // console.log(this.titles);
      }
    );
  }

}
