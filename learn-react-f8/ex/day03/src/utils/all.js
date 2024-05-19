export const getCookie = (name) => {
    if(document.cookie){
        let cookies = document.cookie.split(';').reduce((initial,current) => {
            let [key,value] = current.split("=");
            initial[key.trim()] = value.trim();
            // if(initial[])
            return initial;
        },{});
        return cookies[name];
    }
    return false;
}