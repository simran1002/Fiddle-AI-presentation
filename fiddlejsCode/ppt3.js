let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  
  let opts = {
    y: 0,
    w: '100%',
    h: 1.5,
    fontSize: 24,
    color: '000000',
    align: 'center',
    bold:true,
  };
  slide.addText(
    'Indian History',
    opts
  );


  // Image options
  let imageOpts = {
    path: 'https://images.pexels.com/photos/4050356/pexels-photo-4050356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    h: 3.3,
    w: '40%',
    x: 0.7, // Adjusted the x value for the first image
    y: 1, // Adjusted the y value for the first image
  };

  // Add the first image to the slide
  slide.addImage(imageOpts);

  // Text below the first image
    let opts1 = {
        x: "6.5%",
        y: "70%",
        w: '100%',
        h: 1,
        fontSize: 16,
        bold:true,
        color: '0000ff',
    };
  
 slide.addText(
        "Bengaluru",
        opts1
    );
  
  let opts3 = {
        x: "6.5%",
        y: "75%",
        w: '100%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
  
 slide.addText(
        "Bengaluru is a beautiful city",
        opts3
    );
  // Adjust x and y values for the second image
  imageOpts.x += 4.5;
  imageOpts.y = 1; // Adjusted the y value for the second image

  // Add the second image to the slide
  slide.addImage(imageOpts);

  // Text below the second image
      let opts2 = {
        x: "52%",
        y: "70%",
        w: '100%',
        h: 1,
        fontSize: 16,
        bold:true,
        color: '0000ff',
    };
  
 slide.addText(
        "Mumbai",
        opts2
    );
  
  
    let opts4 = {
        x: "52%",
        y: "75%",
        w: '100%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
  
 slide.addText(
        "Mumbai is also a beautiful city",
        opts4
    );


  pptx.writeFile();
}