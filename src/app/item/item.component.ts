import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/item';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() title: number;
  items: Item[];



  constructor(private aboutMeService: AboutmeService) { }

  ngOnInit(): void {
    this.aboutMeService.getItemsByTitle(this.title).subscribe(
      response => {
        this.items = response as Item[];
      }
    );
  }

}
