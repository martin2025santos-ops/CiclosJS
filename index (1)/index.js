document.addEventListener('DOMContentLoaded', () => {
const player = new Plyr('#my-video', {
controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen',
'download'],
});
});