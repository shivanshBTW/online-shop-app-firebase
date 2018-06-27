window.addEventListener('load', init);
var counter;
var id;
var isRunFlag;
var loginID;
function init() {
    bindEvents();    
}

const countIncrease = () => {
    id = counter.next().value;
    // console.log(id);
    productOperations.setId(loginID,id);
    document.querySelector('#itemID').innerText = id;
}

function bindEvents() {
    document.querySelector('#addBtn').addEventListener('click', add);
    document.querySelector('#loginButton').addEventListener('click',login);
}

function login(){
    document.querySelector('#main-section').className = 'show';
    loginID = document.querySelector('#loginID').value;
    isRunFlag = false;
    var prom = productOperations.getId(loginID);
    prom.then(data=>{
        // counter = autoGen(parseInt(productOperations.get));
        if(data){
        counter = autoGen(data);
        }
        else{
            counter = autoGen(1);
        }
        // console.log(counter);
        countIncrease();
    });    
    
    printObject();
}

function add() {
    isRunFlag = true;
    var name = document.querySelector('#name').value;
    var price = document.querySelector('#price').value;
    var url = document.querySelector('#url').value;
    var productObject = new Product(id, name, price, url);
    productOperations.addProducts(loginID,productObject);
    printObject();
    countIncrease();
}

function printObject() {
    document.querySelector('#itemTable').innerHTML = "";

    var pr = productOperations.searchAll(loginID);
    pr.then(products => {
        // console.log(products);   
        itemTable = document.querySelector('#itemTable');
        for (let mainKey in products) {
            // var gg = product;
            var product = products[mainKey];
            var tr = itemTable.insertRow();
            // if (!isRunFlag) {
            //     // countIncrease();
            // }
            let buttonFlag = false;
            let i = 0;
            for (let key in product) {
                tr.insertCell(i).innerText = product[key];
                i++;
                buttonFlag = true;
            }
            // console.log(createOperation());
            if (buttonFlag) {
                let gg = tr.insertCell();
                gg.appendChild(createOperation(product.id));
            }
            // console.log('gg', gg)

        }
    })


}

function createOperation(id) {
    var button = document.createElement('button');
    button.className = 'btn btn-dark fa fa-close';
    button.addEventListener('click', deleteEntry);
    button.setAttribute('pid',id);
    // button.innerHTML= '<i class="fa fa-close" aria-hidden="true"></i>';
    // console.log(button);
    return button;
}

function deleteEntry() {
    var id = this.getAttribute("pid");
    productOperations.delete(loginID,id);
    console.log('id is ',id);
    // isRunFlag=false;
    printObject();
}