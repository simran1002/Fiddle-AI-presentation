let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
    let slide = pptx.addSlide();

    // Function to add a hollow circle with a number
    function addNumberedCircle(slide, x, y) {
        // Add the hollow circle
        slide.addShape(pptx.shapes.OVAL, {
            x: x,
            y: y,
            w: 0.5,
            h: 0.5,
            line: { color: '0000ff', width: 2 },
            fill: 'ffffff',
        });
    }

    // Function to draw a horizontal line connecting logos
    function drawHorizontalLine(slide, startX, endX, y) {
        slide.addShape(pptx.shapes.LINE, {
            x: startX,
            y: y,
            line: { color: '0000ff', width: 2 },
            w: '100%',
            h: 0,
        });
    }

    // Draw horizontal line across the full page
    drawHorizontalLine(slide, '0%', '100%', '31%');

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
        x: '9%',
        y: '50%',
        w: '22%',
        h: 1,
        fontSize: 12,
        color: '000000',
        align: 'center',
        fontFace: 'Inter'
    };
    slide.addText('Kargil War, Kandahar hijacking, National  Highway Development Project', opts3);

    let opts5 = {
        x: '38%',
        y: '50%',
        w: '22%',
        h: 1,
        fontSize: 12,
        color: '000000',
        align: 'center',
        fontFace: 'Inter'
    };
    slide.addText("India's GDP growth, economic reforms, IT boom. ", opts5);

    let opts4 = {
        x: '68%',
        y: '50%',
        w: '22%',
        h: 1,
        fontSize: 12,
        color: '000000',
        align: 'center',
        fontFace: 'Inter'
    };
    slide.addText('Film Industry milestones, literary achievements, UNESCO World Heritage Sites', opts4);


    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '19%',
        y: '29%',
    };
    addNumberedCircle(slide, '18%', '26.5%');
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '47.5%',
        y: '29%',
    };
    addNumberedCircle(slide, '46.5%', '26.5%');
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '77%',
        y: '29%',
    };
    addNumberedCircle(slide, '76%', '26.5%');
    // Add the third image to the slide
    slide.addImage(imageOpts2);


    // Text below the first image
    let opts = {
        x: '14.5%',
        y: '35%',
        w: '40%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        fontFace: 'League Spartans'
    };
    slide.addText("Key Events", opts);

    // Text below the second image
    let opts11 = {
        x: '41.5%',
        y: '35%',
        w: '15%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        align: 'center',
        fontFace: 'League Spartans'
    };
    slide.addText("Economic Landscape", opts11);

    // Text below the third image
    let opts2 = {
        x: '71%',
        y: '35%',
        w: '15%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        align: 'center',
        fontFace: 'League Spartans'
    };
    slide.addText("Cultural Highlights", opts2);


    pptx.writeFile();
};