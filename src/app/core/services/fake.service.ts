import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private db: AngularFirestore) { }


  //
  //   FOR TESTING MOCK DATA
  //


  addFirestoreTestRecords() {
    console.log("creating test records...");
    const colRef = this.db.collection('members');

    for (let cnt = 0; cnt < 20; cnt++) {
      var prof = {
        uid: null,
        user: {
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
        },
        profile: {
          displayName: faker.internet.userName(),
          bio: faker.lorem.paragraph(),
          photo: faker.image.imageUrl(),
          favor: Math.floor(Math.random() * 100),
          folks: Math.floor(Math.random() * 100),
          jobs: Math.floor(Math.random() * 100),
          rating: (Math.random() * 5).toFixed(2),
        },
        address: {
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipCode: this.randomZipCode(),
          address1: faker.address.streetAddress(),
          address2: faker.address.secondaryAddress(),
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude()
        },
        verified: true,

      };

      colRef.add(prof);
    }

  }

  randomZipCode() {

    var zipz: string[] = ['35801', '95338', '98682', '90001', '32801'];

    return zipz[Math.floor(Math.random() * zipz.length)];
  }
}
