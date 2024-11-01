function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("active");
    }
  });
}

let options = {
  threshold: [0.3],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".anim");

for (let elm of elements) {
  observer.observe(elm);
}
