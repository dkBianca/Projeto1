let musicas = [
    {titulo:'No Blueberries', artista:'DPR IAN', src:'music/DPR IAN - No Blueberries (ft. DPR LIVE, CL).mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'So I Danced', artista:'DPR IAN', src:'music/DPR IAN - So I Danced.mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'fOol fOr YoU', artista:'Zayn', src:'music/zayn- fool for you.mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'Ballroom Extravaganza', artista:'DPR IAN', src:'music/DPR IAN - Ballroom Extravaganza.mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'Nerves', artista:'DPR IAN', src:'music/SnapInsta.io-DPR IAN - Nerves (OFFICIAL M_V).mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'Diamonds and Pearls', artista:'DPR IAN', src:'music/SnapInsta.io-DPR LIVE, DPR IAN, peace. - Diamonds   and Pearls (Official M_V).mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'007', artista:'Tabber', src:'music/SnapInsta.io-007 (feat. Syd)(720p).mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'Gimme Love', artista:'Joji', src:'music/SnapInsta.io-Joji - Gimme Love (Official Video).mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'SLOW DANCING IN THE DARK', artista:'Joji', src:'music/SnapInsta.io-Joji - SLOW DANCING IN THE DARK.mp3', img:'imgRadio/iradio.jpg'},
    {titulo:'Back To Me', artista:'The Rose', src:'music/SnapInsta.io-The Rose (더로즈) – Back To Me _ Official Video.mp3', img:'imgRadio/iradio.jpg'}
];


let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


renderizarMusica(indexMusica);


document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 9;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 9){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

