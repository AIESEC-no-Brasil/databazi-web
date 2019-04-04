# DatabaziWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# i18n internationalization - Generate file

`ng xi18n --i18n-locale pt --output-path locale --out-file pt.xlf `

### i18n internationalization - Run project

`ng serve --configuration=staging`

## Branch
staging: default branch

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy Prod

Run `ng build -c production --prod`. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# development internal server
First verify your machine IP Address.
On Windows, type ipconfig in Prompt (copy IPv4).
On Mac, type ifconfig |grep inet in Terminal (copy inet).

e.g: 192.168.0.10.
    
    Next, type ng serve --host 192.168.0.10.

Ok, your app on air for all devices on same network.
Now only http://192.168.0.10:4200/ will work, localhost not more.

#Embedded forms
To embed program forms into other websites:

[URL] = http://d2r6p8mms29sdx.cloudfront.net

## Example:
<div style="height: 700px;">
  <blockquote style="margin: 0; height: 100%; width: 100%;">
    <iframe id="theFrame" src=[URL] + "/intercambio?embedded=true" style="width:100%; height: 100%;" frameborder="0">
    </iframe>
  </blockquote>
</div>

### Examples with all programs / forms (staging)
- "Intercambio", form offline
<div style="height: 700px;">
  <blockquote style="margin: 0; height: 100%; width: 100%;">
    <iframe id="theFrame" src="http://d2r6p8mms29sdx.cloudfront.net/intercambio?embedded=true" style="width:100%; height: 100%;" frameborder="0">
    </iframe>
  </blockquote>
</div>

- "Voluntário Global", formGv
<div style="height: 700px;">
  <blockquote style="margin: 0; height: 100%; width: 100%;">
    <iframe id="theFrame" src="http://d2r6p8mms29sdx.cloudfront.net/intercambio-gv?embedded=true" style="width:100%; height: 100%;" frameborder="0">
    </iframe>
  </blockquote>
</div>

- "Talento Global", formGt
<div style="height: 700px;">
  <blockquote style="margin: 0; height: 100%; width: 100%;">
    <iframe id="theFrame" src="http://d2r6p8mms29sdx.cloudfront.net/intercambio-gt?embedded=true" style="width:100%; height: 100%;" frameborder="0">
    </iframe>
  </blockquote>
</div>

- "Empreendedor Global", formGe
<div style="height: 700px;">
  <blockquote style="margin: 0; height: 100%; width: 100%;">
    <iframe id="theFrame" src="http://d2r6p8mms29sdx.cloudfront.net/intercambio-ge?embedded=true" style="width:100%; height: 100%;" frameborder="0">
    </iframe>
  </blockquote>
</div>


