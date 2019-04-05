import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { formControlBinding } from "@angular/forms/src/directives/ng_model";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  constructor(private fireStore: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl(""),
    orderNumber: new FormControl(""),
    coffeeOrder: new FormControl(""),
    completed: new FormControl("")
  });

  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.fireStore
        .collection("coffeeOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  getCoffeeOrders() {
    return this.fireStore.collection("coffeeOrders").snapshotChanges();
  }

  updateCoffeeOrder(data) {
    return this.fireStore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deteteCoffeeOrder(data: any) {
    return this.fireStore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
}
