let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Function to add a solid circle of specified color
function addCircle(slide, x, y, fill) {
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.05,
        h: 0.05,
        fill: fill,
    });
}

// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

    // Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '4.5%',
        y: '22%',
        w: '40%',
        h: '55%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1  // Set border width as needed
        }
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '52%',
        y: '22%',
        w: '40%',
        h: '55%',
        fill: 'ffffff',  // White fill color
        line: {
            color: 'ff0000',  // Red border color
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
    };
    slide.addText('Indian History', titleOpts);

    // Pros
    let prosTitleOpts = {
        x: '5.5%',
        y: '22%',
        w: '45%',
        h: 1,
        fontSize: 20,
        color: '0000ff',
        bold: true,
    };
    slide.addText('Pros', prosTitleOpts);
    // Add blue circle before Pros title
    

    // Pros Texts with Blue Circles
    let opts3 = {
        x: '8%',
        y: '35%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities.', opts3);
    addCircle(slide, '7%', '40%', '0000ff'); // Add blue circle before Pros text

    let opts5 = {
        x: '8%',
        y: '45%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces.', opts5);
    addCircle(slide, '7%', '52%', '0000ff'); // Add blue circle before Pros text

    let opts7 = {
        x: '8%',
        y: '55%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('The Indian Army has a rich history and tradition of valor and service to the nation.', opts7);
    addCircle(slide, '7%', '62%', '0000ff'); // Add blue circle before Pros text

    // Cons
    let consTitleOpts = {
        x: '52.5%',
        y: '22%',
        w: '45%',
        h: 1,
        fontSize: 20,
        color: 'ff0000',
        bold: true,
    };
    slide.addText('Cons', consTitleOpts);
    // Add red circle before Cons title


    let opts4 = {
        x: '55%',
        y: '35%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('Challenges such as border tensions and security threats persist in the region.', opts4);
    addCircle(slide, '54%', '42%', 'ff0000'); // Add red circle before Cons text

    let opts6 = {
        x: '55%',
        y: '45%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText("Budget constraints may limit the Indian Army's ability to implement all desired upgrades and expansions.", opts6);
    addCircle(slide, '54%', '50%', 'ff0000'); // Add red circle before Cons text

    pptx.writeFile();
}