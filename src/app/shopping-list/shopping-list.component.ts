import { Component, OnInit, OnDestroy, DoCheck, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy  {
  ingredients: Ingredient[];
  private subscription: Subscription;
  PieChart=[];
  label=[];
  data=[];
  DoughnutChart=[];
  // BarChart=[];

  constructor(private slService: ShoppingListService) { 
  }
 
 
  pieChart(){
    // console.log(this.data)
    console.log(this.ingredients)
    var amount=[];
    var label =[];
    for (let i =0 ; i< this.ingredients.length;i++){
      amount.push(this.ingredients[i].amount)
      label.push(this.ingredients[i].name)
    }

    this.PieChart = new Chart('pieChart', {
      type: 'pie',
    data: {
    labels: label,
     datasets: [{
         label: '# of Votes',
         data : amount,

        //  data: [9,7 , 3,10 ],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)',
             'rgba(235, 189, 64, 0.2)',
             'rgba(85, 19, 64, 0.2)',
             'rgba(215, 109, 64, 0.2)',
             'rgba(205, 19, 64, 0.2)',
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)',
             'rgba(235, 189, 64, 1)',
             'rgba(85, 19, 64, 1)',
             'rgba(215, 109, 64, 1)',
             'rgba(205, 19, 64, 1)',
         ],
         borderWidth: 1
     }]
    }, 
    options: {
      responsive: true,
      //     maintainAspectRatio: false,
     title:{
         text:"Pie Chart",
         display:true
     },
    //  scales: {
    //      yAxes: [{
    //          ticks: {
    //              beginAtZero:true
    //          }
    //      }]
    //  }
    }
    });
  }
  

  doughnutChart(){
    // console.log(this.data)
    console.log(this.ingredients)
    var amount=[];
    var label =[];
    for (let i =0 ; i< this.ingredients.length;i++){
      amount.push(this.ingredients[i].amount)
      label.push(this.ingredients[i].name)
    }

    this.PieChart = new Chart('doughnutChart', {
      type: 'doughnut',
    data: {
    labels: label,
     datasets: [{
         label: '# of Votes',
         data : amount,

        //  data: [9,7 , 3,10 ],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)',
             'rgba(235, 189, 64, 0.2)',
             'rgba(85, 19, 64, 0.2)',
             'rgba(215, 109, 64, 0.2)',
             'rgba(205, 19, 64, 0.2)',
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)',
             'rgba(235, 189, 64, 1)',
             'rgba(85, 19, 64, 1)',
             'rgba(215, 109, 64, 1)',
             'rgba(205, 19, 64, 1)',
         ],
         borderWidth: 1
     }]
    }, 
    options: {
      responsive: true,
      //     maintainAspectRatio: false,
     title:{
         text:"Doughnut Chart",
         display:true
     },
    //  scales: {
    //      yAxes: [{
    //          ticks: {
    //              beginAtZero:true
    //          }
    //      }]
    //  }
    }
    });
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          this.pieChart();  
          this.doughnutChart();

        }
      );
   
     this.pieChart(); 
     this.doughnutChart();  

  }


  onEditItem(index: number) {
    this.slService.startedEditing.next(index);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
