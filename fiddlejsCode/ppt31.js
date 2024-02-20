let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
    let slide = pptx.addSlide();



    // Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '5.5%',
        y: '29%',
        w: '0%',
        h: '30%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 2.5 // Set border width as needed
        }
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '35.5%',
        y: '29%',
        w: '0%',
        h: '30%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Red border color
            width: 2.5  // Set border width as needed
        }
    });


    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '65.5%',
        y: '29%',
        w: '0%',
        h: '30%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Red border color
            width: 2.5 // Set border width as needed
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
        x: '6%',
        y: '28%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText('Kargil War took place between India and Pakistan.', opts3);

    let opts5 = {
        x: '36%',
        y: '28%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("Dr. A.P.J. Abdul Kalam became the President of India.", opts5);

    let opts4 = {
        x: '66%',
        y: '28%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("The Indian cricket team reached the World Cup semi-finals.", opts4);


    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '7%',
        y: '30%',
    };
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '37%',
        y: '30%',
    };
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '67%',
        y: '30%',
    };
    // Add the third image to the slide
    slide.addImage(imageOpts2);


    pptx.writeFile();
};