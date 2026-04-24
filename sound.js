function playSound(num) {
            const audio = document.getElementById('s' + num);
            if (!audio) return;
            audio.currentTime = 0; 
            audio.play().catch(e => alert('Error: ' + e.message));
        }



if (key === 'a' || key === 'A') {
            playSound(1);
        } else if (key === 's' || key === 'S') {
            playSound(2);
        } else if (key === 'd' || key === 'D') {
            playSound(3);
        } else if (key === 'f' || key === 'F') {
            playSound(4);
        } else if (key === 'g' || key === 'G') {
            playSound(5);
        } else if (key === 'h' || key === 'H') {
            playSound(6);
        } else if (key === 'j' || key === 'J') {
            playSound(7);
        } else if (key === 'k' || key === 'K') {
            playSound(8);
        }