fetch('https://v1.hitokoto.cn')
   .then(response => response.json())
   .then(data => {
       const hitokoto = document.getElementById('text')
       hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
        hitokoto.innerText = "每日一言：" + data.hitokoto
    }).catch(console.error)