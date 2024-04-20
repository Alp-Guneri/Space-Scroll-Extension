function handleSpaceScroll(event) {
    shiftHeld = event.shiftKey;
    isSpace = event.key === ' ';
    focusedTag = document.activeElement.tagName.toLowerCase();
    textElemFocused = focusedTag === 'input' || focusedTag === 'textarea';
    if (!textElemFocused && isSpace) {
        event.preventDefault();
        if (!shiftHeld) {
            window.scrollBy({
        		top: window.innerHeight / 2,
        		left: 0,
        		behavior: "smooth"
    	    });
        }
        if (shiftHeld) {
            window.scrollBy({
        		top: -window.innerHeight / 2,
        		left: 0,
        		behavior: "smooth"
    	    });
        }
        event.stopPropagation();
    }
}

function handleEscapeBlur(event) {
    if (event.key.toLowerCase() === "escape") {
        document.activeElement.blur();
    }
}

window.addEventListener('keydown', handleSpaceScroll);
window.addEventListener('keydown', handleEscapeBlur);
