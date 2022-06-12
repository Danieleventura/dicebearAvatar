/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-adventurer',
  templateUrl: './adventurer.page.html',
  styleUrls: ['./adventurer.page.scss'],
})
export class AdventurerPage implements OnInit {
  seed = '';

  urlButtons = 'https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg?b=%235fbfbd'; //avatar para usar nos botoes
  avatar=[
    {name: 'Adventurer',
      img: 'https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg?b=%2360d7cf',
      path: 'tab1'
    },
    {name: 'Adventurer Neutral',
      img: 'https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg',
      path: 'tab1'
    },
    {name: 'Avataaars',
      img: 'https://avatars.dicebear.com/api/avataaars/daaaa.svg?b=%23e698e4',
      path: 'tab1'
    },
    {name: 'Big Ears',
      img: 'https://avatars.dicebear.com/api/big-ears/adaaaw.svg?b=%2385db8b',
      path: 'tab1'
    },
    {name: 'Big Ears Neutral',
      img: 'https://avatars.dicebear.com/api/big-ears-neutral/adaaaw.svg',
      path: 'tab1'
    },
    {name: 'Big Smile',
      img: 'https://avatars.dicebear.com/api/big-smile/adaawwqfhdgtrewqzcaw.svg?b=%23d69999',
      path: 'tab1'
    },
    {name: 'Bottts',
      img: 'https://avatars.dicebear.com/api/bottts/adaawwwqfhdgtrewqzcaw.svg?b=%23ee8787',
      path: 'tab1'
    },
    {name: 'Croodles',
      img: 'https://avatars.dicebear.com/api/croodles/.svg?b=%23e7aaf8',
      path: 'tab1'
    },
    {name: 'Croodles Neutral',
      img: 'https://avatars.dicebear.com/api/croodles-neutral/cr.svg?b=%23f5d1d1',
      path: 'tab1'
    },
    {name: 'Identicon',
      img: 'https://avatars.dicebear.com/api/identicon/cr.svg',
      path: 'tab1'
    },
    {name: 'Initials',
      img: 'https://avatars.dicebear.com/api/initials/dv.svg',
      path: 'tab1'
    },
    {name: 'Micah',
      img: 'https://avatars.dicebear.com/api/micah/.svg?b=%2384e1b1',
      path: 'tab1'
    },
    {name: 'Miniavs',
      img: 'https://avatars.dicebear.com/api/miniavs/idsa.svg?b=%23c0b0d8',
      path: 'tab1'
    },
    {name: 'Open Peeps',
      img: 'https://avatars.dicebear.com/api/open-peeps/.svg?b=%23b1d3b3',
      path: 'tab1'
    },
    {name: 'Personas',
      img: 'https://avatars.dicebear.com/api/personas/.svg?b=%23f8f58b',
      path: 'tab1'
    },
    {name: 'Pixel Art',
      img: 'https://avatars.dicebear.com/api/pixel-art/.svg?b=%23d7b6a7',
      path: 'tab1'
    },
    {name: 'Pixel Art Neutral',
      img: 'https://avatars.dicebear.com/api/pixel-art-neutral/.svg',
      path: 'tab1'
    }
  ];

  skin='&skinColor=' + 'variant03';

