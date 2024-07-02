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
