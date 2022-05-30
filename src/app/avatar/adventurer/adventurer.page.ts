import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-adventurer',
  templateUrl: './adventurer.page.html',
  styleUrls: ['./adventurer.page.scss'],
})
export class AdventurerPage implements OnInit {
  //Variaveis do avatar
  skinColors=[
    {colorSkin: 'variant01',
      colorHex: '#F3EDE8'
    },
    {colorSkin: 'variant02',
      colorHex: '#F2D3B1'
    },
    {colorSkin: 'variant03',
      colorHex: '#ECAD80'
    },
    {colorSkin: 'variant04',
      colorHex: '#9E5622'
    },
    {colorSkin: 'variant05',
      colorHex: '#763900'
    }
  ];
  skin='&skinColor=' + 'variant03';

  longHair=['long19', 'long18', 'long17', 'long16',
   'long15', 'long14', 'long13','long12', 'long11',
    'long10', 'long09', 'long08', 'long07', 'long06',
     'long05', 'long04', 'long03', 'long02', 'long01'];

  shortHair=['short16','short15', 'short14', 'short13','short12',
  'short11','short10', 'short09', 'short08', 'short07', 'short06',
  'short05', 'short04', 'short03', 'short02', 'short01'];

  hair = '&hair=' +  'long13';

  eyes=['variant26', 'variant25', 'variant24', 'variant23',
  'variant22', 'variant21', 'variant20', 'variant19', 'variant18',
   'variant17', 'variant16', 'variant15', 'variant14', 'variant13',
    'variant12', 'variant11', 'variant10', 'variant09',
    'variant08', 'variant07', 'variant06', 'variant05', 'variant04',
     'variant03', 'variant02', 'variant01'];
  eye = '&eyes=variant07';

  eyebrows = ['variant10', 'variant09', 'variant08',
  'variant07', 'variant06', 'variant05', 'variant04',
  'variant03', 'variant02', 'variant01'];
  eyebrow =  '&eyebrow=variant05';

  mouths=['variant30','variant29','variant28','variant27','variant26', 'variant25', 'variant24', 'variant23',
  'variant22', 'variant21', 'variant20', 'variant19', 'variant18',
   'variant17', 'variant16', 'variant15', 'variant14', 'variant13',
    'variant12', 'variant11', 'variant10', 'variant09',
    'variant08', 'variant07', 'variant06', 'variant05', 'variant04',
     'variant03', 'variant02', 'variant01'];
  mouth='&mouth=variant10';

  flipVar = 'flip=' + false;
  backgroundColor = '&backgroundColor=' + '%23e65c5c';

   //var para color picker
  //colorcode='';

  //request
  url = 'https://avatars.dicebear.com/api/adventurer/:seed.png?' + this.flipVar +  this.backgroundColor + this.skin + this.hair
  + this.eye + this.eyebrow + this.mouth;

  constructor() {}

  ngOnInit() {
    /*const colorPicker = iro.ColorPicker('#picker',{
      layout: [
        {
          component: iro.ui.Wheel,
        },
        {
          component: iro.ui.Slider,
        },
      ],
      width:150,
      color:'#fff'
    });

    colorPicker.on('color:change', function(color){
      this.colorcode =  color.rgbString;
      console.log(this.colorcode.replace('rgb', ''));
      this.backgroundColor = 'backgroundColor=' + this.colorcode.replace('rgb', '');
      this.url = 'https://avatars.dicebear.com/api/adventurer/:seed.png?' + this.flipVar + '&' + this.backgroundColor;
    });*/
  }

  onChange(value){
    console.log(value);
  }

  changeMouth(event){
    const h = event.target.value;
    console.log(h);
    this.mouth = '&mouth=' + h;
    this.atualizarUrl();
  }

  changeEyebrows(event){
    const h = event.target.value;
    console.log(h);
    this.eyebrow = '&eyebrows=' + h;
    this.atualizarUrl();
  }

  changeEye(event){
    const h = event.target.value;
    console.log(h);
    this.eye = '&eyes=' + h;
    this.atualizarUrl();
  }

  changeHair(event){
    const h = event.target.value;
    console.log(h);
    this.hair = '&hair=' + h;
    this.atualizarUrl();
  }

  skinColor(index){
    this.skin = '&skinColor=' + this.skinColors[index].colorSkin;
    this.atualizarUrl();
  }


  atualizarUrl(){
    this.url = 'https://avatars.dicebear.com/api/adventurer/:seed.png?' + this.flipVar +  this.backgroundColor + this.skin + this.hair
    + this.eye + this.eyebrow + this.mouth;
    console.log(this.url);
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

