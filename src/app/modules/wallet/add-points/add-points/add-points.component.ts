import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header/page-header.component';

@Component({
  selector: 'app-add-points',
  standalone: true,
  imports: [CommonModule,FormsModule,PageHeaderComponent],
  templateUrl: './add-points.component.html',
  styleUrl: './add-points.component.scss'
})
export class AddPointsComponent {

quickAmounts  = [];

paymentMethods =[
   { value: "credit_card", name: 'Credit Card', icon: '💳' },
   { value: "paypal", name: 'PayPal', icon: '💰' },
    { value: "stripe", name: 'Stripe', icon: '💸' },
    { value: "bank_transfer", name: 'Bank Transfer', icon: '🏦' }
];


selectAmount(amt : number){};
customAmount = 0;
updateCustomAmount(){};
calculateCost(){};
goBack(){};
addPoints(){};
canSubmit(){};
isLoading = false;
amount = 0;

pointsRequest = {
  amount : 0,
  paymentMethod : 'credit_card',
  transactionId : ''
};

method = [{
  value : '',
  icon : '',

}];


getPaymentMethodName(method : string){}














}
