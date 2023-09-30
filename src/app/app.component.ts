import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Time until shutdown';
countdownText: string = "Loading...";
  ngOnInit(): void {


    setInterval(() => {
      const now = new Date();
      const target = new Date('September 30, 2023 23:59:59 GMT-0500');
      const diff = target.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.countdownText = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }, 1000);
  }

}
