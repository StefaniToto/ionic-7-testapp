import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Message } from '../services/data.service';
import { FormControl } from '@angular/forms';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent implements OnInit {
  private platform = inject(Platform);
  public form = new FormControl();
  a = 10;
  private _elementRef: any;
  focuschecked: boolean = false;
  formtextarea: any;
  // @Input() message?: Message;
  isIos() {
    return this.platform.is('ios');
  }

  click(e: any) {
    this.form.setValue('eee');
    const myElement: HTMLElement | null =
      document.getElementById('input-sizer');
    if (!!myElement) {
      myElement.dataset['value'] = this.form.value;
    }

    // let val = this.form.value;
    // Array.from(document.getElementsByClassName('input-sizer'), (input: any) => {
    //   let parent = input.parentNode;
    //   function updateSize() {
    //     (input['dataset']['value'] = val), console.log(val);
    //   }
    //   input.addEventListener('input', updateSize);
    //   updateSize();
    // });
  }

  ngOnInit(): void {
    // setInterval(function () {
    //   console.log(document.querySelector(':focus'));
    // }, 1000);
    const fullName = 'Mmmmbiu fwefbiweugfiweu';
    const initials = fullName.toUpperCase();
    const nameArr: Array<string> = initials.split(' ');

    const initialLetters: string =
      nameArr[0].charAt(0) + '' + nameArr[nameArr.length - 1].charAt(0);
    console.log(fullName, initialLetters);
    this.form.valueChanges.subscribe((x) => {
      const myElement: HTMLElement | null =
        document.getElementById('input-sizer');

      if (!!myElement) {
        console.log(myElement.dataset['value'], this.form.value);
        myElement.dataset['value'] = this.form.value;
      }
    });
  }
  sliderValue: any;
  moveStart: RangeValue = 0;
  moveEnd: RangeValue = 100;

  onIonChange(ev: Event) {
    // this.moveStart = (ev as RangeCustomEvent).detail.value;
    console.log('11111');
  }

  mouseUp(a: any) {
    console.log(a);
  }
  currentValue = 0;
  currentDualValues = {
    lower: 25,
    upper: 50,
  };

  // use this for single slider
  setValue($event: Event): void {
    this.currentValue = parseInt(($event.target as HTMLInputElement).value, 10);
  }

  blurMsg() {
    if (this.formtextarea.length === 0) this.focuschecked = false;
    let elem = Array.from(
      document.getElementsByClassName(
        'counter1'
      ) as HTMLCollectionOf<HTMLElement>
    );

    elem[0].style.fontSize = '44px !important';
    elem[0].style.color = 'red !important';
    elem[0].style.display = 'block';

    console.log('blurMsg', elem[0].classList.contains('has-focus'));
  }

  setFormValue(e: any) {
    console.log(e.detail);
  }

  focusMsg() {
    this.focuschecked = true;
    let elem = Array.from(
      document.getElementsByClassName(
        'counter1'
      ) as HTMLCollectionOf<HTMLElement>
    );
    console.log('focusMsg', elem[0].classList.contains('has-focus'), elem);

    elem[0].style.fontSize = '44px !important';
    elem[0].style.color = 'red !important';
    elem[0].style.display = 'none';
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} / ${maxLength}`;
  }
}
