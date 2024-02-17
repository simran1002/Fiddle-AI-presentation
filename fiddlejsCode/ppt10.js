let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Function to add a solid circle of specified color
function addCircle(slide, x, y, fill) {
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.08,
        h: 0.08,
        fill: fill,
    });
}

// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

    
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '18%',
        y: '22%',
        w: '32%',
        h: '70%',
        fill: '000000', 
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '50%',
        y: '22%',
        w: '32%',
        h: '70%',
        fill: '80400B',
    });

    // Title
    let titleOpts = {
        y: 0,
        w: '100%',
        h: 2,
        fontSize: 20,
        color: '000000',
        align: 'center',
        bold: true,
    };
    slide.addText('System Thinking', titleOpts);

    // Pros
    let prosTitleOpts = {
        x: '20%',
        y: '35%',
        w: '28%',
        h: 1,
        fontSize: 30,
        color: '909090'
    };
    slide.addText('Benefits of systems thinking', prosTitleOpts);
    // Add blue circle before Pros title
    

    // Pros Texts with Blue Circles
    let opts3 = {
        x: '24%',
        y: '57%',
        w: '30%',
        h: 1,
        fontSize: 18,
        color: '909090',
    };
    slide.addText('Minimize impact of mistakes', opts3);
    addCircle(slide, '21%', '63%', '909090'); // Add blue circle before Pros text

    let opts5 = {
        x: '24%',
        y: '66%',
        w: '30%',
        h: 1,
        fontSize: 18,
        color: '909090',
    };
    slide.addText('Make realistic plans', opts5);
    addCircle(slide, '21%', '74%', '909090'); // Add blue circle before Pros text

    let opts7 = {
        x: '24%',
        y: '73%',
        w: '30%',
        h: 1,
        fontSize: 18,
        color: '909090',
    };
    slide.addText('Repair broken designs', opts7);
    addCircle(slide, '21%', '81%', '909090'); // Add blue circle before Pros text

    // Cons
    let consTitleOpts = {
        x: '52%',
        y: '35%',
        w: '28%',
        h: 1,
        fontSize: 30,
        color: '909090'
    };
    slide.addText('Consideration for system thinking', consTitleOpts);
    // Add red circle before Cons title


    let opts4 = {
        x: '56%',
        y: '54%',
        w: '30%',
        h: 1,
        fontSize: 18,
        color: '909090',
    };
    slide.addText('Issue in practice', opts4);
    addCircle(slide, '53%', '63%', '909090'); // Add red circle before Cons text

    let opts6 = {
        x: '56%',
        y: '63%',
        w: '25%',
        h: 1,
        fontSize: 18,
        color: '909090',
    };
    slide.addText("The Alliance's track record", opts6);
    addCircle(slide, '53%', '69%', '909090'); // Add red circle before Cons text
    
    let opts8 = {
        x: '56%',
        y: '72%',
        w: '30%',
        h: 1,
        fontSize: 18,
        color: '909090',
    };
    slide.addText("Future commitment", opts8);
    addCircle(slide, '53%', '80%', '909090');

    pptx.writeFile();
}