$(function(){
  var demoScreen = new SEQ.CtrlAltDel($('#demo-screen')),
      box1left = 500;
  
  $('#box1move').on('click', function(){
    demoScreen.set('box1', {
      classes: 'boxy-demo',
      html: 'I am <b>Box 1</b>!',
      css: { top: 50, left: box1left }
    });

    box1left -= 50;
  });
  $('#box1remove').on('click', function(){
    demoScreen.remove('box1');
  });
})
