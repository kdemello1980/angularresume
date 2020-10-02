import { Component, OnInit } from '@angular/core';
import { Tech } from '../model/tech';

@Component({
  selector: 'app-about-this-page',
  templateUrl: './about-this-page.component.html',
  styleUrls: ['./about-this-page.component.css']
})
export class AboutThisPageComponent implements OnInit {

  techs: Tech[];

  constructor() { }

  ngOnInit(): void {
    this.techs = [
      new Tech( 'Java', 'https://www.java.com/en/', '../../assets/java.jpg'),
      new Tech( 'Spring Boot', 'https://spring.io/projects/spring-boot', '../../assets/springboot.png'),
      new Tech('Hibernate', 'https://hibernate.org/orm/', '../../assets/hibernate.jpg'),
      new Tech('PostgreSQL', 'https://www.postgresql.org/', '../../assets/postgresql.webp'),
      new Tech('Angular Material', 'https://material.angular.io/', '../../assets/material.png'),
      new Tech('EC2', 'https://aws.amazon.com/ec2', '../../assets/ec2.jpeg'),
      new Tech('RDS', 'https://aws.amazon.com/rds/', '../../assets/rds.png'),
      new Tech('S3','https://aws.amazon.com/s3/', '../../assets/s3.png'),
      new Tech('route53', 'https://aws.amazon.com/route53/', '../../assets/route53.png')
    ];
  }

}
