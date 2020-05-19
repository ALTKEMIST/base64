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

    try{
        urltoFile(code, 'image.png')
        .then(function(file){
            document.getElementById("image").innerHTML = "<img src='"+code+"' class='img-fluid' />"
        })    
        alert("The image has been successfully generated.");
    }
    catch (error){
        alert("An unexpected error has occurred.");
        console.error(error);
    }
    
    
}