let N;
let foo = new Array();


function myArr(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 2 == 0) {
            r = "yu";
            foo.push(r)
        } else if (i % 3 == 0) {
            r = "gi";
            foo.push(r)
        } else if (i % 5 == 0) {
            r = "oh";
            foo.push(r)
        } else {
            foo.push(i)
        };


        if (i % 2 == 0) {
            if (i % 3 == 0) {
                r = "yu-gi"
                foo.push(r)
            } else if (i % 5 == 0) {
                r = "yu-oh"
                foo.push(r)
            }
            r = "yu"
            foo.push(r)
        };
    };
    return foo;
};
myArr(100);
myArr(50);