  hairs =[
    {url: this.urlButtons + '&hair=long19',
     id: 'long19'
    },
    {url: this.urlButtons + '&hair=long18',
    id: 'long18'
    },
    {url: this.urlButtons + '&hair=long17',
    id: 'long17'
    },
    {url: this.urlButtons + '&hair=long16',
    id: 'long16'
    },
    {url: this.urlButtons + '&hair=long15',
    id: 'long15'
    },
    {url: this.urlButtons + '&hair=long14',
    id: 'long14'
    },
    {url: this.urlButtons + '&hair=long13',
    id: 'long13'
    },
    {url: this.urlButtons + '&hair=long12',
    id: 'long12'
    },
    {url: this.urlButtons + '&hair=long11',
    id: 'long11'
    },
    {url: this.urlButtons + '&hair=long10',
    id: 'long10'
    },
    {url: this.urlButtons + '&hair=long09',
    id: 'long09'
    },
    {url: this.urlButtons + '&hair=long08',
    id: 'long08'
    },
    {url: this.urlButtons + '&hair=long07',
    id: 'long07'
    },
    {url: this.urlButtons + '&hair=long06',
    id: 'long06'
    },
    {url: this.urlButtons + '&hair=long05',
    id: 'long05'
    },
    {url: this.urlButtons + '&hair=long04',
    id: 'long04'
    },
    {url: this.urlButtons + '&hair=long03',
    id: 'long03'
    },
    {url: this.urlButtons + '&hair=long02',
    id: 'long02'
    },
    {url: this.urlButtons + '&hair=long01',
    id: 'long01'
    },
    {url: this.urlButtons + '&hair=short16',
    id: 'short16'
    },
    {url: this.urlButtons + '&hair=short15',
    id: 'short15'
    },
    {url: this.urlButtons + '&hair=short14',
    id: 'short14'
    },
    {url: this.urlButtons + '&hair=short13',
    id: 'short13'
    },
    {url: this.urlButtons + '&hair=short12',
    id: 'short12'
    },
    {url: this.urlButtons + '&hair=short11',
    id: 'short11'
    },
    {url: this.urlButtons + '&hair=short10',
    id: 'short10'
    },
    {url: this.urlButtons + '&hair=short09',
    id: 'short09'
    },
    {url: this.urlButtons + '&hair=short08',
    id: 'short08'
    },
    {url: this.urlButtons + '&hair=short07',
    id: 'short07'
    },
    {url: this.urlButtons + '&hair=short06',
    id: 'short06'
    },
    {url: this.urlButtons + '&hair=short05',
    id: 'short05'
    },
    {url: this.urlButtons + '&hair=short04',
    id: 'short04'
    },
    {url: this.urlButtons + '&hair=short03',
    id: 'short03'
    },
    {url: this.urlButtons + '&hair=short02',
    id: 'short02'
    },
    {url: this.urlButtons + '&hair=short01',
    id: 'short01'
    }];

  hairColor = '';
  hair = '';

  eyes=[
    {url: this.urlButtons + '&eyes=variant26',
     id: 'variant26'
    },
    {url:  this.urlButtons + '&eyes=variant25',
     id: 'variant25'
    },
    {url:  this.urlButtons + '&eyes=variant24',
     id: 'variant24'
    },
    {url:  this.urlButtons + '&eyes=variant23',
     id: 'variant23'
    },
    {url:  this.urlButtons + '&eyes=variant22',
     id: 'variant22'
    },
    {url:  this.urlButtons + '&eyes=variant21',
     id: 'variant21'
    },
    {url:  this.urlButtons + '&eyes=variant20',
     id: 'variant20'
    },
    {url:  this.urlButtons + '&eyes=variant19',
     id: 'variant19'
    },
    {url:  this.urlButtons + '&eyes=variant18',
     id: 'variant18'
    },
    {url:  this.urlButtons + '&eyes=variant17',
     id: 'variant17'
    },
    {url:  this.urlButtons + '&eyes=variant16',
     id: 'variant16'
    },
    {url:  this.urlButtons + '&eyes=variant15',
     id: 'variant15'
    },
    {url:  this.urlButtons + '&eyes=variant14',
     id: 'variant14'
    },
    {url:  this.urlButtons + '&eyes=variant13',
     id: 'variant13'
    },
    {url:  this.urlButtons + '&eyes=variant12',
     id: 'variant12'
    },
    {url:  this.urlButtons + '&eyes=variant11',
     id: 'variant11'
    },
    {url:  this.urlButtons + '&eyes=variant10',
     id: 'variant10'
    },
    {url:  this.urlButtons + '&eyes=variant09',
     id: 'variant09'
    },
    {url:  this.urlButtons + '&eyes=variant08',
     id: 'variant08'
    },
    {url:  this.urlButtons + '&eyes=variant07',
     id: 'variant07'
    },
    {url:  this.urlButtons + '&eyes=variant06',
     id: 'variant06'
    },
    {url:  this.urlButtons + '&eyes=variant05',
     id: 'variant05'
    },
    {url:  this.urlButtons + '&eyes=variant04',
     id: 'variant04'
    },
    {url:  this.urlButtons + '&eyes=variant03',
     id: 'variant03'
    },
    {url:  this.urlButtons + '&eyes=variant02',
     id: 'variant02'
    },
    {url:  this.urlButtons + '&eyes=variant01',
     id: 'variant01'
    }];
  eye = '';

