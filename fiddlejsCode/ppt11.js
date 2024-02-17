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
        x: '7%',
        y: '18%',
        w: '44%',
        h: '65%',
        fill: '3559E0', 
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '51%',
        y: '18%',
        w: '44%',
        h: '65%',
        fill: 'DA0C81',
    });

    // Title
    let titleOpts = {
        x: '7%',
        y: '0%',
        w: '100%',
        h: 1,
        fontSize: 20,
        color: '000000',
        bold: true,
    };
    slide.addText('The Impact of System Thinking', titleOpts);

    // Pros
    let prosTitleOpts = {
        x: '8%',
        y: '26%',
        w: '40%',
        h: 1,
        fontSize: 14,
        color: 'ffffff',
        bold: true
    };
    slide.addText('Benefits of systems thinking', prosTitleOpts);
    // Add blue circle before Pros title
    

    // Pros Texts with Blue Circles
    let opts3 = {
        x: '12%',
        y: '37%',
        w: '40%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('Systems thinking is a way of making sense of the complexity of the world.', opts3);
    addCircle(slide, '9%', '43.5%', 'ffffff'); // Add blue circle before Pros text

    let opts5 = {
        x: '12%',
        y: '45%',
        w: '40%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('By looking at in terms of wholes and relationships rather than by splitting it down into its parts.', opts5);
    addCircle(slide, '9%', '52%', 'ffffff'); // Add blue circle before Pros text

    let opts7 = {
        x: '12%',
        y: '53%',
        w: '40%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('It has been used as a way of exploring and developing effective action in complex contents.', opts7);
    addCircle(slide, '9%', '60%', 'ffffff'); // Add blue circle before Pros text

    // Cons
    let consTitleOpts = {
        x: '52%',
        y: '26%',
        w: '40%',
        h: 1,
        fontSize: 14,
        color: 'ffffff',
        bold:true
    };
    slide.addText('Consideration for system thinking', consTitleOpts);
    // Add red circle before Cons title


    let opts4 = {
        x: '56%',
        y: '38%',
        w: '35%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('Systems thinking is an approach to problem-solving that views problems as part of a wider dynamic system.', opts4);
    addCircle(slide, '53%', '43.5%', 'ffffff'); // Add red circle before Cons text

    let opts6 = {
        x: '56%',
        y: '49.5%',
        w: '40%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText("It recognizes and prioritizes the understanding of likages, relationships, interactions and interdependencies among the components.", opts6);
    addCircle(slide, '53%', '55%', 'ffffff'); // Add red circle before Cons text
    
    let opts8 = {
        x: '56%',
        y: '60%',
        w: '40%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText("Of the system that give rise to the system's observed behaviour.", opts8);
    addCircle(slide, '53%', '67%', 'ffffff');

    pptx.writeFile();
}