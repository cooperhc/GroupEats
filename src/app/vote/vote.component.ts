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
  mexican: boolean,
  seafood: boolean,
  zip: number
}

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  id = ""
  res: event = {created: "", id: "", last_updated: "", mexican: false, seafood: false, zip: 1}
  mexican = false
  m1 = 0
  seafood = false
  s1 = 0
  submitted = false
  errorMessage = ""
  formInfo = {"mexican": "not sure", "seafood": "not sure"}

  submit(): void{
    
    let checked = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>

    for (let i = 0; i < checked.length; i++) {
      if (checked[i].checked) {
        //Mexican
        if(checked[i].value == "mexican-green"){
          this.formInfo.mexican = "sounds good"
          this.m1 += 1
        }
        if(checked[i].value == "mexican-gray"){
          this.formInfo.mexican = "prefer not"
          this.m1 += 1
        }
        if(checked[i].value == "mexican-red"){
          this.formInfo.mexican = "cant do"
          this.m1 += 1
        }
        
        //Seafood
        if(checked[i].value == "seafood-green"){
          this.formInfo.seafood = "sounds good"
          this.s1 += 1
        }
        if(checked[i].value == "seafood-gray"){
          this.formInfo.seafood = "prefer not"
          this.s1 += 1
        }
        if(checked[i].value == "seafood-red"){
          this.formInfo.seafood = "cant do"
          this.s1 += 1
        }

        console.log(checked[i].value + " is checked.");
      }
    }

    if(this.m1 > 1 || this.s1 > 1){
      console.log("Too many votes")
      this.errorMessage = "Only one vote per option is allowed"
      this.m1 = 0
      this.s1 = 0
      throw new Error()
    }

    this.submitted = true

    let postRes = {
      "eventID": this.id,
      "formInfo": this.formInfo
    }

    let url = `http://67.207.92.253:1000/responses/`

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

    let url = `http://67.207.92.253:1000/events/${this.id}`
    this.http.get<event[]>(url).subscribe((response) => {
      console.log(response[0])
      this.res = response[0]
      if(this.res.mexican){this.mexican=true}
      if(this.res.seafood){this.seafood=true}
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
