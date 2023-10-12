let page_number = 1;

const fetchPageData = () => {
  // link mit variabler page number
  let fetch_link = `https://picsum.photos/v2/list?page=${page_number}&limit=30`;

  fetch(fetch_link)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      data.forEach((item) => {
        let id = item.id;
        let img = item.download_url;
        let author = item.author;
        let info = item.url;

        let gallery_item = document.createElement("div");

        // * image
        let image = document.createElement("img");
        image.setAttribute("src", img);
        image.setAttribute("alt", `picsum img id: ${id}`);
        gallery_item.appendChild(image);

        // * author
        let img_author = document.createElement("p");
        img_author.textContent = author;
        gallery_item.appendChild(img_author);

        // * button
        let see_more = document.createElement("button");
        see_more.textContent = "See more";

        see_more.addEventListener("click", () => {
          window.open(info);
        });
        gallery_item.appendChild(see_more);

        // * fügt die erstellten divs ins html ein
        document.querySelector(".gallery").appendChild(gallery_item);
      });
    })
    .catch((error) => {
      console.error("error", error);
    });
};
fetchPageData();

// * laden der nächsten seite
next.addEventListener("click", () => {
  page_number++;
  fetchPageData();
});
