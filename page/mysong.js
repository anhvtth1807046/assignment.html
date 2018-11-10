getMusic();
var music_content = document.getElementById("content");

function getMusic() {
    var MY_API_SONG = 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs/get-mine';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xmlHttp.responseText);
            for (var i = 0; i < obj.length; i++) {
                var music_item = '<div class="container">';
                music_item += '<div class="content" onclick="playSong(\'' + obj[i].link + '\', \'' + obj[i].name + '\', \'' + obj[i].singer + '\')" >';
                music_item += '<div class="thumbnail" style="background-image: url('+ obj[i].thumbnail +')"></div>';
                music_item += '<div class="info-song">';
                music_item += '<p class="name-song"> '+obj[i].name +'</p>';
                music_item += '<p class="singer">'+ obj[i].singer+'</p>';
                music_item += '</div>';
                music_item += '<div class="btn_action">';
                music_item += '<i class="fa fa-download" title="Tải về" aria-hidden="true"></i>';
                music_item += '<i class="fa fa-share-alt"title="Chia sẻ"  aria-hidden="true"></i>';
                music_item += '<i class="fa fa-plus" title="Thêm vào" aria-hidden="true"></i>';
                music_item += '</div>';
                music_item += '</div>';
                music_item += '</div>';
                music_content.innerHTML += music_item;
            }

        }

    };
    xmlHttp.open("GET", MY_API_SONG, true);
    xmlHttp.setRequestHeader('Authorization','Basic ' + localStorage.getItem('token'));
    xmlHttp.send();
}
function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
}