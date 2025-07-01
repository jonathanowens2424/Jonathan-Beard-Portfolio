fetch("main.json")
  .then(res => res.json())
  .then(data => {
    let html = "";

    data.forEach(song => {
      html += `
      <section>
        <div class="col-sm-12 d-md-none text-start">
          <img src="${song.image}" class="img-thumbnail rounded mb-4" alt="..." style="width: 200px; height: 200px; object-fit: cover;">
        </div>
        <div class="row align-items-center jbeard-text-border">
          <div class="col-sm-12 col-md-8 jBeard-body-font">
            <h3 class="jbeard-bodyText-italic">${song.songName}</h3>
            <p class="jbeard-bodyText-italic">By: ${song.artist}</p>
            <p class="m-0 jbeard-bodyText-font">${song.description}</p>
            <a href="${song.spotifyLink}" class="text-dark text-decoration-none jBeard-hoverEffect">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-spotify mt-2" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
              </svg>
            </a>
          </div>
          <div class="col-12 col-md-4 d-none d-md-block text-center">
            <a href="${song.spotifyLink}">
            <img src="${song.image}" class="img-thumbnail box-shadow rounded" alt="..." style="width: 200px; height: 200px; object-fit: cover;">
            </a>
          </div>
        </div>
      </section>`;
    });

    document.getElementById("selectedWorksJavascript").innerHTML = html;
  })
  .catch(error => console.error("Error loading JSON:", error));
