const doorsQv = {
  type: ['classic', 'modern', 'hivde'],
  time: ['slow', 'fast'],
  adv: ['silent', 'normal'],
  modelType: ['01', '02', '03'],
  glass: true,
  color: ['red', 'blue', 'yellow']
};

var selectors = {
  "delivery": {
          "1":["PR-05","PR-01","PND-01","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c"],
          "2+":["PR-01","PND-01","SC-04","PR-05","SR-01","VND-02","CL-05","ALP-01","Siena(Rossi)","Royal(Avalon)","Liberta(Kross)","Loft(Berta g)","Cortes(Dolce)","Loft(Porto 2)","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c","ArtVision(A1)"]
        },
  "design":{
        "classic":["CL-05","Siena(Rossi)","Royal(Avalon)"],
        "modern":["SC-04","PR-05","ALP-01","SR-01","VND-02","PR-01","PND-01","Liberta(Kross)","Loft(Berta g)","Cortes(Dolce)","Loft(Porto 2)","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c"],
        "hidden":["ArtVision(A1)"]
      },
  "silent":{  
        "standart":["SC-04","PR-05","SR-01","VND-02","CL-05","PR-01","PND-01","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c"],
        "high":["ALP-01","Siena(Rossi)","Royal(Avalon)","Liberta(Kross)","Loft(Berta g)","Cortes(Dolce)","Loft(Porto 2)","ArtVision(A1)"]
      },
  "repair" : {
        "standart":["ALP-01","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c"],
        "high":["SC-04","PR-05","SR-01","VND-02","CL-05","PR-01","PND-01","Royal(Avalon)","Liberta(Kross)","Siena(Rossi)","Loft(Berta g)","Cortes(Dolce)","Loft(Porto 2)","ArtVision(A1)"]
        },
  "waterproof" : {
        "standart":["Royal(Avalon)","Liberta(Kross)"],
        "high":["SC-04","PR-05","SR-01","VND-02","CL-05","ALP-01","PR-01","PND-01","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c","Siena(Rossi)","Loft(Berta g)","Cortes(Dolce)","Loft(Porto 2)","ArtVision(A1)"]
        },
  "ecology": {
        "standart":["SC-04","PR-05","SR-01","VND-02","CL-05","ALP-01","PR-01","PND-01","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c"],
        "high":["Siena(Rossi)","Loft(Berta g)","Cortes(Dolce)","Loft(Porto 2)","Royal(Avalon)","Liberta(Kross)","ArtVision(A1)"]
        },
  "lifetime": {
        "standart":["SC-04","PR-05","SR-01","VND-02","CL-05","ALP-01","PR-01","PND-01","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c"],
        "high":["Royal(Avalon)","Liberta(Kross)","Siena(Rossi)","Loft(Berta g)","Cortes(Dolce)","Loft(Porto 2)","ArtVision(A1)"]
        },
  "standart": {"high":["SC-04","PR-05","SR-01","VND-02","CL-05","PR-01","PND-01","ML-14c","ML-02c","ML-22c","ML-00Fc","ML-04c"]},
  "has_glass": ["SR-01","CL-05","Siena(Rossi)","Royal(Avalon)"]
};




var doors = 
{"SC-04":{
  "article":"SC-04",
  "manufacturer":"kofrad","delivery":"15-21","design":"modern","silent":"standart","repair":"high","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,4,1,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1,2,3], "pictures":[
        {"title":"Белый ясень","price":6403,"url":"kofrad-sc04-beliiyasen.jpg","ral":false},
        {"title":"Эш вайт","price":6403,"url":"kofrad-sc04-eshvait.jpg","ral":false},
        {"title":"Орех","price":6111,"url":"kofrad-sc04-oreh.jpg","ral":false}, 
        {"title":"Венге","price":6111,"url":"kofrad-sc04-venge.jpg","ral":false}
      ],
  "colors":["Дуб белёный","Орех","Ясень белый","Эш вайт"]
  },
