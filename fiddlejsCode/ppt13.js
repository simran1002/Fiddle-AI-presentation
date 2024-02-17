let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Function to add a hollow circle with a number
function addNumberedCircle(slide, x, y, number) {
    // Add the hollow circle
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.5,
        h: 0.5,
        line: { color: '87CEEB', width: 2 }, // Sky blue border color and width
        fill: 'ffffff', // White fill color for a hollow circle
    });

    // Add the text inside the circle
    slide.addText(number, {
        x: x,
        y: y,
        w: 0.5,
        h: 0.5,
        fontSize: 14,
        color: '87CEEB',
        align: 'center',
        valign: 'middle',
    });
}

// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

    // Title
    let titleOpts = {
        x: '5%',
        y: '15%',
        w: '100%',
        h: 1,
        fontSize: 20,
        color: '000000',
        bold: true
    };
    slide.addText('The Mughal Empire', titleOpts);

    let opts3 = {
        x: '22%',
        y: '32.5%',
        w: '100%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('The powerful Muslim empire that ruled a large part of India.', opts3);
    addNumberedCircle(slide, '15%', '39%', '1'); // Add hollow circle with number before sentence

    let opts5 = {
        x: '22%',
        y: '47%',
        w: '100%',
        h: 1,
        fontSize: 12,
        color: '000000'
    };
    slide.addText('Known for its architectural wonders and cultural fusion.', opts5);
    addNumberedCircle(slide, '15%', '53.5%', '2'); // Add hollow circle with number before sentence

    let opts7 = {
        x: '22%',
        y: '61.5%',
        w: '100%',
        h: 1,
        fontSize: 12,
        color: '000000'
    };
    slide.addText("Examples include Taj Mahal, Red Fort, and Humayun's Tomb.", opts7);
    addNumberedCircle(slide, '15%', '68%', '3'); // Add hollow circle with number before sentence

    pptx.writeFile();
}