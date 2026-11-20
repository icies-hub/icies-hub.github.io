const id = new URLSearchParams(window.location.search).get("id");

const tech = techs.find(t => t.id === id);

if (tech) {
  document.title = tech.name + " - Icies Hub";
  document.getElementById("tech-name").textContent = tech.name;
    fetch("data/techs/" + tech.id + ".md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("tech-content").innerHTML = marked.parse(text);
    });

  const video = document.getElementById("tech-video");
  if (tech.video) {
    video.href = tech.video;
  } else {
    video.remove();
  }
} else {
  document.getElementById("tech-name").textContent = "Tech not found";
}