  eyebrows = [
    {url: this.urlButtons +  '&eyebrows=variant10',
     id: 'variant10'
    },
    {url:this.urlButtons +  '&eyebrows=variant09',
     id: 'variant09'
    },
    {url: this.urlButtons +  '&eyebrows=variant08',
     id: 'variant08'
    },
    {url: this.urlButtons +  '&eyebrows=variant07',
     id: 'variant07'
    },
    {url: this.urlButtons +  '&eyebrows=variant06',
     id: 'variant06'
    },
    {url: this.urlButtons +  '&eyebrows=variant05',
     id: 'variant05'
    },
    {url: this.urlButtons +  '&eyebrows=variant04',
     id: 'variant04'
    },
    {url: this.urlButtons +  '&eyebrows=variant03',
     id: 'variant03'
    },
    {url: this.urlButtons +  '&eyebrows=variant02',
     id: 'variant02'
    },
    {url: this.urlButtons +  '&eyebrows=variant01',
     id: 'variant01'
    }];
  eyebrow =  '';

  mouths= [
    {url: this.urlButtons + '&mouth=variant30',
     id: 'variant30'
    },
    {url: this.urlButtons + '&mouth=variant29',
     id: 'variant29'
    },
    {url: this.urlButtons + '&mouth=variant28',
     id: 'variant28'
    },
    {url: this.urlButtons + '&mouth=variant27',
     id: 'variant27'
    },
    {url: this.urlButtons + '&mouth=variant26',
     id: 'variant26'
    },
    {url:  this.urlButtons + '&mouth=variant25',
     id: 'variant25'
    },
    {url:  this.urlButtons + '&mouth=variant24',
     id: 'variant24'
    },
    {url:  this.urlButtons + '&mouth=variant23',
     id: 'variant23'
    },
    {url:  this.urlButtons + '&mouth=variant22',
     id: 'variant22'
    },
    {url:  this.urlButtons + '&mouth=variant21',
     id: 'variant21'
    },
    {url:  this.urlButtons + '&mouth=variant20',
     id: 'variant20'
    },
    {url:  this.urlButtons + '&mouth=variant19',
     id: 'variant19'
    },
    {url:  this.urlButtons + '&mouth=variant18',
     id: 'variant18'
    },
    {url:  this.urlButtons + '&mouth=variant17',
     id: 'variant17'
    },
    {url:  this.urlButtons + '&mouth=variant16',
     id: 'variant16'
    },
    {url:  this.urlButtons + '&mouth=variant15',
     id: 'variant15'
    },
    {url:  this.urlButtons + '&mouth=variant14',
     id: 'variant14'
    },
    {url:  this.urlButtons + '&mouth=variant13',
     id: 'variant13'
    },
    {url:  this.urlButtons + '&mouth=variant12',
     id: 'variant12'
    },
    {url:  this.urlButtons + '&mouth=variant11',
     id: 'variant11'
    },
    {url:  this.urlButtons + '&mouth=variant10',
     id: 'variant10'
    },
    {url:  this.urlButtons + '&mouth=variant09',
     id: 'variant09'
    },
    {url:  this.urlButtons + '&mouth=variant08',
     id: 'variant08'
    },
    {url:  this.urlButtons + '&mouth=variant07',
     id: 'variant07'
    },
    {url:  this.urlButtons + '&mouth=variant06',
     id: 'variant06'
    },
    {url:  this.urlButtons + '&mouth=variant05',
     id: 'variant05'
    },
    {url:  this.urlButtons + '&mouth=variant04',
     id: 'variant04'
    },
    {url:  this.urlButtons + '&mouth=variant03',
     id: 'variant03'
    },
    {url:  this.urlButtons + '&mouth=variant02',
     id: 'variant02'
    },
    {url:  this.urlButtons + '&mouth=variant01',
     id: 'variant01'
    }];
  mouth='';
  mouthCount = 0;

  flipVar = 'flip=' + false;
  backgroundColor = '';

  acessories = [
    {url: this.urlButtons +  '&acessories=sunglasses&accessoiresProbability=100',
     id: 'sunglasses'
    },
    {url: this.urlButtons +  '&acessories=glasses&accessoiresProbability=100',
    id: 'glasses'
    },
    {url: this.urlButtons +  '&acessories=smallGlasses&accessoiresProbability=100',
    id: 'smallGlasses'
    },
    {url: this.urlButtons +  '&acessories=mustache&accessoiresProbability=100',
    id: 'mustache'
    },
    {url: this.urlButtons +  '&acessories=blush&accessoiresProbability=100',
    id: 'blush'
    },
    {url: this.urlButtons +  '&acessories=birthmark&accessoiresProbability=100',
    id: 'birthmark'
    }
    ];
  acessorie = '';
  //request
  url = 'https://avatars.dicebear.com/api/adventurer/:'+ this.seed+ '.svg?'
  + this.hair +  this.backgroundColor + this.hairColor;

