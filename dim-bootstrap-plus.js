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
    addClass: (baseClass,additionalClass)=>{
        let elementList = document.querySelectorAll(baseClass);
        elementList.forEach(element => element.classList.add(additionalClass));
    },
    changeCSSvariable: (variable,value) => {document.documentElement.style.setProperty(variable, value)},
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


class BootstrapIcon extends HTMLElement {
    constructor(){
        super();
        let size = this.getAttribute('size')||"1rem";
        let icon = this.innerText;
        switch (icon) {
            case 'check-circle-fill':
                this.outerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-check-circle-fill" viewbox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                `;
                break;
            case 'info-circle-fill':
                this.outerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-info-circle-fill" viewbox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                `;
                break;
            case 'question-circle-fill':
                this.outerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-question-circle-fill" viewbox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                    </svg>
                `;
                break;
            case 'x-circle-fill':
                this.outerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-x-circle-fill" viewbox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                `;
                break;
            case 'exclamation-triangle-fill':
                this.outerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewbox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                `;
                break;
            case 'list':
                this.outerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-list" viewbox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                `;
                break;               
            default:
                break;
        }

    }
}
window.customElements.define('bootstrap-icon',BootstrapIcon);


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
Plus.showToast = (toastIdOrClass, duration=10000) => {
    var toastElList = [].slice.call(document.querySelectorAll(toastIdOrClass));
    let toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl, {delay: duration});
    });
    toastList.forEach(toast => toast.show());
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
Plus.showModal = modalId => {
    let myModal = new bootstrap.Modal(document.getElementById(modalId));
    myModal.show();
};

class BootstrapDropDownButton extends HTMLElement {
    constructor(){
        super();        
        let identity = this.id ? `id=${this.id}` : "";
        let itemsArray = eval(this.innerText);
        let btnClass = this.getAttribute('btn-class')||"";
        let buttonCaption = this.getAttribute('btn-caption')||"";
        let directionClass = this.getAttribute('direction-class')||"";
        let items = itemsArray.map(item => {
            if (item[0]=="hr") {return `<li><hr class="dropdown-divider"></li>`}
            if (item[2]) {return `<li><button class="dropdown-item" id="${item[2]}">${item[0]}</button>`}
            return `<li><a class="dropdown-item" href="${item[1]}">${item[0]}</a></li>`;
        });
        this.outerHTML = `
            <div ${identity} class="btn-group ${directionClass}">
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
window.customElements.define('bootstrap-dropdown-button',BootstrapDropDownButton);

class BootstrapDropDown extends HTMLElement {
    constructor(){
        super();        
        let identity = this.id ? `id=${this.id}` : "";
        let itemsArray = eval(this.innerText);
        let classes = this.getAttribute('class')||"";
        let directionClass = this.getAttribute('direction-class')||"";
        let caption = this.getAttribute('caption')||"";
        let items = itemsArray.map(item => {
            if (item[0]=="hr") {return `<li><hr class="dropdown-divider"></li>`}
            if (item[2]) {return `<li><button class="dropdown-item" id="${item[2]}">${item[0]}</button>`}
            return `<li><a class="dropdown-item" href="${item[1]}">${item[0]}</a></li>`;
        });
        this.outerHTML = `
            <div ${identity} class="d-inline-block ${classes} ${directionClass}">
                <span role="button" class="dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    ${caption}
                </span>
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
            let checked = element[3]=='checked' ? 'checked' : "";
            this.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${radioName}" value="${element[1]}" id="${element[0]}" ${checked}>
                    <label class="form-check-label" for="${element[0]}">
                        ${element[2]}
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
            let checked = element[3]=='checked' ? 'checked' : "";
            this.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${element[1]}" id="${element[0]}" ${checked}>
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
            let checked = element[3]=='checked' ? 'checked' : "";
            this.innerHTML += `
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" value="${element[1]}" id="${element[0]}" ${checked}>
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
