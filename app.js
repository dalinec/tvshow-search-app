const clear = document.querySelector("#clear");
const form = document.querySelector("#searchForm");
const container = document.querySelector(".imgContainer");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      container.append(img);
    }
  }
};

clear.addEventListener('click', clearImg = () => {
    container.innerHTML = ''
}); 
