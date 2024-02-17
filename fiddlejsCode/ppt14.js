let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  
  let opts = {
    x: 0.5,
    y: 0,
    w: '100%',
    h: 1.5,
    fontSize: 24,
    color: '000000',
    bold:true,
  };
  slide.addText(
    'Indian History of 2023',
    opts
  );


  // Image options
  let imageOpts = {
    path: 'https://images.pexels.com/photos/4050356/pexels-photo-4050356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    h: 2.70,
    w: '49.5%',
    x: '49.5%', // Adjusted the x value for the first image
    y: '1.95%', // Adjusted the y value for the first image
  };

  // Add the first image to the slide
  slide.addImage(imageOpts);

  // Text below the first image
    let opts1 = {
        x: 0.5,
        y: "20%",
        w: '100%',
        h: 1,
        fontSize: 16,
        bold:true,
        color: '000000',
    };
  
 slide.addText(
        "Modernization Efforts",
        opts1
    );
  
  let opts3 = {
        x: 0.5,
        y: "31%",
        w: '40%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
  
 slide.addText(
        "Inroducing advanced technology in agriculture and healthcare sectors. Implementing smart initiatives nationwide.",
        opts3
    );
  // Adjust x and y values for the second image
  imageOpts.x ='49.5%';
  imageOpts.y = '50%'; // Adjusted the y value for the second image

  // Add the second image to the slide
  slide.addImage(imageOpts);

  // Text below the second image
      let opts2 = {
        x: 0.5,
        y: "50%",
        w: '100%',
        h: 1,
        fontSize: 16,
        bold:true,
        color: '000000',
    };
  
 slide.addText(
        "Cultural Preservation",
        opts2
    );
  
  
    let opts4 = {
        x: 0.5,
        y: "61%",
        w: '40%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
  
 slide.addText(
        "Promoting traditional arts and heritage conservation projects. Celebrating diverse festivals and cultural events across the country.",
        opts4
    );


  pptx.writeFile();
}