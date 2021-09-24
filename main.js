var image =
    ["mummy.jpg",
     "Sibling.jpg",
     "Me.jpg",
    ];
    var name1 =
     ["Mummy",
     "My Brother",
     "Me",
    ];
var i = 0;

function nextimage(){
  i++;
  if(i==4)
  {i=1;
  }  document.getElementById("img1").src=image[i];
  document.getElementById("name").innerHTML=name1[i];

}

