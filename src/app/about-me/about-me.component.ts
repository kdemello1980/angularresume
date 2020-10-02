import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutmeService } from '../service/aboutme.service';
import { Cert } from '../model/cert';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

}
