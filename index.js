const access_key = "P22LbL_A04bKxO5nmPf3XtkH4JCY-JXosCnW0IKPeN4";
const count = 10;
const api = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=${count}`;

// get pics

const getPhotos = async () => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    console.log("data", data);
  } catch (e) {
    console.log(`error is ${e}`);
  }
};

getPhotos();
