import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  actualPage: any;
  contact: any;

  contactList: any;
  allProgramsContacts = {
    host: [
      {
        id: "1",
        city: "BELO HORIZONTE",
        name: "Camila Moura",
        cellphone: "31 99315-2405",
        email: "camila.moura@aiesec.net"
      },
      {
        id: "2",
        city: "BRASÍLIA",
        name: "Kym Asscher C. Moreira",
        cellphone: "55 61 98265-4800",
        email: "kym.moreira@aiesec.net"
      },
      {
        id: "3",
        city: "ESPM",
        name: "Andrei Dollinger Damasceno",
        cellphone: "5511976506857",
        email: "andrei.damasceno@aiesec.net"
      },
      {
        id: "4",
        city: "JOAO PESSOA",
        name: "Isabela Remígio",
        cellphone: "5583998219964",
        email: "Isabela.remigio@aiesec.net"
      },
      {
        id: "5",
        city: "NATAL",
        name: "Rafael Albuquerque",
        cellphone: "55 84 99802 7868",
        email: "rafael.albuquerque2@aiesec.net"
      },
      {
        id: "6",
        city: "PORTO ALEGRE",
        name: "Bruno Zanette",
        cellphone: "51 9 9348-5476",
        email: "bruno.zanette@aiesec.net"
      },
      {
        id: "7",
        city: "SALVADOR",
        name: "Clara Suit Queiroz",
        cellphone: "5571991429414",
        email: "clara.queiroz@aiesec.net"
      },
      {
        id: "8",
        city: "VITÓRIA",
        name: "Débora Lima",
        cellphone: "55 27 981329656",
        email: "debora.lima@aiesec.net"
      },
      {
        id: "9",
        city: "ABC",
        name: "Ana Clara Siqueira",
        cellphone: "(11) 985888073",
        email: "anaclara.siqueira@aiesec.net"
      },
      {
        id: "10",
        city: "CURITIBA",
        name: "Geyson Magalhaes",
        cellphone: "55 41 99948-6643",
        email: "geyson.magalhaes@aiesec.net"
      },
      {
        id: "11",
        city: "FORTALEZA",
        name: "Luana Galeno",
        cellphone: "55 85 96125911",
        email: "luana.galeno@aiesec.net"
      },
      {
        id: "12",
        city: "MARINGÁ",
        name: "Gabriel Bueno",
        cellphone: "5544999089831",
        email: "Gabriel.bueno2@aiesec.net"
      },
      {
        id: "13",
        city: "RIO DE JANEIRO",
        name: "Bruna P. Zomer",
        cellphone: "55 21 972402045",
        email: "bruna.zomer@aiesec.net"
      },
      {
        id: "14",
        city: "SANTA MARIA",
        name: "Milena Rodrigues Jovanovichs",
        cellphone: "55 55 996190061",
        email: "milena.jovanovichs@aiesec.net"
      },
      {
        id: "15",
        city: "SAO CARLOS",
        name: "Giulia Freitas",
        cellphone: "55 19 996226131",
        email: "giulia.freitas@aiesec.net"
      },
      {
        id: "16",
        city: "UBERLÂNDIA",
        name: "Leonardo Gonzalez",
        cellphone: "55 34 92275541",
        email: "leonardo.gonzalez@aiesec.net"
      },
      {
        id: "17",
        city: "USP",
        name: "Eduarda França Gomes",
        cellphone: "(11)99368233",
        email: "eduarda.gomes2@aiesec.net"
      },
      {
        id: "18",
        city: "VIÇOSA",
        name: "Camila Lima Murta",
        cellphone: "31 9 86076584",
        email: "camila.murta@aiesec.net"
      },
      {
        id: "19",
        city: "BELÉM",
        name: "Rafael Deriggi",
        cellphone: "55 91 9 9358 7923",
        email: "rafael.deriggi@aiesec.net"
      },
      {
        id: "20",
        city: "CUIABA",
        name: "Kaike Cordeiro Closs",
        cellphone: "55 65 996815855",
        email: "kaike.closs@aiesec.net"
      },
      {
        id: "21",
        city: "FLORIANÓPOLIS",
        name: "Helena Macedo",
        cellphone: "55 48 991193118",
        email: "helena.macedo@aiesec.net"
      },
      {
        id: "22",
        city: "GETÚLIO VARGAS",
        name: "Chiara Silveira",
        cellphone: "5511964004521",
        email: "chiara.silveira@aiesec.net"
      },
      {
        id: "23",
        city: "INSPER",
        name: "Daniela Martins dos Santos",
        cellphone: "5511966298880",
        email: "dani.martins@aiesec.net"
      },
      {
        id: "24",
        city: "LIMEIRA",
        name: "João Lucas P Roque",
        cellphone: "5511974503332",
        email: "joao.roque@aiesec.net"
      },
      {
        id: "25",
        city: "MACEIO",
        name: "Amanda Françozo",
        cellphone: "5582981320283",
        email: "amanda.francozo@aiesec.net"
      },
      {
        id: "26",
        city: "MACKENZIE",
        name: "Luiza Montanini Valente",
        cellphone: "5511995424168",
        email: "luiza.montanini@aiesec.net"
      },
      {
        id: "27",
        city: "RECIFE",
        name: "Raffaella Souza",
        cellphone: "81 997248806",
        email: "Raffa2.souza@aiesec.net"
      },
      {
        id: "28",
        city: "TERESINA",
        name: "Ana Zuleica",
        cellphone: "86 9 9419 4072",
        email: "ana.zuleica@aiesec.net"
      },
      {
        id: "29",
        city: "VALE DO SAO FRANCISCO",
        name: "Elayne Lemos",
        cellphone: "55 87 933000356",
        email: "elayne.lemos@aiesec.net"
      },
      {
        id: "30",
        city: "ARACAJU",
        name: "Bruna Tavares Ribeiro",
        cellphone: "(79) 9 8809-6898",
        email: "brunaribeiro@aiesec.net"
      },
      {
        id: "31",
        city: "BAURU",
        name: "Giovanna Akkari Guedes",
        cellphone: "5511984440519",
        email: "giovanna.guedes@aiesec.net"
      },
      {
        id: "32",
        city: "BLUMENAU",
        name: "Jaqueline Catapan",
        cellphone: "5547997410869",
        email: "jaqueline.catapan@aiesec.net"
      },
      {
        id: "33",
        city: "CHAPECO",
        name: "Pahola Patussi",
        cellphone: "5549984386364",
        email: "pahola.patussi@aiesec.net"
      },
      {
        id: "34",
        city: "GOIANIA",
        name: "Luciano Cesar da Silva Barros",
        cellphone: "62 9 99741396",
        email: "luciano.barros@aiesec.net"
      },
      {
        id: "35",
        city: "ITAJUBA",
        name: "Ricardo Faria Tanaka Filho",
        cellphone: "55 34 999642395",
        email: "ricardo.filho2@aiesec.net"
      },
      {
        id: "37",
        city: "SANTOS",
        name: "Andressa Kelly",
        cellphone: "13 98169-9296",
        email: "andressa.kelly@aiesec.net"
      },
      {
        id: "38",
        city: "SAO JOSÉ DO RIO PRETO",
        name: "Thábata Savóia",
        cellphone: "17 9 9107-4386",
        email: "thabata.savoia@aiesec.net"
      },
      {
        id: "39",
        city: "SOROCABA",
        name: "Lucas Pires",
        cellphone: "(15)998054183",
        email: "lucas.pires@aiesec.net"
      },
      {
        id: "40",
        city: "VOLTA REDONDA",
        name: "Isvilaine da Silva Conceição",
        cellphone: "24999153370",
        email: "Isvilaine.conceicao@aiesec.net"
      },
      {
        id: "41",
        city: "BALNEARIO CAMBORIU",
        name: "Carolina Duarte",
        cellphone: "55 49 9 9122-5784",
        email: "carolina.duarte@aiesec.net"
      },
      {
        id: "42",
        city: "CAMPO GRANDE",
        name: "Stefanya Rocha Padilha",
        cellphone: "(67) 992250632",
        email: "stefanya.padilha@aiesec.net"
      },
      {
        id: "43",
        city: "FRANCA",
        name: "Rayra Alves de Faria",
        cellphone: "(16)997526444",
        email: "rayra.faria@aiesec.net"
      },
      {
        id: "44",
        city: "JOINVILLE",
        name: "Nicole Richetti",
        cellphone: "5549988623975",
        email: "nicole.richetti@aiesec.net"
      },
      {
        id: "45",
        city: "LONDRINA",
        name: "Lígia dos Santos Souza",
        cellphone: "44 9 9940-5576",
        email: "ligia.dossantos@aiesec.net"
      },
      {
        id: "46",
        city: "MANAUS",
        name: "Cybelle Assis Arruda",
        cellphone: "92 9 82559918",
        email: "cybelle.assisarruda@aiesec.net"
      },
      {
        id: "47",
        city: "PALMAS",
        name: "Pedro Oliveira",
        cellphone: "63 9 84636788",
        email: "pedro.oliveira@aiesec.net"
      },
      {
        id: "48",
        city: "PELOTAS",
        name: "Lara Bernardi Viscardi Mesquita",
        cellphone: "53 991690909",
        email: "lara.mesquita@aiesec.net"
      },
      {
        id: "49",
        city: "SÃO LUIS",
        name: "Wanessa Bandeira",
        cellphone: "55(98)987506823",
        email: "wanessa.bandeira@aiesec.net"
      },
      {
        id: "50",
        city: "VALE DO PARAÍBA",
        name: "Gabriel Martins",
        cellphone: "55 19 99881-1919",
        email: "gabriel.martins2@aiesec.net"
      }
    ],
    gv: [
      {
        id: 1,
        city: "BELO HORIZONTE",
        name: "Pedro Henrique de Oliveira  Gonçalves",
        cellphone: "55 31 99360-8825",
        email: "pedro.goncalves3@aiesec.net"
      },
      {
        id: 2,
        city: "BRASÍLIA",
        name: "Bruno Martins",
        cellphone: "55 61 99949-1042",
        email: "bruno.martins@aiesec.net"
      },
      {
        id: 3,
        city: "ESPM",
        name: "Henrique Figueiro",
        cellphone: "55 11 98608-2232",
        email: "henrique.figueiro@aiesec.net"
      },
      {
        id: 4,
        city: "JOAO PESSOA",
        name: "Fernanda Maia de Araújo",
        cellphone: "55 83 99629-6024",
        email: "fernanda.maia@aiesec.net"
      },
      {
        id: 5,
        city: "NATAL",
        name: "Lara Freire",
        cellphone: "55 84 99106-2863",
        email: "lara.freire@aiesec.net"
      },
      {
        id: 6,
        city: "PORTO ALEGRE",
        name: "Alessandra Krick",
        cellphone: "55 51 98128-0400",
        email: "alessandra.krick@aiesec.net"
      },
      {
        id: 7,
        city: "SALVADOR",
        name: "Emanuella Müssnich",
        cellphone: "55 71 9120-3588",
        email: "emanuella.wendisch@aiesec.net"
      },
      {
        id: 8,
        city: "VITÓRIA",
        name: "Yasmin Pimentel",
        cellphone: "55 27 97400-7897",
        email: "yasmin.pimentel@aiesec.net"
      },
      {
        id: 9,
        city: "ABC",
        name: "Larissa Montarelli",
        cellphone: "55 11 97111-2897",
        email: "larissa.montarelli@aiesec.net"
      },
      {
        id: 10,
        city: "CURITIBA",
        name: "Tainá Golfe Andreazzi ",
        cellphone: "55 41 99877-5108",
        email: "taina.golfe@aiesec.net"
      },
      {
        id: 11,
        city: "FORTALEZA",
        name: "Paula Teixeira Ribeiro",
        cellphone: "55 85 99102-1958",
        email: "paula.teixeiraribeiro@aiesec.net"
      },
      {
        id: 12,
        city: "MARINGÁ",
        name: "Guilherme Kazuo Sakamoto",
        cellphone: "55 18 99793-1266",
        email: "guilherme.sakamoto@aiesec.net"
      },
      {
        id: 13,
        city: "RIO DE JANEIRO",
        name: "Arthur Andrade",
        cellphone: "55 21 98051-5003",
        email: "arthur.andrade@aiesec.net"
      },
      {
        id: 14,
        city: "SANTA MARIA",
        name: "Yuri Guasso Gavioli",
        cellphone: "55 55 99693-4294",
        email: "yuri.gavioli@aiesec.net"
      },
      {
        id: 15,
        city: "SAO CARLOS",
        name: "Herisson  Oliveira",
        cellphone: "55 16 99181-7725",
        email: "herisson.oliveira@aiesec.net"
      },
      {
        id: 16,
        city: "UBERLÂNDIA",
        name: "Mariana Rigo Estevão",
        cellphone: "55 34 99990-8044",
        email: "mariana.rigo@aiesec.net"
      },
      {
        id: 17,
        city: "USP",
        name: "Mathias Jonas Parra",
        cellphone: "55 11 98576-0613",
        email: "mathias.parra@aiesec.net"
      },
      {
        id: 18,
        city: "VIÇOSA",
        name: "Giulliana Mendes Cária",
        cellphone: "55 31 98386-9566",
        email: "giulliana.mendes@aiesec.net"
      },
      {
        id: 19,
        city: "BELÉM",
        name: "Giovani Reis",
        cellphone: "55 91 99840-0119",
        email: "giovani.reis@aiesec.net"
      },
      {
        id: 20,
        city: "CUIABA",
        name: "Júlia Borges e Santos",
        cellphone: "55 65 99902-1577",
        email: "julia.borges2@aiesec.net"
      },
      {
        id: 22,
        city: "FLORIANÓPOLIS",
        name: "Pedro Neto",
        cellphone: "55 47 9 9904-8351",
        email: "pedro.neto2@aiesec.net"
      },
      {
        id: 23,
        city: "GETÚLIO VARGAS",
        name: "Giulia Tenca",
        cellphone: "55 11 99420-4161",
        email: "giulia.tenca@aiesec.net"
      },
      {
        id: 24,
        city: "INSPER",
        name: "Douglas  Gonçalves",
        cellphone: "55 11 97472-3600",
        email: "douglas.goncalves2@aiesec.net"
      },
      {
        id: 25,
        city: "LIMEIRA",
        name: "João Pedro de Santis ",
        cellphone: "55 11 99925-9980",
        email: "joaop.santis@aiesec.net"
      },
      {
        id: 26,
        city: "MACEIO",
        name: "Natália Recco ",
        cellphone: "55 82 99698-2911",
        email: "natalia.recco@aiesec.net"
      },
      {
        id: 27,
        city: "MACKENZIE",
        name: "Ana Carolina Padilha",
        cellphone: "55 11 96071-6768",
        email: "ana.ramospadilha10@aiesec.net"
      },
      {
        id: 28,
        city: "RECIFE",
        name: "Marco Antonio Reis",
        cellphone: "55 84 98783-6826",
        email: "marco.reis@aiesec.net"
      },
      {
        id: 29,
        city: "TERESINA",
        name: "Vitória de Freitas",
        cellphone: "55 86 99945-6126",
        email: "vitoria.freitaspaulo@aiesec.net"
      },
      {
        id: 30,
        city: "VALE DO SAO FRANCISCO",
        name: "Gersica Larisse",
        cellphone: "55 87 98126-0833",
        email: "gersica.brito@aiesec.net"
      },
      {
        id: 31,
        city: "ARACAJU",
        name: "Aécio Lisboa",
        cellphone: "55 79 99987-2098",
        email: "aecio.lisboa@aiesec.net"
      },
      {
        id: 32,
        city: "BAURU",
        name: "Isabella Toledo Kato",
        cellphone: "55 14 99684-4521",
        email: "isabella.kato@aiesec.net"
      },
      {
        id: 33,
        city: "BLUMENAU",
        name: "Nicole Cristine Dressler",
        cellphone: "55 47 99693-9341",
        email: "nicole.dressler@aiesec.net"
      },
      {
        id: 34,
        city: "CHAPECO",
        name: "Alexandra Fank Thomé",
        cellphone: "55 49 98850-2474",
        email: "alexandra.thome@aiesec.net"
      },
      {
        id: 35,
        city: "GOIANIA",
        name: "Ariadine Casas",
        cellphone: "55 62 98179-1298",
        email: "ariadine.casas@aiesec.net"
      },
      {
        id: 36,
        city: "ITAJUBA",
        name: "Danilo Silveira",
        cellphone: "55 67 99155-9149",
        email: "danilo.silveira@aiesec.net"
      },
      {
        id: 38,
        city: "SANTOS",
        name: "Luiza Constancio",
        cellphone: "55 13 98160-7333",
        email: "luiza.constancio2@aiesec.net"
      },
      {
        id: 39,
        city: "SAO JOSÉ DO RIO PRETO",
        name: "Izabel Santa Dutka",
        cellphone: "55 14 98114-7185",
        email: "izabel.santadutka5@aiesec.net "
      },
      {
        id: 40,
        city: "SOROCABA",
        name: "Eduardo Nunes de Siqueira Coelho",
        cellphone: "55 15 99656-7062",
        email: "eduardo.coelho@aiesec.net"
      },
      {
        id: 41,
        city: "VOLTA REDONDA",
        name: "Pedro Freire",
        cellphone: "55 21 97970-2009",
        email: "pedro.freiresoares@aiesec.net"
      },
      {
        id: 42,
        city: "BALNEARIO CAMBORIU",
        name: "Gabriel Seixo",
        cellphone: "55 47 99207-7440",
        email: "gabriel.seixo@aiesec.net"
      },
      {
        id: 43,
        city: "CAMPO GRANDE",
        name: "Ariane Schio de Azevedo",
        cellphone: "55 67 99631-2252",
        email: "ariane.schio@aiesec.net"
      },
      {
        id: 44,
        city: "FRANCA",
        name: "Bianca Papassidro",
        cellphone: "55 16 99252-5472",
        email: "bianca.papassidro@aiesec.net"
      },
      {
        id: 45,
        city: "JOINVILLE",
        name: "João Vitor Lopes Ávila",
        cellphone: "55 41 9245-1288",
        email: "joaovitor.lopesavila@aiesec.net"
      },
      {
        id: 46,
        city: "LONDRINA",
        name: "Caroline Paricio",
        cellphone: "55 43 9990-4463",
        email: "caroline.panicio@aiesec.net"
      },
      {
        id: 47,
        city: "MANAUS",
        name: "Fabiane Pinho",
        cellphone: "55 92 98216-2943",
        email: "fabiane.pinho@aiesec.net"
      },
      {
        id: 48,
        city: "PALMAS",
        name: "Julyane Lopes",
        cellphone: "55 63 8502-4163",
        email: "julyane.lopes@aiesec.net"
      },
      {
        id: 49,
        city: "PELOTAS",
        name: "Bianca Becker Pertuzatti",
        cellphone: "55 53 98452-2721",
        email: "bianca.pertuzatti@aiesec.net"
      },
      {
        id: 50,
        city: "SÃO LUIS",
        name: "Ariallyson Campos",
        cellphone: "55 98 98183-4647",
        email: "ariallyson.campos@aiesec.net"
      },
      {
        id: 51,
        city: "VALE DO PARAÍBA",
        name: "Mariana Duque",
        cellphone: "55 24 99225-3433",
        email: "mariana.duque2@aiesec.net"
      }
    ],
    gt:
      [
        {
          id: 1,
          name: "Monique Miranda",
          city: "ESPM",
          cellphone: "55 12 99115-4882",
          email: "monique.miranda@aiesec.net"
        },
        {
          id: 2,
          name: "Isabelle Tiecher",
          city: "PORTO ALEGRE",
          cellphone: "55 51 8335 0112",
          email: "isabelle.tiecher@aiesec.net"
        },
        {
          id: 3,
          name: "Isabella Saraceni Novaes",
          city: "BELO HORIZONTE",
          cellphone: "55 (31) 9 9882 1288",
          email: "Isabella.saraceni@aiesec.net"
        },
        {
          id: 4,
          name: "Marcela Rios",
          city: "SALVADOR",
          cellphone: "55 (71) 8396 - 1342",
          email: "marcela.riosdasilva@aiesec.net"
        },
        {
          id: 5,
          name: "Silvia Guimarães Suzart Silva",
          city: "VITÓRIA",
          cellphone: "(27)99995-2452",
          email: "silvia.suzart@aiesec.net"
        },
        {
          id: 6,
          name: "Maria Tereza Bastos",
          city: "CURITIBA",
          cellphone: "(41) 98533 3433",
          email: "mariatereza.bastos@aiesec.net"
        },
        {
          id: 7,
          name: "Yara Barcellos",
          city: "BRASÍLIA",
          cellphone: "55 61 99441-2654",
          email: "yara.barcellos@aiesec.net"
        },
        {
          id: 8,
          name: "Marcio Magalhaes",
          city: "RIO DE JANEIRO",
          cellphone: "55 (21) 976147454",
          email: "marcio.magalhaes@aiesec.net"
        },
        {
          id: 9,
          name: "Catharina Antunes",
          city: "GETÚLIO VARGAS",
          cellphone: "55 51 98193-9779",
          email: "catharina.antunes@aiesec.net"
        },
        {
          id: 10,
          name: "Isabela Sena",
          city: "SAO CARLOS",
          cellphone: "55 19 981506466",
          email: "isabela.sena@aiesec.net"
        },
        {
          id: 11,
          name: "Petrus Alves",
          city: "JOAO PESSOA",
          cellphone: "55 (83) 996960216",
          email: "petrusalves.defreitas5@aiesec.net"
        },
        {
          id: 12,
          name: "Larissa Cupido",
          city: "UBERLÂNDIA",
          cellphone: "(34)99190 8532",
          email: "larissa.delucena@aiesec.net"
        },
        {
          id: 13,
          name: "Diego Monteiro",
          city: "FORTALEZA",
          cellphone: "55 85 997932037",
          email: "diego.monteiro@aiesec.net"
        },
        {
          id: 14,
          name: "Alisson Becker",
          city: "SANTA MARIA",
          cellphone: "(55) 997174106",
          email: "alisson.becker@aiesec.net"
        },
        {
          id: 15,
          name: "Paula Imperatore",
          city: "USP",
          cellphone: "55 11 956190452",
          email: "paula.imperatore@aiesec.net"
        },
        {
          id: 16,
          name: "Gabriel da Cunha",
          city: "BLUMENAU",
          cellphone: "5547992054025",
          email: "gabriel.cunha2@aiesec.net"
        },
        {
          id: 17,
          name: "Lívia Queiroz ",
          city: "RECIFE",
          cellphone: "55 81 .998492779",
          email: "livia.queirozdeoliveira@aiesec.net"
        },
        {
          id: 18,
          name: "Maria Carolina Cipolotti Fabiano",
          city: "ABC",
          cellphone: "(11) 993058929",
          email: "maria.fabiano@aiesec.net"
        }
      ],
    ge:
      [
        {
          id: 1,
          city: "ESPM",
          name: "Anna Victória Barbosa",
          cellphone: "(11) 96543-9645",
          email: "anna.barbosa2@aiesec.net"
        },
        {
          id: 2,
          city: "PORTO ALEGRE",
          name: "Andresa Motta",
          cellphone: "55 51 9181 13 64",
          email: "andresa.tassinari@aiesec.net"
        },
        {
          id: 3,
          city: "BELO HORIZONTE",
          name: "Gabriele Wakiyama",
          cellphone: " 55 31 99350-2058",
          email: "gabriele.wakiyama@aiesec.net"
        },
        {
          id: 4,
          city: "SALVADOR",
          name: "Marcela Rios",
          cellphone: "55 (71) 8396 - 1342",
          email: "marcela.riosdasilva@aiesec.net"
        },
        {
          id: 5,
          city: "CURITIBA",
          name: "Victor Breda Pepplow",
          cellphone: "41 99643-3307",
          email: "victor.breda@aiesec.net"
        },
        {
          id: 6,
          city: "BRASÍLIA",
          name: "Pauline Wagner",
          cellphone: "55 61 98112-2373",
          email: "pauline.goncalves@aiesec.net"
        },
        {
          id: 7,
          city: "NATAL",
          name: "Adriane França",
          cellphone: "55 85 98744-5820",
          email: "Adriane.franca@aiesec.net"
        },
        {
          id: 8,
          city: "VITÓRIA",
          name: "Maurídes Oliveira",
          cellphone: "55 27 99847-1246",
          email: "maurides.olivera@aiesec.net"
        },
        {
          id: 9,
          city: "RIO DE JANEIRO",
          name: "Alice Oliveira",
          cellphone: "55 (21) 979 318 717",
          email: "alice.azeitonas@aiesec.net"
        },
        {
          id: 10,
          city: "MARINGÁ",
          name: "Anelivia Freire",
          cellphone: "55 44 99833-2141",
          email: "anelivia.freire2@aiesec.net"
        },
        {
          id: 11,
          city: "SAO CARLOS",
          name: "Beatriz Aquino",
          cellphone: "55 67 999999879",
          email: "beatriz.aquino@aiesec.net"
        },
        {
          id: 12,
          city: "FLORIANÓPOLIS",
          name: "Larisssa Gheller",
          cellphone: "55 48 991082060",
          email: "larissa.gheller@aiesec.net"
        },
        {
          id: 13,
          city: "LIMEIRA",
          name: "Nathan Arnaldo Bido",
          cellphone: "55 11 94475-3583",
          email: "nathan.arnaldo@aiesec.net"
        },
        {
          id: 14,
          city: "UBERLÂNDIA",
          name: "Anna Clara Sampaio",
          cellphone: "55 12 99718-1046",
          email: "anna.clara@aiesec.net"
        },
        {
          id: 15,
          city: "FORTALEZA",
          name: "Débora Oliveira",
          cellphone: "55 85 996123106",
          email: "debora.oliveira@aiesec.net"
        },
        {
          id: 16,
          city: "SANTA MARIA",
          name: "Bruno Manno Mendonça",
          cellphone: "55 31 98772-5601",
          email: "bruno.manno@aiesec.net"
        },
        {
          id: 17,
          city: "VIÇOSA",
          name: "João Paulo Rivelli Chaves",
          cellphone: "5531999082191",
          email: "joaopaulo.rivelli@aiesec.net"
        },
        {
          id: 18,
          city: "RECIFE",
          name: "Danielly  Silva",
          cellphone: "55 81 986175670",
          email: "danielly.silva2@aiesec.net"
        },
        {
          id: 19,
          city: "ABC",
          name: "Nádia Baggio",
          cellphone: "55 11 98117 4367",
          email: "nadia.baggio@aiesec.net"
        },
        {
          id: 20,
          city: "ARACAJU",
          name: "Nathalia Sampaio",
          cellphone: "55 79 998217620",
          email: "nathalia.sampaio@aiesec.net"
        },
        {
          id: 22,
          city: "VALE DO SAO FRANCISCO",
          name: "Bárbara Monteiro",
          cellphone: "5587988041812",
          email: "barbara.monteiro2@aiesec.net"
        },
        {
          id: 23,
          city: "CUIABA",
          name: "Matheus Pajanoti",
          cellphone: "55 65 996798899",
          email: "matheus.pajanoti@aiesec.net"
        },
        {
          id: 24,
          city: "ITAJUBA",
          name: "Carol Moretti",
          cellphone: "5512997408512",
          email: "anacarolina.moretti@aiesec.net "
        }
      ]
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.selectContactList();
  }

  selectContactList() {
    this.actualPage = this.router.url.replace('/', '');
    let list = null;
    switch (this.actualPage) {
      case 'lar-global':
        list = this.allProgramsContacts.host;
        break;
      case 'voluntario-global':
        list = this.allProgramsContacts.gv;
        break;
      case 'talento-global':
        list = this.allProgramsContacts.gt;
        break;
      case 'empreendedor-global':
        list = this.allProgramsContacts.ge;
        break;
    }
    this.contactList = _.sortBy(list, (contact) => { return contact.city });
  }

  onSelect(contactId) {
    if (+contactId) {
      this.contact = _.find(this.contactList, (contact) => {
        return contact.id == +contactId
      });
    }
    else {
      this.contact = null;
    }
  }

}
