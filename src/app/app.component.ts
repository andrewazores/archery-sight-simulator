import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  context: CanvasRenderingContext2D;

  targetDistance = 70;
  targetDiameter = 122;
  eyePinDistance = 100;
  apertureDiameter = 10;

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.calculate();
  }

  calculate(): void {
    this.clearCanvas();
    console.log('Calculating', {
      targetDistance: this.targetDistance,
      targetDiameter: this.targetDiameter,
      eyePinDistance: this.eyePinDistance,
      apertureDiameter: this.apertureDiameter,
    });
    this.drawTarget();
  }

  drawTarget(): void {
    const black = '#302e2c';
    const blue = '#00b4e4';
    const red = '#f65058'
    const gold = '#ffe552';
    this.drawConcentricRing(0, black, true);
    this.drawConcentricRing(0, 'white', false);
    this.drawConcentricRing(1, black, true);
    this.drawConcentricRing(1, 'white', false);

    this.drawConcentricRing(2, 'white', true);
    this.drawConcentricRing(2, black, false);
    this.drawConcentricRing(3, 'white', true);
    this.drawConcentricRing(3, black, false);

    this.drawConcentricRing(4, black, true);
    this.drawConcentricRing(4, blue, false);
    this.drawConcentricRing(5, black, true);
    this.drawConcentricRing(5, blue, false);

    this.drawConcentricRing(6, black, true);
    this.drawConcentricRing(6, red, false);
    this.drawConcentricRing(7, black, true);
    this.drawConcentricRing(7, red, false);

    this.drawConcentricRing(8, black, true);
    this.drawConcentricRing(8, gold, false);
    this.drawConcentricRing(9, black, true);
    this.drawConcentricRing(9, gold, false);
  }

  drawConcentricRing(idx: number, color: string, divider: boolean = false): void {
    const canvasWidth = this.canvas.nativeElement.width;
    const canvasHeight = this.canvas.nativeElement.height;
    const maxRadius = Math.min(canvasWidth, canvasHeight)/2;
    const radius = maxRadius - ((maxRadius/10) * idx);

    this.context.beginPath();
    this.context.arc(canvasWidth/2, canvasHeight/2, radius, 0, 2 * Math.PI);
    if (divider) {
      this.context.strokeStyle = color;
      this.context.stroke();
    } else {
      this.context.fillStyle = color;
      this.context.fill();
    }
  }

  clearCanvas(): void {
    const canvasWidth = this.canvas.nativeElement.width;
    const canvasHeight = this.canvas.nativeElement.height;
    this.context.clearRect(0, 0, canvasWidth, canvasHeight);
  }

}
