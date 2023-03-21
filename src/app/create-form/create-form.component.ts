import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


interface idResponse{
  id: string
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent {
  linkCopied = false
  id = ""
  eventCreated = false
  errorMessage = ""


  zipForm = this.formBuilder.group({
    zip:['']
  })

  createEvent() {
    //Store zip; need to check validity
    const zipCode = this.zipForm.value.zip as string
    if(zipCode.length != 5 || isNaN(zipCode as unknown as number)){
      this.errorMessage="Invalid ZIP code"
      return
    }

    //Print zip for debugging
    console.log(zipCode)


    //Get all results
    let checked = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>
    
    let cuisine = {
      "mexican": false,
      "seafood": false
    }

    //Goes through each checked option, also prints, needs to be updated to check validity 
    for (let i = 0; i < checked.length; i++) {
      if (checked[i].checked) {

        if(checked[i].value == 'mexican'){
          cuisine.mexican = true
        }

        if(checked[i].value == 'seafood'){
          cuisine.seafood = true
        }

        console.log(checked[i].value + " is checked.");
      }
    }

    let event = {
      zip: zipCode,
      radius: 20,
      formInfo: cuisine
    }

    this.http.post<idResponse[]>('https://groupeats.net/events', event).subscribe((response) => {
      console.log(response[0].id)
      this.id = response[0].id
    })

    this.eventCreated = true

  }

  openEvent(): void{
    console.log("Open event clicked")
    this.router.navigate([`/vote/${this.id}`])
    //window.open(`${window.location.origin}/vote/${this.id}`, "_blank")
  }

  copyLink(): void{
    console.log("Copy link clicked")
    //let eventLink = `${window.location.origin}/vote/${this.id}`
    navigator.clipboard.writeText(this.id)
    this.linkCopied = true
  }


  ngOnInit(): void{
    this.titleService.setTitle('Create Event');
  }

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ){}

}
