document.getElementById('search').onclick = function () {
    var artist = document.getElementById('artist').value.trim();
    var title = document.getElementById('title').value.trim();
    if (!artist || !title) {
        alert('Por favor ingresa artista y canción');
        return;
    }
    var request = new XMLHttpRequest();
    var url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`;
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            var lyricsElem = document.getElementById('lyrics');
            lyricsElem.hidden = false; // Quita el hidden
            if (this.status === 200) {
                var data = JSON.parse(this.responseText);
                lyricsElem.textContent = data.lyrics || 'Letra no encontrada.';
            } else {
                lyricsElem.textContent = 'Letra no encontrada.';
            }
        }
    };
    request.send();
};