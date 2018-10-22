
function posts(parent,args,context,info) {
    let posts = [
        {title:"post 1",text:"El texto 1",readers:2},
        {title:"post 2",text:"El texto 2",readers:4},
        {title:"post 3",text:"El texto 3",readers:1}

    ]

    return posts;


}



module.exports = {

    posts

}