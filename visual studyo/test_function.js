/*
function multiplay(){
    console.log("hi");
}

function add(){
    console.log("add");
    
}

function decorator(fn){
    console.log("start");
    fn()
    console.log("end");
    const newFn = () => {
        console.log("done");
        };
    return newFn;
}

const f = decorator(multiplay);
f()
*/

function spellFactory(spellName){
    let power = 1;
    const fn = ()=>{
        console.log(`spellName: ${spellName}, power: ${power}`);
        power +=1;
    }
    console.log(`power new: ${power}`);
    return fn
}
const fn1 = spellFactory("shlomi")
fn1()
const fn2 = spellFactory("ice")
fn2()