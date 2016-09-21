//an array of the strings we're looking for. 
var claps = [
    '👏',//regular old claps
    'https://abs.twimg.com/emoji/v2/72x72/1f44f.png', //twitter
    'style="background: url(https://a.slack-edge.com/f360/img/emoji_2016_06_08/sheet_apple_64_indexed_256colors.png);background-position:37.5% 52.5%;background-size:4100%"' //slack
];
//build the regex string
var regexString = "";
for(clap in claps) {
    regexString = regexString + claps[clap] + "|";
}
regexString = regexString.substring(0, regexString.length - 1);
//build the regex
var clapRegex = new RegExp(regexString, "g");
//build the replacement function
function ReplaceClaps(content) {
    return content.replace(clapRegex,"");
}
//set up an event listener for the DOM finishing loading
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('bar');
    var observer = new MutationObserver(function(mutations) {
        console.log('mutation detected');
        mutations.forEach(function(mutation) {
            console.log(mutation);
        });
        //call the dom edit
        //document.body.innerHTML = ReplaceClaps(document.body.innerHTML);
    });
    observer.observe(document, {
        childList: true,
        characterData: true,
        subtree:true
    });
    document.body.innerHTML = ReplaceClaps(document.body.innerHTML);
});
//call the first run
//document.body.innerHTML = ReplaceClaps(document.body.innerHTML);
console.log('bar');

/*
function replaceClapsWithNothing(content) {
    var claps = [];

    for (item in claps) { content = content.replace(new RegExp(claps[item], "g"),"");}

    return content;
}

document.body.innerHTML = replaceClapsWithNothing(document.body.innerHTML);
*/