  //variavel para colorPicker
  selectedColorHair= '#26a69a'; //pickerHair
  selectedColorSkin= '#90caf9';//pickerSkin


  constructor(public actionSheetController: ActionSheetController) {
  }

  ngOnInit() {
  }

  atualizarUrl(){
    this.url = 'https://avatars.dicebear.com/api/adventurer/:'+ this.seed+ '.svg?' +this.eye + this.eyebrow + this.mouth
    + this.hair +  this.backgroundColor + this.hairColor + this.skin + this.acessorie;
    console.log(this.url);
  }

  ionChange(event){ //random seed//random avatar
    this.atualizarUrl();
  }

  mudarestado(el) {
    const display = document.getElementById(el).style.display;

    if(el === 'div-eye'){
      document.getElementById('div-eye').style.display = 'block';
      document.getElementById('div-mouth').style.display = 'none';
      document.getElementById('div-hair').style.display = 'none';
      document.getElementById('div-skin').style.display = 'none';
      document.getElementById('div-aces').style.display = 'none';
      document.getElementById('div-eyebrows').style.display = 'none';
    }else if(el === 'div-mouth'){
      document.getElementById('div-mouth').style.display = 'block';
      document.getElementById('div-eye').style.display = 'none';
      document.getElementById('div-hair').style.display = 'none';
      document.getElementById('div-skin').style.display = 'none';
      document.getElementById('div-aces').style.display = 'none';
      document.getElementById('div-eyebrows').style.display = 'none';
    } else if(el === 'div-hair'){
      document.getElementById('div-hair').style.display = 'block';
      document.getElementById('div-mouth').style.display = 'none';
      document.getElementById('div-eye').style.display = 'none';
      document.getElementById('div-skin').style.display = 'none';
      document.getElementById('div-aces').style.display = 'none';
      document.getElementById('div-eyebrows').style.display = 'none';
    } else if(el === 'div-skin'){
      document.getElementById('div-skin').style.display = 'block';
      document.getElementById('div-mouth').style.display = 'none';
      document.getElementById('div-eye').style.display = 'none';
      document.getElementById('div-hair').style.display = 'none';
      document.getElementById('div-aces').style.display = 'none';
      document.getElementById('div-eyebrows').style.display = 'none';
    } else if(el === 'div-aces'){
      document.getElementById('div-aces').style.display = 'block';
      document.getElementById('div-mouth').style.display = 'none';
      document.getElementById('div-eye').style.display = 'none';
      document.getElementById('div-hair').style.display = 'none';
      document.getElementById('div-skin').style.display = 'none';
      document.getElementById('div-eyebrows').style.display = 'none';
    } else if(el === 'div-eyebrows'){
      document.getElementById('div-eyebrows').style.display = 'block';
      document.getElementById('div-mouth').style.display = 'none';
      document.getElementById('div-hair').style.display = 'none';
      document.getElementById('div-skin').style.display = 'none';
      document.getElementById('div-aces').style.display = 'none';
      document.getElementById('div-eye').style.display = 'none';
    }
  }

  changeAcessorie(acesssoriId){
    this.acessorie = '&accessoires=' + acesssoriId + '&accessoiresProbability=100';
    this.atualizarUrl();
  }
  onChange(value){
    console.log(value);
  }

  changeMouth(mouthId){
    this.mouth = '&mouth=' + mouthId;
    this.atualizarUrl();
  }

  changeEyebrows(eyebrowId){
    this.eyebrow = '&eyebrows=' + eyebrowId;
    this.atualizarUrl();
  }

  changeEye(eyeId){
      this.eye = '&eyes=' + eyeId;
      this.atualizarUrl();
    }

  changeColorHair(){ //funcao para quando colorpicker hari mudar
    this.hairColor = '&hairColor=' + this.selectedColorHair.replace('#', '%23');
    this.atualizarUrl();
  }

  changeHair(hairId){
    this.hair = '&hair=' + hairId;
    this.atualizarUrl();
  }

  changeColorSkin(){
    this.skin = '&skinColor=' + this.selectedColorSkin.replace('#', '%23');
    this.atualizarUrl();
  }

  flip(){
    if(this.flipVar === 'flip=true'){
      this.flipVar = 'flip=' + false;
    }else{
      this.flipVar= 'flip=' + true;
    }

    this.atualizarUrl();
  }

  background(cor){
    this.backgroundColor = '&backgroundColor=' + cor;
    this.atualizarUrl();
 }

}

