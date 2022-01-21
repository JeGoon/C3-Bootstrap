function commitcomment() {
    var element = document.createElement('div');
    var text = document.getElementById("commenttext").value;
    var comname = document.getElementById("commentname").value;
    // var newComment = document.getElementById('tag-id').innerHTML = text;

    if (text != "") {
        event.preventDefault()
        console.log('Adding comment');
        element.innerHTML = "Name: " + comname + "<br><brx>" + text;
        element.className = "card card-body bg-dark";
        document.getElementById('commentbox').appendChild(element);
        // document.body.appendChild(element);

    } else {
        alert("Comment is empty!")
    }
}

document.getElementById("commitcom").addEventListener("click", commitcomment);