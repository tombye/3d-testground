if(PhiloGL.hasWebGL()) {
	PhiloGL.unpack();
//Create application
  PhiloGL('lesson14-canvas', {
	
  });
} else {
	alert('no WebGL support!');	
}