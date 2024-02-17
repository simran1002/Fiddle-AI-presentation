let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Function to add a solid circle of specified color
function addCircle(slide, x, y, fill) {
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.06,
        h: 0.06,
        fill: fill,
    });
}

// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

    
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '17%',
        y: '18%',
        w: '33%',
        h: '70%',
        fill: '2F58CD', 
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '50%',
        y: '18%',
        w: '33%',
        h: '70%',
        fill: 'AF0171',
    });

    // Title
    let titleOpts = {
        y: '0%',
        w: '100%',
        h: 1,
        fontSize: 20,
        color: '000000',
        bold: true,
        align: 'center',
    };
    slide.addText('System Thinking', titleOpts);

    // Pros
    let prosTitleOpts = {
        x: '17%',
        y: '26%',
        w: '30%',
        h: 1,
        fontSize: 14,
        color: '000000',
        bold: true
    };
    slide.addText('Benefits of systems thinking', prosTitleOpts);
    // Add blue circle before Pros title
    

    // Pros Texts with Blue Circles
    let opts3 = {
        x: '20%',
        y: '35%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
        bold:true
    };
    slide.addText('Systems thinking is a way of making sense of the complexity of the world.', opts3);
    addCircle(slide, '18%', '40%', '000000'); // Add blue circle before Pros text

    let opts5 = {
        x: '20%',
        y: '48%',
        w: '28%',
        h: 1,
        fontSize: 12,
        color: '000000',
        bold:true
    };
    slide.addText('By looking at in terms of wholes and relationships rather than by splitting it down into its parts.', opts5);
    addCircle(slide, '18%', '53%', '000000'); // Add blue circle before Pros text

    let opts7 = {
        x: '20%',
        y: '60%',
        w: '28%',
        h: 1,
        fontSize: 12,
        color: '000000',
        bold:true
    };
    slide.addText('It has been used as a way of exploring and developing effective action in complex contents.', opts7);
    addCircle(slide, '18%', '65%', '000000'); // Add blue circle before Pros text

    // Cons
    let consTitleOpts = {
        x: '50%',
        y: '26%',
        w: '30%',
        h: 1,
        fontSize: 14,
        color: '000000',
        bold:true
    };
    slide.addText('Consideration for system thinking', consTitleOpts);
    // Add red circle before Cons title


    let opts4 = {
        x: '53%',
        y: '35%',
        w: '30%',
        h: 1,
        fontSize: 12,
        color: '000000',
        bold:true
    };
    slide.addText('Systems thinking is an approach to problem-solving that views problems as part of a wider dynamic system.', opts4);
    addCircle(slide, '51%', '40%', '000000'); // Add red circle before Cons text

    let opts6 = {
        x: '53%',
        y: '50%',
        w: '30%',
        h: 1,
        fontSize: 12,
        color: '000000',
        bold:true
    };
    slide.addText("It recognizes and prioritizes the understanding of likages, relationships, interactions and interdependencies among the components.", opts6);
    addCircle(slide, '51%', '53%', '000000'); // Add red circle before Cons text
    
    let opts8 = {
        x: '53%',
        y: '62%',
        w: '30%',
        h: 1,
        fontSize: 12,
        color: '000000',
        bold:true
    };
    slide.addText("Of the system that give rise to the system's observed behaviour.", opts8);
    addCircle(slide, '51%', '68%', '000000');

    pptx.writeFile();
}