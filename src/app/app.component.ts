import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Sentry from '@sentry/browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  window: any = window;
  router: Router;
  cookies_policy: boolean = false;
  cookies_covid_19: boolean = false;

  public static GAid: string = environment.GAid;
  public static GTMid: string = environment.GTMid;
  public static HJid: string = environment.HJid;
  public static MFid: string = environment.MFid;

  constructor(
    public activate: ActivatedRoute
  ) {
    Sentry.init({ dsn: 'https://4478f31a94964381b765142fea1afd5a@sentry.io/1411311' });
    this.appendGA();
    this.appendHotjar();
    this.appendGTM();
  }

  hideSnackBar() {
    localStorage.setItem('cookies_policy', 'true');
    this.cookies_policy = false;
  };

  hideSnackBarTop() {
    localStorage.setItem('cookies_covid_19', 'true');
    this.cookies_covid_19 = false;
  };

  ngOnInit() {
    if (!localStorage.getItem('cookies_policy')) {
      /*console.log('this.window._mfq', this.window._mfq, this.router.url);
      this.window._mfq = this.window._mfq || [];
      this.window._mfq.push(["newPageView", this.router.url]);*/
      this.cookies_policy = true;
    }

    if (!localStorage.getItem('cookies_covid_19')) {
      /*console.log('this.window._mfq', this.window._mfq, this.router.url);
      this.window._mfq = this.window._mfq || [];
      this.window._mfq.push(["newPageView", this.router.url]);*/
      this.cookies_covid_19 = true;
    }
  }

  changeOfRoutes() {
    this.activate.queryParams.subscribe((param: any) => {
      if (!param['embedded']) {
        this.window.fbq('init', '531154527045235');
        this.window.fbq('init', '2083757008560964');
        this.window.fbq('track', 'PageView');
      }
    });
  }

  appendGA() {
    const script = document.createElement('script');
    script.innerHTML = `
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', '`+ AppComponent.GAid + `']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
    `;
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', '` + AppComponent.GAid + `', 'auto');
      ga('send', 'pageview');
    `;
    document.head.appendChild(script2);
  };

  appendHotjar() {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:` + AppComponent.HJid + `,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(script);
  };

  appendGTM() {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','` + AppComponent.GTMid + `');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=` + AppComponent.GTMid + `" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  };

  appendMouseflow() {
    console.log('appending mouseflow');
    const script = document.createElement('script');
    script.innerHTML = `
      window._mfq = window._mfq || [];
      (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.async = true;
          mf.src = "//cdn.mouseflow.com/projects/` + AppComponent.MFid + `.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
      })();
    `;
    document.body.appendChild(script);
  }

}
