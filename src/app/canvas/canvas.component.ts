import { Component, OnInit, AfterViewInit, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})

export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasCanvas') canvas: any;
  @ViewChild('Canvas') Canvas: ElementRef;
  @ViewChild('img') img: ElementRef;

  @Input() id: number;
  @Input() item: string;
  @Input() source: any;
  @Input() cta: string;
  @Input() image = new Image();

  private ctx: CanvasRenderingContext2D;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.preload(
      this.image.src = './assets/images/' + this.source);
    console.log(this.id, this.item, this.source, this.cta);
  }

   preload(...args: any[]): void {
     for (let i = 0; i < args.length; i++) {
       this.image[i] = new Image();
       this.image[i].src = args[i];
    }
   }

// List layers in order to be drawn (from farthest z-order to closest)
ngAfterViewInit(): void {
  this.canvas = document.getElementById('canvasCanvas-' + this.item) as HTMLCanvasElement;
  this.ctx = this.canvas.getContext('2d');
  this.ctx.scale(2, 2); // @2x for hi-res
  this.drawImage();
  this.drawBorder();
  this.drawRectangle();
  this.drawText();
  this.drawButtonText();
}

// set timeouts so each layer can finish drawing before starting the next
drawImage() {
  setTimeout(() => { this.image = this.renderer.createElement('img');
                     this.image.src = './assets/images/' + this.source;
                     this.ctx.drawImage(this.image, -40, 0, 266, 200); } , 200);
}

drawBorder() {
  setTimeout(() => { this.ctx.beginPath();
                     this.ctx.moveTo(0, 0);
                     this.ctx.lineTo(200, 0);
                     this.ctx.lineTo(200, 200);
                     this.ctx.lineTo(0, 200);
                     this.ctx.lineTo(0, 0);
                     this.ctx.stroke(); } , 300);
}

drawText() {
  setTimeout(() => { this.ctx.textAlign = 'center';
                     this.ctx.textBaseline = 'middle';
                     this.ctx.font = '300 28px Roboto, sans-serif';
                     this.ctx.fillStyle = '#fff';
                     this.ctx.fillText(this.item, 100, 35); } , 400);
}

drawRectangle() {
  setTimeout(() => { this.ctx.beginPath();
                     this.ctx.rect(25, 150, 150, 30);
                     this.ctx.fillStyle = '#000';
                     this.ctx.fill(); } , 500);
}

drawButtonText() {
  setTimeout(() => { this.ctx.textAlign = 'center';
                     this.ctx.textBaseline = 'middle';
                     this.ctx.textBaseline = 'middle';
                     this.ctx.font = 'small-caps 400 16px Roboto, sans-serif';
                     this.ctx.fillStyle = '#fff';
                     this.ctx.fillText(this.cta, 100, 165); } , 600);
}
}
