// Adsterra Direct Link Redirect after 2 minutes
const directLink = 'https://www.profitableratecpm.com/b4dxm7ww9n?key=3bbc264cc334b94ae3c668235f863434'; // UPDATED DIRECT LINK
const redirectDelay = 2 * 60 * 1000; // 2 minutes in milliseconds

setTimeout(() => {
    console.log("Redirecting to Adsterra Direct Link after 2 minutes...");
    window.location.href = directLink;
}, redirectDelay);
// End Adsterra Direct Link Redirect