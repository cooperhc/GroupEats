import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { CommonModule, JsonPipe, TitleCasePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';

interface TopValue {
  key: string;
  value: number;
}

interface eventres{
  created: string,
  id: string,
  last_updated: string,
  onedollar: boolean,
  twodollar: boolean,
  threedollar: boolean,
  fourdollar: boolean,
  bar: boolean,
  burgers: boolean,
  breakfast: boolean,
  sandwiches: boolean,
  american: boolean,
  mexican: boolean,
  seafood: boolean,
  pizza: boolean,
  fastfood: boolean,
  salad: boolean,
  italian: boolean,
  mediterranean: boolean,
  japanese: boolean,
  cafe: boolean,
  chickenwings: boolean,
  vegan: boolean,
  vietnamese: boolean,
  french: boolean,
  diner: boolean,
  korean: boolean,
  middleeastern: boolean,
  indian: boolean,
  thai: boolean,
  vegetarian: boolean,
  glutenfree: boolean,
  chinese: boolean,
  noodles: boolean,
  fishandchips: boolean,
  steakhouse: boolean,
  halal: boolean,
  zip: number
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
  topvalues: TopValue[] = []
  topdollar: TopValue[] = []
  dietary: TopValue[] = []

  results = {
    onedollar: 0,
    twodollar: 0,
    threedollar: 0,
    fourdollar: 0,
    bar: 0,
    burgers: 0,
    breakfast: 0,
    sandwiches: 0,
    american: 0,
    mexican: 0,
    seafood: 0,
    pizza: 0,
    fastfood: 0,
    salad: 0,
    italian: 0,
    mediterranean: 0,
    japanese: 0,
    cafe: 0,
    chickenwings: 0,
    vegan: 0,
    vietnamese: 0,
    french: 0,
    diner: 0,
    korean: 0,
    middleeastern: 0,
    indian: 0,
    thai: 0,
    vegetarian: 0,
    glutenfree: 0,
    chinese: 0,
    noodles: 0,
    fishandchips: 0,
    steakhouse: 0,
    halal: 0,
  };

  res: eventres = {
    created: "",
    id: "",
    last_updated: "",
    onedollar: false,
    twodollar: false,
    threedollar: false,
    fourdollar: false,
    bar: false,
    burgers: false,
    breakfast: false,
    sandwiches: false,
    american: false,
    mexican: false,
    seafood: false,
    pizza: false,
    fastfood: false,
    salad: false,
    italian: false,
    mediterranean: false,
    japanese: false,
    cafe: false,
    chickenwings: false,
    vegan: false,
    vietnamese: false,
    french: false,
    diner: false,
    korean: false,
    middleeastern: false,
    indian: false,
    thai: false,
    vegetarian: false,
    glutenfree: false,
    chinese: false,
    noodles: false,
    fishandchips: false,
    steakhouse: false,
    halal: false,
    zip: 1
  }  
  res2: event = {created: "", id: "", last_updated: "", mexican: false, seafood: false, zip: 1}
  topC = ""
  secC = ""
  topCV = 0
  secCV = 0
  id = ""
  output = {}
  zip = 0
  output2 = ""
  restaurants = [{rating: 0, price: "?", name: "", image_url: "", categories: [{title: ""}], url: "", urldir: "", coordinates: {latitude: -1, longitude: -1}, id: ""}]



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
      console.log(response)

      const findTopTwoValues = (results: { [key: string]: number }): { key: string; value: number }[] => {
        return Object.entries(results)
          .filter(([key]) => !key.includes('dollar') && !['halal', 'glutenfree', 'vegetarian', 'vegan'].includes(key))
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2)
          .map(entry => ({ key: entry[0], value: entry[1] }));
      };

      const findTopTwoDollarValues = (results: { [key: string]: number }): { key: string; value: number }[] => {
        return Object.entries(results)
          .filter(([key]) => key.includes('dollar'))
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2)
          .map(entry => ({ key: entry[0], value: entry[1] }));
      };

      const findDietary = (results: { [key: string]: number }): { key: string; value: number }[] => {
        const keysToInclude = ['vegetarian', 'vegan', 'halal', 'glutenfree'];
        return Object.entries(results)
          .filter(([key]) => keysToInclude.includes(key))
          .map(entry => ({ key: entry[0], value: entry[1] }));
      };
      
   
      for(let i = 0; i < response.length; i++){
        this.res = response[i]
        if (this.res.onedollar as unknown as string === "1") { this.results.onedollar += 1; }
        if (this.res.twodollar as unknown as string === "1") { this.results.twodollar += 1; }
        if (this.res.threedollar as unknown as string === "1") { this.results.threedollar += 1; }
        if (this.res.fourdollar as unknown as string === "1") { this.results.fourdollar += 1; }
        if (this.res.bar as unknown as string === "1") { this.results.bar += 1; console.log("XD")}
        if (this.res.burgers as unknown as string === "1") { this.results.burgers += 1; }
        if (this.res.breakfast as unknown as string === "1") { this.results.breakfast += 1; }
        if (this.res.sandwiches as unknown as string === "1") { this.results.sandwiches += 1; }
        if (this.res.american as unknown as string === "1") { this.results.american += 1; }
        if (this.res.mexican as unknown as string === "1") { this.results.mexican += 1; }
        if (this.res.seafood as unknown as string === "1") { this.results.seafood += 1; }
        if (this.res.pizza as unknown as string === "1") { this.results.pizza += 1; }
        if (this.res.fastfood as unknown as string === "1") { this.results.fastfood += 1; }
        if (this.res.salad as unknown as string === "1") { this.results.salad += 1; }
        if (this.res.italian as unknown as string === "1") { this.results.italian += 1; }
        if (this.res.mediterranean as unknown as string === "1") { this.results.mediterranean += 1; }
        if (this.res.japanese as unknown as string === "1") { this.results.japanese += 1; }
        if (this.res.cafe as unknown as string === "1") { this.results.cafe += 1; }
        if (this.res.chickenwings as unknown as string === "1") { this.results.chickenwings += 1; }
        if (this.res.vegan as unknown as string === "1") { this.results.vegan += 1; }
        if (this.res.vietnamese as unknown as string === "1") { this.results.vietnamese += 1; }
        if (this.res.french as unknown as string === "1") { this.results.french += 1; }
        if (this.res.diner as unknown as string === "1") { this.results.diner += 1; }
        if (this.res.korean as unknown as string === "1") { this.results.korean += 1; }
        if (this.res.middleeastern as unknown as string === "1") { this.results.middleeastern += 1; }
        if (this.res.indian as unknown as string === "1") { this.results.indian += 1; }
        if (this.res.thai as unknown as string === "1") { this.results.thai += 1; }
        if (this.res.vegetarian as unknown as string === "1") { this.results.vegetarian += 1; }
        if (this.res.glutenfree as unknown as string === "1") { this.results.glutenfree += 1; }
        if (this.res.chinese as unknown as string === "1") { this.results.chinese += 1; }
        if (this.res.noodles as unknown as string === "1") { this.results.noodles += 1; }
        if (this.res.fishandchips as unknown as string === "1") { this.results.fishandchips += 1; }
        if (this.res.steakhouse as unknown as string === "1") { this.results.steakhouse += 1; }
        if (this.res.halal as unknown as string === "1") { this.results.halal += 1; }
        if (this.res.onedollar as unknown as string === "-1") { this.results.onedollar -= 1; }
        if (this.res.twodollar as unknown as string === "-1") { this.results.twodollar -= 1; }
        if (this.res.threedollar as unknown as string === "-1") { this.results.threedollar -= 1; }
        if (this.res.fourdollar as unknown as string === "-1") { this.results.fourdollar -= 1; }
        if (this.res.bar as unknown as string === "-1") { this.results.bar -= 1; }
        if (this.res.burgers as unknown as string === "-1") { this.results.burgers -= 1; }
        if (this.res.breakfast as unknown as string === "-1") { this.results.breakfast -= 1; }
        if (this.res.sandwiches as unknown as string === "-1") { this.results.sandwiches -= 1; }
        if (this.res.american as unknown as string === "-1") { this.results.american -= 1; }
        if (this.res.mexican as unknown as string === "-1") { this.results.mexican -= 1; }
        if (this.res.seafood as unknown as string === "-1") { this.results.seafood -= 1; }
        if (this.res.pizza as unknown as string === "-1") { this.results.pizza -= 1; }
        if (this.res.fastfood as unknown as string === "-1") { this.results.fastfood -= 1; }
        if (this.res.salad as unknown as string === "-1") { this.results.salad -= 1; }
        if (this.res.italian as unknown as string === "-1") { this.results.italian -= 1; }
        if (this.res.mediterranean as unknown as string === "-1") { this.results.mediterranean -= 1; }
        if (this.res.japanese as unknown as string === "-1") { this.results.japanese -= 1; }
        if (this.res.cafe as unknown as string === "-1") { this.results.cafe -= 1; }
        if (this.res.chickenwings as unknown as string === "-1") { this.results.chickenwings -= 1; }
        if (this.res.vegan as unknown as string === "-1") { this.results.vegan -= 1; }
        if (this.res.vietnamese as unknown as string === "-1") { this.results.vietnamese -= 1; }
        if (this.res.french as unknown as string === "-1") { this.results.french -= 1; }
        if (this.res.diner as unknown as string === "-1") { this.results.diner -= 1; }
        if (this.res.korean as unknown as string === "-1") { this.results.korean -= 1; }
        if (this.res.middleeastern as unknown as string === "-1") { this.results.middleeastern -= 1; }
        if (this.res.indian as unknown as string === "-1") { this.results.indian -= 1; }
        if (this.res.thai as unknown as string === "-1") { this.results.thai -= 1; }
        if (this.res.vegetarian as unknown as string === "-1") { this.results.vegetarian -= 1; }
        if (this.res.glutenfree as unknown as string === "-1") { this.results.glutenfree -= 1; }
        if (this.res.chinese as unknown as string === "-1") { this.results.chinese -= 1; }
        if (this.res.noodles as unknown as string === "-1") { this.results.noodles -= 1; }
        if (this.res.fishandchips as unknown as string === "-1") { this.results.fishandchips -= 1; }
        if (this.res.steakhouse as unknown as string === "-1") { this.results.steakhouse -= 1; }
        if (this.res.halal as unknown as string === "-1") { this.results.halal -= 1; }
        if (this.res.onedollar as unknown as string === "x") { this.results.onedollar = -100; }
        if (this.res.twodollar as unknown as string === "x") { this.results.twodollar = -100; }
        if (this.res.threedollar as unknown as string === "x") { this.results.threedollar = -100; }
        if (this.res.fourdollar as unknown as string === "x") { this.results.fourdollar = -100; }
        if (this.res.bar as unknown as string === "x") { this.results.bar = -100; }
        if (this.res.burgers as unknown as string === "x") { this.results.burgers = -100; }
        if (this.res.breakfast as unknown as string === "x") { this.results.breakfast = -100; }
        if (this.res.sandwiches as unknown as string === "x") { this.results.sandwiches = -100; }
        if (this.res.american as unknown as string === "x") { this.results.american = -100; }
        if (this.res.mexican as unknown as string === "x") { this.results.mexican = -100; }
        if (this.res.seafood as unknown as string === "x") { this.results.seafood = -100; }
        if (this.res.pizza as unknown as string === "x") { this.results.pizza = -100; }
        if (this.res.fastfood as unknown as string === "x") { this.results.fastfood = -100; }
        if (this.res.salad as unknown as string === "x") { this.results.salad = -100; }
        if (this.res.italian as unknown as string === "x") { this.results.italian = -100; }
        if (this.res.mediterranean as unknown as string === "x") { this.results.mediterranean = -100; }
        if (this.res.japanese as unknown as string === "x") { this.results.japanese = -100; }
        if (this.res.cafe as unknown as string === "x") { this.results.cafe = -100; }
        if (this.res.chickenwings as unknown as string === "x") { this.results.chickenwings = -100; }
        if (this.res.vegan as unknown as string === "x") { this.results.vegan = -100; }
        if (this.res.vietnamese as unknown as string === "x") { this.results.vietnamese = -100; }
        if (this.res.french as unknown as string === "x") { this.results.french = -100; }
        if (this.res.diner as unknown as string === "x") { this.results.diner = -100; }
        if (this.res.korean as unknown as string === "x") { this.results.korean = -100; }
        if (this.res.middleeastern as unknown as string === "x") { this.results.middleeastern = -100; }
        if (this.res.indian as unknown as string === "x") { this.results.indian = -100; }
        if (this.res.thai as unknown as string === "x") { this.results.thai = -100; }
        if (this.res.vegetarian as unknown as string === "x") { this.results.vegetarian = -100; }
        if (this.res.glutenfree as unknown as string === "x") { this.results.glutenfree = -100; }
       }
      const results = this.results
      
      console.log(this.results)
      console.log(results)
      const topTwoValues = findTopTwoValues(this.results);
      console.log(topTwoValues);
      this.topvalues = topTwoValues
      this.topdollar = findTopTwoDollarValues(this.results)
      this.dietary = findDietary(this.results)
      while(topTwoValues[0].value < 0){
        topTwoValues[0].value += 100
      }
      while(topTwoValues[1].value < 0){
        topTwoValues[1].value += 100
      }
      let url2 = `https://groupeats.net/events/${this.id}`
    this.http.get<event[]>(url2).subscribe((response) => {
      console.log(response[0])
      this.res2 = response[0]
      console.log(this.res2.zip)
      this.zip = this.res2.zip
   
    console.log(this.topvalues)

    this.topC = (this.topvalues[0].key)
    this.secC = (this.topvalues[1].key)
    this.topCV = this.topvalues[0].value
    this.secCV = this.topvalues[1].value
  

    let price = '';

    if (this.topdollar.some(item => item.key === 'onedollar') && this.topdollar.some(item => item.key === 'twodollar')) {
      price = '1%2C2';
    } else if (this.topdollar.some(item => item.key === 'twodollar') && this.topdollar.some(item => item.key === 'fourdollar')) {
      price = '2%C3%2C4';
    } else if (this.topdollar.some(item => item.key === 'threedollar') && this.topdollar.some(item => item.key === 'fourdollar')) {
      price = '3%2C4';
    } else if (this.topdollar.some(item => item.key === 'onedollar') && this.topdollar.some(item => item.key === 'threedollar')) {
      price = '1%2C2%2C3';
    }
    else if (this.topdollar.some(item => item.key === 'onedollar') && this.topdollar.some(item => item.key === 'fourdollar')) {
      price = '1%2C2%2C3%2C4';
    }
    else if (this.topdollar.some(item => item.key === 'twodollar') && this.topdollar.some(item => item.key === 'threedollar')) {
      price = '2%2C3';
    }
     else if (this.topdollar.some(item => item.key === 'onedollar')) {
      price = '1';
    } else if (this.topdollar.some(item => item.key === 'twodollar')) {
      price = '2';
    } else if (this.topdollar.some(item => item.key === 'threedollar')) {
      price = '3';
    } else if (this.topdollar.some(item => item.key === 'fourdollar')) {
      price = '4';
    } else {
      price = '1%2C2%2C3%2C4';
    }
    
    let halal = ""
    let glutenfree = ""
    let vegan = ""
    let vegetarian = ""

    let dietary1 = ``
    let dietary2 = ``
    let dietary3 = ``
    let dietary4 = ``

    if(this.dietary[0].value > 0){
      halal = this.dietary[0].key
      dietary1 = `&categories=${halal}`
    }
    if(this.dietary[1].value > 0){
      glutenfree = this.dietary[1].key
      dietary2 = `&categories=${glutenfree}`
    }
    if(this.dietary[2].value > 0){
      vegetarian = this.dietary[2].key
      dietary3 = `&categories=${vegetarian}`
    }
    if(this.dietary[3].value > 0){
      vegan = this.dietary[3].key
      dietary4 = `&categories=${vegan}`
    }

    

    console.log(dietary1)
    console.log(dietary2)
    console.log(dietary3)
    console.log(dietary4)

    fetch(`https://groupeats.net/restaurants/location=${this.zip}&term=restaurants&radius=8000&sort_by=best_match&limit=20&categories=${this.topvalues[0].key}%2C${this.topvalues[1].key}&price=${price}${dietary1}${dietary2}${dietary3}${dietary4}`)
      .then(response => response.json())
      .then(data => {
        for(let i = 0; i < data.businesses.length; i++){
          this.restaurants[i] = (data.businesses[i])
          if(!(this.restaurants[i].price != undefined)){this.restaurants[i].price="-"}
          this.restaurants[i].id = `https://www.google.com/maps/search/?api=1&query=${this.restaurants[i].coordinates.latitude}%2C${this.restaurants[i].coordinates.longitude}`
        }
        console.log(data);
        console.log(JSON.stringify(data))
      })
      .catch(err => console.error(err));
      
      
    console.log(this.output2)
      })
    }    
    )
    
    


    
  }

  

  



  

  constructor(
    private route:ActivatedRoute,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ){}
}
