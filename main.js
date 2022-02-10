let my_name;
let main = document.querySelector('.chat_container');
function hide_lock_screen(){
    //abaixo eu salvo em uma varíavel o nome do usuário, porém não consegui refatorar //

    my_name = document.getElementById("my_name").value;
    console.log('Hello ' + my_name);

    // O código abaixo faz a tela inicial (lockscreen) desaparecer//
    document.querySelector('.lock_screen').style.display = 'none';
    show_loading();
}
function show_loading(){
    document.querySelector('.load_screen').style.display = 'block';
    setTimeout(hide_loading, 300);
    setTimeout(show_chat_screen, 300);
}
function hide_loading(){
    document.querySelector('.load_screen').style.display = 'none';
}
function show_chat_screen(){
    document.querySelector('.chat_screen').style.display = 'block';
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
function send_message(){
    let my_message = document.getElementById("my_message").value;
    if(my_message === ""){return}
    main.innerHTML = main.innerHTML + `
    <div class = 'talk_baloon'>${my_name} disse: ${my_message}</div>`
    document.getElementById('my_message').value = "";
}