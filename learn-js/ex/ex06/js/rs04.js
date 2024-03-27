var posts = [
    {
        id: 1,
        title: "Hello",
        image: `https://picsum.photos/1920/500`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque atque minus in eos obcaecati numquam asperiores, voluptas perferendis possimus mollitia perspiciatis deleniti tenetur necessitatibus magnam veritatis est error aut.`
    },
    {
        id: 2,
        title: "Hello",
        image: `https://picsum.photos/1920/500`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque atque minus in eos obcaecati numquam asperiores, voluptas perferendis possimus mollitia perspiciatis deleniti tenetur necessitatibus magnam veritatis est error aut.`
    },
    {
        id: 3,
        title: "Hello",
        image: `https://picsum.photos/1920/500`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque atque minus in eos obcaecati numquam asperiores, voluptas perferendis possimus mollitia perspiciatis deleniti tenetur necessitatibus magnam veritatis est error aut.`
    }
];

let html = posts.map(function (post, index) {
    return `<div class="item" style="padding:10px 0;display:flex;gap:20px;${index % 2 !== 0 ? 'flex-direction:row-reverse' : ''}; ${index > 0 ? 'border-top:1px solid black' : ''}">
        <img width="200" src="${post.image}" alt="" />
        <div style="flex:1">
            <h3><a href="#">${post.title}</a></h3>
            <p>${post.content}</p>
        </div>
    </div>`
})

document.write(`<div class="main">${html.join('')}</div>`)