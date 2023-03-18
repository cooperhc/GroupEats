import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventCreated = false
  eventCode = -1
  
  form = this.formBuilder.group({
    id:['']
  })


  openEvent(): void{
    //Code changed to use DB event ID
    //let randomEightDigitNumber = Math.floor(10000000 + Math.random() * 90000000)
    //console.log(`Event created: ${randomEightDigitNumber}`)
    //this.eventCode = randomEightDigitNumber
    //window.open(`/create-event/${this.eventCode}`, "_blank")
    //window.open(`${window.location.origin}/create-event/`, '_blank');    
    if(this.form.value.id==''){
      return
    }
    console.log(this.form.value.id)
    this.router.navigate([`/vote/${this.form.value.id}`])

  }

  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}

}
