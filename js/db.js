var productOperations = {
    addProducts(loginID,productObject) {
        firebase.database().ref(loginID+'/products/' + productObject.id).set(productObject);
        // console.log(productObject);
    },
    searchAll(loginID) {
        var pr = new Promise((resolve, reject) => {
            var data = firebase.database().ref(loginID+'/products/');
            data.on('value', snapshot => {
                var object = snapshot.val();
                // console.log(object);
                resolve(object);
            })
        })
        return pr;
    },
    searchByID(loginID,id) {
        var pr = new Promise((resolve, reject) => {
            var data = firebase.database().ref(loginID+'/products/' + id);
            data.on('value', snapshot => {
                var object = snapshot.val();
                // console.log(object);
                resolve(object);
            })
        })
        return pr;
    },
    sort(loginID,id) {
        var prodRef = firebase.database().ref(loginID+'/products/');
        // prodRef.orderByChild
    },
    delete(loginID,id) {
        // var pr = new Promise((resolve, reject) => {
        var data = firebase.database().ref(loginID+'/products/' + id);
        data.on('value', snapshot => {
            data.remove();
        })
        // })
        // return pr;
    },
    getId(loginID) {
        var pr = new Promise((resolve, reject) => {
            var data = firebase.database().ref(loginID+'/productID');
            data.on('value', snapshot => {
                var object = snapshot.val();
                // console.log(object);
                resolve(object);
            })
        })
        return pr;
    },
    setId(loginID,id) {
        firebase.database().ref(loginID+'/productID').set(id);
    }

}