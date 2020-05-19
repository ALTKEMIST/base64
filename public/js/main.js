//return a promise that resolves with a File instance
function urltoFile(url, filename, mimeType){
    mimeType = mimeType || (url.match(/^data:([^;]+);/)||'')[1];
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename, {type:mimeType});})
    );
}

function convert64(){
    var code = codeB64.value;

    urltoFile('', 'image.png')
    .then(function(file){
        console.log(file);
    })
}