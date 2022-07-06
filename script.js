const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream and pass to the video element and play
 async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        
    }
 }

 button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;

    // Start picture in picture
    await videoElement.requestPictureInPicture();

    // Reset Button
    button.disabled = false;
 });

//  On load
selectMediaStream();