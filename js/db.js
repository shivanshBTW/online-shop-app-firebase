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
    },
    searchByID(id) {
        var pr = new Promise((resolve, reject) => {
            var data = firebase.database().ref('products/' + id);
            data.on('value', snapshot => {
                var object = snapshot.val();
                // console.log(object);
                resolve(object);
            })
        })
        return pr;
    },
    sort(id) {
        var prodRef = firebase.database().ref('products/');
        // prodRef.orderByChild
    },
    delete(id) {
        // var pr = new Promise((resolve, reject) => {
        var data = firebase.database().ref('products/' + id);
        data.on('value', snapshot => {
            data.remove();
        })
        // })
        // return pr;
    },
    getId() {
        var pr = new Promise((resolve, reject) => {
            var data = firebase.database().ref('productID');
            data.on('value', snapshot => {
                var object = snapshot.val();
                // console.log(object);
                resolve(object);
            })
        })
        return pr;
    },
    setId(id) {
        firebase.database().ref('productID').set(id);
    }

}