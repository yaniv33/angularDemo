import { Component, OnInit } from '@angular/core';
import {tableInfo} from './interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableInfo: tableInfo;

  constructor() {

    this.tableInfo = {
      tableData : [ ['Windstorm', '100' , '14/02/1929', '3', '9.00'],
                    ['Windstorm', '100' , '14/02/1929', '3', '9.00'],
                    ['Windstorm', '100' , '14/02/1929', '3', '9.00'],
                    ['Windstorm', '100' , '14/02/1929', '3', '9.00']
                  ],
      header : ['name', 'price' , 'date', 'Windstorm', 'Windstorm'],
      type   : ['text', 'price' , 'date', 'text'     , 'price'    ],

    };
  }

  clickRow(i: string) {
    console.log(i);
  }

  ngOnInit() {
  }
}

// getRow(): string[] {
//   let arrRoutes: string[];
//   const arr1 = this.tableData[this.myNum++];
//   for (let i = 0; i < arr1.length; i++) {
//     let d: string;
//     switch (this.tableStract[i].type) {
//       case this.unitext:
//         d = arr1[i];
//         break;
//       case this.price:
//         d = arr1[i];
//         break;
//       case this.date:
//         d = arr1[i] | date;
//         break;
//       case this.number:
//         d = arr1[i];
//         break;
//       case this.pad:
//         d = arr1[i];
//         break;
//     }
//     arrRoutes[i] = d;
//   }
//
//   return arrRoutes;
// }
