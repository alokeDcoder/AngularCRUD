import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrdersService } from "src/app/services/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  constructor(private orderService: OrdersService) {}

  coffees = [
    "Americano",
    "Flat",
    "Capuccino",
    "Latte",
    "Expresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];

  coffeeOrder = [];

  addCoffee = coffee => this.coffeeOrder.push(coffee);
  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {
      this.coffeeOrder.splice(index, 1);
    }
  };

  ngOnInit() {}

  onSubmit() {
    this.orderService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.orderService.form.value;

    this.orderService.createCoffeeOrder(data).then(res => {
      //do something
    });
  }
}
