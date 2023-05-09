function gramophone (bandName, albumName, songName) {
    let fullRotation = 2.5;
    bandName = String(bandName);
    albumName = String(albumName);
    songName = String(songName);
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotatedTimes = Math.ceil(songDuration / fullRotation);
    console.log(`The plate was rotated ${rotatedTimes} times.`); 
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')