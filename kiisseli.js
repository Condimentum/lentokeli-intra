const postStory = (event) => {
  event.preventDefault();
  const url = "https://fgrhn2wld3.execute-api.eu-north-1.amazonaws.com/dev/storyservice";
  const story = {
    text: document.getElementById("story").value
  };
  fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(story)
    })
    .then(response => response.json())
    .catch(err => console.log(err));
};
