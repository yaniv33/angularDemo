import {ChangeDetectorRef, Component, ElementRef, Input, OnInit} from '@angular/core';
import {UIFullOrder} from "../../../../export-class/fullOrder";


@Component({
  selector: 'app-print-inner',
  templateUrl: './print-inner.component.html',
  styleUrls: ['./print-inner.component.scss']
})
export class PrintInnerComponent implements OnInit {

  @Input() cart!: UIFullOrder;
  @Input() accountingDocument;
  @Input() tickets!: string[];

  constructor(private elRef: ElementRef, private Cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  directPrint() {
    this.Cd.detectChanges();
    this.Cd.markForCheck();
    const wnd = window.open('', '_blank', 'fullscreen=yes'/*, true*/);
    if (wnd !== null) {

      wnd.document.write(this.elRef.nativeElement.querySelector('#tickets').innerHTML);

      wnd.print();
      wnd.close();
    }
    return;
  }
}
