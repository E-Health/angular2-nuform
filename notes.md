# Notes

* Interface needs Export. If something is not recognized 
check for Export

# Accessing dom 

```
 @Component({
  selector: 'my-comp',
  template: `
    <input #myInput type="text" />
    <div> Some other content </div>
  `
})
export class MyComp implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;

  constructor(private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement,    
    'focus');
  }
}

```
# Accessing DOm 2

```
 // user code
<my-list>
   <li *ngFor="let item of items"> {{item}} </li>
</my-list>

@Directive({ selector: 'li' })
export class ListItem {}

// component code
@Component({
  selector: 'my-list'
})
export class MyList implements AfterContentInit {
  @ContentChildren(ListItem) items: QueryList<ListItem>;

  ngAfterContentInit() {
     // do something with list items
  }
}
```
# Refer to [cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)

# Accessing external library
in vendor.browser.ts
import 'fabric';

```
declare var fabric:any;
```
