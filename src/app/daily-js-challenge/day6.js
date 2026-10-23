const user = {
    name: "Abinash",

    regularFunction: function () {
        console.log("Regular:", this.name);
    },

    arrowFunction: () => {
        console.log("Arrow:", this.name);
    }
};

user.regularFunction();
user.arrowFunction();