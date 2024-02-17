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
        w: '42%',
        h: '65%',
        fill: '11009E', 
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '49%',
        y: '18%',
        w: '42%',
        h: '65%',
        fill: '561C24',
    });

    // Title
    let titleOpts = {
        x: '7%',
        y: '0%',
        w: '100%',
        h: 1,
        fontSize: 22,
        color: '000000',
        bold: true,
    };
    slide.addText('The Impact of System Thinking', titleOpts);

    // Pros
    let prosTitleOpts = {
        x: '8%',
        y: '20%',
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
        y: '31%',
        w: '35%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('Systems thinking allows leaders to see the bigger picture and understand the interconnectedness of various components within a systems.', opts3);
    addCircle(slide, '9%', '35%', 'ffffff'); // Add blue circle before Pros text

    let opts5 = {
        x: '12%',
        y: '45%',
        w: '35%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('It enables leaders to identify feedback loops and understand how changes in one area can impact other parts of the system. ', opts5);
    addCircle(slide, '9%', '50%', 'ffffff'); // Add blue circle before Pros text

    let opts7 = {
        x: '12%',
        y: '57%',
        w: '40%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('Systems thinking helps leaders to uncover the underlying causes of problems, rather than just addressing the symptoms.', opts7);
    addCircle(slide, '9%', '62%', 'ffffff'); // Add blue circle before Pros text

    // Cons
    let consTitleOpts = {
        x: '50%',
        y: '20%',
        w: '40%',
        h: 1,
        fontSize: 14,
        color: 'ffffff',
        bold:true
    };
    slide.addText('Consideration for system thinking', consTitleOpts);
    // Add red circle before Cons title


    let opts4 = {
        x: '54%',
        y: '30%',
        w: '35%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText('Implementing systems thinking requires a shift in mindset and may require leaders to unlearn traditional linear thiking approaches.', opts4);
    addCircle(slide, '51%', '35%', 'ffffff'); // Add red circle before Cons text

    let opts6 = {
        x: '54%',
        y: '45%',
        w: '40%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText("It can be challenging to apply systems thinking in complex environments where there are numerous vaariables and interdependencies.", opts6);
    addCircle(slide, '51%', '50%', 'ffffff'); // Add red circle before Cons text
    
    let opts8 = {
        x: '54%',
        y: '57%',
        w: '35%',
        h: 1,
        fontSize: 12,
        color: 'ffffff',
    };
    slide.addText("Leaders may face resistance from individuals who prefer more traditional top-down approaches to problem solving.", opts8);
    addCircle(slide, '51%', '62%', 'ffffff');

    pptx.writeFile();
}