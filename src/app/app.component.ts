import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  length = 0;
  flag = true;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
    this.flag = false;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
    this.flag = false;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
    this.flag = false;
  }

  onButtonCLick(){

    const numbers = '1234567890';
    const letter = 'qwertyuiopasdfghjklzxcvbnm';
    const symbol = '!@#$%^&*()';

    let validChar = '';

    if(this.includeLetters){
      validChar += letter;
    }
    if(this.includeNumbers){
      validChar += numbers;
    }
    if(this.includeSymbols){
      validChar += symbol;
    }

    let generatedPassword = '';
    
    for(let i=0;i<this.length;i++){
      const idx = Math.floor(Math.random()*validChar.length);
      generatedPassword += validChar[idx];
    }
    console.log(generatedPassword);
    this.password = generatedPassword;
    console.log(this.password);    
  }

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);    

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }

  }
}
