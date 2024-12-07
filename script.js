// Handle mouse movement for rotation
document.addEventListener("mousemove", (e) => {
    const image = document.querySelector(".floating-image");
    const rect = image.getBoundingClientRect();

    // Calculate the center of the image
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    // Calculate the offset from the mouse pointer
    const offsetX = (e.clientX - imageX) / 50; // Dampening factor
    const offsetY = (e.clientY - imageY) / 50; // Dampening factor

    // Clamp the rotation angles to ±40 degrees
    const rotateY = Math.max(-60, Math.min(60, offsetX));
    const rotateX = Math.max(-60, Math.min(60, offsetY));

    // Apply rotation
    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Play or stop audio when the image is clicked
document.querySelector(".floating-image").addEventListener("click", () => {
    const audio = document.getElementById("click-sound");
    if (audio.paused) {
        audio.play(); // Play the audio if it's not already playing
    } else {
        audio.pause(); // Pause the audio if it's currently playing
        audio.currentTime = 0; // Reset the audio to the beginning
    }
});
