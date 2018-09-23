window.onload = function() {
  var button = document.getElementById('send');
  var result = document.getElementById('result');
  var username = document.getElementById("name");
  var password = document.getElementById("password");
  var form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  button.addEventListener("click", function() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        var obj = JSON.parse(req.responseText);
        var newEl = document.createElement('li');
        newEl.innerHTML = "名前:" + obj.name + " パスワード:" + obj.password;
        result.appendChild(newEl);
      }
    };

    req.open('POST', 'user/create', true);
    req.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    req.send('name=' + encodeURIComponent(username.value) + '&password=' + encodeURIComponent(password.value));
  }, false);
};
