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
            line: { color: 'BF40BF', width: 2 },
            fill: 'ffffff',
        });
    }

    // Function to draw a horizontal line connecting logos
    function drawHorizontalLine(slide, startX, endX, y) {
        slide.addShape(pptx.shapes.LINE, {
            x: startX,
            y: y,
            line: { color: 'BF40BF', width: 2 },
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
    };
    slide.addText('Indian History', titleOpts);

    // Pros Texts
    let opts3 = {
        x: '5%',
        y: '55%',
        w: '22%',
        h: 1,
        fontSize: 12,
        color: '000000',
        align: 'center'
    };
    slide.addText('In 1990 BC, the Indian subcontinent saw the emergence of the Indus Valley Civilization, known for its advanced urban planning, trade networks, and sophisticated drainage systems.', opts3);

    let opts5 = {
        x: '27%',
        y: '55%',
        w: '22%',
        h: 1,
        fontSize: 12,
        color: '000000',
        align: 'center'
    };
    slide.addText("The civilization flourished along the Indus River and is renowned for its well-planned cities like Mohenjo-Daro and Harappa, showcasing remarkable architecture and craftsmanship.", opts5);

    let opts4 = {
        x: '50%',
        y: '53%',
        w: '22%',
        h: 1,
        fontSize: 12,
        color: '000000',
        align: 'center'
    };
    slide.addText('During this period, the Indus Valley people developed a writing system, intricate jewelry-making techniques, and traded with Mesopotamia, showcasing a rich cultural exchange.', opts4);

    let opts6 = {
        x: '73%',
        y: '55%',
        w: '22%',
        h: 1,
        fontSize: 12,
        color: '000000',
        align: 'center'
    };
    slide.addText("Around 1900 BC, the Indus Valley Civilization declined, possibly due to environmental changes or invasions. Despite its fall, it left a lasting legacy in art, technology, and urban planning.", opts6);

    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '14%',
        y: '29%',
    };
    addNumberedCircle(slide, '13%', '26.5%');
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '36%',
        y: '29%',
    };
    addNumberedCircle(slide, '35%', '26.5%');
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '59%',
        y: '29%',
    };
    addNumberedCircle(slide, '58%', '26.5%');
    // Add the third image to the slide
    slide.addImage(imageOpts2);

    let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '82%',
        y: '29%',
    };
    addNumberedCircle(slide, '81%', '26.5%');
    // Add the fourth image to the slide
    slide.addImage(imageOpts3);

    // Text below the first image
    let opts = {
        x: '7%',
        y: '35%',
        w: '40%',
        h: 1,
        fontSize: 14,
        bold: true,
        color: '0000ff',
    };
    slide.addText("History of 1990 BC", opts);

    // Text below the second image
    let opts11 = {
        x: '30%',
        y: '35%',
        w: '15%',
        h: 1,
        fontSize: 14,
        bold: true,
        color: '0000ff',
        align: 'center'
    };
    slide.addText("Indus Valley Civilization", opts11);

    // Text below the third image
    let opts2 = {
        x: '53%',
        y: '35%',
        w: '15%',
        h: 1,
        fontSize: 14,
        bold: true,
        color: '0000ff',
        align: 'center'
    };
    slide.addText("Cultural Advancements", opts2);

    // Text below the fourth image
    let opts31 = {
        x: '75%',
        y: '35%',
        w: '25%',
        h: 1,
        fontSize: 14,
        bold: true,
        color: '0000ff',
    };
    slide.addText("Decline and Legacy", opts31);

    pptx.writeFile();
};
