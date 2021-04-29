var t1 = just.animate({
    targets: ".ball",
    duration: 1524,
    props: {
      innerHTML: ['Hola', 'Adios'] 
    },
    web: {
       transform: [
          { offset: 0, value: "scale(1, 1)" },
          { offset: 0.3, value: "scale(1.25, .75)" },
          { offset: 0.4, value: "scale(.75, 1.25)" },
          { offset: 0.5, value: "scale(1.15, .85)" },
          { offset: 0.65, value: "scale(.95, 1.05)" },
          { offset: 0.75, value: "scale(1.05, .95)" },
          { offset: 1, value: "scale(1, 1)" }
       ]
    }
 });

 var t2 = just.animate({
   targets: ".ball2",
   duration: 1524,
   props: {
     innerHTML: ['Hola', 'Adios'] 
   },
   web: {
       opacity: [0, 1]
   }
});

var t3 = just.animate({
   targets: ".ball3",
   duration: 1524,
   props: {
     innerHTML: ['¿Como', 'estas?'] 
   },
   web: {
     letterSpacing: [24,124]
   }
});

var t4 = just.animate({
   targets: ".ball4",
   duration: 1524,
   props: {
     innerHTML: ['Hola', 'Adios'] 
   },
   web: {
       marginTop: [524, 0]
   }
});

var t5 = just.animate({
   targets: ".ball5",
   duration: 1524,
   props: {
     innerHTML: ['Hola', 'Adios'] 
   },
   web: {
       paddingBottom: [524, 20]
   }
});

var t6 = just.animate({
   targets: ".ball6",
   duration: 1524,
   props: {
     innerHTML: ['Hola', 'Adios'] 
   },
   web: {
       rotateX: [24,1800]
   }
});

var t7 = just.animate({
   targets: ".ball7",
   duration: 1524,
   props: {
     innerHTML: ['Hola', 'adios'] 
   },
   web: {
       rotateY: [24,1800]
   }
});

var t8 = just.animate({
   targets: ".ball8",
   duration: 1524,
   props: {
     innerHTML: ['Hola', 'adios'] 
   },
   web: {
       rotate: [24,1800]
   }
});

var t9 = just.animate({
   targets: ".ball9",
   duration: 1524,
   props: {
     innerHTML: ['Hola'] 
   },
   web: {
       borderTopLeftRadius: [1500]
   }
});

var t10 = just.animate({
   targets: ".ball10",
   duration: 1524,
   props: {
     innerHTML: ['Hola', 'Adios'] 
   },
   web: {
       marginLeft: [0,1024]
   }
});

