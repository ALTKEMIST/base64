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


function picload(){

    
    var file = document.querySelector('input[type=file]').files[0];
    var name = file.name;
    var fileName = document.querySelector('#div-img .file-name');
    var reader = new FileReader();

    reader.onloadend = function() {
        codeB64.value = reader.result;
    }

    try{
        if (file) {
            reader.readAsDataURL(file);
            fileName.textContent = name;
        } 
    }
    catch (error){
        alert("An unexpected error has occurred.");
        console.error(error);
    }
}


var clipboard = new Clipboard('.copyButton');
clipboard.on('success', function(e) {
    alert("Copied!")
});
clipboard.on('error', function(e) {
    alert("An unexpected error has occurred.");
});


function DisplayLoadingDiv()
            {
                $('#modalL').modal('show');
            }
function HideLoadingDiv()
    {
    $('#modalL').modal('hide');
    }

