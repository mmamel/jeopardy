
window.onload=function(){
    var list = document.getElementById("getQuestion");
  //  initial_load("http://jservice.io/api/clues");
    var json_data = getQuestion("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues");
    list.addEventListener("click", function(){getFilter(json_data)});
}

function getFilter(json_data){
  var ten = "10"
  var five = "5"
  if(ten>five){
    console.log(hello)
  }
  var value = document.getElementById("value-bar").value;
  console.log(value);
  var category = document.getElementById("category-bar").value;
  console.log(category);
  var start = document.getElementById("start-date-bar").value;
  //var end = document.getElementById("end-date-bar").value;
  var update='';
  const container = document.getElementsByClassName("output");
  for(var i =0; i<container.length;i++){
    var curr = container[i].children
    console.log(container[i])
    console.log(curr[2].textContent)
    if(value!='' && curr[2].textContent != value){
        container[i].className = "output";
    }
    if(category!= '' && curr[3].textContent != category){
      container[i].className = "output";
    }
    if(start!='' && curr[4].textContent != start){
      container[i].className = "output";
    }
  }
  // while(container.firstChild){
  //   if(value!= '' && $("value").text() != value){
  //     container.firstChild.className = "output";
  //   }
  //   if(category!= '' && $("category").text() != category){
  //     container.firstChild.className = "output";
  //   }
  //   //container.removeChild(container.firstChild);
  // }
//   json_data.then(function(data){data.forEach(function(ques){
//     if(value != '' && ques.value == value){
//       console.log('eh');
//       update += `
//       <div class="output">
//         <span class="answer"> ${ques.answer}</span>
//         <span class ="question"> ${ques.question}</span>
//         <span class = "value">${ques.value}</span>
//         <span class = "category">${ques.category.title}</span>
//
//       </div>
//       `;
//     }
//     if(category != '' && ques.category.title === category){
//       console.log("hello");
//       update += `
//       <div class="output">
//         <span class="answer"> ${ques.answer}</span>
//         <span class ="question"> ${ques.question}</span>
//         <span class = "value">${ques.value}</span>
//         <span class = "category">${ques.category.title}</span>
//
//       </div>
//       `;
//     }
//     document.getElementById("output-container").innerHTML = update;
//
//   });
// }
// )
    //
    // var url = "http://jservice.io/api/clues?value=" + search;
    // getQuestion(url)


}
// "http://jservice.io/api/clues?value=100"
function getQuestion(link){
  return fetch(link)
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    var output='';
    console.log(typeof data);
    var array = new Array();
    data.forEach(function(ques){
      var airdate = ques.airdate.slice(0,10)
      output += `
        <div class="output show">
          <p class="answer"> ${ques.answer}</p>
          <p class ="question"> ${ques.question}</p>
          <p class = "value">${ques.value}</p>
          <p class = "category">${ques.category.title}</p>
          <p class = "airdate">${airdate}</p>
        </div>
      `;
    });
    // document.getElementById('output').append(output);
    document.getElementById('output-container').innerHTML = output;
    //var temp.JSON.parse(data);
    return data;
  })
}

function initial_load(link){
    fetch(link)
  .then(function(res){
    return res.json();
  })
  .then(function(data){
        // let output = '<h2></h2>';
    var output='';
    console.log(typeof data);
    var array = new Array();
    data.forEach(function(ques){
      output += `
        <div class="output">
          <span class="answer"> ${ques.answer}</span>
          <span class ="question"> ${ques.question}</span>
          <span class = "value">${ques.value}</span>
        </div>
      `;
    });
    document.getElementById('output-container').innerHTML = output;

  })
}
// <ul>
// <li>Answer: ${ques.answer}</li>
// <li>Question: ${ques.question}</li>
// <li>Value: ${ques.value}</li>
// </ul>
