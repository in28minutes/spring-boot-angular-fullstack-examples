import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../service/hello-world.service';

@Component({
  selector: 'app-hello-world-bean',
  templateUrl: './hello-world-bean.component.html',
  styleUrls: ['./hello-world-bean.component.css']
})
export class HelloWorldBeanComponent implements OnInit {

  welcomeMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private helloWorldService: HelloWorldService) { }

  ngOnInit() {
    this.helloWorldService.executeHelloWorldBeanService().subscribe((res) => {
      this.welcomeMessage = res.message;
    });
  }
  gotoStringComponent() {
    this.router.navigate(['/hello-world-string']);
  }

}