"PR-05":{
  "article":"PR-05",
  "manufacturer":"kofrad","delivery":"1-3","design":"modern","silent":"standart","repair":"high","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,4,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1,2,3], "pictures":[
        {"title":"Дуб белёный","price":5198,"url":"kofrad-pr05-beliidyb.jpg","ral":false},
        {"title":"Белый ясень","price":5465,"url":"kofrad-pr05-beliiyasen.jpg","ral":false},
        {"title":"Дуб грей","price":5198,"url":"kofrad-pr05-dybgrei.jpg","ral":false},
        {"title":"Орех","price":5198,"url":"kofrad-pr05-oreh.jpg","ral":false},
        {"title":"Венге","price":5198,"url":"kofrad-pr05-venge.jpg","ral":false}
      ],
  "colors":["Дуб белёный","Венге","Орех","Дуб грей", "Ясень белый"]
  },
"SR-01":{
  "article":"SR-01",
  "manufacturer":"kofrad","delivery":"15-21","design":"modern","silent":"standart","repair":"high","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,4,2,1,1], "mayHaveGlass":false, "glassOnly":true,
  "shop":[1,2,3], "pictures":[
        {"title":"Дуб белёный","price":6827,"url":"kofrad-sr01-debbelenii.jpg","ral":false},
        {"title":"Лайт бетон","price":6827,"url":"kofrad-sr01-laitbeton.jpg","ral":false},
        {"title":"Орех","price":6827,"url":"kofrad-sr01-oreh.jpg","ral":false},
        {"title":"Венге","price":6827,"url":"kofrad-sr01-vange.jpg","ral":false}
      ],
  "colors":["Венге", "Дуб белёный", "лайт бетон", "Орех", "Ясень белый"]
  },
"VND-02":{
  "article":"VND-02",
  "manufacturer":"kofrad","delivery":"15-21","design":"modern","silent":"standart","repair":"high","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,4,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1,2,3], "pictures":[
        {"title":"Дуб белёный","price":6013,"url":"kofrad-vnd01-dybbelenii.jpg","ral":false},
        {"title":"Дуб грей","price":6013,"url":"kofrad-vnd01-dybgrei.jpg","ral":false},
        {"title":"Дуб марсала","price":6013,"url":"kofrad-vnd01-dybmarsala.jpg","ral":false},
        {"title":"Орех","price":6013,"url":"kofrad-vnd01-oreh.jpg","ral":false},
        {"title":"Венге","price":6013,"url":"kofrad-vnd01-venge.jpg","ral":false}
      ],
  "colors":["Дуб белёный", "Венге", "Орех", "Дуб грей", "Дуб марсала"]
  },
"CL-05":{
  "article":"CL-05",
  "manufacturer":"kofrad","delivery":"15-21","design":"classic","silent":"standart","repair":"high","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,4,2,1,1], "mayHaveGlass":false, "glassOnly":true,
  "shop":[1,2,3],
  "pictures":[
        {"title":"Дуб браш","price":7097,"url":"kofrad-cl01-dybbrash.jpg","ral":false},
        {"title":"Дуб грей","price":7097,"url":"kofrad-cl01-dybgrei.jpg","ral":false},
        {"title":"Дуб марсала","price":7097,"url":"kofrad-cl01-dybmarsala.jpg","ral":false},
        {"title":"Орех","price":7097,"url":"kofrad-cl01-oreh.jpg","ral":false}
      ],
  "colors":["Орех", "Дуб грей", "Дуб марсала", "Дуб брашированный"]
  },
"ALP-01":{
  "article":"ALP-01",
    "manufacturer":"kofrad","delivery":"15-21","design":"modern","silent":"high","repair":"standart","waterproof":"high","ecology":"standart","lifetime":"standart","params":[4,1,3,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1,2,3], "pictures":[
        {"title":"Арт бетон","price":7770,"url":"kofrad-alp01-artbeton.jpg","ral":false},
        {"title":"Лайт бетон","price":7770,"url":"kofrad-alp01-laitbeton.jpg","ral":false},
        {"title":"Лофт бетон","price":7770,"url":"kofrad-alp01-loftbeton.jpg","ral":false},
        {"title":"Сталь кортен","price":7770,"url":"kofrad-alp01-stalkorten.jpg","ral":false}
      ],
  "colors":["сталь кортен", "арт бетон", "лофт бетон", "лайт бетон"]
  },
