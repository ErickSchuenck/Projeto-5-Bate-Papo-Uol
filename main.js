function hide_lock_screen(){
    //abaixo eu salvo em uma varíavel o nome do usuário, porém não consegui refatorar //

    let my_name = document.getElementById("my_name").value;
    alert('Hello ' + my_name);

    // O código abaixo faz a tela inicial (lockscreen) desaparecer//

    /*const lock_screen = document.querySelector('.lock_screen');
    lock_screen.classList.add('.hide');
    fiquei curioso para saber por quê isso não funcionou
    */

    document.querySelector('.lock_screen').style.display = 'none';
    document.querySelector('.load_screen').style.display = 'block';
}
