//Question 5
function githubAPI(callback) {
    $.getJSON("https://api.github.com/users",callback);
}
function userEx(data) {
    data.forEach(element={
       if(element.id == 1){
           console.log(element.url)
    }
    });
}
githubAPI(userEx());
