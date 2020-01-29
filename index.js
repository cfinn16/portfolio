const mediumFetch = async(name) => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${name}`
  );
  if (res) {
    return await res.json()
  }
}

document.addEventListener('DOMContentLoaded', async() => {

  const navbar = document.querySelector(".navbar")
  const sticky = navbar.offsetTop;

  const stories = await mediumFetch('@ConnorFinnegan')
  const filteredStories = stories.items.filter(x => x.categories.length > 0)

  console.log(filteredStories)

  const blogsSection = document.getElementById('blogs-container')
  console.log(blogsSection)

  filteredStories.map(story => {
    const aTag = document.createElement('a')
    aTag.setAttribute('href', `${story.link}`)
    aTag.setAttribute('target', '_blank')
    aTag.setAttribute('rel', 'noopener noreferrer')
    const div = document.createElement('div')
    div.className = "blog"
    div.innerHTML += `
      <div class="image-container"><img src=${story.thumbnail} alt=${story.title} /></div>
      <p>${story.title}</p>
    `
    aTag.appendChild(div)
    blogsSection.appendChild(aTag)
  })

  window.onscroll = function() {addSticky()}

  const addSticky = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky")
    }
  }

})
