import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../service/hello-world.service';

@Component({
  selector: 'app-hello-world-string',
  templateUrl: './hello-world-string.component.html',
  styleUrls: ['./hello-world-string.component.css']
})
export class HelloWorldStringComponent implements OnInit {

  welcomeMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private helloWorldService: HelloWorldService) { }

  ngOnInit() {
    this.helloWorldService.executeHelloWorldService().subscribe((res) => {
      this.welcomeMessage = res;
    });
  }

  gotoBeanComponent() {
    this.router.navigate(['/hello-world-bean']);
  }



}
