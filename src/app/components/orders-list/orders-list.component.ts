import { Component, OnInit } from "@angular/core";
import { OrdersService } from "src/app/services/orders.service";

@Component({
  selector: "app-orders-list",
  templateUrl: "./orders-list.component.html",
  styleUrls: ["./orders-list.component.scss"]
})
export class OrdersListComponent implements OnInit {
  coffeeOrders: any;
  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.getCoffeeOrders();
  }
  getCoffeeOrders = () =>
    this.orderService
      .getCoffeeOrders()
      .subscribe(res => (this.coffeeOrders = res));

  markCompleted = data => this.orderService.updateCoffeeOrder(data);

  deleteOrder = data => this.orderService.deteteCoffeeOrder(data);
}