"PR-01":{
  "article":"PR-01",
  "manufacturer":"kofrad","delivery":"1-3","design":"modern","silent":"standart","repair":"high","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,4,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1,2,3], "pictures":[
        {"title":"Дуб белёный","price":5000,"url":"kofrad-pr01-beliidyb.jpg","ral":false},
        {"title":"Белый ясень","price":5450,"url":"kofrad-pr01-beliiyasen.jpg","ral":false},
        {"title":"Дуб браш","price":5450,"url":"kofrad-pr01-dybbrash.jpg","ral":false},
        {"title":"Венге","price":5000,"url":"kofrad-pr01-venge.jpg","ral":false}
      ],
  "colors":["Венге", "Орех", "Дуб белёный", "Белый ясень, Дуб брашированный"]
  },
"PND-01":{
  "article":"PND-01",
  "manufacturer":"kofrad","delivery":"1-3","design":"modern","silent":"standart","repair":"high","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,4,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1,2,3], "pictures":[
        {"title":"Белый ясень","price":5564,"url":"kofrad-pnd01-beliiyasen.jpg","ral":false},
        {"title":"Дуб браш","price":5564,"url":"kofrad-pnd01-dybbrash.jpg","ral":false},
        {"title":"Дуб марсала","price":5070,"url":"kofrad-pnd01-dybmarsals.jpg","ral":false},
        {"title":"Дуб тобакко","price":5564,"url":"kofrad-pnd01-dybtobakko.jpg","ral":false},
        {"title":"Эш вайт","price":5564,"url":"kofrad-pnd01-eshwait.jpg","ral":false}
      ],
  "colors":["Белый ясень", "Эш-вайт", "Дуб брашированный", "Дуб марсала", "Дуб тобако"]
  },
"ML-14c":{
  "article":"ML-14c",
  "manufacturer":"Папа Карло","delivery":"1-3","design":"modern","silent":"standart","repair":"standart","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,1,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1], "pictures":[
        {"title":"Белый матовый","price":5550,"url":"papacarlo-ml14c-beliimatovii.jpg","ral":false},
        {"title":"Дуб кремовый","price":5550,"url":"papacarlo-ml14c-dybkrem.jpg","ral":false},
        {"title":"Дуб серый брашированный","price":5550,"url":"papacarlo-ml14c-dybseriibrash.jpg","ral":false},
        {"title":"Венге","price":5550,"url":"papacarlo-ml14c-venge.jpg","ral":false},
        {"title":"Ясень белый","price":5550,"url":"papacarlo-ml14c-yasenbelii.jpg","ral":false}
      ],
  "colors":["Венге",  "Ясень белый", "Белый матовый", "Дуб серый брашированный", "Дуб кремовый"]
  },
"ML-02c":{
  "article":"ML-02c",
  "manufacturer":"Папа Карло","delivery":"1-3","design":"modern","silent":"standart","repair":"standart","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,1,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1], "pictures":[
        {"title":"Белый матовый","price":5550,"url":"papacarlo-ml02c-beliimatovii.jpg","ral":false},
        {"title":"Дуб кремовый","price":5550,"url":"papacarlo-ml02c-dybkrem.jpg","ral":false},
        {"title":"Серый дуб брашированный","price":5550,"url":"papacarlo-ml02c-seriidybbrash.jpg","ral":false},
        {"title":"Венге","price":5550,"url":"papacarlo-ml02c-venge.jpg","ral":false},
        {"title":"Белый ясень","price":5550,"url":"https://static.tildacdn.com/tild3039-6136-4837-b930-326237393831/ml_02c__.jpg","ral":false}
        
      ],
  "colors":["Венге",  "Ясень белый", "Белый матовый", "Дуб серый брашированный", "Дуб кремовый"]
  },
"ML-22c":{
  "article":"ML-22c",
  "manufacturer":"Папа Карло","delivery":"1-3","design":"modern","silent":"standart","repair":"standart","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,1,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1], "pictures":[
        {"title":"Белый матовый","price":5550,"url":"papacarlo-ml22c-beliimatovii.jpg","ral":false},
        {"title":"Белый ясень","price":5550,"url":"papacarlo-ml22c-beliiyasen.jpg","ral":false},
        {"title":"Дуб кремовый","price":5550,"url":"papacarlo-ml22c-dybkrem.jpg","ral":false},
        {"title":"Дуб серый брашированный","price":5550,"url":"papacarlo-ml22c-dybseriibrash.jpg","ral":false},
        {"title":"Венге","price":5550,"url":"papacarlo-ml22c-venge.jpg","ral":false}
      ],
  "colors":["Венге",  "Ясень белый", "Белый матовый", "Дуб серый брашированный", "Дуб кремовый"]
  },
