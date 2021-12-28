import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

export enum TargetFace {
  WA_TARGET = 'WA Target',
  WA_FIELD = 'WA Field',
  IFAA = 'IFAA',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  public targetFace = Object.values(TargetFace).filter(v => typeof v === 'string');

  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  context: CanvasRenderingContext2D;

  targetStyle = TargetFace.WA_TARGET;
  targetDistance = 70;
  targetDiameter = 122;
  eyePinDistance = 100;
  apertureDiameter = 10;
  apertureRingThickness = 1;
  apertureColour = 'chartreuse';
  reticleType = '';
  reticleSize = 1.5;
  pinSize = 0.8;
  reticleColour = 'black';
  targetMoa = 0;
  apertureMoa = 0;
  aimPoint: Pair<number, number> = { first: 0, second: 0 };
  canvasDimensions: Pair<number, number> = { first: 0, second: 0};
  canvasScaleX = 1;
  canvasScaleY = 1;

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.onResize();
    this.resetAimpoint();
    this.calculate();
  }

  onResize(event?: any): void {
    const rect = this.context.canvas.getBoundingClientRect();
    this.canvasDimensions = { first: rect.width, second: rect.height };
    this.canvasScaleX = this.context.canvas.width / rect.width;
    this.canvasScaleY = this.context.canvas.height / rect.height;
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
    this.drawAperture();
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const targetDistance = this.targetDistance * 100;

    this.targetMoa = (21600 / Math.PI) * Math.atan(this.targetDiameter / (2*targetDistance));
    this.apertureMoa = (21600 / Math.PI) * Math.atan((this.apertureDiameter / 10) / (2*this.eyePinDistance));
  }

  modelChange(event: any): void {
    console.log({ event });
    this.calculate();
  }

  resetAimpoint(): void {
    this.aimPoint = this.getCanvcasCenter();
    this.calculate();
  }

  drawTarget(): void {
    switch (this.targetStyle) {
      case TargetFace.IFAA:
        this.drawIfaaFace();
        break;
      case TargetFace.WA_FIELD:
        this.drawWaFieldFace();
        break;
      case TargetFace.WA_TARGET:
        // intentional fall-through
      default:
        this.drawWaTargetFace();
        break;
    }
  }

  private drawIfaaFace(): void {
    const blue = '#041e42'; // Pantone 282C
    this.drawConcentricRing(0, 'white', true);
    this.drawConcentricRing(0, blue, false);

    this.drawConcentricRing(2, 'white', true);
    this.drawConcentricRing(2, blue, false);

    this.drawConcentricRing(4, 'white', true);
    this.drawConcentricRing(4, blue, false);

    this.drawConcentricRing(6, 'white', true);
    this.drawConcentricRing(6, blue, false);

    this.drawConcentricRing(8, blue, true);
    this.drawConcentricRing(8, 'white', false);
    this.drawConcentricRing(9, blue, true);
    this.drawConcentricRing(9, 'white', false);
  }

  private drawWaFieldFace(): void {
    const black = '#302e2c';
    const gold = '#ffe552'; // Pantone 107U
    this.drawConcentricRing(0, 'white', true);
    this.drawConcentricRing(0, black, false);

    this.drawConcentricRing(2, 'white', true);
    this.drawConcentricRing(2, black, false);

    this.drawConcentricRing(4, 'white', true);
    this.drawConcentricRing(4, black, false);

    this.drawConcentricRing(6, 'white', true);
    this.drawConcentricRing(6, black, false);

    this.drawConcentricRing(8, black, true);
    this.drawConcentricRing(8, gold, false);
    this.drawConcentricRing(9, black, true);
    this.drawConcentricRing(9, gold, false);
  }

  private drawWaTargetFace(): void {
    const black = '#302e2c'; // Pantone Process Black
    const blue = '#00b4e4' // Pantone 306U
    const red = '#f65058' // Pantone 032U
    const gold = '#ffe552'; // Pantone 107U
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

  drawAperture(): void {
    // work in cm
    const targetDistance = this.targetDistance * 100;

    const apertureOuterDiameter = this.apertureDiameter / 10 + (this.apertureRingThickness / 10);
    const apertureOuterAngle = 2 * Math.atan(apertureOuterDiameter/(2*this.eyePinDistance));

    const apertureInnerDiameter = this.apertureDiameter / 10;
    const apertureInnerAngle = 2 * Math.atan(apertureInnerDiameter/(2*this.eyePinDistance));

    const apertureOuterApparent = Math.abs(2*targetDistance*Math.tan(apertureOuterAngle/2));
    const apertureInnerApparent = Math.abs(2*targetDistance*Math.tan(apertureInnerAngle/2));

    const apertureOuterCanvasScaled = (apertureOuterApparent / this.targetDiameter) * this.getTargetRadius();
    const apertureInnerCanvasScaled = (apertureInnerApparent / this.targetDiameter) * this.getTargetRadius();

    this.context.beginPath();
    this.context.arc(this.aimPoint.first, this.aimPoint.second, apertureOuterCanvasScaled, 0, 2 * Math.PI, false);
    this.context.arc(this.aimPoint.first, this.aimPoint.second, apertureInnerCanvasScaled, 0, 2 * Math.PI, true);
    this.context.fillStyle = this.apertureColour;
    this.context.fill();

    this.drawReticle();
  }

  drawReticle(): void {
    switch (this.reticleType) {
      case 'upPin':
      case 'downPin':
      case 'leftPin':
      case 'rightPin':
        this.drawPost();
        // intentional fall-through
      case 'dot':
        this.drawDot();
        break;
      case 'crosshair':
        this.drawCrosshair();
        break;
      default:
        break;
    }
  }

  private drawPost(): void {
    const targetDistance = this.targetDistance * 100;

    const pinSize = this.pinSize / 10;
    const pinAngle = 2 * Math.atan(pinSize/(2*this.eyePinDistance));
    const pinApparent = Math.abs(2*targetDistance*Math.tan(pinAngle/2));
    const pinCanvasScaled = (pinApparent / this.targetDiameter) * this.getTargetRadius();

    const apertureInnerDiameter = this.apertureDiameter / 10;
    const apertureInnerAngle = 2 * Math.atan(apertureInnerDiameter/(2*this.eyePinDistance));
    const apertureInnerApparent = Math.abs(2*targetDistance*Math.tan(apertureInnerAngle/2));
    const apertureInnerCanvasScaled = (apertureInnerApparent / this.targetDiameter) * this.getTargetRadius();

    this.context.beginPath();
    switch (this.reticleType) {
      case 'upPin':
        this.context.rect(this.aimPoint.first - pinCanvasScaled / 2, this.aimPoint.second, pinCanvasScaled, apertureInnerCanvasScaled);
        break;
      case 'downPin':
        this.context.rect(this.aimPoint.first - pinCanvasScaled / 2, this.aimPoint.second - apertureInnerCanvasScaled, pinCanvasScaled, apertureInnerCanvasScaled);
        break;
      case 'leftPin':
        this.context.rect(this.aimPoint.first - apertureInnerCanvasScaled, this.aimPoint.second - pinCanvasScaled/2, apertureInnerCanvasScaled, pinCanvasScaled);
        break;
      case 'rightPin':
        this.context.rect(this.aimPoint.first, this.aimPoint.second - pinCanvasScaled/2, apertureInnerCanvasScaled, pinCanvasScaled);
        break;
    }
    this.context.fillStyle = this.reticleColour;
    this.context.fill();
  }

  private drawCrosshair(): void {
    const targetDistance = this.targetDistance * 100;

    const pinSize = this.pinSize / 10;
    const pinAngle = 2 * Math.atan(pinSize/(2*this.eyePinDistance));
    const pinApparent = Math.abs(2*targetDistance*Math.tan(pinAngle/2));
    const pinCanvasScaled = (pinApparent / this.targetDiameter) * this.getTargetRadius();

    const apertureInnerDiameter = this.apertureDiameter / 10;
    const apertureInnerAngle = 2 * Math.atan(apertureInnerDiameter/(2*this.eyePinDistance));
    const apertureInnerApparent = Math.abs(2*targetDistance*Math.tan(apertureInnerAngle/2));
    const apertureInnerCanvasScaled = (apertureInnerApparent / this.targetDiameter) * this.getTargetRadius();

    this.context.beginPath();
    this.context.rect(this.aimPoint.first - apertureInnerCanvasScaled, this.aimPoint.second - pinCanvasScaled / 2, apertureInnerCanvasScaled*2, pinCanvasScaled);
    this.context.rect(this.aimPoint.first - pinCanvasScaled / 2, this.aimPoint.second - apertureInnerCanvasScaled, pinCanvasScaled, apertureInnerCanvasScaled*2);
    this.context.fillStyle = this.reticleColour;
    this.context.fill();
  }

  private drawDot(): void {
    const targetDistance = this.targetDistance * 100;

    const reticleSize = this.reticleSize / 10;
    const reticleAngle = 2 * Math.atan(reticleSize/(2*this.eyePinDistance));
    const reticleApparent = Math.abs(2*targetDistance*Math.tan(reticleAngle/2));
    const reticleCanvasScaled = (reticleApparent / this.targetDiameter) * this.getTargetRadius();

    this.context.beginPath();
    this.context.arc(this.aimPoint.first, this.aimPoint.second, reticleCanvasScaled, 0, 2 * Math.PI, false);
    this.context.fillStyle = this.reticleColour;
    this.context.fill();
  }

  drawConcentricRing(idx: number, color: string, divider: boolean = false): void {
    const maxRadius = this.getTargetRadius();
    const radius = maxRadius - ((maxRadius/10) * idx);

    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.arc(this.getCanvcasCenter().first, this.getCanvcasCenter().second, radius, 0, 2 * Math.PI);
    if (divider) {
      this.context.strokeStyle = color;
      this.context.closePath()
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

  handleCanvasClick(event: any): void {
    const rect = this.context.canvas.getBoundingClientRect();
    const scaleX = this.context.canvas.width / rect.width;
    const scaleY = this.context.canvas.height / rect.height;
    const mouseX = (event.clientX - rect.left) * scaleX;
    const mouseY = (event.clientY - rect.top) * scaleY;

    this.aimPoint = {
      first: mouseX,
      second: mouseY
    };
    this.calculate();
  }

  private getTargetRadius(): number {
    const canvasWidth = this.canvas.nativeElement.width;
    const canvasHeight = this.canvas.nativeElement.height;
    const maxRadius = Math.min(canvasWidth, canvasHeight)/2;
    return maxRadius;
  }

  private getCanvcasCenter(): Pair<number, number> {
    const canvasWidth = this.canvas.nativeElement.width;
    const canvasHeight = this.canvas.nativeElement.height;

    return {
      first: canvasWidth/2,
      second: canvasHeight/2,
    };
  }

}

interface Pair<T, R> {
  first: T;
  second: R;
}
