import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  resultsGenerated = false

  generateResults(): void{
    this.resultsGenerated = true
  }


  ngOnInit(): void{
    this.titleService.setTitle('Results')
  }

  constructor(
    private route:ActivatedRoute,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ){}
}
