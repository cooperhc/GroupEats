import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

interface eventres{
  id: string,
  zip: number,
  radius: number,
  mexican: boolean,
  seafood: boolean,
  created: string,
  last_updated: string
}

interface event{
  created: string,
  id: string,
  last_updated: string,
  mexican: boolean,
  seafood: boolean,
  zip: number
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  res: eventres = {id: "", zip: 0, radius: 0, mexican: false, seafood: true, created: "", last_updated: ""}
  res2: event = {created: "", id: "", last_updated: "", mexican: false, seafood: false, zip: 1}
  id = ""
  mexican = 0
  seafood = 0
  output = {}

  resultsGenerated = false

  generateResults(): void{
    this.resultsGenerated = true
  }


  ngOnInit(): void{
    this.titleService.setTitle('Results')
    this.id = this.route.snapshot.paramMap.get('id') as string
    let url = `https://groupeats.net/responses/${this.id}`

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer -Lt6PmO3YF3-nYzu9d2ymy_l2Bb1bDtKbJF1X6teNv2ncfdkDWxA7YLaOVqw8twyvjY7VES58_Le25v9n0Hw5Wmf9TIWLvboVXZge0g8m-5D_8jC3S0968ZD9mwaZHYx'
      }
    };


    
    

      this.http.get<eventres[]>(url).subscribe((response) => {
        console.log(response[0])
        for(let i = 0; i < response.length; i++){
          this.res = response[i]
          if(this.res.mexican){this.mexican+=1}
          if(this.res.seafood){this.seafood+=1}
        }
      })
      let food =""
      if(this.mexican > this.seafood){
        food = "mexican"
      }
      else{
        food = "seafood"
      }


      let url2 = `https://groupeats.net/events/${this.id}`
      this.http.get<event[]>(url2).subscribe((response) => {
        console.log(response[0])
        this.res2 = response[0]
      })

      let zip = this.res2.zip as unknown as string
      


      fetch(`https://api.yelp.com/v3/businesses/search?location=${zip}&term=restaurants&radius=8000&categories=${food}&sort_by=best_match&limit=20`, options)
        .then(response => this.output = response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));



      


  }

  constructor(
    private route:ActivatedRoute,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ){}
}
