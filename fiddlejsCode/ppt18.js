let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
    let slide = pptx.addSlide();

    // Function to add a hollow circle with a number
   
    function addNumberedCircle2(slide, x, y) {
        // Add the hollow circle
        slide.addShape(pptx.shapes.OVAL, {
            x: x,
            y: y,
            w: 0.5,
            h: 0.5,
            line: { color: 'FFF12B', width: 2 },
            fill: 'ffffff',
        });
    }

 function addNumberedCircle1(slide, x, y) {
        // Add the hollow circle
        slide.addShape(pptx.shapes.OVAL, {
            x: x,
            y: y,
            w: 0.5,
            h: 0.5,
            line: { color: '722BB3', width: 2 },
            fill: 'ffffff',
        });
    }
    
    // Function to draw a horizontal line connecting logos
    function drawHorizontalLine1(slide, startX, endX, y) {
        slide.addShape(pptx.shapes.LINE, {
            x: startX,
            y: y,
            line: { color: 'FFF12B', width: 2 },
            w: '100%',
            h: 0,
        });
    }
    
      // Function to draw a horizontal line connecting logos
    function drawHorizontalLine2(slide, startX, endX, y) {
        slide.addShape(pptx.shapes.LINE, {
            x: startX,
            y: y,
            line: { color: '722BB3', width: 2 },
            w: '100%',
            h: 0,
        });
    }


    // Draw horizontal line across the full page
    drawHorizontalLine2(slide, '0%', '100%', '28%');
    drawHorizontalLine1(slide, '0%', '100%', '63%');

    // Title
    let titleOpts = {
        x: '5%',
        y: '0.7%',
        w: '100%',
        h: 1.5,
        fontSize: 24,
        color: '000000',
        bold: true,
    };
    slide.addText('Indian History', titleOpts);

    // Pros Texts
    let opts3 = {
        x: '7%',
        y: '35%',
        w: '25%',
        h: 1,
        fontSize: 14,
        color: '000000',
        align: 'center'
    };
    slide.addText('The Indus Valley Civilization thrives with advanced urban planning and trade networks.', opts3);

    let opts5 = {
        x: '37%',
        y: '35%',
        w: '25%',
        h: 1,
        fontSize: 14,
        color: '000000',
        align: 'center'
    };
    slide.addText("The Vedic Period sees the composition of the Rigveda, a significantly ancient Indian text.", opts5);

    let opts4 = {
        x: '67%',
        y: '33%',
        w: '25%',
        h: 1,
        fontSize: 14,
        color: '000000',
        align: 'center'
    };
    slide.addText('Early references to the caste system emerge, shaping social structure.', opts4);

    let opts6 = {
        x: '7%',
        y: '70%',
        w: '25%',
        h: 1,
        fontSize: 14,
        color: '000000',
        align: 'center'
    };
    slide.addText("Development of early Hinduism with the emergence of key religious texts and beliefs.", opts6);
    
    let opts61 = {
        x: '37%',
        y: '70%',
        w: '25%',
        h: 1,
        fontSize: 14,
        color: '000000',
        align: 'center'
    };
    slide.addText("Significant advancements in science, mathematics, and astronomy during this period.", opts61);

let opts62 = {
        x: '67%',
        y: '70%',
        w: '25%',
        h: 1,
        fontSize: 14,
        color: '000000',
        align: 'center'
    };
    slide.addText("Trade with Mesopotamia Egypt indicates a well-established commerce network.", opts62);
    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '18%',
        y: '27%',
    };
    addNumberedCircle1(slide, '17%', '24.5%');
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '48%',
        y: '27%',
    };
    addNumberedCircle1(slide, '47%', '24.5%');
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '78%',
        y: '27%',
    };
    addNumberedCircle1(slide, '77%', '24.5%');
    // Add the third image to the slide
    slide.addImage(imageOpts2);

    // Image options
    let imageOpts90 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '18%',
        y: '62%',
    };
    addNumberedCircle2(slide, '17%', '59.5%');
    // Add the first image to the slide
    slide.addImage(imageOpts90);

    // Draw horizontal line connecting logos

    let imageOpts19 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '48%',
        y: '62%',
    };
    addNumberedCircle2(slide, '47%', '59.5%');
    // Add the second image to the slide
    slide.addImage(imageOpts19);

    let imageOpts29 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '78%',
        y: '62%',
    };
    addNumberedCircle2(slide, '77%', '59.5%');
    // Add the third image to the slide
    slide.addImage(imageOpts29);


    pptx.writeFile();
};
