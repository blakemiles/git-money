"use strict";
var container = document.getElementById('canvas');
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('#111122', '#00ffae');
    var windowHeight = $(window).height();
    var homeHeight = $('#home').height();
    if (homeHeight >= windowHeight){
    	var canvasHeight = (homeHeight+50);
    }else{
    	var canvasHeight = windowHeight;
    }
    var windowWidth = $(window).width();
    var geometry = new FSS.Plane(windowWidth, canvasHeight, 6, 4);
    var material = new FSS.Material('#FFFFFF', '#FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();

    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.appendChild(renderer.element);
      window.addEventListener('resize', resize);
    }

    function resize() {
      renderer.setSize(container.offsetWidth, canvasHeight);
    }

    function animate() {
      now = Date.now() - start;
      light.setPosition((windowWidth/2)*Math.sin(now*0.001), (canvasHeight/2)*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
    }

    initialise();
    resize();
    animate();
    