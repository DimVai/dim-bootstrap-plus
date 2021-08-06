# dim-bootstrap-plus.js
 ## Ready-to-use Bootstrap components. 
 Simplify your HTML blocks of code (or complex Javascript code) for the most standard Bootstrap components. Use these custom HTML elements, and the appopriate elements will be created automatically.
 ## By Dimitris Vainanidis (c) 2021. #
 Live Example here: https://dimvai.github.io/dim-bootstrap-plus/

<br/>

# **Initial note**
Load this script to your page: ```dim-bootstrap-plus```.

I did not bother to write full documentation for this. Just study the example in the link above (file ```index.html```) and you will understand everything. If you need something special, only then I mention it below.

In general, use arrays (or arrays of arrays), instead of the huge html blocks of code that is provided by Bootstrap 5.

<hr>
<hr>

# **Custom components**
<hr>

### `Select` element. 
`id` is mandatory. Use an array of `[value,text]` items :
```HTML
<bootstrap-select id="myselect">
    [['0','select'],['1','good'],['2','mediocre'],['3','bad']]
</bootstrap-select>
```
<hr>

### `Switch`, `radio` and `check` element. 
Use an array of `[id,text]` items  for the `switch`, and the `radio` element. Use an array of `[id,value,text]` items for the `check` element:
```HTML
<bootstrap-switch>
    [['ids1','first option'],['ids2','second option'],['ids3','third option']]
</bootstrap-switch>
<bootstrap-radio>
    [['idr1','first option'],['idr2','second option'],['idr3','third option']]
</bootstrap-radio>
<bootstrap-check id="mycheck">
    [['idc1','1','first option'],['idc2','2','second option'],['idc3','3','third option']]
</bootstrap-check>
```
<hr>

### `Droprown` menu. 
Use a `[text,link]` array for links, a `[text,(empty),buttonID]` for button, or a `['hr']` elements for an hr:
```HTML
<bootstrap-dropdown btn-class="btn-danger" btn-caption="Click to open dropdown menu">
    [['first link','/link1.html'],
    ['this is a button, not a link','(button)','buttonID'],
    ['hr'],
    ['other link','/link3.html']]
</bootstrap-dropdown>
```
<hr>

### `Modal` component. 
`id` is mandatory. Use a `[title,bodytext,buttontext]` array. 
```HTML
<bootstrap-modal id="myModal">
    ['Modal title','This is the modal body which <b>is a paragraph.</b>','OK']
</bootstrap-modal>
```
To open the above modal, use `data-bs-toggle="modal" data-bs-target="#myModal"` in your button, as Bootstrap suggests. The `data-bs-target` attribute must match the modal id.
<hr>

### `Button` with `modal` **combined** in one component! *WOW!*
`modal-id` is mandatory. Use a `[togglebuttontext,modaltitle,modaltext,modalbuttontext]` array. 

```HTML
<bootstrap-modal-button modal-id="myModalwithButton" btn-class="btn-warning">
    ['Modal button text','Modal title','This is the <b>modal body</b> which is a paragraph. ','OK']
</bootstrap-modal-button>
```
<hr>

### `Close button` compontent which closes its parent without extra code! *WOW!*
When you click on it, it hides its parent element
```HTML
<bootstrap-close-button></bootstrap-close-button>
<bootstrap-close-button fix="true"></bootstrap-close-button>
```
Use the first line by default to insert a `close button` . Only if it fails (because the parent has fixed, sticky or another unusual position property), use the second way.
<hr>

### `Toast` component.
`id` is mandatory. `toast-color` is optional. Use a `[title,note,body]` array. 
```HTML
<bootstrap-toast id="liveToast" toast-color="red">['Toast title','small note','This is the message of the toast.']</bootstrap-toast>
```
To show this modal, you can use a standard Bootstrap button with the appropriate onclick with the matching modal id:
```HTML
<button type="button" class="btn btn-primary" onclick="Plus.showBootstrapToast('#liveToast')">Show live toast</button>
```
<hr>

### `Spinner` component with nice caption below! *WOW!*
`color` is optional. Also, use (optional) text as a caption. 

```HTML
<bootstrap-spinner color="info">Waiting for something...</bootstrap-spinner>
```
<hr>

### `Progress` component with ready-to-use method to change its value! *WOW!*
`id` is optional, but nessesary if you want to change its value with JavaScript.
```HTML
<bootstrap-progress id="dimPercent" value="25%"></bootstrap-progress>
```
To change its value, run the foolowing command with the matching id:
```JavaScript
Plus.changeProgress('dimPercent','95%')
```
<hr>

### `Accordion` component.
`id` is mandatory. Use an array with `[title,text]` elements.
```HTML
<bootstrap-accordion id="dimAccordion">
    [['Accordion title #1','Accordion <b>content</b> #1'],
    ['Accordion title #2','Accordion content #2'],
    ['Accordion title #3','Accordion content #3']]
</bootstrap-accordion>
```
<hr>

### `List` component.
Use a array of `text` items. 
```HTML
<bootstrap-list>
        ['An <b>item</b>','A second item','And a third one']
</bootstrap-list>
```


<hr>
<hr>

# **Custom methods to make your life easier**


Hides an element:
```Javascript
Plus.hide(elementID)
```
Shows an element:
```Javascript
Plus.show(elementID)
```
Shows a toast (use `#` or `.` in the beginning of the id or the class):
```Javascript
Plus.showBootstrapToast(elementIDorClass)
```
Execute this to initiate/enable all tooltips:
```Javascript
Plus.enableBootstrapTootlips()
```

Just execute this to initiate/enable all popovers:
```Javascript
Plus.enableBootstrapPopovers()
```

<hr>