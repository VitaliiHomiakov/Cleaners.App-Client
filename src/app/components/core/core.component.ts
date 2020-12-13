import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'cleaners-core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})
export class CoreComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/core/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/core/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/core/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/core/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/core/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/core/folder/Spam',
      icon: 'warning'
    }
  ];

  constructor(

  ) {

  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
