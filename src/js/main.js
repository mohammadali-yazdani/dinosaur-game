const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldEl = document.querySelector("[data-world]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);

let lastTime;
function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  const delta = time - lastTime;
  console.log(delta);

  lastTime = time;
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

function setPixelToWorldScale() {
  let worldToPixelScale;
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }

  worldEl.computedStyleMap.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldEl.computedStyleMap.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}
