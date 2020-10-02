import { Component, OnInit, Input, Output  } from '@angular/core';
import { Cert } from '../model/cert';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  certs: Cert[];

  constructor(private aboutmeService: AboutmeService) { }

  onExpand(): void {
    // console.log('onexpand');
    this.aboutmeService.getCerts().subscribe(
      response => {
        this.certs = response as Cert[];
        // console.log(this.certs);
      }
    );
  }

  ngOnInit(): void {

  }

}
