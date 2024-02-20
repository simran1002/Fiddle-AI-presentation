let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
    let slide = pptx.addSlide();


    // Function to add a hollow circle with a number
    function addNumberedCircle(slide, x, y, color) {
        // Add the hollow circle
        slide.addShape(pptx.shapes.OVAL, {
            x: x,
            y: y,
            w: 0.45,
            h: 0.45,
            line: { color: color, width: 1.5 },
            fill: 'ffffff',
        });
    }

    // Function to draw a horizontal line connecting logos
    function drawHorizontalLine(slide, startX, y, color) {
        slide.addShape(pptx.shapes.LINE, {
            x: startX,
            y: y,
            line: { color: color, width: 1.5 },
            w: '4%',
            h: 0,
        });
    }


  // Draw horizontal line across the full page
    drawHorizontalLine(slide, '6.5%',  '30.6%','0000ff');
      // Draw horizontal line across the full page
    drawHorizontalLine(slide, '6.5%',  '50.6%','722BB3');
      // Draw horizontal line across the full page
    drawHorizontalLine(slide, '6.5%',  '70.7%','FFF12B');

    // Draw horizontal line connecting logos
    drawDottedLine(slide, '6.5%', '20%');

    // Title
    let titleOpts = {
        x: '5%',
        y: '0.7%',
        w: '100%',
        h: 1.5,
        fontSize: 24,
        color: '000000',
        bold: true,
        fontFace: 'League Spartans'
    };
    slide.addText('Indian History', titleOpts);

    // Pros Texts
    let opts3 = {
        x: '30%',
        y: '19%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("In 1999, India saw significant advancements in technology, with the launch of the Indian Space Research Organisation's first indigenously developed satellite, IRS-1C. The Kargil War between India and Pakistan also took place during this year.", opts3);

    let opts5 = {
        x: '30%',
        y: '38%',
        w: '47%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("The Bollywood movie 'Hum Dil De Chuke Sanam' was a major hit, and the Indian music industry saw the rise of artists like A.R. Rahman.", opts5);

    let opts4 = {
        x: '30%',
        y: '58%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("India's GDP growth rate was around 6%, and the IT sector continued to expand, attracting global attention.", opts4);

    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '11.2%',
        y: '29%',
    };
    addNumberedCircle(slide, '10.4%', '27%','0000ff');
    // Add the first image to the slide
    slide.addImage(imageOpts);
    addSolidCircle(slide, '6.1%', '30%', '0000ff'); // Add blue circle



    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '11.2%',
        y: '49%',
    };
    addNumberedCircle(slide, '10.4%', '47%','722BB3');
    // Add the second image to the slide
    slide.addImage(imageOpts1);
    addSolidCircle(slide, '6.1%', '50%', '722BB3'); // Add purple circle

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '11.2%',
        y: '69%',
    };
    addNumberedCircle(slide, '10.4%', '67%','FFF12B');
    // Add the third image to the slide
    slide.addImage(imageOpts2);
    addSolidCircle(slide, '6.1%', '70%', 'FFF12B'); // Add yellow circle

    // Function to add a solid circle with a specified color
    function addSolidCircle(slide, x, y, color) {
        slide.addShape(pptx.shapes.OVAL, {
            x: x,
            y: y,
            w: 0.08,
            h: 0.08,
            fill: color, // Use the specified color
        });
    }


    // Function to draw a dotted line
    function drawDottedLine(slide, x, y) {
        slide.addShape(pptx.shapes.LINE, {
            x:x ,
            y: y,
            line: { color: '000000', width: 1, dashType: 'dot' },
            w: '0%',
            h: '70%',
        });
    }
    
    // Text below the third image
  let opts50 = {
    x: '17%',
    y: '22%',
    w: '14%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Key Events",
    opts50
  );
  // Text below the third image
  let opts53 = {
    x: '17%',
    y: '42%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Cultural Highlights",
    opts53
  );
  // Text below the third image
  let opts55 = {
    x: '17%',
    y: '62%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '000000',
  };
  slide.addText(
    "Economic Landscape",
    opts55
  );
pptx.writeFile();

};