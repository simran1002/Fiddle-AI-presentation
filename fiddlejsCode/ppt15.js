let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  
  let opts = {
    x: 0.5,
    y: '5%',
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
    h: '20%',
    w: '22%',
    x: 0.5, 
    y: '27%', 
  };

  // Add the first image to the slide
  slide.addImage(imageOpts);

    
  // Adjust x and y values for the third image
  imageOpts.y = '48%';
  // Add the third image to the slide
  slide.addImage(imageOpts);

  // Adjust x and y values for the second image
  imageOpts.y = '69%'
  // Add the second image to the slide
  slide.addImage(imageOpts);

  // Text below the first image
  let opts1 = {
    x: '30%' ,
    y: '27%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Cultural Diversity",
    opts1
  );
  
  let opts3 = {
    x: '47%',
    y: '28%',
    w: '45%',
    h: 1,
    fontSize: 12,
    color: '000000',
  };
  slide.addText(
    "Exploring ancient traditions, art, and architecture that shape India's identity.",
    opts3
  );
  


  

  // Text below the second image
  let opts2 = {
    x: '30%',
    y: '50%',
    w: '20%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Technological Advancements",
    opts2
  );
  
  let opts4 = {
    x: '47%',
    y: '50%',
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
    x: '30%',
    y: '69%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Economic Growth",
    opts5
  );
  
  let opts6 = {
    x: '47%',
    y: '70%',
    w: '45%',
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