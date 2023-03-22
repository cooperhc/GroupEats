import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common';

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
  zip = 0
  output2 = ""
  restaurant1 = {rating: 0, price: "?", name: "", image_url: ""}
  restaurant2 = {rating: 0, price: "?", name: "", image_url: ""}
  restaurant3 = {rating: 0, price: "?", name: "", image_url: ""}
  restaurant4 = {rating: 0, price: "?", name: "", image_url: ""}


  resultsGenerated = false

  generateResults(): void{
    this.resultsGenerated = true
  }


  ngOnInit(): void{
    this.titleService.setTitle('Results')
    this.id = this.route.snapshot.paramMap.get('id') as string
    let url = `https://groupeats.net/responses/${this.id}`

    this.http.get<eventres[]>(url).subscribe((response) => {
      console.log(response[0])
      for(let i = 0; i < response.length; i++){
        this.res = response[i]
        if(this.res.mexican){this.mexican+=1}
        if(this.res.seafood){this.seafood+=1}
       }
    })
    


    let url2 = `https://groupeats.net/events/${this.id}`
    this.http.get<event[]>(url2).subscribe((response) => {
      console.log(response[0])
      this.res2 = response[0]
      console.log(this.res2.zip)
      this.zip = this.res2.zip
    


    const options: RequestInit = {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer -Lt6PmO3YF3-nYzu9d2ymy_l2Bb1bDtKbJF1X6teNv2ncfdkDWxA7YLaOVqw8twyvjY7VES58_Le25v9n0Hw5Wmf9TIWLvboVXZge0g8m-5D_8jC3S0968ZD9mwaZHYx',
        'Content-Type': 'application/json'
        }
      }

    let food =""
    if(this.mexican > this.seafood){
      food = "mexican"
    }
    else{
      food = "seafood"
    }
    console.log(this.zip)
    console.log(food)

    fetch(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${this.zip}&term=restaurants&radius=8000&sort_by=best_match&limit=20&categories=${food}`, options)
      .then(response => response.json())
      .then(data => {
        //this.output2 = data.businesses[0].id
        this.restaurant1 = data.businesses[0]
        this.restaurant2 = data.businesses[1]
        this.restaurant3 = data.businesses[2]
        this.restaurant4 = data.businesses[3]
        if(!(this.restaurant1.price != undefined)){this.restaurant1.price="???"}
        if(!(this.restaurant2.price != undefined)){this.restaurant2.price="???"}
        if(!(this.restaurant3.price != undefined)){this.restaurant3.price="???"}
        if(!(this.restaurant4.price != undefined)){this.restaurant4.price="???"}
        console.log(data);
        console.log(JSON.stringify(data))
      })
      .catch(err => console.error(err));
      
      
    console.log(this.output2)
      

      
      


      //fetch(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${zip}&term=restaurants&radius=8000&categories=${food}&sort_by=best_match&limit=20`, options)
       // .then(response => this.output = response.json())
       // .then(response => console.log(response))
       // .catch(err => console.error(err));
      })
  }

  



  

  constructor(
    private route:ActivatedRoute,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ){}
}