"ML-00Fc":{
  "article":"ML-00Fc",
  "manufacturer":"Папа Карло","delivery":"1-3","design":"modern","silent":"standart","repair":"standart","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,1,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1], "pictures":[
        {"title":"Белый матовый","price":5550,"url":"papacarlo-ml00fc-beliimatovii.jpg","ral":false},
        {"title":"Дуб кремовый","price":5550,"url":"papacarlo-ml00fc-dybkrem.jpg","ral":false},
        {"title":"Серый буд брашированный","price":5550,"url":"papacarlo-ml00fc-seriideybbrash.jpg","ral":false},
        {"title":"Венге","price":5550,"url":"papacarlo-ml00fc-venge.jpg","ral":false},
        {"title":"Ясень белый","price":5550,"url":"papacarlo-ml00fc-yasenbelii.jpg","ral":false}
      ],
  "colors":["Венге",  "Ясень белый", "Белый матовый", "Дуб серый брашированный", "Дуб кремовый"]
  },
"ML-04c":{
  "article":"ML-04c",
  "manufacturer":"Папа Карло","delivery":"1-3","design":"modern","silent":"standart","repair":"standart","waterproof":"high","ecology":"standart","lifetime":"standart","params":[1,1,2,1,1], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1], "pictures":[
        {"title":"Белый матовый","price":5550,"url":"papacarlo-ml04c-beliimatovii.jpg","ral":false},
        {"title":"Белый ясень","price":5550,"url":"papacarlo-ml04c-beliiyasen.jpg","ral":false},
        {"title":"Дуб серый брашированный","price":5550,"url":"papacarlo-ml04c-bydseriibrash.jpg","ral":false},
        {"title":"Дуб кремовый","price":5550,"url":"papacarlo-ml04c-dybkrem.jpg","ral":false},
        {"title":"Венге","price":5550,"url":"papacarlo-ml04c-venge.jpg","ral":false}
      ],
  "colors":["Венге",  "Ясень белый", "Белый матовый", "Дуб серый брашированный", "Дуб кремовый"]
  },        
"Siena(Rossi)":{
  "article":"Siena(Rossi)",
  "manufacturer":"rodos","delivery":"45-55","design":"classic","silent":"high","repair":"high","waterproof":"high","ecology":"high","lifetime":"high","params":[2,3,3,2,2], "mayHaveGlass":true, "glassOnly":false,
  "shop":[2,3],
  "glassno":[
        {"title":"Белый ясень (без стекла)","color":"white","price":15710,"url":"rodos-siena(rossi)-belii-glassno.jpg","bro":"rodos-siena(rossi)-belii-glassyes.jpg","ral":false},
        {"title":"RAL 7015 (без стекла)","color":"white","price":18127,"url":"rodos-siena(rossi)-glassno-ral-7015.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 7037 (без стекла)","color":"white","price":18127,"url":"rodos-siena(rossi)-glassno-ral-7037.png","bro":"ral-7037.png","ral":true},
        {"title":"RAL 7040 (без стекла)","color":"white","price":18127,"url":"rodos-siena(rossi)-glassno-ral-7040.png","bro":"ral-7040.png","ral":true},
        {"title":"RAL 9001 (без стекла)","color":"white","price":18127,"url":"rodos-siena(rossi)-glassno-ral-9001.png","bro":"ral-9001.png","ral":true}
  ],
  "glassyes":[
        {"title":"Белый ясень (со стеклом)","color":"white","price":15000,"url":"rodos-siena(rossi)-belii-glassyes.jpg","bro":"rodos-siena(rossi)-belii-glassno.jpg","ral":false},
        {"title":"RAL 7015 (со стеклом)","color":"white","price":17322,"url":"rodos-siena(rossi)-glassyes-ral-7015.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 7037 (со стеклом)","color":"white","price":17322,"url":"rodos-siena(rossi)-glassyes-ral-7037.png","bro":"ral-7037.png","ral":true},
        {"title":"RAL 7040 (со стеклом)","color":"white","price":17322,"url":"rodos-siena(rossi)-glassyes-ral-7040.png","bro":"ral-7040.png","ral":true},
        {"title":"RAL 9001 (со стеклом)","color":"white","price":17322,"url":"rodos-siena(rossi)-glassyes-ral-9001.png","bro":"ral-9001.png","ral":true}
  ],
  "pictures":[
        {"title":"Белый (без стекла)","price":0,"url":"rodos-siena(rossi)-belii-glassno.jpg","ral":false},
        {"title":"Белый (со стеклом)","price":0,"url":"rodos-siena(rossi)-belii-glassyes.jpg","ral":false}
      ],
  "colors":["Дуб белёный","Венге","Орех","Дуб грей", "Ясень белый"]
  },
