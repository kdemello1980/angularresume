import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employer } from '../model/employer';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  employers: Employer[];
  employerId: number;

  @Output() postData = new EventEmitter();

  constructor(private aboutmeService: AboutmeService) { }

  ngOnInit(): void {
    this.aboutmeService.getEmployers().subscribe(
      response => {
        this.employers = response as Employer[];
        // console.log(this.employers);
      }
    );
  }

  onExpand(id: number): void {
    this.postData.emit(id);
  }

}
