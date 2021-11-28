const access_key = "P22LbL_A04bKxO5nmPf3XtkH4JCY-JXosCnW0IKPeN4";
const count = 10;
const api = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=${count}`;
const loader = document.getElementsByClassName("loader");
const imageContainer = document.getElementById("image-container");
const photosArray = [];

// display pics

const displayPics = (photos) => {
  photos.forEach((photo) => {
    const item = document.createElement("a");

    item.setAttribute("href", photo?.links?.html);
    item.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", photo?.urls?.regular);
    img.setAttribute("alt", photo?.alt_description);
    // put image inside 'a', and both inside 'item-container'
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// get pics

const getPhotos = async () => {
  try {
    const loader = document.getElementById("loader");
    loader.removeAttribute("hidden");
    const res = await fetch(api);
    const photosArray = await res.json();
    console.log("photosArray", photosArray);
    if (photosArray.length) {
      loader.setAttribute("hidden", true);
      displayPics(photosArray);
    }
  } catch (e) {
    console.log(`error is ${e}`);
  }
};

// scroll event

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
  }
});

getPhotos();
