import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {
displayedColumns:string[]=['id','name', 'product', 'delivery_date','status','tracking_no','shipping','cancel'];
dataSource:any;
users: any[] = [];
progressValue: number=50;
  constructor(private apiService:APIService) { }

  ngOnInit(): void {
    this.apiService.getDataList().subscribe((data) => {
      this.dataSource = data['recent_orders'];
      this.users=data['new_users'];
    });
  }

}
