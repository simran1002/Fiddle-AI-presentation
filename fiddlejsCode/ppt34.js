let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
    let slide = pptx.addSlide();

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
        x: '30%',
        y: '18%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("In 1999, India witnessed the Kargil War with Pakistan and the establishment of the state of Chhattisgarh. The Indian cricket team won the Asian Test Championship.", opts3);

    let opts5 = {
        x: '30%',
        y: '38%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("The National Gallery of Modern Art in Mumbai was inaugurated, showcasing contemporary Indian art. Bollywood movies like 'Hum Dil De Chuke Sanam' and 'Taal' were popular.", opts5);

    let opts4 = {
        x: '30%',
        y: '58%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("The Indian economy grew at a rate of 6.4%, and the IT industry continued to expand, with companies like Infosys and Wipro making significant strides in the global market.", opts4);

    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '29%',
    };
    // Add the first image to the slide
    slide.addImage(imageOpts);
    addSolidCircle(slide, '12.5%', '30%', '0000ff'); // Add blue circle

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '49%',
    };
    // Add the second image to the slide
    slide.addImage(imageOpts1);
    addSolidCircle(slide, '12.5%', '50%', '722BB3'); // Add purple circle

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '69%',
    };
    // Add the third image to the slide
    slide.addImage(imageOpts2);
    addSolidCircle(slide, '12.5%', '70%', 'FFF12B'); // Add yellow circle

    // Text below the first image
    let opts11 = {
        x: '16%' ,
        y: '22%',
        w: '40%',
        h: 1,
        fontSize: 13,
        bold: true,
        color: '0000ff',
    };
    slide.addText("Key Events", opts11);

    // Text below the second image
    let opts2 = {
        x: '16%' ,
        y: '42%',
        w: '15%',
        h: 1,
        fontSize: 13,
        bold: true,
        color: '0000ff',
    };
    slide.addText("Cultural Milestones", opts2);

    // Text below the third image
    let opts31 = {
        x: '16%' ,
        y: '62%',
        w: '15%',
        h: 1,
        fontSize: 13,
        bold: true,
        color: '0000ff',
    };
    slide.addText("Economic Development", opts31);

    pptx.writeFile();
};

// Function to add a solid circle with a specified color
function addSolidCircle(slide, x, y, color) {
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.15,
        h: 0.15,
        fill: color, // Use the specified color
    });
}