"Royal(Avalon)":{
  "article":"Royal(Avalon)",
  "manufacturer":"rodos","delivery":"35-45","design":"classic","silent":"high","repair":"high","waterproof":"standart","ecology":"high","lifetime":"high","params":[2,2,1,3,3], "mayHaveGlass":true, "glassOnly":false,
  "shop":[2,3],
  "glassno":[
        {"title":"Белый ясень (без стекла)","color":"white","price":12400,"url":"rodos-royal(avalon)-beliiyasen-glassno.jpg","bro":"rodos-royal(avalon)-beliiyasen-glassyes.jpg","ral":false},
        {"title":"Палисандр (без стекла)","color":"#392524","price":12400,"url":"rodos-royal(avalon)-palisandr-glassno.jpg","bro":"rodos-royal(avalon)-palisandr-glassyes.jpg","ral":false}
        ],
  "glassyes":[
        {"title":"Белый ясень (со стеклом)","color":"white","price":12400,"url":"rodos-royal(avalon)-beliiyasen-glassyes.jpg","bro":"rodos-royal(avalon)-beliiyasen-glassno.jpg","ral":false},
        {"title":"Палисандр (со стеклом)","color":"#392524","price":12400,"url":"rodos-royal(avalon)-palisandr-glassyes.jpg","bro":"rodos-royal(avalon)-palisandr-glassno.jpg","ral":false}
        ],
  "pictures":[
        {"title":"Белый ясень","color":"white","price":0,"url":"rodos-royal(avalon)-beliiyasen-glassno.jpg","ral":false},
        {"title":"Палисандр","color":"#392524","price":0,"url":"rodos-royal(avalon)-palisandr-glassno.jpg","ral":false},
        {"title":"Белый ясень","color":"white","price":0,"url":"rodos-royal(avalon)-beliiyasen-glassyes.jpg","ral":false},
        {"title":"Палисандр","color":"#392524","price":0,"url":"rodos-royal(avalon)-palisandr-glassyes.jpg","ral":false}
      ],
  "colors":["Дуб белёный","Венге","Орех","Дуб грей", "Ясень белый"]
  },
"Liberta(Kross)":{
  "article":"Liberta(Kross)",
  "manufacturer":"rodos","delivery":"35-45","design":"modern","silent":"high","repair":"high","waterproof":"standart","ecology":"high","lifetime":"high","params":[3,2,1,3,3], "mayHaveGlass":false, "glassOnly":false,
  "shop":[2,3],
  "pictures":[
        {"title":"Белый","price":10300,"url":"rodos-liberta(kross)-belii.jpg","ral":false},
        {"title":"Палисандр","price":10300,"url":"rodos-liberta(kross)-palisandr.jpg","ral":false}
      ],
  "colors":["Палисандр, Белый ясень"]
  },
"Loft(Berta g)":{
  "article":"Loft(Berta g)",
  "manufacturer":"rodos","delivery":"35-45","design":"modern","silent":"high","repair":"high","waterproof":"high","ecology":"high","lifetime":"high","params":[3,3,3,2,2], "mayHaveGlass":false, "glassOnly":false,
  "shop":[2,3],
  "pictures":[
        {"title":"Белый","price":11600,"url":"rodos-loft(bertag)-chernii.jpg","ral":false},
        {"title":"RAL 7015","color":"white","price":13200,"url":"rodos-berta-ral-7015.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 7037","color":"white","price":13200,"url":"rodos-berta-ral-7037.png","bro":"ral-7037.png","ral":true},
        {"title":"RAL 7040","color":"white","price":13200,"url":"rodos-berta-ral-7040.png","bro":"ral-7040.png","ral":true},
        {"title":"RAL 9001","color":"white","price":13200,"url":"rodos-berta-ral-9001.png","bro":"ral-9001.png","ral":true}
      ],
  "colors":["белый", 7015, 7037, 9001, 7040]
  },
