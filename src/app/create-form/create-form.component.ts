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
    
    let options = {
      "onedollar": false,
      "twodollar": false,
      "threedollar": false,
      "fourdollar": false,
      "bar": false,
      "burgers": false,
      "breakfast": false,
      "sandwiches": false,
      "american": false,
      "mexican": false,
      "seafood": false,
      "pizza": false,
      "fastfood": false,
      "salad": false,
      "italian": false,
      "mediterranean": false,
      "japanese": false,
      "cafe": false,
      "chickenwings": false,
      "vegan": false,
      "halal": false,
      "vietnamese": false,
      "french": false,
      "diner": false,
      "korean": false,
      "middleeastern": false,
      "indian": false,
      "thai": false,
      "vegetarian": false,
      "glutenfree": false,
      "chinese": false,
      "noodles": false,
      "fishandchips": false,
      "steakhouse": false,
    }

    //Goes through each checked option, also prints, needs to be updated to check validity 
    for (let i = 0; i < checked.length; i++) {
      if (checked[i].checked) {
        switch (checked[i].value) {
          case 'onedollar':
            options.onedollar = true;
            break;
          case 'twodollar':
            options.twodollar = true;
            break;
          case 'threedollar':
            options.threedollar = true;
            break;
          case 'fourdollar':
            options.fourdollar = true;
            break;
          case 'bar':
            options.bar = true;
            break;
          case 'burgers':
            options.burgers = true;
            break;
          case 'breakfast':
            options.breakfast = true;
            break;
          case 'sandwiches':
            options.sandwiches = true;
            break;
          case 'american':
            options.american = true;
            break;
          case 'mexican':
            options.mexican = true;
            break;
          case 'seafood':
            options.seafood = true;
            break;
          case 'pizza':
            options.pizza = true;
            break;
          case 'fastfood':
            options.fastfood = true;
            break;
          case 'salad':
            options.salad = true;
            break;
          case 'italian':
            options.italian = true;
            break;
          case 'mediterranean':
            options.mediterranean = true;
            break;
          case 'japanese':
            options.japanese = true;
            break;
          case 'cafe':
            options.cafe = true;
            break;
          case 'chickenwings':
            options.chickenwings = true;
            break;
          case 'vegan':
            options.vegan = true;
            break;
          case 'halal':
            options.halal = true;
            break;
          case 'vietnamese':
            options.vietnamese = true;
            break;
          case 'french':
            options.french = true;
            break;
          case 'diner':
            options.diner = true;
            break;
          case 'korean':
            options.korean = true;
            break;
          case 'middleeastern':
            options.middleeastern = true;
            break;
          case 'indian':
            options.indian = true;
            break;
          case 'thai':
            options.thai = true;
            break;
          case 'vegetarian':
            options.vegetarian = true;
            break;
          case 'glutenfree':
            options.glutenfree = true;
            break;
          case 'chinese':
            options.chinese = true;
            break;
          case 'noodles':
            options.noodles = true;
            break;
          case 'fishandchips':
            options.fishandchips = true;
            break;
          case 'steakhouse':
            options.steakhouse = true;
            break;
          default:
            console.error('Invalid option:', checked[i].value);
            break;
    }}}

    let event = {
      zip: zipCode,
      radius: 20,
      formInfo: options
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
