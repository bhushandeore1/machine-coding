const stars=document.getElementsByClassName("star");
const output=document.getElementById("output");
// bruteforce approach
function giveRating(n){
    remove();
    let cls;
    for(let i=0;i<n;i++){
        console.log(n);
        if(n==1) cls= "one";
        else if(n==2) cls="two";
        else if(n==3) cls="three";
        else if(n==4) cls="four";
        else if(n==5) cls="five";
        console.log(stars);
        stars[i].className="star "+ cls;
    }
    console.log(stars);
    output.innerText="Rating is:" + n + "/5";
}

function remove(){
    let i=0;
    while(i<stars.length && i<5){
        stars[i].className="star";
        i++;
    }
}

//optimised approach
const classes=["one","two","three","four","five"];

function giveRating(n){
    for(let i=0;i<stars.length;i++){
        stars[i].className="star";
        if(i<n){
            stars[i].className=`star ${classes[n-1]}`
        }
    }
    output.innerText="Rating is:" + n +"/5";
}
