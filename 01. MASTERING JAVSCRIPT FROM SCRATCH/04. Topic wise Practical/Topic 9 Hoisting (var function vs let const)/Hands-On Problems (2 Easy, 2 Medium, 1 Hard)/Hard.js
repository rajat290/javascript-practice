function test() {
    console.log(x);
    console.log(y);
    console.log(z);
    var x = 10;
    var y = 20;
    var z = 30;

}
test();
// At this point Output will be :

// x → var hoisted as undefined 
// y, z → in TDZ, accessing before initialization throws error.

