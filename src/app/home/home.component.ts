import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  products: any = [
    {
      "id": 1,
      "name": "Already Contracted",
      "lastModifiedOn": "28-Apr-2020 12:39 PM",
      "lastModifiedBy": "Chris Jerrico",
      "records": "0"
    },
    {
      "id": 2,
      "name": "Marketo Leads",
      "lastModifiedOn": "25-Feb-2020 14:20 PM",
      "lastModifiedBy": "Mark Henry",
      "records": "7,800"
    },
    {
      "id": 3,
      "name": "Do Not Disturb",
      "lastModifiedOn": "18-Apr-2020 04:30 PM",
      "lastModifiedBy": "John Nick",
      "records": "3,500"
    }, {
      "id": 4,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    },
    {
      "id": 5,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    },
    {
      "id": 6,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    },
    {
      "id": 7,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    },
    {
      "id": 8,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    }, {
      "id": 9,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    },
    {
      "id": 10,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    },
    {
      "id": 11,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    },
    {
      "id": 12,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    }, {
      "id": 13,
      "name": "Already Contracted",
      "lastModifiedOn": "11-Apr-2020 04:34 PM",
      "lastModifiedBy": "Dwen Samuel",
      "records": "3,200"
    }
  ];

  queueList: any = [
    {
      "id": 1,
      "date": "28-Apr-2020",
      "data": [
        {
          "heading": "Webinar Suppression List",
          "inputRecords": "1,580",
          "excel": true,
          "validRecords": "1,580",
          "action": "Add Emails",
          "by": "Mark Henry",
          "lists": "Do Not Disturb",
          "status": "In-Progress",
          "class": "text-warning"
        }
      ]
    },
    {
      "id": 2,
      "date": "30-Apr-2020",
      "data": [
        {
          "heading": "Delete Suppression List - ERP Contacts",
          "inputRecords": "2,000",
          "excel": false,
          "validRecords": "2,000",
          "action": "Delete List",
          "by": "Mark Henry",
          "lists": "New Suppression List",
          "status": "In-Progress",
          "class": "text-warning"
        },
        {
          "heading": "Webinar Suppression List",
          "inputRecords": "1,580",
          "excel": false,
          "validRecords": "1,580",
          "action": "Add List",
          "by": "Chris Jerico",
          "lists": "Do Not Disturb",
          "status": "Queued",
          "class": "text-info"
        }
      ]
    }
  ]

  totalRecords = this.products.length;

  constructor() { }
  ngOnInit() {
    console.log(this.products);
  }

}
