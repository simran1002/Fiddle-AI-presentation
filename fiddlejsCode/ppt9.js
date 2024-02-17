let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  let opts = {
    x: "0%",
    y: "10%",
    w: '100%',
    h: 1,
    align: 'center',
    fontSize: 24,
    color: '0088CC',
    
    
  };
  let opts1 = {
		x: "15%",
    y: "75%",
    w: '20%',
    h: 1,
    align: 'center',
    fontSize: 24,
    color: '000000',
    
	};
  let opts2 = {
   	x: "40%",
    y: "75%",
    w: '20%',
    h: 1,
    align: 'center',
    fontSize: 24,
    color: '000000',
    
   
  }
  let opts3 = {
  	x: "65%",
    y: "75%",
    w: '20%',
    h: 1,
    align: 'center',
    fontSize: 24,
    color: '000000',
  }
 
  slide.addText(
    'This is a first demo session for pptxgen.js',
    opts
  );
  slide.addImage({
  	path:"https://media.istockphoto.com/id/1241681076/photo/bird-on-top-of-a-stick.jpg?s=1024x1024&w=is&k=20&c=6tPfH3rl-Jr48mptMSYaqRGUGQ6Dnjn4L5O7RmhAQ1w=",
    h:"40%",
    w:"20%",
    x:"15%",
    y:"35%"
    },
    
  );
   slide.addImage({
  	path:"https://media.istockphoto.com/id/1241681076/photo/bird-on-top-of-a-stick.jpg?s=1024x1024&w=is&k=20&c=6tPfH3rl-Jr48mptMSYaqRGUGQ6Dnjn4L5O7RmhAQ1w=",
    h:"40%",
    w:"20%",
    x:"40%",
    y:"35%"
    },
  );
   slide.addImage({
  	path:"https://media.istockphoto.com/id/1241681076/photo/bird-on-top-of-a-stick.jpg?s=1024x1024&w=is&k=20&c=6tPfH3rl-Jr48mptMSYaqRGUGQ6Dnjn4L5O7RmhAQ1w=",
    h:"40%",
    w:"20%",
    x:"65%",
    y:"35%"
    },
  );
  slide.addText(
  	"nothing but a image",
    opts1
  );
  slide.addText(
  	"nothing but a image one",
    opts2
  );
  slide.addText(
  	"nothing but a image two",
    opts3
  );
  pptx.writeFile();
}