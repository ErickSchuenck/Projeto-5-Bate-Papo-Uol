let my_name;
let main = document.querySelector('.chat_container');
let chat_container = document.querySelector('.chat_container')

function get_messages(){
    chat_container.innerHTML = ""
    console.log('222')
    axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
        .then(extract_data)
        .then(generate_new_messages)
        .then(update_messages);
}
function update_messages(data){
    console.log('update messages!')
    setTimeout(get_messages,4000)
}
function extract_data(apiMessages){
    console.log(apiMessages.data)
    return apiMessages.data;
}
function generate_new_messages(data){
    let messages = "";
    for(let i = 0; i < 100; i++){
        new_message(data[i].type,data[i].time,data[i].from,data[i].to,data[i].text);
    } 

    // const baloon_array = document.querySelectorAll('.talk_baloon');
    // baloon_array[baloon_array.length-1].scrollIntoView();

    let displayed_messages = document.querySelector('.chat_container');
    displayed_messages.innerHTML += messages;
}
function entrance_signal(){
    console.log("111")
    const dados = {name: my_name};
    axios.post("https://mock-api.driven.com.br/api/v4/uol/participants",dados)
        .then(get_messages);
    setInterval(status_signal, 5000);
}
function send_message(){
    let my_message = document.getElementById("my_message").value;
    if(my_message === ""){
        return
    };
    const text = {
        from: my_name,
        to: 'Todos',
        text: my_message,
        type: 'message'
    };
    axios.post("https://mock-api.driven.com.br/api/v4/uol/messages",text);
    document.getElementById('my_message').value = "";
}
function show_chat_screen(){
    document.querySelector('.chat_screen').style.display = 'block';
    entrance_signal(); 
}
function status_signal(){
    const name = {name: my_name};
    axios.post("https://mock-api.driven.com.br/api/v4/uol/status",name);
    console.log('you are still online...')
}
// function new_message(msg) {
//     let {from: user_name, text: user_message} = msg;
//     return `<div class="talk_baloon"><span>${user_name}</span> para <span>TODOS </span>: ${user_message}</div>`;
// }
function new_message(type,time,from,to,text) {
    chat_container.innerHTML = chat_container.innerHTML + 
    `<div class="talk_baloon ${type}"><span><span class="time">(${time})</span> <span class="strong">${from}</span> para <span class="strong">${to}</span>: ${text}</span></div>`;
}
function hide_lock_screen(){
    my_name = document.getElementById("my_name").value;
    console.log('Hello ' + my_name);
    if (my_name !== ""){
    document.querySelector('.lock_screen').style.display = 'none';
    show_loading();}
}
function show_loading(){
    document.querySelector('.load_screen').style.display = 'block';
    setTimeout(hide_loading, 2000);
    setTimeout(show_chat_screen, 2000);
}
function hide_loading(){
    document.querySelector('.load_screen').style.display = 'none';
}
function hide_chat_screen(){
    document.querySelector('.chat_screen').style.display = 'none';
}
function open_side_menu(){
    document.querySelector('.sidebar').style.right = '0px';
    display_gray_screen();
}
function close_side_menu(){
    document.querySelector('.sidebar').style.right = '-250px';
    hide_gray_screen();
}
function display_gray_screen(){
    document.querySelector('.gray_screen').style.display = 'block';
}
function hide_gray_screen(){
    document.querySelector('.gray_screen').style.display = 'none';
}
function return_login_screen(){
    my_name = "";
    window.location.reload();
}
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        send_message();
    }
})