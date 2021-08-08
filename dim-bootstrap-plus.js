/**
 * @file dim-bootstrap-plus.
 * @copyright Dimitris Vainanidis 2021
 */

/* jshint unused:false , strict:global , esversion: 10, evil:true*/
"use strict"; 

let bootstrap = window.bootstrap;       //tell jshint to ignore bootstrap


let Plus = {
    hide: (elementID) => {document.getElementById(elementID).classList.add('d-none')},
    show: (elementID) => {document.getElementById(elementID).classList.remove('d-none')},
    hideParent: function(element){element.parentElement.classList.add('d-none')},
    addClassToClass: (baseClass,additionalClass)=>{
        let elementList = document.querySelectorAll(baseClass);
        elementList.forEach(element => element.classList.add(additionalClass));
    },
    changeCSSvariable: (variable,value) => {document.documentElement.style.setProperty(variable, value)},
};


class BootstrapAlert extends HTMLElement {
    constructor(){
        super();
        let identity = this.id ? `id=${this.id}` : "";  
        let alertClass = this.getAttribute('alert-class')||"";
        this.outerHTML = `
        <div ${identity} class="alert ${alertClass} alert-dismissible fade show" role="alert">
            ${this.innerHTML}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
        `;
        this.classList.add("d-block");
    }
}
window.customElements.define('bootstrap-alert',BootstrapAlert);

//if it doesn't work properly, try <bootstrap-close-button fix="true"></bootstrap-close-button>
class BootstrapCloseButton extends HTMLElement {
    constructor(){
            super();
            let fix = this.getAttribute('fix');  //if exists, do not edit parent's position 
            if (!fix) {this.parentElement.classList.add('position-relative')}   //parent needs to be positioned (not static)
            this.outerHTML = `
            <button type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onclick="Plus.hideParent(this)"></button>
            `;
        }
    }
window.customElements.define('bootstrap-close-button', BootstrapCloseButton );


class BootstrapProgress extends HTMLElement {
    constructor(){
            super();
            let identity = this.id ? `id=${this.id}-progress` : ""; 
            let percentage = this.getAttribute('value');
            let bgColor = this.getAttribute('color') ? 'bg-' + this.getAttribute('color') : "";
            this.innerHTML = `
            <div class="progress">
                <div ${identity} class="progress-bar progress-bar-striped ${bgColor}" role="progressbar" style="width: ${percentage}"></div>
            </div>
            `;
            this.classList.add("d-block");
        }
    }
window.customElements.define('bootstrap-progress', BootstrapProgress);
Plus.changeProgress = (elementID, value) => {
    document.getElementById(elementID+'-progress').style.width = value;
};

class BootstrapList extends HTMLElement {
    constructor(){
            super();
            let identity = this.id ? `id=${this.id}` : "";
            let classes = this.getAttribute('class')||"";
            let inputArray = eval(this.innerHTML); 
            let listItems = inputArray.map(item => `<li class="list-group-item list-group-item-action">${item}</li>`);
            this.outerHTML = `
            <ul ${identity} class="list-group ${classes}">${listItems.join('')}</ul>
            `;
            this.classList.add("d-block");
        }
    }
window.customElements.define('bootstrap-list', BootstrapList );


class BootstrapSpinner extends HTMLElement {
        constructor(){
            super();     
            this.innerHTML = `
            <div class="d-flex flex-column align-items-center">
                <div class="spinner-border text-${this.getAttribute('color')||'dark'} m-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div>${this.innerText}</div>
            </div>
            `;
            this.classList.add("d-block");
        }
    }
window.customElements.define('bootstrap-spinner',BootstrapSpinner);

class BootstrapAccordion extends HTMLElement {
        constructor(){
            super();        
            let classes = this.getAttribute('class')||"";
            let next = ((int=1) => () => int++)();
            let itemsArray = eval(this.innerHTML);
            let accordionItems = itemsArray.map(item => {
                let itemNumber = next();
                return `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="${this.id}heading${itemNumber}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}${itemNumber}">
                            ${item[0]}
                        </button>
                    </h2>
                    <div id="collapse${this.id}${itemNumber}" class="accordion-collapse collapse" data-bs-parent="#${this.id}">
                        <div class="accordion-body">${item[1]}</div>
                    </div>
                </div>
            `});
            this.outerHTML = `
            <div class="accordion ${classes}" id="${this.id}">${accordionItems.join("")}</div>
            `;
            this.classList.add("d-block");
        }
    }
window.customElements.define('bootstrap-accordion',BootstrapAccordion);


