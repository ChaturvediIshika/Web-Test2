themes = document.querySelectorAll('[name="theme"]');
      themes.forEach((theme) => {
        theme.addEventListener("click", () => store(theme));
      });
      function store(theme) {
        localStorage.setItem("theme", theme.id);
      }
      function apply() {
        storedtheme = localStorage.getItem("theme");
        themes.forEach((theme) => {
          if (theme.id === storedtheme) {
            theme.checked = true;
          }
        });
      }
      document.onload = apply();


var content=document.getElementById("content");
function getData(title)
{
    console.log(title);
    const URL=`https://api.tvmaze.com/search/shows?q=${title}`;
    fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log(data);
      console.log(data.length);
      for(let i=0;i<data.length;i++)
    {
        if(data[i].show.image!=null)
        {
            var img=new Image();
            img.src=data[i].show.image.original;
            content.appendChild(img);
        console.log(data[i].show.image.original);
        }
    }
    })
    .catch((error) => console.log(error.message));
}

    
    
document.getElementById('btn').addEventListener("click",display);

function display(){
    var title=document.getElementById('search').value;
    getData(title);
}



