var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	video.loop = false
	console.log('auto play is set to ' + video.autoplay)
	console.log('loop is set to ' + video.loop)
});

//event listeners - play and pause buttons
document.querySelector("#play").addEventListener("click", function() {
    console.log("Video is successfully playing");
    video.play(); // Play the video
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Video is successfully paused");
    video.pause(); // Pause the video
});

//event listener - the "Slow Down" button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	// Reduce the playback speed by 10%
	video.playbackRate -= 0.1;
	console.log("speed changed to: " + video.playbackRate);
});

//event listener - the "Speed Up" button
 document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        // Increase the playback speed proportionally
        video.playbackRate += 0.1;
        console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	// Calculate the new time to skip to
	var newTime = video.currentTime + 10;
	// If new time exceeds the video duration, go back to the start of the video
	if (newTime > video.duration) {
		newTime = 0;
	}
	// Update the current time of the video
	video.currentTime = newTime;
	// Log the current location of the video
	console.log("Current location: " + video.currentTime + " seconds");
});

//event listener - the "Mute" button
var muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
	console.log("Toggle Mute");
	// Toggle the muted property of the video
	video.muted = !video.muted;
	// Update button text based on mute status
	if (video.muted) {
		muteButton.textContent = "Unmute";
	} else {
		muteButton.textContent = "Mute";
	}
});

//event listener - the volume slider
var volumeSlider = document.querySelector("#slider");
volumeSlider.addEventListener("input", function() {
	// Set the volume of the video based on the slider value
        video.volume = volumeSlider.value / 100;
        // Update volume information in the console log
        console.log("Volume: " + volumeSlider.value + "%");
        // Update volume information in the HTML
        document.getElementById("volume").textContent = volumeSlider.value + "%";
});

//event listener - the "Old School" button
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("display is in oldSchool");
	video.classList.add("oldSchool"); // Add oldSchool class to the video
});

//event listener - the "Original" button
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove oldSchool class - display is original");
	video.classList.remove("oldSchool"); // Remove oldSchool class from the video
});
