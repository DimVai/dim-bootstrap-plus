# dim-bootstrap-plus.js
 ## Ready-to-use Bootstrap components. 
 Simplify your HTML blocks of code (or complex Javascript code) for the most standard Bootstrap components. Use these custom HTML elements, and the appopriate elements will be created automatically.
 ## By Dimitris Vainanidis (c) 2021. #
 Live Example here: https://dimvai.github.io/dim-bootstrap-plus/

<br/>

# **Initial note**
Load this script to your page: ```dim-bootstrap-plus```.
```html
 <script defer src="dim-bootstrap-plus.js"></script>
```

I did not bother to write full documentation for this. Just open the link above (file ```index.html```), read the following notes and you will understand everything. Only If you need something special, I mention it below.

In general, use arrays (or arrays of arrays), instead of the huge html blocks of code that is provided by Bootstrap 5.

<hr>
<hr>

# **Custom components**
<hr>

### `Alert` element with a dismiss button. 
Just write a simple code like this:
```HTML
<bootstrap-alert id="myalert" alert-class="alert-success my-1">
    This is the content of my alert!
</bootstrap-alert>
```
<hr>

### `Button` with `Droprown` menu. 
Use simply an array of elements inside the component's text. Each element (of the array) corresponds to a menu item. For every item use:
- a `[text,link]` array element for a link menu item,
- a `[text,(button),buttonID]` array element for a button menu utem, or
- a `['hr']` element for an hr menu item.

`btn-caption` attribute is mandatory. `btn-class`, and `direction-class` (read below) are optional. Example:
```HTML
    <bootstrap-dropdown-button btn-class="btn-primary m-1" btn-caption="Open dropdown">
            [
                ['first link','/link1.html'],
                ['this is a button, not a link','(button)','buttonID'],
                ['hr'],
                ['other link','/link3.html']
            ]   
    </bootstrap-dropdown-button>
```
<hr>

### Simple `Droprown` menu. 
Like the previous case, but it shows simple text as a trigger, not a button. Only the `caption` attribute is mandatory. Notice the optional `direction-class` argument that sets the direction of the opened menu, that is also valid in the above `bootstrap-dropdown-button`.
```HTML
    <bootstrap-dropdown class="mx-5 p-2" caption="Open dropdown" direction-class="dropend">        
            [
                ['first link','/link1.html'],
                ['this is a button, not a link','(button)','buttonID'],
                ['hr'],
                ['other link','/link3.html']
            ]       
    </bootstrap-dropdown>
```
*Note:* You may want to use original bootstrap's way for navigation (`navbar`) dropdowns.
  
<hr>

### `Modal` component. 
`id` is mandatory. Use a `[title,bodytext,buttontext]` array. 
```HTML
<bootstrap-modal id="myModal">
    ['Modal title','This is the modal body which <b>is a paragraph.</b>','OK']
</bootstrap-modal>
```
To open the above modal, run:
```JavaScript
Plus.showModal('myModal')
```
Alternatively, you can use the original Boostrap's way: Set `data-bs-toggle="modal" data-bs-target="#myModal"` in your standard bootstrap button, as Bootstrap suggests. The `data-bs-target` attribute must match the id of the modal component.
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
<bootstrap-close-button></bootstrap-close-button>               //default way
<bootstrap-close-button fix="true"></bootstrap-close-button>    //alternative way
```
*Note:* Use the first default way to insert a `close button` . Only if it fails (because the parent has fixed, sticky or another unusual position property), use the second way.
<hr>

### `Toast` component with ready-to-use trigger. 
`id` is mandatory. `toast-color` is optional and can use any valid HTML color (not just "Bootstrap" colors). Use a `[title,note,body]` array. 
```HTML
<bootstrap-toast id="liveToast" toast-color="red">
    ['Toast title','small note','This is the message of the toast.']
</bootstrap-toast>
```
To show this modal, you can use a standard Bootstrap button with the appropriate onclick event, and with the matching modal id and optional duration in milliseconds:
```HTML
<button type="button" class="btn btn-primary" onclick="Plus.showToast('#liveToast',7000)">
    Show live toast
