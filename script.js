
window.onload=function(){
    var list = document.getElementById("getQuestion");
    list.addEventListener("click", getFilter);
}

function getFilter(){
  var search = document.getElementById("search-bar").value
  console.log(search);
  if (search =='100'){
    var url = "http://jservice.io/api/clues?value=100"
    getQuestion(url)
  }
}

function getQuestion(link){
  fetch("http://jservice.io/api/clues?value=100")
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let output = '<hs>Questions</h2>';
    data.forEach(function(ques){
      output += `
        <ul>
        <li>Answer: ${ques.answer}</li>
        <li>Question: ${ques.question}</li>
        <li>Value: ${ques.value}</li>
        </ul>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}
