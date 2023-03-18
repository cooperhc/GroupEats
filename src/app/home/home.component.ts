import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventCreated = false
  eventCode = -1
  linkCopied = false


  createEvent(): void{
    let randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000)
    console.log(`Event created: ${randomSixDigitNumber}`)
    this.eventCode = randomSixDigitNumber
    this.eventCreated = true
  }

  openEvent(): void{
    console.log("Open event clicked")
    window.open(`/vote/${this.eventCode}`, "_blank")
  }

  copyLink(): void{
    console.log("Copy link clicked")
    let eventLink = `https://groupeats.us/vote/${this.eventCode}`
    navigator.clipboard.writeText(eventLink)
    this.linkCopied = true
  }


  constructor(){}

}
