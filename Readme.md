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

### `Alert` element with a dismiss button. 
Just write a simple code like this:
```HTML
<bootstrap-alert id="myalert" alert-class="alert-success my-1">
    This is the content of my alert
</bootstrap-alert>
```
<hr>

### Button with `Droprown` menu. 
Use simply an array of elements. Each element (of the array) corresponds to a menu item. Use:
- a `[text,link]` array element for a link,
- a `[text,(empty),buttonID]` array element for a button, or
- a `['hr']` element for an hr.

Example:
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
To open the above modal, use `data-bs-toggle="modal" data-bs-target="#myModal"` in your standard bootstrap button, as Bootstrap suggests. The `data-bs-target` attribute must match the modal id.
<hr>

### `Button` with `modal` **combined** in one component! *WOW!*
`modal-id` is mandatory. Use a `[modaltitle,modaltext,modalbuttontext]` array. 

```HTML
<bootstrap-modal-button modal-id="myModalwithButton" 
    btn-class="btn-warning m-2" btn-caption="Modal button text">
    ['Modal title','This is the <b>modal body</b> which is a paragraph. ','OK']
</bootstrap-modal-button>
```
<hr>

### `Close button` compontent which closes its parent without extra code! *WOW!*
When you click on it, it hides its parent element
```HTML
<bootstrap-close-button></bootstrap-close-button>       //default
<bootstrap-close-button fix="true"></bootstrap-close-button>  //alternative
```
*Note:* Use the first line by default to insert a `close button` . Only if it fails (because the parent has fixed, sticky or another unusual position property), use the second way.
<hr>

### `Toast` component.
`id` is mandatory. `toast-color` is optional. Use a `[title,note,body]` array. 
```HTML
<bootstrap-toast id="liveToast" toast-color="red">
    ['Toast title','small note','This is the message of the toast.']
</bootstrap-toast>
```
To show this modal, you can use a standard Bootstrap button with the appropriate onclick event, and with the matching modal id:
```HTML
<button type="button" class="btn btn-primary" 
    onclick="Plus.showBootstrapToast('#liveToast')">
    Show live toast
</button>
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
<bootstrap-progress id="dimPercent" color="fuchsia" value="25%">
</bootstrap-progress>
```
To change its value, run the foolowing command with the matching id:
```JavaScript
Plus.changeProgress('dimPercent','95%')
```
<hr>

### `Accordion` component.
`id` is mandatory. Use an array with `[title,text]` elements.
```HTML
<bootstrap-accordion id="dimAccordion" class="m-2">
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

### `Select` element. 
`id` is mandatory. Use an array of `[value,text]` option-items :
```HTML
<bootstrap-select id="myselect">
    [['0','select'],['1','good'],['2','mediocre'],['3','bad']]
</bootstrap-select>
```
<hr>

### `Switch`, `radio` and `check` element. 
Use an array of `[id,value,text]` items for the `switch` and the `check` element. For the radio element, use an array of `[id,value,text]` items, as well as an radio-name (mandatory):
```HTML
<bootstrap-switch>
    [['ids1','first option'],['ids2','second option'],['ids3','third option']]
</bootstrap-switch>
<bootstrap-check id="mycheck">
        [['idc1','1','first option'],['idc2','2','second option'],['idc3','3','third option']]
    </bootstrap-check>
<bootstrap-radio radio-name="myradio">
    [['idr1','first option'],['idr2','second option'],['idr3','third option']]
</bootstrap-radio>
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

Add an additional class to all elements with a specific class. For example, add a gradient background to all buttons (note the `.` on the first argument (which works like the querySelectorAll) but not on the second):
```Javascript
Plus.addClassToClass('.btn','bg-gradient')
```
<hr>