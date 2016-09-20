function replaceClapsWithNothing(content) {
    var claps = ['👏','https://abs.twimg.com/emoji/v2/72x72/1f44f.png'];

    for (item in claps) { content = content.replace(new RegExp(claps[item], "g"),"");}

    return content;
}

document.body.innerHTML = replaceClapsWithNothing(document.body.innerHTML);
