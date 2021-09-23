function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");

    if (pageID == "") {
        model.placholder("home")
    } else {
        model.placholder(pageID)
    }
}

function initListeners(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function(){
    initListeners();
    model.placholder("home")
})


// $.get(`pages/${pageID}/${pageID}.html`, function(data){
//     console.log(data);
//     $("app").html(data);
// })

// function navToPage(pageName) {
    //     $.get(`pages/${pageName}/${pageName}.html`, function(data){
    //         console.log(data);
    //         $("app").html(data);
    //     })
    // }