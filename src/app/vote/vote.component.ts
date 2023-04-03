import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

interface event{
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

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  id = ""
  res: event = {
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
  mexican = false;
  seafood = false;
  bar = false;
  burgers = false;
  breakfast = false;
  sandwiches = false;
  american = false;
  pizza = false;
  fastfood = false;
  salad = false;
  italian = false;
  mediterranean = false;
  japanese = false;
  cafe = false;
  chickenwings = false;
  vietnamese = false;
  french = false;
  diner = false;
  korean = false;
  middleeastern = false;
  indian = false;
  thai = false;
  chinese = false;
  noodles = false;
  fishandchips = false;
  steakhouse = false;
  submitted = false;

  //remove and change later
  halal = false;
  glutenfree = false;
  vegetarian = false;
  vegan = false;
  onedollar = false;
  twodollar = false;
  threedollar = false;
  fourdollar = false;

  errorMessage = ""
  formInfo = {
    "onedollar": "not sure",
    "twodollar": "not sure",
    "threedollar": "not sure",
    "fourdollar": "not sure",
    "bar": "not sure",
    "burgers": "not sure",
    "breakfast": "not sure",
    "sandwiches": "not sure",
    "american": "not sure",
    "mexican": "not sure",
    "seafood": "not sure",
    "pizza": "not sure",
    "fastfood": "not sure",
    "salad": "not sure",
    "italian": "not sure",
    "mediterranean": "not sure",
    "japanese": "not sure",
    "cafe": "not sure",
    "chickenwings": "not sure",
    "vegan": "not sure",
    "vietnamese": "not sure",
    "french": "not sure",
    "diner": "not sure",
    "korean": "not sure",
    "middleeastern": "not sure",
    "indian": "not sure",
    "thai": "not sure",
    "vegetarian": "not sure",
    "glutenfree": "not sure",
    "chinese": "not sure",
    "noodles": "not sure",
    "fishandchips": "not sure",
    "steakhouse": "not sure",
    "halal": "not sure"
  }  
  submitButtonText = 'Submit Vote'


  //cursed code start
  toggleSeafood(color: string): void{
    if(color==='green'){
      this.formInfo.seafood = "1"
    }
    if(color==='gray'){
      this.formInfo.seafood = "-1"
    }
    if(color==='red'){
      this.formInfo.seafood = "x"
    }
    console.log(this.formInfo.seafood)
  }

  toggleAmerican(color: string): void{
    if(color==='green'){
      this.formInfo.american = "1"
    }
    if(color==='gray'){
      this.formInfo.american = "-1"
    }
    if(color==='red'){
      this.formInfo.american = "x"
    }
    console.log(this.formInfo.american)
  }

  toggleChinese(color: string): void{
    if(color==='green'){
      this.formInfo.chinese = "1"
    }
    if(color==='gray'){
      this.formInfo.chinese = "-1"
    }
    if(color==='red'){
      this.formInfo.chinese = "x"
    }
    console.log(this.formInfo.chinese)
  }

  toggleDiner(color: string): void{
    if(color==='green'){
      this.formInfo.diner = "1"
    }
    if(color==='gray'){
      this.formInfo.diner = "-1"
    }
    if(color==='red'){
      this.formInfo.diner = "x"
    }
    console.log(this.formInfo.diner)
  }

  toggleFishAndChips(color: string): void{
    if(color==='green'){
      this.formInfo.fishandchips = "1"
    }
    if(color==='gray'){
      this.formInfo.fishandchips = "-1"
    }
    if(color==='red'){
      this.formInfo.fishandchips = "x"
    }
    console.log(this.formInfo.fishandchips)
  }

  toggleIndian(color: string): void{
    if(color==='green'){
      this.formInfo.indian = "1"
    }
    if(color==='gray'){
      this.formInfo.indian = "-1"
    }
    if(color==='red'){
      this.formInfo.indian = "x"
    }
    console.log(this.formInfo.indian)
  }

  toggleFrench(color: string): void{
    if(color==='green'){
      this.formInfo.french = "1"
    }
    if(color==='gray'){
      this.formInfo.french = "-1"
    }
    if(color==='red'){
      this.formInfo.french = "x"
    }
    console.log(this.formInfo.french)
  }

  toggleKorean(color: string): void{
    if(color==='green'){
      this.formInfo.korean = "1"
    }
    if(color==='gray'){
      this.formInfo.korean = "-1"
    }
    if(color==='red'){
      this.formInfo.korean = "x"
    }
    console.log(this.formInfo.korean)
  }

  toggleMiddleEastern(color: string): void{
    if(color==='green'){
      this.formInfo.middleeastern = "1"
    }
    if(color==='gray'){
      this.formInfo.middleeastern = "-1"
    }
    if(color==='red'){
      this.formInfo.middleeastern = "x"
    }
    console.log(this.formInfo.middleeastern)
  }

  toggleNoodles(color: string): void{
    if(color==='green'){
      this.formInfo.noodles = "1"
    }
    if(color==='gray'){
      this.formInfo.noodles = "-1"
    }
    if(color==='red'){
      this.formInfo.noodles = "x"
    }
    console.log(this.formInfo.noodles)
  }

  toggleSteakhouse(color: string): void{
    if(color==='green'){
      this.formInfo.steakhouse = "1"
    }
    if(color==='gray'){
      this.formInfo.steakhouse = "-1"
    }
    if(color==='red'){
      this.formInfo.steakhouse = "x"
    }
    console.log(this.formInfo.steakhouse)
  }

  toggleThai(color: string): void{
    if(color==='green'){
      this.formInfo.thai = "1"
    }
    if(color==='gray'){
      this.formInfo.thai = "-1"
    }
    if(color==='red'){
      this.formInfo.thai = "x"
    }
    console.log(this.formInfo.thai)
  }

  toggleVietnamese(color: string): void{
    if(color==='green'){
      this.formInfo.vietnamese = "1"
    }
    if(color==='gray'){
      this.formInfo.vietnamese = "-1"
    }
    if(color==='red'){
      this.formInfo.vietnamese = "x"
    }
    console.log(this.formInfo.vietnamese)
  }

  toggleMexican(color: string): void{
    if(color==='green'){
      this.formInfo.mexican = "1"
    }
    if(color==='gray'){
      this.formInfo.mexican = "-1"
    }
    if(color==='red'){
      this.formInfo.mexican = "x"
    }
    console.log(this.formInfo.mexican)    
  }

  togglePizza(color: string): void{
    if(color==='green'){
      this.formInfo.pizza = "1"
    }
    if(color==='gray'){
      this.formInfo.pizza = "-1"
    }
    if(color==='red'){
      this.formInfo.pizza = "x"
    }
    console.log(this.formInfo.pizza)
  }
  
  toggleFastFood(color: string): void{
    if(color==='green'){
      this.formInfo.fastfood = "1"
    }
    if(color==='gray'){
      this.formInfo.fastfood = "-1"
    }
    if(color==='red'){
      this.formInfo.fastfood = "x"
    }
    console.log(this.formInfo.fastfood)
  }
  
  toggleSalad(color: string): void{
    if(color==='green'){
      this.formInfo.salad = "1"
    }
    if(color==='gray'){
      this.formInfo.salad = "-1"
    }
    if(color==='red'){
      this.formInfo.salad = "x"
    }
    console.log(this.formInfo.salad)
  }
  
  toggleItalian(color: string): void{
    if(color==='green'){
      this.formInfo.italian = "1"
    }
    if(color==='gray'){
      this.formInfo.italian = "-1"
    }
    if(color==='red'){
      this.formInfo.italian = "x"
    }
    console.log(this.formInfo.italian)
  }
  
  toggleMediterranean(color: string): void{
    if(color==='green'){
      this.formInfo.mediterranean = "1"
    }
    if(color==='gray'){
      this.formInfo.mediterranean = "-1"
    }
    if(color==='red'){
      this.formInfo.mediterranean = "x"
    }
    console.log(this.formInfo.mediterranean)
  }
  
  toggleJapanese(color: string): void{
    if(color==='green'){
      this.formInfo.japanese = "1"
    }
    if(color==='gray'){
      this.formInfo.japanese = "-1"
    }
    if(color==='red'){
      this.formInfo.japanese = "x"
    }
    console.log(this.formInfo.japanese)
  }
  
  toggleCafe(color: string): void{
    if(color==='green'){
      this.formInfo.cafe = "1"
    }
    if(color==='gray'){
      this.formInfo.cafe = "-1"
    }
    if(color==='red'){
      this.formInfo.cafe = "x"
    }
    console.log(this.formInfo.cafe)
  }
  
  toggleChickenWings(color: string): void{
    if(color==='green'){
      this.formInfo.chickenwings = "1"
    }
    if(color==='gray'){
      this.formInfo.chickenwings = "-1"
    }
    if(color==='red'){
      this.formInfo.chickenwings = "x"
    }
    console.log(this.formInfo.chickenwings)
  }

  toggleThreeDollar(color: string): void{
    if(color==='green'){
      this.formInfo.threedollar = "1"
    }
    if(color==='gray'){
      this.formInfo.threedollar = "-1"
    }
    if(color==='red'){
      this.formInfo.threedollar = "x"
    }
    console.log(this.formInfo.threedollar)
  }

  toggleHalal(color: string): void{
    if(color==='green'){
      this.formInfo.halal = "1"
    }
    if(color==='gray'){
      this.formInfo.halal = "-1"
    }
    if(color==='red'){
      this.formInfo.halal = "x"
    }
    console.log(this.formInfo.halal)
  }

  toggleVegetarian(color: string): void{
    if(color==='green'){
      this.formInfo.vegetarian = "1"
    }
    if(color==='gray'){
      this.formInfo.vegetarian = "-1"
    }
    if(color==='red'){
      this.formInfo.vegetarian = "x"
    }
    console.log(this.formInfo.vegetarian)
  }

  toggleGlutenFree(color: string): void{
    if(color==='green'){
      this.formInfo.glutenfree = "1"
    }
    if(color==='gray'){
      this.formInfo.glutenfree = "-1"
    }
    if(color==='red'){
      this.formInfo.glutenfree = "x"
    }
    console.log(this.formInfo.glutenfree)
  }


  toggleFourDollar(color: string): void{
    if(color==='green'){
      this.formInfo.fourdollar = "1"
    }
    if(color==='gray'){
      this.formInfo.fourdollar = "-1"
    }
    if(color==='red'){
      this.formInfo.fourdollar = "x"
    }
    console.log(this.formInfo.fourdollar)
  }
  
  toggleVegan(color: string): void{
    if(color==='green'){
      this.formInfo.vegan = "1"
    }
    if(color==='gray'){
      this.formInfo.vegan = "-1"
    }
    if(color==='red'){
      this.formInfo.vegan = "x"
    }
    console.log(this.formInfo.vegan)
  }

  toggleBar(color: string): void {
    if (color === 'green') {
      this.formInfo.bar = "1";
    }
    if (color === 'gray') {
      this.formInfo.bar = "-1";
    }
    if (color === 'red') {
      this.formInfo.bar = "x";
    }
    console.log(this.formInfo.bar);
  }

  toggleBurgers(color: string): void {
    if (color === 'green') {
      this.formInfo.burgers = "1";
    }
    if (color === 'gray') {
      this.formInfo.burgers = "-1";
    }
    if (color === 'red') {
      this.formInfo.burgers = "x";
    }
    console.log(this.formInfo.burgers);
  }

  toggleBreakfast(color: string): void {
    if (color === 'green') {
      this.formInfo.breakfast = "1";
    }
    if (color === 'gray') {
      this.formInfo.breakfast = "-1";
    }
    if (color === 'red') {
      this.formInfo.breakfast = "x";
    }
    console.log(this.formInfo.breakfast);
  }

  toggleSandwiches(color: string): void {
    if (color === 'green') {
      this.formInfo.sandwiches = "1";
    }
    if (color === 'gray') {
      this.formInfo.sandwiches = "-1";
    }
    if (color === 'red') {
      this.formInfo.sandwiches = "x";
    }
    console.log(this.formInfo.sandwiches);
  }

  toggleOneDollar(color: string): void {
    if (color === 'green') {
      this.formInfo.onedollar = "1";
    }
    if (color === 'gray') {
      this.formInfo.onedollar = "-1";
    }
    if (color === 'red') {
      this.formInfo.onedollar = "x";
    }
    console.log(this.formInfo.onedollar);
  }

  toggleTwoDollar(color: string): void {
    if (color === 'green') {
      this.formInfo.twodollar = "1";
    }
    if (color === 'gray') {
      this.formInfo.twodollar = "-1";
    }
    if (color === 'red') {
      this.formInfo.twodollar = "x";
    }
    console.log(this.formInfo.twodollar);
  }
  //cursed code end

  

  submit(): void{
    
    this.submitted = true
    this.submitButtonText = 'Vote Submitted'

    let postRes = {
      "eventID": this.id,
      "formInfo": this.formInfo
    }

    console.log(postRes)

    let url = `https://groupeats.net/responses/`

    this.http.post(url, postRes).subscribe((response) => {
      //response not working
      console.log(response)
    })
  }

  openResults(): void{
    this.router.navigate([`../results/${this.id}`])
    //window.open(`${window.location.origin}/results/${this.id}`, "_blank")
  }


  ngOnInit(): void{
    this.titleService.setTitle('Vote on Event')
    this.id = this.route.snapshot.paramMap.get('id') as string

    let url = `https://groupeats.net/events/${this.id}`
    this.http.get<event[]>(url).subscribe((response) => {
      console.log(response[0])
      this.res = response[0]
      if(this.res.bar){ this.bar = true }
      if(this.res.burgers){ this.burgers = true }
      if(this.res.breakfast){ this.breakfast = true }
      if(this.res.sandwiches){ this.sandwiches = true }
      if(this.res.american){ this.american = true }
      if(this.res.mexican){ this.mexican = true }
      if(this.res.seafood){ this.seafood = true }
      if(this.res.pizza){ this.pizza = true }
      if(this.res.fastfood){ this.fastfood = true }
      if(this.res.salad){ this.salad = true }
      if(this.res.italian){ this.italian = true }
      if(this.res.mediterranean){ this.mediterranean = true }
      if(this.res.japanese){ this.japanese = true }
      if(this.res.cafe){ this.cafe = true }
      if(this.res.chickenwings){ this.chickenwings = true }
      if(this.res.vietnamese){ this.vietnamese = true }
      if(this.res.french){ this.french = true }
      if(this.res.diner){ this.diner = true }
      if(this.res.korean){ this.korean = true }
      if(this.res.middleeastern){ this.middleeastern = true }
      if(this.res.indian){ this.indian = true }
      if(this.res.thai){ this.thai = true }
      if(this.res.chinese){ this.chinese = true }
      if(this.res.noodles){ this.noodles = true }
      if(this.res.fishandchips){ this.fishandchips = true }
      if(this.res.steakhouse){ this.steakhouse = true }
      if(this.res.vegan){ this.vegan = true }
      if(this.res.vegetarian){ this.vegetarian = true }
      if(this.res.halal){ this.halal = true }
      if(this.res.glutenfree){ this.glutenfree = true }
      if(this.res.onedollar){ this.onedollar = true }
      if(this.res.twodollar){ this.twodollar = true }
      if(this.res.threedollar){ this.threedollar = true }
      if(this.res.fourdollar){ this.fourdollar = true }
    })
  }

  constructor(
    private route:ActivatedRoute,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ){}
}