</button>
```
<hr>

### `Spinner` component with nice caption below! *WOW!*
`color` is optional, but you must provie a valid "Bootstrap" or "Bootstrap-Plus" color. Also, use (optional) text as a caption. 

```HTML
<bootstrap-spinner color="info">Waiting for something...</bootstrap-spinner>
```
<hr>

### `Progress` component with ready-to-use method to change its value! *WOW!*
`id` is optional, but nessesary if you want to change its value with JavaScript.
```HTML
<bootstrap-progress id="dimPercent" color="fuchsia" value="25%"></bootstrap-progress>
```
To change its value, run the following command with the matching id:
```JavaScript
Plus.changeProgress('dimPercent','95%')
```
<hr>

### `Accordion` component.
`id` is mandatory. Use an array with `[title,text]` elements.
```HTML
<bootstrap-accordion id="dimAccordion" class="m-2">
    [
        ['Accordion title #1','Accordion <b>content</b> #1'],
        ['Accordion title #2','Accordion content #2'],
        ['Accordion title #3','Accordion content #3']
    ]
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
    [
        ['0','select'],
        ['1','good'],
        ['2','mediocre'],
        ['3','bad']
    ]
</bootstrap-select>
```
<hr>

### `Switch`, `radio` and `check` element. 
Use an array of `[id,value,text]` items for the `switch` and the `check` element. `id` is optional. For the radio, set a `radio-name` (mandatory). Use an optional forth argument `'checked'` in the elements you want to be pre-checked:
```HTML
        <bootstrap-switch id="myswitch">
            [
                ['ids1','1','first option'],
                ['ids2','2','second option','checked'],
                ['ids3','3','third option']
            ]
        </bootstrap-switch>
        <bootstrap-check id="mycheck">
            [
                ['idc1','1','first option'],
                ['idc2','2','second option'],
                ['idc3','3','third option', 'checked']
            ]
        </bootstrap-check>
        <bootstrap-radio radio-name="myradio" id="myradio">
            [
                ['idr1','1','first option'],
                ['idr2','2','second option'],
                ['idr3','3','third option', 'checked']
            ]
        </bootstrap-radio>
```
<hr>
<hr>

# **Bootstrap icons**
I have included a few icon for easy import. `size` attribute is optional. 

```HTML
    <bootstrap-icon size="2rem">check-circle-fill</bootstrap-icon>
    <bootstrap-icon>info-circle-fill</bootstrap-icon>
    <bootstrap-icon>question-circle-fill</bootstrap-icon>
    <bootstrap-icon>exclamation-triangle-fill</bootstrap-icon>
    <bootstrap-icon>x-circle-fill</bootstrap-icon>
    <bootstrap-icon>list</bootstrap-icon>
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
Shows a specific toast or more toasts (use `#` or `.` in the beginning of the id or the class) with optional duration (default duration is 10sec):
```Javascript
Plus.showToast(elementIDorClass, duration)
```
Shows a specific modal:
```Javascript
Plus.showModal(modalId)
```
Changes the value of a specific progress component (if it is declared using the indicated way above):
```Javascript
Plus.changeProgress(idOfComponent,value)
```
Execute this to initiate/enable all tooltips:
```Javascript
Plus.enableBootstrapTootlips()
```

Just execute this to initiate/enable all popovers:
```Javascript
Plus.enableBootstrapPopovers()
```

Add an additional class to all elements with a specific class or id. For example, add a gradient background to all buttons. Note the `#` or `.` on the first argument (which works like the querySelectorAll) but not on the second:
```Javascript
Plus.addClass('.btn','bg-gradient')
```

<hr>
<hr>


# **More colors**
Visit page `color-showcase.html` to see what is available if you import dim-plus-colors.css:
```HTML
<link href="dim-plus-colors.css" rel="stylesheet">
```

To use an button, text or background with a special Bootstrap-Plus color, write:
```HTML
<button class="btn btn-purple">text in a purple button</button>
<span class="text-purple">text with purple color</span>
<span class="bg-purple text-light">light text in a purple background</span>
```


<hr>
<hr>
