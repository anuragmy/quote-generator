const access_key = "P22LbL_A04bKxO5nmPf3XtkH4JCY-JXosCnW0IKPeN4";
const count = 10;
const api = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=${count}`;
const loader = document.getElementsByClassName("loader");
const imageContainer = document.getElementById("image-container");
const photosArray = [];
let ready = false;
let totalImages = 0;
let imagesHaveLoaded = 0;

// check all images loaded

const imagesLoaded = () => {
  console.log("images loaded");
  imagesHaveLoaded++;
  if (imagesHaveLoaded === totalImages) {
    ready = true;
  }
};
// display pics

const displayPics = (photos) => {
  imagesHaveLoaded = 0;
  totalImages = photos?.length;

  photos.forEach((photo) => {
    const item = document.createElement("a");

    item.setAttribute("href", photo?.links?.html);
    item.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", photo?.urls?.regular);
    img.setAttribute("alt", photo?.alt_description);
    // check for each image load
    img.addEventListener("load", imagesLoaded);
    // put image inside 'a', and both inside 'item-container'
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// get pics

const getPhotos = async () => {
  try {
    const res = await fetch(api);
    const photos = await res.json();

    displayPics(photos);
  } catch (e) {
    console.log(`error is ${e}`);
  }
};

// scroll event

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    getPhotos();
    ready = false;
  }
});

getPhotos();
