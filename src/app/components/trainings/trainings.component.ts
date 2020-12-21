import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Training} from '../../shared/Training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  trainings: Array<Training>;
  constructor(private http: HttpService) { }
  ngOnInit(): void {
    this.getTrainings();
  }
  getTrainings(): void{
    this.http.getTrainings().subscribe(restTraining => { this.trainings = restTraining;} );
  }
}