class BootstrapToast extends HTMLElement {
    constructor(){
        super();
        let toastColor = this.getAttribute('color');
        let inputArray = eval(this.innerHTML);  
        this.outerHTML = `
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="${this.id}" class="toast" role="alert">
                    <div class="toast-header">
                        <div style="background-color: ${toastColor}; height: 20px; width: 20px;" class="rounded me-2" title="Gold"></div>
                        <strong class="me-auto">${inputArray[0]}</strong>
                        <small>${inputArray[1]}</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">${inputArray[2]}</div>
                </div>
            </div>
            `;
    }
}
window.customElements.define('bootstrap-toast',BootstrapToast);
Plus.showBootstrapToast = (toastIdOrClass) => {
    var toastElList = [].slice.call(document.querySelectorAll(toastIdOrClass));
    let toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl);
    });
    console.log({toastList});
    toastList.forEach(toast => toast.show());
};

Plus.enableBootstrapTootlips = () => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    return 'tooltips enabled';
};

Plus.enableBootstrapPopovers = () => {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
        });
    return 'popovers enabled';
};


class BootstrapModalButton extends HTMLElement {
    constructor(){
        super();
        let btnClass = this.getAttribute('btn-class');
        let modalId = this.getAttribute('modal-id');
        let inputArray = eval(this.innerHTML);        
        this.innerHTML = `
            <button type="button" class="btn ${btnClass}" data-bs-toggle="modal" data-bs-target="#${modalId}">
                ${this.getAttribute('btn-caption')}
            </button>
            <div class="modal fade" id="${modalId}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${modalId}Label">${inputArray[0]}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${inputArray[1]}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${inputArray[2]}</button>
                    </div>
                    </div>
                </div>
            </div>
            `;
    }
}
window.customElements.define('bootstrap-modal-button',BootstrapModalButton);

class BootstrapModal extends HTMLElement {
    constructor(){
        super();
        let inputArray = eval(this.innerHTML);        
        this.outerHTML = `
            <div class="modal fade" id="${this.id}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${this.id}Label">${inputArray[0]}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${inputArray[1]}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${inputArray[2]}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
window.customElements.define('bootstrap-modal',BootstrapModal);

class BootstrapDropDown extends HTMLElement {
    constructor(){
        super();        
        let identity = this.id ? `id=${this.id}` : "";
        let itemsArray = eval(this.innerText);
        let btnClass = this.getAttribute('btn-class')||"";
        let buttonCaption = this.getAttribute('btn-caption')||"";
        let items = itemsArray.map(item => {
            if (item[0]=="hr") {return `<li><hr class="dropdown-divider"></li>`}
            if (item[2]) {return `<li><button class="dropdown-item" id="${item[2]}">${item[0]}</button>`}
            return `<li><a class="dropdown-item" href="${item[1]}">${item[0]}</a></li>`;
        });
        this.outerHTML = `
            <div ${identity} class="btn-group">
                <button type="button" class="btn ${btnClass} dropdown-toggle" data-bs-toggle="dropdown">
                    ${buttonCaption}
                </button>
                <ul class="dropdown-menu">
                    ${items.join('')}
                </ul>
            </div>
        `;
    }
}
window.customElements.define('bootstrap-dropdown',BootstrapDropDown);

class BootstrapRadio extends HTMLElement {
    constructor(){
        super();        
        let options = eval(this.innerHTML);
        let radioName = this.getAttribute('radio-name')||"";
        this.innerText = '';
        options.forEach(element => {
            this.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${radioName}" id="${element[0]}">
                    <label class="form-check-label" for="${element[0]}">
                        ${element[1]}
                    </label>
                </div>
            `;
            this.classList.add("d-block");
        });          
    }
}
window.customElements.define('bootstrap-radio',BootstrapRadio);

class BootstrapCheck extends HTMLElement {
    constructor(){
        super();        
        let options = eval(this.innerHTML);
        this.innerText = '';
        options.forEach(element => {
            this.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${element[1]}" id="${element[0]}">
                    <label class="form-check-label" for="${element[0]}">${element[2]}</label>
                </div>
            `;
            this.classList.add("d-block");
        });          
    }
}
window.customElements.define('bootstrap-check',BootstrapCheck);

class BootstrapSwitch extends HTMLElement {
    constructor(){
        super();        
        let options = eval(this.innerHTML);
        this.innerText = '';
        options.forEach(element => {
            this.innerHTML += `
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" value="${element[1]}" id="${element[0]}">
                <label class="form-check-label" for="${element[0]}">${element[2]}</label>
            </div>
            `;
            this.classList.add("d-block");
            });          
    }
}
window.customElements.define('bootstrap-switch',BootstrapSwitch);


class BootstrapSelect extends HTMLElement {
    constructor(){
        super();              
        let identity = this.id ? `id=${this.id}` : "";
        let classes = this.getAttribute('class')||"";
        let options = eval(this.innerText);
        let optionElements = options.map(element => `<option value="${element[0]}">${element[1]}</option>`);
        this.outerHTML = `
        <select ${identity} class="form-select ${classes}">${optionElements.join("")}</select>
        `;
        this.classList.add("d-block");
    }
}
window.customElements.define('bootstrap-select',BootstrapSelect);

// Plus.makeAllButtonsGradient{

// }
