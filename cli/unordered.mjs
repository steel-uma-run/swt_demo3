let foo = {bb: 1, aa: 0};

function bar({
    bb = 1,
    aa = 0
}) {
    return aa + bb;
}

export {
    foo,
    bar
};
