import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocationsService } from 'src/app/core/services/locations.service';



@Component({
  selector: 'coatneydev-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  states: string[];

  constructor(private locationService: LocationsService) { }

  ngOnInit() {
    this.states = this.locationService.getStates();
  }

  onSubmit(form: NgForm) {

  }

}
