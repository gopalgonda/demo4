import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public productImgs = [
    {"pImgs": "assets/uploads/products/hed1.webp"},
    {"pImgs": "assets/uploads/products/hed2.webp"},
    {"pImgs": "assets/uploads/products/hed3.webp"},
    {"pImgs": "assets/uploads/products/hed4.webp"},
  ];

  public viewDetails = [
    { "icon": "fa fa-tag", "bank_offer": "Bank Offer", "view_description": " 5% Unlimited Cashback on Flipkart Axis Bank Credit Card ", "tAndC": "T&C" },
    { "icon": "fa fa-tag", "bank_offer": "Partner Offer", "view_description": "Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100* ", "tAndC": "T&C" },
    { "icon": "fa fa-calendar-check-o", "bank_offer": "", "view_description": " No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999", "tAndC": "T&C" },

  ];

  public delDescription = [
    { "deliveryData": " Delivery by12 Mar, Saturday ", "free": "Free", "freeDleIcon": "fa fa-inr", "freeDlePrice": "40" },
  ];

  public selectColor = [
    { "color": "assets/uploads/products/color1.webp" },
    { "color": "assets/uploads/products/color2.webp" },
    { "color": "assets/uploads/products/color3.webp" },
    { "color": "assets/uploads/products/colors4.webp" },
  ];

  public highlights = [
    {"name": "With Mic:Yes"},
    {"name": "Bluetooth version: 5.0"},
    {"name": "Wireless range: 10 m"},
    {"name": "Battery life: 8 hrs | Charging time: 2.5 hrs"},
    {"name": "Extra bass: Add extra thump to your music"},
    {"name": "Using simple touch controls answer phone calls, change music tracks and control volume"},
    {"name": "Sweatproof: With IPX 5 rating this product is ideal for rigorous workouts"},
    
  ];
public corseca =[
  {"corTest": "7 Days Replacement Policy", "question_mark": "?"},
  {"corTest": "GST invoice available?", "question_mark": "?"},
];
public descriptionPra = "The boAt Rockerz 255F Bluetooth headset enables you to listen to your favourite tracks or hold conversations for long durations while keeping your hands free for other tasks. With a playback time of up to six hours, this headset lets you stay hooked to your music, keeping boredom away on your daily commutes. You can also take this headset to the gym for your workouts as its IPX5-rated design ensures minimal damage from sweat and water. Moreover, with stylish chrome accents, this headset is sure to up your style game no matter where you go.";

public product_description = [
  
  {"name": "Uninterrupted Music" },
  {"name1": "The boAt Rockerz 255F Bluetooth headset features 10 mm dynamic drivers that provide a powerful audio output. With a battery backup of up to six hours, this headset ensures that music and conversation will keep you entertained on long commutes." },
 
  {"nameT2": "Sturdy and Stylish" },
  {"name2": "Made from high-quality materials, this headset features metal-housing earphones and stylish chrome accents. It delivers deep bass with articulate audio reproduction to enable a rich sound quality." },
];
  constructor() { }

  ngOnInit(): void {
  }


}
