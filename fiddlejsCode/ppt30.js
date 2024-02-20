let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
    let slide = pptx.addSlide();



    // Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '4.5%',
        y: '22%',
        w: '27.5%',
        h: '52%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1  // Set border width as needed
        }
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '34.5%',
        y: '22%',
        w: '27.5%',
        h: '52%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Red border color
            width: 1  // Set border width as needed
        }
    });


    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '64.5%',
        y: '22%',
        w: '27.5%',
        h: '52%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Red border color
            width: 1  // Set border width as needed
        }
    });



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
        x: '5%',
        y: '40%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText('In 1999, India successfully conducted nuclear tests at Pokhran, marking significant developments in its defense capabilities.', opts3);

    let opts5 = {
        x: '35%',
        y: '38%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("India gained independence from British rule in 1947, leading to the formation of the Republic of India.", opts5);

    let opts4 = {
        x: '65%',
        y: '38%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("In 1930, Mahatma Gandhi led the Salt March to protest against the British salt monopoly, becoming a symbol of nonviolent resistance.", opts4);


    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '26%',
    };
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '36%',
        y: '26%',
    };
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '66%',
        y: '26%',
    };
    // Add the third image to the slide
    slide.addImage(imageOpts2);


    // Text below the first image
    let opts = {
        x: '5%',
        y: '27%',
        w: '40%',
        h: 1,
        fontSize: 15,
        color: '0000ff',
        bold: true,
        fontFace: 'League Spartans'
    };
    slide.addText("History of 1999", opts);

    // Text below the second image
    let opts11 = {
        x: '35%',
        y: '27%',
        w: '30%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        fontFace: 'League Spartans'
    };
    slide.addText("Independence in 1947", opts11);

    // Text below the third image
    let opts2 = {
        x: '65%',
        y: '27%',
        w: '25%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        fontFace: 'League Spartans'
    };
    slide.addText("Gandhi's Salt March", opts2);


    pptx.writeFile();
};