window.addEventListener('load', init);
var counter;
var id;
var isRunFlag;

function init() {
    bindEvents();
    counter = autoGen();
    // countIncrease();
    isRunFlag = false;
    printObject();
}

const countIncrease = () => {
    id = counter.next().value;
    document.querySelector('#itemID').innerText = id;
}

function bindEvents() {
    document.querySelector('#addBtn').addEventListener('click', add);
}

function add() {
    isRunFlag = true;
    document.querySelector('#itemTable').innerHTML = "";
    var name = document.querySelector('#name').value;
    var price = document.querySelector('#price').value;
    var url = document.querySelector('#url').value;
    var productObject = new Product(id, name, price, url);
    productOperations.addProducts(productObject);
    printObject();
    countIncrease();
}

function printObject() {
    var pr = productOperations.searchAll();
    pr.then(products => {
        console.log(products);
        itemTable = document.querySelector('#itemTable');
        for (let product of products) {
            // var gg = product;
            var tr = itemTable.insertRow();
            if (!isRunFlag) {
                countIncrease();
            }
            let i = 0;
            for (let key in product) {
                tr.insertCell(i).innerText = product[key];
                i++
            }
            // console.log('gg', gg)

        }
    })


}