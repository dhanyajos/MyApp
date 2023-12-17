import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  districts=[
    {
    id:1,
    title:"Onam",
    image:"https://as2.ftcdn.net/v2/jpg/06/29/78/67/1000_F_629786736_01jC84FIBqSecZrvMERqpaeiKw7INo3P.jpg",
    Description:"Onam is the most celebrated festival in Kerala, marking the homecoming of the legendary King Mahabali. It's a ten-day event that showcases Kerala's rich culture and heritage, replete with intricate flower arrangements, sumptuous feasts, and traditional boat races. The festivities culminate in Thiruvonam, the most important day, which celebrates the mythical king's annual visit to see his subjects."  ,
  },
    {
      id:2,
      title:"Christmas",
      image:"https://as1.ftcdn.net/v2/jpg/04/75/45/28/1000_F_475452896_gOuclvcaXQZMpnZ4LeLXGlXn2XVe6J03.jpg",
      Description:"Christmas in Kerala is a vibrant celebration, marking the birth of Jesus Christ and reflecting the state's rich Christian heritage. Churches are beautifully decorated, and the midnight mass is a significant event attended by Christian families, adorned in new clothes. The festivities are complemented by the preparation of traditional Kerala Christmas delicacies and the harmonious carols echoing throughout neighborhoods"  
    },
    {
      id:3,
      title:"Vishu",
      image:"https://as2.ftcdn.net/v2/jpg/04/27/16/63/1000_F_427166353_mOHFpg0dt0x5Sd15twd6zlDoJdOlIw1v.jpg",
      Description:"Vishu marks the Malayalam New Year and is a significant festival celebrated with zeal in Kerala. The day starts with Vishu Kani, where people view a ceremonial arrangement of auspicious items and seasonal fruits as the first thing in the morning. This tradition is believed to bring prosperity and good luck for the coming year.Vishu falls on the first day of the month of Medam in the Malayalam Calendar."    
    }
  ]

}
