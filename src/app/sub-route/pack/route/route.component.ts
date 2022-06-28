import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  routeUrl: string | undefined;
  routeParam: string | undefined | null;
  routeFragment: string | undefined| null;
  link = 'link';

  Desc: string | undefined;

  hero = {
  name : 'david',
  address : 'bialik'

};

  doRoute(choice: number) {
    switch (choice) {
      case 0 :  this.router.navigate(['/Route/route']);         break;
      case 1 :  this.router.navigate(['/Route/route/yaniv']);           break;
      case 2 :
        if (!this.routeParam) {
          this.router.navigate(['yossi'], { relativeTo: this.route });
        }
        break;
      case 3 :  this.router.navigateByUrl('Route/route#yossi');  break;

      case 4 :  this.router.navigate(['/Route/route'], { queryParams: { link: 4 },  queryParamsHandling: 'preserve'});                  break;
      case 5 :  this.router.navigate(['/Route/route'], { queryParams: { page: 2, link: 4 },  queryParamsHandling: 'merge'});                  break;
      case 6 :  this.router.navigate(['/Route/route' , this.link]);                  break;
      case 7 :  this.router.navigate([['/', '/Route/route']]);  break;  // not working
    }
    this.updateData();
  }

  mouseEnter(id: number) {
    switch (id) {
      case 0 :  this.Desc = 'navigate \'/Route/route\'';               break;
      case 1 :  this.Desc = 'navigate \'/Route/route/yaniv\'';               break;
      case 2 :  this.Desc = 'router.navigate([\'yossi\'], { relativeTo: this.route }';               break;
      case 3 :  this.Desc = 'router.navigateByUrl(\'Route/route#yossi\')';               break;
      case 4 :  this.Desc = 'router.navigate([\'/Route/route\'], { queryParams: { link: 4 },  queryParamsHandling: "preserve"}';               break;
      case 5 :  this.Desc = 'router.navigate([\'/Route/route\'], { queryParams: { page: 2, link: 4 },  queryParamsHandling: "merge"}';               break;
      case 6 :  this.Desc = 'router.navigate([\'/Route/route\' , this.link]';               break;
      case 7 :  this.Desc = 'router.navigate([[\'/\', \'/Route/route\']]';               break;

      default :
        this.Desc = 'router.navigateByUrl(\'Route/route-pos#part\' ' + (id - 10);
    }

  }
  mouseLeave() {
    this.Desc = '';
  }


  buttonClick(fragment: number) {
    this.router.navigateByUrl('Route/route-pos#part' + fragment ).
            then(res => console.log(res));
  }

  updateData() {
    this.routeUrl = this.router.url;
    this.routeParam = this.route.snapshot.paramMap.get('id');
    this.route.fragment.subscribe((fragment) => {
      this.routeFragment = fragment;
    });
  }

  ngOnInit() {
    this.updateData();
  }

}
