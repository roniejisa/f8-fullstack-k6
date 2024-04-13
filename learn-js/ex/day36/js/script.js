const api = 'https://jsonplaceholder.typicode.com/comments';
const checkObserver = document.querySelector('.check-observer');
const comment = document.querySelector('.comments');
let crawling = false;
const callback = {};
let page = 1;
const observer = new IntersectionObserver(async (entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting && entries[i].intersectionRatio > 0 && !crawling) {
            crawling = true;
            observer.disconnect()
            const loadingContainer = document.createElement('div');
            
            const loading = document.createElement('div');
            loading.style.height = "20px";
            loading.style.width = "20px";
            loading.style.borderRadius = "50%";
            loadingContainer.style.padding = "20px 0";
            loading.style.border = "3px solid red"
            loading.style.borderColor = "transparent red red red"
            loading.animate([{
                transform: "rotate(0deg)"
            }, {
                transform: "rotate(360deg)"
            }], {
                iterations: Infinity,
                duration: 300
            })
            Object.assign(loadingContainer.style, {
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            })
            loadingContainer.append(loading)
            comment.append(loadingContainer);
            const response = await fetch(api + `?_page=${page}&_limit=12`);
            const comments = await response.json();
            loadingContainer.remove();
            comment.insertAdjacentHTML('beforeend', insertComments(comments));
            observer.observe(comment.children[comment.children.length - 1]);
            if (comments.length > 0) {
                crawling = false;
                page++;
            }else{
                comment.insertAdjacentHTML('beforeend','<div class="end">Đã hết 😍</div>');
            }
        }
    }
    // mutationObserver.disconnect();
});

observer.observe(comment)
function insertComments(comments) {
    return comments.map(comment => `<div class="comment">
        <div class="top">
            <div class="avatar">${comment.name.charAt(0).toUpperCase()}</div>
            <p class="name">${comment.name} - ${comment.email}</p>
        </div>
        <div class="detail">
            ${comment.body}
        </div>
    </div>`).join('');
}