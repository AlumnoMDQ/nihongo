document.addEventListener('DOMContentLoaded', function() {
    const tableCells = document.querySelectorAll('#hiragana-table td');

    tableCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const audioFile = `../static/audio/${cell.textContent}.mp3`; // Ruta del archivo de audio
            const audio = new Audio(audioFile);
            audio.play();
        });
    });
});
