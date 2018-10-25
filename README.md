About Project
----
This project is based on HTML, CSS, JS and an Ajax call made to a website for getting the current climatic conditions of
a city.

Main theme of the project
----
* An ```onkeypress``` event listener is added to the input field.
* If key code of the the pressed key is 13 i.e. ```return``` then process further else exit
* Now get the value entered by the user and check it's length
* If valid create a ```XMLHttpRequest``` object and hit a function ```onreadystatechange``` each time the system changes
  it's state
* Now finally when the ```readyState``` is 4 and ```status``` is 200 javascript will create a structure for the fetched data and
  show it to the user. 

Important Links to Refer
----
```
https://www.w3schools.com/js/js_ajax_http_send.asp
```