"Cortes(Dolce)":{
  "article":"Cortes(Dolce)",
  "manufacturer":"rodos","delivery":"35-45","design":"modern","silent":"high","repair":"high","waterproof":"high","ecology":"high","lifetime":"high","params":[3,3,3,2,2], "mayHaveGlass":false, "glassOnly":false,
  "shop":[2,3],
  "pictures":[
        {"title":"Белый","price":12200,"url":"rodos-cortes(dolce)-belii.jpg","ral":false},
        {"title":"RAL 7015","color":"white","price":14000,"url":"rodos-cortes(dolce)-ral-7015.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 7037","color":"white","price":14000,"url":"rodos-cortes(dolce)-ral-7037.png","bro":"ral-7037.png","ral":true},
        {"title":"RAL 7040","color":"white","price":14000,"url":"rodos-cortes(dolce)-ral-7040.png","bro":"ral-7040.png","ral":true},
        {"title":"RAL 9001","color":"white","price":14000,"url":"rodos-cortes(dolce)-ral-9011.png","bro":"ral-9001.png","ral":true}
      ],
  "colors":["белый", 7015, 7037, 9001, 7040]
  },
"Loft(Porto 2)":{
  "article":"Loft(Porto 2)",
  "manufacturer":"rodos","delivery":"55-60","design":"modern","silent":"high","repair":"high","waterproof":"high","ecology":"high","lifetime":"high","params":[3,3,3,2,2], "mayHaveGlass":false, "glassOnly":false,
  "shop":[2,3],
  "pictures":[
        {"title":"Белый","price":12200,"url":"rodos-loft(porto2)-belii.jpg","ral":false},
        {"title":"RAL 7015","color":"white","price":14000,"url":"rodos-loft(porto2)-ral-7015.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 7037","color":"white","price":14000,"url":"rodos-loft(porto2)-ral-7037.png","bro":"ral-7037.png","ral":true},
        {"title":"RAL 7040","color":"white","price":14000,"url":"rodos-loft(porto2)-ral-7040.png","bro":"ral-7040.png","ral":true},
        {"title":"RAL 9001","color":"white","price":14000,"url":"rodos-loft(porto2)-ral-9001.png","bro":"ral-9001.png","ral":true}
      ],
  "colors":["белый", 7015, 7037, 9001, 7040]
  },
"ArtVision(A1)":{
  "article":"ArtVision(A1)",
  "manufacturer":"omega","delivery":"35-45","design":"hidden","silent":"high","repair":"high","waterproof":"high","ecology":"high","lifetime":"high","params":[3,3,3,2,2], "mayHaveGlass":false, "glassOnly":false,
  "shop":[1,2,3],
  "pictures":[
        {"title":"Белый","price":8300,"url":"omega-artvision-white.jpg","ral":false},
        {"title":"RAL 7015","color":"white","price":10000,"url":"https://static.tildacdn.com/tild6431-3264-4931-a239-313061653463/RAL_7015.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 7037","color":"white","price":10000,"url":"https://static.tildacdn.com/tild3166-3337-4963-b664-303134643338/RAL_7037.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 7040","color":"white","price":10000,"url":"https://static.tildacdn.com/tild6363-3833-4164-a262-313137376532/RAL_7040.png","bro":"ral-7015.png","ral":true},
        {"title":"RAL 9001","color":"white","price":10000,"url":"https://static.tildacdn.com/tild3565-3331-4632-a361-643862323761/RAL_9001.png","bro":"ral-7015.png","ral":true}
      ],
  "colors":["белый", 7015, 7037, 7040, 9001 ]
  }        
};

const doors = {
  sc04:{
    name: 'SC-04',
    type: 'modern',
    time: 'fast',
    adv: 'normal',
    modelType: '01',
    glass: false,
    color: '',
    img: 'https://radiant-stream-65729.herokuapp.com/static/image/qv07_02.png',
  }
};

const message = {
  version: "v2",
  content:{
    messages: [
      {
        type: "text",
        text: "Ошибка"
      }
    ]
  }
};

