import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventCreated = false
  eventCode = -1
  


  createEvent(): void{
    //Code changed to use DB event ID

    //let randomEightDigitNumber = Math.floor(10000000 + Math.random() * 90000000)
    //console.log(`Event created: ${randomEightDigitNumber}`)
    //this.eventCode = randomEightDigitNumber
    //window.open(`/create-event/${this.eventCode}`, "_blank")
    this.eventCreated = true
    window.open(`${window.location.origin}/create-event/`, '_blank');    
  }

  
  constructor(){}

}
