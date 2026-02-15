loadSprite("acheve1","https://image2url.com/r2/default/images/1771121029822-862d7cd8-c808-448f-988f-3569f26fd97f.png")
loadSprite("lock","https://image2url.com/r2/default/images/1771121393431-b8bd46aa-25fc-4124-bdcc-5fce41da8fcd.png")
scene("achevements",()=>{
if(acheve.isUnlocked("f8an9dj")){
add([
rect(760,90,{radius:40}),

pos(10,20)
])
  add([
  sprite("acheve1"),
      scale(0.55),
          anchor("center"),
      pos(70,65)
    
  ])
}else{
add([
rect(760,90,{radius:40}),

pos(10,20)
])
    add([
  sprite("lock"),
    scale(0.5),
      anchor("center"),
      pos(50,65)
  ])
}
})















