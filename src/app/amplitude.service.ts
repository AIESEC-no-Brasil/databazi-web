import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import * as amplitude from 'amplitude-js';

@Injectable({
  providedIn: 'root'
})

export class AmplitudeService {
  constructor() {
    amplitude.getInstance().init(environment.amplitudeKey);
  }

  trackingEvent(event, property = {}) {
    amplitude.getInstance().logEvent.apply(amplitude.getInstance(), arguments);
  }

  //   Events Types:
  //    - Instruction (Events that influence an instruction)
  //    - Routing (Events that change user view)
  //    - User (Events where user login/logout)
  //    - Form (Events that user fill and input)
  //    - Visualization (Events that change the page)

  //    - Menu Top

  trackingClickMenuHome() {
    this.trackingEvent('Menu Top: Home');
  }

  trackingClickMenuVolun() {
    this.trackingEvent('Menu Top: Voluntario Global');
  }

  trackingClickMenuEmpred() {
    this.trackingEvent('Menu Top: Voluntario Empreendedor');
  }

  trackingClickMenuTalent() {
    this.trackingEvent('Menu Top: Voluntario Talento');
  }

  trackingClickMenuLarGlo() {
    this.trackingEvent('Menu Top: Lar Global');
  }

  trackingClickMenuEmpres() {
    this.trackingEvent('Menu Top: Empresa');
  }

  trackingClickMenuYouth() {
    this.trackingEvent('Menu Top: Youthspeak');
  }

  trackingClickMenuPassa() {
    this.trackingEvent('Menu Top: Passagem');
  }

  trackingClickMenuCambio() {
    this.trackingEvent('Menu Top: Cambio');
  }

  trackingClickMenuSeguro() {
    this.trackingEvent('Menu Top: Seguro');
  }

  trackingClickMenuBlogEmp() {
    this.trackingEvent('Menu Top: Blog Empresa');
  }

  trackingClickMenuBlogEstud() {
    this.trackingEvent('Menu Top: Blog Estudante');
  }

  trackingClickMenuCOVID() {
    this.trackingEvent('Menu Top: COVID');
  }

  trackingClickMenuOportu() {
    this.trackingEvent('Menu Top: Oportunidades');
  }

  //    - Saiba mais (GV GE GT)
  trackingSaibaMaisGV() {
    this.trackingEvent('Saiba Mais: GV');
  }

  trackingSaibaMaisGE() {
    this.trackingEvent('Saiba Mais: GE');
  }

  trackingSaibaMaisGT() {
    this.trackingEvent('Saiba Mais: GT');
  }

  //    - Form GV

  trackingClickCancelGv() {
    this.trackingEvent('Cadastro Cancelado: Voluntario Global');
  }

  trackingCompletedSignupGv() {
    this.trackingEvent('Cadastro completo: Voluntario Global');
  }

  trackingSignupThankYouHomeGv() {
    this.trackingEvent('Obrigado GV: Home');
  }

  trackingSignupThankYouAiesecGv() {
    this.trackingEvent('Obrigado GV: AIESEC');
  }

  trackingSignupThankYouBlogGv() {
    this.trackingEvent('Obrigado GV: Blog');
  }

  trackingClickInscrevaGv() {
    this.trackingEvent('Page GV: Inscreva-se');
  }

  trackingClickFlConoscoGv() {
    this.trackingEvent('Page GV: Fale Conosco');
  }

  trackingClickFlrepresentativesGv() {
    this.trackingEvent('Page GV: Fale com um representante');
  }

  //    - Form GE

  trackingClickCancelGe() {
    this.trackingEvent('Cadastro Cancelado: Empreendedor Global');
  }

  trackingCompletedSignupGe() {
    this.trackingEvent('Cadastro completo: Voluntario Empreendedor');
  }

  trackingSignupThankYouHomeGe() {
    this.trackingEvent('Obrigado GE: Home');
  }

  trackingSignupThankYouAiesecGe() {
    this.trackingEvent('Obrigado GE: AIESEC');
  }

  trackingSignupThankYouBlogGe() {
    this.trackingEvent('Obrigado GE: Blog');
  }

  trackingClickInscrevaGe() {
    this.trackingEvent('Page GE: Inscreva-se');
  }

  trackingClickFlConoscoGe() {
    this.trackingEvent('Page GE: Fale Conosco');
  }

  trackingClickFlrepresentativesGe() {
    this.trackingEvent('Page GE: Fale com um representante');
  }

  //    - Form GT

  trackingClickCancelGt() {
    this.trackingEvent('Cadastro Cancelado: Talento Global');
  }

  trackingCompletedSignupGt() {
    this.trackingEvent('Cadastro Completo: Voluntario Talento');
  }

  trackingSignupThankYouHomeGt() {
    this.trackingEvent('Obrigado GT: Home');
  }

