import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public registeredOfficeAddress = [
    {"name": "Flipkart Internet Private Limited,"},
    {"name": "Buildings Alyssa, Begonia & Clove Embassy Tech Village,"},
    {"name": "Outer Ring Road, Devarabeesanahalli Village,"},
    {"name": "Bengaluru, 560103,"},
    {"name": "Karnataka, India"},
    {"name": "CIN : U51109KA2012PTC066107"},
    {"name": "Telephone: 1800 202 9898"},
  ];

  public fAboutMenus = [
    {"name": "Contact Us"},
    {"name": "About Us"},
    {"name": "Careers"},
    {"name": "Flipkart Stories"},
    {"name": "Press"},
    {"name": "Flipkart Wholesale"},
    {"name": "Corporate Information"},
  ];
  public fHelpeMenus = [
    {"name": "Payments"},
    {"name": "Shipping"},
    {"name": "Cancellation & Returns"},
    {"name": "FAQ"},
    {"name": "Report Infringement"},

  ];
  public fPolicyMenus = [
    {"name": "Return Policy"},
    {"name": "Terms Of Use"},
    {"name": "Security"},
    {"name": "Privacy"},
    {"name": "Sitemap"},
    {"name": "EPR Compliance"},

  ];
  public fSocialMenus = [
    {"name": "Facebook"},
    {"name": "Twitter"},
    {"name": "YouTube"},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
