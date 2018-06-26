var productOperations = {
    addProducts(productObject) {
        firebase.database().ref('products/' + productObject.id).set(productObject);
        // console.log(productObject);
    },
    searchAll() {
        var pr = new Promise((resolve, reject) => {
            var data = firebase.database().ref('products/');
            data.on('value', snapshot => {
                var object = snapshot.val();
                // console.log(object);
                resolve(object);
            })
        })
        return pr;
    }
}