const qv08 = {
    version: "v2",
    content: {
      messages: [
        // {
        //   type: "text",
        //   text: doors.model001.name,
        // },
        // {
        //   type: "text",
        //   text: doors.model001.price,
        // },
        // {
        //   type: "image",
        //   url: doors.model001.img,
        //   buttons: []
        // },
        {
          type: "text",
          text: "Укажите контактный номер телефона",
        }
      ],
      actions: [],
      quick_replies: []
    }
};

const qv07 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "text",
        text: "Выберите цвет"
      },
      {
        type: "cards",
        elements: [
          {
            title: "Белый ясень",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv07_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Палисандр",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 8,
                }
              }
            ]
          },
          {
            title: "Палисандр",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv07_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 8,
                }
              }
            ]
          }
        ],
        image_aspect_ratio: "horizontal"
      }
    ],
    actions: [],
    quick_replies: []
  }
};

const qv06 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "Без стекла",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv06_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 7,
                }
              }
            ]
          },
          {
            title: "Со стеклом",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv06_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 7,
                }
              }
            ]
          }
        ],
        image_aspect_ratio: "horizontal"
      }
    ],
    actions: [],
    quick_replies: []
  }
};

const qv05 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "text",
        text: "Выберите одну из представленных моделей"
      },
      {
        type: "cards",
        elements: [
          {
            title: "Модель 01",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
                }
              }
            ]
          },
          {
            title: "Модель 02",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
                }
              }
            ]
          },
          {
            title: "Модель 03",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
                }
              }
            ]
          },
          {
            title: "Модель 05",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
                }
              }
            ]
          }
        ],
        image_aspect_ratio: "horizontal"
      }
    ],
    actions: [],
    quick_replies: []
  }
};

const qv04 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "Двери с повышенной шумоизоляцией",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv04_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 5,
                }
              }
            ]
          },
          {
            title: "Стандартные двери",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv04_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 5,
                }
              }
            ]
          }
        ],
        image_aspect_ratio: "horizontal"
      }
    ],
    actions: [],
    quick_replies: []
  }
};

const qv03 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "На завтра! (на завтра существуют двери только в современном дизайне)",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv03_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 4,
                }
              }
            ]
          },
          {
            title: "Готов подождать",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv03_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 4,
                }
              }
            ]
          }
        ],
        image_aspect_ratio: "horizontal"
      }
    ],
    actions: [],
    quick_replies: []
  }
};

const qv02 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "КЛАССИЧЕСКИЕ ДВЕРИ",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv02_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 3,
                }
              }
            ]
          },
          {
            title: "СОВРЕМЕННЫЕ ДВЕРИ",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv02_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 3,
                }
              }
            ]
          },
          {
            title: "СКРЫТЫЕ ДВЕРИ",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv02_03.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 3,
                }
              }
            ]
          }
        ],
        image_aspect_ratio: "horizontal"
      }
    ],
    actions: [],
    quick_replies: []
  }
};

const qv01 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "list",
        top_element_style: "compact",
        buttons: [],
        elements: [
          {
            title: "Плохая звукоизоляция",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                  
                }
              }
            ]
          },
          {
            title: "Плохая устойчивость к влаге",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                }
              }
            ]
          },
          {
            title: "Некачественные материалы",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q03.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                }
              }
            ]
          },
          {
            title: "Дверь не подлежала реставрации",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q04.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                }
              }
            ]
          }
        ]
      }
    ],
    actions: [],
    quick_replies: []
  }
};

// app.post('/bst', (req, res) => {  
//   switch (req.body.count){
//     case 1: 
//       res.send(qv01);
//       break;
//     case 2: 
//       res.send(qv02);
//       break;
//     case 3: 
//       res.send(qv03);
//       break;
//     case 4: 
//       res.send(qv04);
//       break;
//     case 5: 
//       res.send(qv05);
//       break;
//     case 6: 
//       res.send(qv06);
//       break;
//     case 7: 
//       res.send(qv07);
//       break;
//     case 8: 
//       res.send(qv08);
//       break;
//     case 9: 
//       res.send(qv09);
//       break;
//     default:
//       res.send(message);
//   }
// });

// app.put('/', (req, res) => {
//   res.send(req.body); 
// });

// app.get('/', (req, res) => {  
//   res.send(qv01);
// });


