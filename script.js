/* TIME FUNCTION */
function updateTime() {
  const currentTimeUTC = new Date().toUTCString();
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentTimeUTC;

  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

window.onload = updateTime;
setInterval(updateTime, 60000); // Update time every minute

/*
window.onload = function () {
  const img = document.querySelector('[data-testid="slackProfilePicture"]');
  console.log("Natural Width:", img.naturalWidth);
  console.log("Natural Height:", img.naturalHeight);
};
*/