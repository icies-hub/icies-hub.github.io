const list = document.getElementById("tech-list");

techs.forEach(tech => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = "tech.html?id=" + tech.id;
  link.textContent = tech.name;
  item.appendChild(link);
  list.appendChild(item);
});