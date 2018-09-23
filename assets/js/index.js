window.onload = function() {
  var button = document.getElementById('send');
  var result = document.getElementById('result');
  var username = document.getElementById("name");
  var form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  button.addEventListener("click", function() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        var name = JSON.parse(req.responseText).name;
        var newEl = document.createElement('li');
        newEl.innerHTML = name;
        result.appendChild(newEl);
        loading.innerHTML = "";
      }
    };

    req.open('POST', 'user/create', true);
    req.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    req.send('name=' + encodeURIComponent(username.value));
  }, false);
};