  trackingSignupThankYouAiesecGt() {
    this.trackingEvent('Obrigado GT: AIESEC');
  }

  trackingSignupThankYouBlogGt() {
    this.trackingEvent('Obrigado GT: Blog');
  }

  trackingClickInscrevaGt() {
    this.trackingEvent('Page GT: Inscreva-se');
  }

  trackingClickFlConoscoGt() {
    this.trackingEvent('Page GT: Fale Conosco');
  }

  trackingClickFlrepresentativesGt() {
    this.trackingEvent('Page GT: Fale com um representante');
  }

  //    - Form Host

  trackingCompletedSignupHost() {
    this.trackingEvent('Cadastro completo: Lar Global');
  }

  trackingSignupThankYouHomeHost() {
    this.trackingEvent('Obrigado Host: Home');
  }

  trackingClickFlConoscoHost() {
    this.trackingEvent('Page Host: Fale Conosco');
  }

  trackingClickInscrevaHost() {
    this.trackingEvent('Page Host: Inscreva-se');
  }

  //    - Form Membership

  trackingCompletedSignupMembership() {
    this.trackingEvent('Cadastro Completo: Membership');
  }

  trackingClickInscrevaMemberShip() {
    this.trackingEvent('Page Membership: Inscreva-se');
  }

  //    - Processo Seletivo && Hospedar Intercambista

  trackingClickHosp() {
    this.trackingEvent('Saiba mais sobre o Lar Global');
  }

  trackingClickGoToMember() {
    this.trackingEvent('Inscreva-se Processo Seletivo');
  }

  //    - Conheca nosso Programas Scrollbar

  trackingVisualPrograms() {
    this.trackingEvent('Scrollbar para Programas');
  }

  //    - Historias GV GE GT

  trackingClickHistGV() {
    this.trackingEvent('Historias: GV');
  }

  trackingClickHistGE() {
    this.trackingEvent('Historias: GE');
  }

  trackingClickHistGT() {
    this.trackingEvent('Historias: GT');
  }

  //

  trackingRoutingParceiros(partner) {
    this.trackingEvent(`Parceiros: ${partner}`);
  }

  //    - Menu Rodape

  trackingClickFooterMenuAiesec() {
    this.trackingEvent('Menu Rodape: AIESEC');
  }

  trackingClickFooterMenuFcParte() {
    this.trackingEvent('Menu Rodape: Faça parte');
  }

  trackingClickFooterMenuAlummi() {
    this.trackingEvent('Menu Rodape: Alummi');
  }

  trackingClickFooterMenuYouthSpeak() {
    this.trackingEvent('Menu Rodape: YouthSpeak');
  }

  trackingClickFooterMenuGe() {
    this.trackingEvent('Menu Rodape: Empreendedor Global');
  }

  trackingClickFooterMenuGt() {
    this.trackingEvent('Menu Rodape: Talento Global');
  }

  trackingClickFooterMenuGv() {
    this.trackingEvent('Menu Rodape: Voluntario Global');
  }

  trackingClickFooterMenuLarGlobal() {
    this.trackingEvent('Menu Rodape: Lar Global');
  }

  trackingClickFooterMenuEmpresas() {
    this.trackingEvent('Menu Rodape: Empresas');
  }

  trackingClickFooterMenuYouSpeakParc() {
    this.trackingEvent('Menu Rodape: YouthSpeak Parceiros');
  }

  trackingClickFooterMenuPassagens() {
    this.trackingEvent('Menu Rodape: Passagens Aéreas');
  }

  trackingClickFooterMenuCambio() {
    this.trackingEvent('Menu Rodape: Câmbio de Moedas');
  }

  trackingClickFooterMenuSeguViagem() {
    this.trackingEvent('Menu Rodape: Seguro Viagem');
  }

  trackingClickFooterMenuBlogEmpresas() {
    this.trackingEvent('Menu Rodape: Blog Empresas');
  }

  trackingClickFooterMenuBlogEstudantes() {
    this.trackingEvent('Menu Rodape: Blog Estudantes');
  }

  trackingClickFooterMenuFacebook() {
    this.trackingEvent('Menu Rodape: Facebook');
  }

  trackingClickFooterMenuInstagram() {
    this.trackingEvent('Menu Rodape: Instagram');
  }

  trackingClickFooterMenuTwitter() {
    this.trackingEvent('Menu Rodape: Twitter');
  }

  trackingClickFooterMenuYoutube() {
    this.trackingEvent('Menu Rodape: Youtube');
  }

  //    - Country

  trackingClickCountry(country) {
    this.trackingEvent(`Veja Oportunidades: ${country}`);
  }

  trackingListContact(countryContact) {
    this.trackingEvent(`Contato da Região: ${countryContact}`);
  }
}

