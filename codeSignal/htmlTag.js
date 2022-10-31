

function solution(startTag) {
    if(startTag.includes("<button")){
        console.log("</button>")
        return "</button>"
    }
    if(startTag.includes("<i")){
        console.log("</i>")
        return "</i>"
    }
    if(startTag.includes("<p")){
        console.log("</p>")
        return "</p>"
    }
    if(startTag.includes("<div")){
        console.log("</div>")
        return "</div>"
    }
    if(startTag.includes("<h1")){
        console.log("</h1>")
        return "</h1>"
    }
    if(startTag.includes("<h2")){
        console.log("</h2>")
        return "</h2>"
    }
    if(startTag.includes("<h3")){
        console.log("</h3>")
        return "</h3>"
    }
    if(startTag.includes("<h4")){
        console.log("</h4>")
        return "</h4>"
    }
    if(startTag.includes("<h5")){
        console.log("</h5>")
        return "</h5>"
    }
    if(startTag.includes("<h6")){
        console.log("</h6>")
        return "</h6>"
    }
    if(startTag.includes("<href")){
        console.log("</href>")
        return "</href>"
    }
    if(startTag.includes("<html")){
        console.log("</html>")
        return "</html>"
    }
    if(startTag.includes("<TABLE")){
        console.log("</TABLE>")
        return "</TABLE>"
    }
    if(startTag.includes("<li")){
        console.log("</li>")
        return "</li>"
    }
    if(startTag.includes("<ol")){
        console.log("</ol>")
        return "</ol>"
    }
    if(startTag.includes("<ul")){
        console.log("</ul>")
        return "</ul>"
    }
    if(startTag.includes("<head")){
        console.log("</head>")
        return "</head>"
    }
    if(startTag.includes("<title")){
        console.log("</title>")
        return "</title>"
    }
    if(startTag.includes("<body")){
        console.log("</body>")
        return "</body>"
    }
    if(startTag.includes("<br")){
        console.log("</br>")
        return "</br>"
    }
    if(startTag.includes("<hr")){
        console.log("</hr>")
        return "</hr>"
    }
    if(startTag.includes("<link")){
        console.log("</link>")
        return "</link>"
    }
    if(startTag.includes("<input")){
        console.log("</input>")
        return "</input>"
    }
    if(startTag.includes("<label")){
        console.log("</label>")
        return "</label>"
    }
    if(startTag.includes("<form")){
        console.log("</form>")
        return "</form>"
    }
}

solution("<button type='button' disabled>")
solution("<i>")
solution("<abc>")


// const solution = startTag =>
//     `</${startTag.match(/\w+/)}>`;