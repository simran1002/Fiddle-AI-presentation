let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  
  let opts = {
    x: '5.1%',
    y: 0,
    w: '100%',
    h: 1.5,
    fontSize: 24,
    color: '000000',
    bold: true,
  };
  slide.addText(
    'Indian History',
    opts
  );

  // Image options
  let imageOpts = {
    path: 'https://images.pexels.com/photos/4050356/pexels-photo-4050356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    h: '37%',
    w: '30%',
    x: '5%', 
    y: 1, 
  };

  // Add the first image to the slide
  slide.addImage(imageOpts);

  // Yellow line below the first image
  slide.addShape(pptx.shapes.LINE, {
    x: '5%',
    y: '55%',
    w: '30%',
    h: 0,
    line: { color: 'FFFF00', width: 2 }, // Yellow line
  });

  // Text below the first image
  let opts1 = {
    x: '5%',
    y: '50%',
    w: '100%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Ancient Civilizations",
    opts1
  );
  
  let opts3 = {
    x: '5%',
    y: '59%',
    w: '30%',
    h: 1,
    fontSize: 12,
    color: '000000',
  };
  slide.addText(
    "Explore the rich history of the Indus Valley and Vedic civilizations.",
    opts3
  );

  // Adjust x and y values for the second image
  imageOpts.x = '37%';
  imageOpts.w = '26%';
  imageOpts.h = '48%';

  // Add the second image to the slide
  slide.addImage(imageOpts);

  // Yellow line below the second image
  slide.addShape(pptx.shapes.LINE, {
    x: '37%',
    y: '66%',
    w: '26%',
    h: 0,
    line: { color: 'FFFF00', width: 2 }, // Yellow line
  });

  // Text below the second image
  let opts2 = {
    x: '38%',
    y: '62%',
    w: '30%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Mughal Empire",
    opts2
  );
  
  let opts4 = {
    x: '38%',
    y: '71%',
    w: '28%',
    h: 1,
    fontSize: 12,
    color: '000000',
  };
  slide.addText(
    "Learn about the cultural and architectural legacy of the Mughal rulers. ",
    opts4
  );

  // Adjust x and y values for the third image
  imageOpts.x = '65%';
  imageOpts.h = '37%';
  imageOpts.w = '30%';

  // Add the third image to the slide
  slide.addImage(imageOpts);

  // Yellow line below the third image
  slide.addShape(pptx.shapes.LINE, {
    x: '65%',
    y: '55%',
    w: '30%',
    h: 0,
    line: { color: 'FFFF00', width: 2}, // Yellow line
  });

  // Text below the third image
  let opts5 = {
    x: '66%',
    y: '50%',
    w: '100%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Independence Movement",
    opts5
  );
  
  let opts6 = {
    x: '66%',
    y: '59%',
    w: '28%',
    h: 1,
    fontSize: 12,
    color: '000000',
  };
  slide.addText(
    "Understanding the struggle for independence led by Mahatma Gandhi and other freedom fighters.",
    opts6
  );

  pptx.writeFile();
}