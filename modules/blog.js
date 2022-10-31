
let blogs = []
export function blog(){
        const addBlogButton = document.getElementById('addBlog')
        const blogDialog = document.getElementById('blogDialog')
        const postBtn = document.getElementById('postBtn')
        const cancelBtn = document.getElementById('cancelBtn')
        let list = document.getElementById("blogList");
        var dirtyTitle
        var title
        var dirtySummary
        var summary
        var date
        var numberedEntry
        var count

        postBtn.addEventListener('click', () => {
            list.replaceChildren()
            dirtyTitle = document.getElementById("inputTitle").value
            title = DOMPurify.sanitize(dirtyTitle, { USE_PROFILES: { html: true } })
            date = document.getElementById("inputDate").value
            dirtySummary = document.getElementById("inputSummary").value
            summary = DOMPurify.sanitize(dirtySummary, { USE_PROFILES: { html: true } })
            numberedEntry =  (blogs.length + 1).toString()
            blogs.push(title + " - " + date + " - " + summary + "  ")
            count = 0
            blogs.forEach((item)=>{
                let li = document.createElement("li");

                var editButton = document.createElement("button");
                editButton.setAttribute("class", "editBtn");
                var editButtonText = document.createTextNode("Edit");
                editButton.appendChild(editButtonText);

                var delButton = document.createElement("button");
                delButton.setAttribute("class", "delBtn");
                var delButtonText = document.createTextNode("Delete");
                delButton.appendChild(delButtonText);

                li.innerText = item;
                li.appendChild(editButton).addEventListener("click", editItem);
                li.appendChild(delButton).addEventListener("click", removeItem);
                list.appendChild(li);
                

            })
            console.log(blogs)
            blogDialog.close()
        });
        cancelBtn.addEventListener('click', () => {
            blogDialog.close()
        });
        addBlogButton.addEventListener('click', () => {
        if (typeof blogDialog.showModal === "function") {
            blogDialog.showModal()
        }
        });
        document.body.addEventListener('click', evt => {
            if (!evt.target.matches('li > button')) return;
            if(evt.target.matches('.delBtn')){
                removeItem(evt); //remove li
                console.log("delete")
            }else if(evt.target.matches('.editBtn')){
                console.log("edit")
            }
            
        });
    }

export function editItem(){

}   

export function removeItem(){/*
    var blogText = this.parentNode
    var count = 0
    blogs.forEach((item)=>{
        if(new String(item).valueOf() == new String(blogText).valueOf()){
            blogs = blogs.splice(count, 1)
            count = count - 1
            return
        }

        count = count + 1
    })
    this.parentNode.remove();
*/  
    console.log("remove button does not work yet for localstorage")
    this.parentNode.remove();
}   