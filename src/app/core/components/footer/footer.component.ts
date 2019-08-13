import { Component, OnInit } from '@angular/core';

import { application } from 'src/app/configs/app.config';

@Component({
  selector: 'coatneydev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public title: string;
  public company: string;
  public author: string;
  public email: string;
  public year: number;
  public website: string;
  public street: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;

  constructor() {
    this.title = application.title;
    this.company = application.company;
    this.author = application.author;
    this.email = application.adminEmail;
    this.year = application.year;
    this.website = application.website;
    this.street = application.street;
    this.city = application.city;
    this.state = application.state;
    this.zip = application.zipcode;
    this.country = application.country;

  }

  ngOnInit() {
  }

}
