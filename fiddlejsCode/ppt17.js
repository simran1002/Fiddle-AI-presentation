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
    fontSize: 26,
    color: '000000',
    bold: true,
  };
  slide.addText(
    'Indian History of 2023',
    opts
  );

  // Image options
  let imageOpts = {
    path: 'https://images.pexels.com/photos/4050356/pexels-photo-4050356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    h: '45%',
    w: '33%',
    x: '49%', 
    y: '1%', 
  };

  // Add the first image to the slide
  slide.addImage(imageOpts);

  

  // Text below the first image
  let opts1 = {
    x: 0.5 ,
    y: '20%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Cultural Heritage",
    opts1
  );
  
  let opts3 = {
    x: 0.5,
    y: '28%',
    w: '40%',
    h: 1,
    fontSize: 12,
    color: '000000',
  };
  slide.addText(
    "Exploring ancient traditions, art, and architecture that shape India's identity.",
    opts3
  );
  
  
  // Adjust x and y values for the third image
  imageOpts.x = '57%';
  imageOpts.y = '53%';
  imageOpts.h = '46%';
  imageOpts.w = '35%';

  // Add the third image to the slide
  slide.addImage(imageOpts);

  // Adjust x and y values for the second image
  imageOpts.x = '73%';
  imageOpts.y = '30%'
  imageOpts.w = '26%';
  imageOpts.h = '48%';

  // Add the second image to the slide
  slide.addImage(imageOpts);

  

  // Text below the second image
  let opts2 = {
    x: 0.5,
    y: '40%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Technological Advancements",
    opts2
  );
  
  let opts4 = {
    x: 0.5,
    y: '48%',
    w: '45%',
    h: 1,
    fontSize: 12,
    color: '000000',
  };
  slide.addText(
    "Highlighting India's progress in IT, space exploration, and innovation.",
    opts4
  );

 

  // Text below the third image
  let opts5 = {
    x: 0.5,
    y: '60%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Economic Growth",
    opts5
  );
  
  let opts6 = {
    x: 0.5,
    y: '68%',
    w: '42%',
    h: 1,
    fontSize: 12,
    color: '000000',
  };
  slide.addText(
    "Discussing India's booming industries, trade partnerships, and financial stability.",
    opts6
  );

  pptx.writeFile();
}