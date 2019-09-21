import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logAuthChanged(status: string) {
    console.log("Authentication status changed to: " + status);
  }

  logError(error: string) {
    console.log("ERROR: " + error);
  }

  constructor() { }
}
